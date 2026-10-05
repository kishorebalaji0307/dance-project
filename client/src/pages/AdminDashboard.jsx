import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
    LogOut,
    Plus,
    Edit3,
    Trash2,
    Eye,
    EyeOff,
    Upload,
    X,
    Calendar,
    Clock,
    MapPin,
    ExternalLink,
    CheckCircle,
    AlertCircle,
    ImageIcon,
    Save,
    Send,
    ChevronDown,
    Shield,
    Sparkles,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "";

// ─── Status badge ────────────────────────────────────────────
const StatusBadge = ({ status }) => {
    const styles = {
        published: { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.3)", color: "#4ade80" },
        draft: { bg: "rgba(250,204,21,0.1)", border: "rgba(250,204,21,0.3)", color: "#facc15" },
        unpublished: { bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)", color: "#f87171" },
    };
    const s = styles[status] || styles.draft;
    return (
        <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
            style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color }}
        >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
            {status}
        </span>
    );
};

// ─── Toast notification ──────────────────────────────────────
const Toast = ({ toast, onClose }) => (
    <AnimatePresence>
        {toast && (
            <motion.div
                initial={{ opacity: 0, y: 50, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 50, x: "-50%" }}
                className="fixed bottom-6 left-1/2 z-[9999] flex items-center gap-3 rounded-2xl px-5 py-4 shadow-2xl text-sm font-semibold"
                style={{
                    background: toast.type === "success" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                    border: `1px solid ${toast.type === "success" ? "rgba(34,197,94,0.4)" : "rgba(239,68,68,0.4)"}`,
                    color: toast.type === "success" ? "#4ade80" : "#f87171",
                    backdropFilter: "blur(20px)",
                }}
            >
                {toast.type === "success" ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                {toast.message}
                <button onClick={onClose} className="ml-2 cursor-pointer opacity-70 hover:opacity-100">
                    <X size={14} />
                </button>
            </motion.div>
        )}
    </AnimatePresence>
);

// ─── Delete Confirm Modal ────────────────────────────────────
const ConfirmDeleteModal = ({ event, onConfirm, onCancel }) => (
    <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4">
        <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onCancel}
        />
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-[400px] rounded-[20px] p-7 z-10"
            style={{
                background: "#111",
                border: "1px solid rgba(239,68,68,0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
        >
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                    <Trash2 size={20} style={{ color: "#f87171" }} />
                </div>
                <div>
                    <h3 className="font-bold text-white text-base">Delete Event</h3>
                    <p className="text-gray-400 text-xs mt-0.5">This action cannot be undone.</p>
                </div>
            </div>
            <p className="text-sm text-gray-300 mb-6">
                Are you sure you want to delete <strong className="text-white">"{event?.title}"</strong>? The poster will also be removed from storage.
            </p>
            <div className="flex gap-3">
                <button
                    onClick={onCancel}
                    className="flex-1 rounded-full py-3 text-sm font-bold cursor-pointer transition-all duration-200"
                    style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "#aaa",
                    }}
                >
                    Cancel
                </button>
                <button
                    onClick={onConfirm}
                    className="flex-1 rounded-full py-3 text-sm font-bold cursor-pointer transition-all duration-200"
                    style={{
                        background: "rgba(239,68,68,0.2)",
                        border: "1px solid rgba(239,68,68,0.5)",
                        color: "#f87171",
                    }}
                >
                    Delete
                </button>
            </div>
        </motion.div>
    </div>
);

// ─── Event Form (create / edit) ──────────────────────────────
const EventForm = ({ editingEvent, onSuccess, onCancel }) => {
    const [form, setForm] = useState({
        title: editingEvent?.title || "",
        description: editingEvent?.description || "",
        eventDate: editingEvent?.eventDate ? new Date(editingEvent.eventDate).toISOString().slice(0, 10) : "",
        eventTime: editingEvent?.eventTime || "",
        venue: editingEvent?.venue || "",
        registrationUrl: editingEvent?.registrationUrl || "",
        status: "published",
    });
    const [posterFile, setPosterFile] = useState(null);
    const [posterPreview, setPosterPreview] = useState(editingEvent?.poster?.url || "");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
        if (!allowed.includes(file.type)) {
            setError("Only JPG, JPEG, PNG, or WEBP images are allowed.");
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            setError("File size must be under 5 MB.");
            return;
        }
        setError("");
        setPosterFile(file);
        const reader = new FileReader();
        reader.onload = (ev) => setPosterPreview(ev.target.result);
        reader.readAsDataURL(file);
    };

    const handleRemovePoster = () => {
        setPosterFile(null);
        setPosterPreview("");
        const input = document.getElementById("event-poster-upload");
        if (input) input.value = "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!form.title || !form.eventDate || !form.eventTime || !form.venue) {
            setError("Title, date, time, and venue are required.");
            return;
        }

        // Poster image required
        if (!posterFile && !posterPreview) {
            setError("A poster image is required for this event. Please choose a poster image.");
            return;
        }

        setSubmitting(true);

        const formData = new FormData();
        Object.entries(form).forEach(([k, v]) => formData.append(k, v));
        if (posterFile) formData.append("poster", posterFile);

        try {
            const url = editingEvent
                ? `${API_URL}/api/events/admin/${editingEvent._id}`
                : `${API_URL}/api/events/admin`;
            const method = editingEvent ? "PUT" : "POST";

            const token = localStorage.getItem("token");
            const headers = token ? { Authorization: `Bearer ${token}` } : {};

            const res = await fetch(url, {
                method,
                headers,
                credentials: "include",
                body: formData,
            });
            if (res.status === 401 || res.status === 403) {
                setError("Session expired or unauthorized. Please log in again at /admin/login.");
                return;
            }
            const data = await res.json();
            if (data.success) {
                onSuccess(
                    data.event,
                    editingEvent
                        ? (posterFile ? "Event updated & poster uploaded to Cloudinary!" : "Event updated successfully!")
                        : (posterFile ? "Event created & poster uploaded to Cloudinary!" : "Event created successfully!")
                );
            } else {
                setError(data.message || "Failed to save event.");
            }
        } catch {
            setError("An error occurred. Please check your network connection and Cloudinary settings.");
        } finally {
            setSubmitting(false);
        }
    };

    const inputStyle = {
        base: "w-full rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300",
        bg: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        focus: { borderColor: "rgba(201,162,39,0.5)", boxShadow: "0 0 0 3px rgba(201,162,39,0.08)" },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-[20px] p-6 md:p-8"
            style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(201,162,39,0.2)",
            }}
        >
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-white text-lg">
                    {editingEvent ? "Edit Event" : "Create New Event"}
                </h3>
                <button
                    onClick={onCancel}
                    className="p-2 rounded-xl cursor-pointer transition-all duration-200"
                    style={{ color: "#666", border: "1px solid rgba(255,255,255,0.08)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A227"; e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                    <X size={16} />
                </button>
            </div>

            {error && (
                <div
                    className="flex items-center gap-2 rounded-xl p-3.5 mb-5 text-sm"
                    style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", color: "#f87171" }}
                >
                    <AlertCircle size={14} />
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Title */}
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">Event Title *</label>
                        <input
                            id="event-title"
                            required
                            type="text"
                            placeholder="e.g. Annual Bharatanatyam Showcase"
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            className={inputStyle.base}
                            style={{ background: inputStyle.bg, border: inputStyle.border }}
                            onFocus={(e) => Object.assign(e.currentTarget.style, inputStyle.focus)}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                    </div>

                    {/* Date */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">Event Date *</label>
                        <input
                            id="event-date"
                            required
                            type="date"
                            value={form.eventDate}
                            onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                            className={inputStyle.base}
                            style={{ background: inputStyle.bg, border: inputStyle.border, colorScheme: "dark" }}
                            onFocus={(e) => Object.assign(e.currentTarget.style, inputStyle.focus)}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                    </div>

                    {/* Time */}
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">Event Time *</label>
                        <input
                            id="event-time"
                            required
                            type="text"
                            placeholder="e.g. 6:00 PM – 9:00 PM IST"
                            value={form.eventTime}
                            onChange={(e) => setForm({ ...form, eventTime: e.target.value })}
                            className={inputStyle.base}
                            style={{ background: inputStyle.bg, border: inputStyle.border }}
                            onFocus={(e) => Object.assign(e.currentTarget.style, inputStyle.focus)}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                    </div>

                    {/* Venue */}
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">Venue *</label>
                        <input
                            id="event-venue"
                            required
                            type="text"
                            placeholder="e.g. 5678 Dance Studio, Main Hall, Coimbatore"
                            value={form.venue}
                            onChange={(e) => setForm({ ...form, venue: e.target.value })}
                            className={inputStyle.base}
                            style={{ background: inputStyle.bg, border: inputStyle.border }}
                            onFocus={(e) => Object.assign(e.currentTarget.style, inputStyle.focus)}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                    </div>

                    {/* Registration URL */}
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">Registration URL (optional)</label>
                        <input
                            id="event-reg-url"
                            type="url"
                            placeholder="https://forms.google.com/..."
                            value={form.registrationUrl}
                            onChange={(e) => setForm({ ...form, registrationUrl: e.target.value })}
                            className={inputStyle.base}
                            style={{ background: inputStyle.bg, border: inputStyle.border }}
                            onFocus={(e) => Object.assign(e.currentTarget.style, inputStyle.focus)}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2 space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">Description (optional)</label>
                        <textarea
                            id="event-description"
                            rows={3}
                            placeholder="Share details about this event..."
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            className="w-full rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none"
                            style={{ background: inputStyle.bg, border: inputStyle.border }}
                            onFocus={(e) => Object.assign(e.currentTarget.style, inputStyle.focus)}
                            onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
                        />
                    </div>

                    {/* Poster upload */}
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500 flex items-center justify-between">
                            <span>Event Poster Image *</span>
                            {posterPreview && (
                                <span className="text-[10px] text-yellow-500 font-semibold lowercase">
                                    {posterFile ? "new poster selected" : "current uploaded poster"}
                                </span>
                            )}
                        </label>

                        {posterPreview ? (
                            <div
                                className="relative rounded-2xl p-3 flex items-center gap-4 transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(201,162,39,0.3)",
                                }}
                            >
                                {/* Poster Preview Thumbnail */}
                                <div className="relative w-20 h-24 shrink-0 rounded-xl overflow-hidden bg-black border border-white/10 shadow-lg">
                                    <img
                                        src={posterPreview}
                                        alt="Event poster preview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Details & Action Buttons */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-semibold text-white truncate mb-1">
                                        {posterFile ? posterFile.name : (editingEvent?.title ? `${editingEvent.title} Poster` : "Uploaded Poster")}
                                    </p>
                                    <p className="text-[11px] text-gray-400 mb-3">
                                        {posterFile
                                            ? `${(posterFile.size / (1024 * 1024)).toFixed(2)} MB • Ready to upload`
                                            : "Cloudinary hosted image"}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-2">
                                        <label
                                            htmlFor="event-poster-upload"
                                            id="replace-poster-btn"
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white cursor-pointer transition-all duration-200"
                                            style={{
                                                background: "rgba(201,162,39,0.15)",
                                                border: "1px solid rgba(201,162,39,0.3)",
                                            }}
                                        >
                                            <Upload size={12} style={{ color: "#C9A227" }} /> Replace Poster
                                        </label>

                                        <button
                                            type="button"
                                            id="remove-poster-btn"
                                            onClick={handleRemovePoster}
                                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-red-400 cursor-pointer transition-all duration-200"
                                            style={{
                                                background: "rgba(239,68,68,0.1)",
                                                border: "1px solid rgba(239,68,68,0.2)",
                                            }}
                                        >
                                            <X size={12} /> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="flex flex-col items-center justify-center gap-2.5 w-full py-6 px-4 rounded-xl text-center transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.02)",
                                    border: "2px dashed rgba(201,162,39,0.25)",
                                }}
                            >
                                <ImageIcon size={26} style={{ color: "rgba(201,162,39,0.6)" }} />
                                <div>
                                    <label
                                        htmlFor="event-poster-upload"
                                        id="choose-poster-btn"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-black cursor-pointer shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
                                        style={{
                                            background: "linear-gradient(135deg, #C9A227, #E8C94A)",
                                        }}
                                    >
                                        <Upload size={13} /> Choose Poster
                                    </label>
                                    <p className="text-[11px] text-gray-500 mt-2">JPG, PNG, WEBP • Max 5MB</p>
                                </div>
                            </div>
                        )}

                        <input
                            id="event-poster-upload"
                            type="file"
                            accept="image/jpeg,image/jpg,image/png,image/webp"
                            className="hidden"
                            onChange={handleFileChange}
                        />

                        {submitting && posterFile && (
                            <div className="flex items-center gap-2 text-xs font-semibold text-yellow-400 pt-1 animate-pulse">
                                <div className="h-3 w-3 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />
                                Uploading poster to Cloudinary & saving event...
                            </div>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-2">
                    <button
                        type="submit"
                        id="event-form-submit"
                        disabled={submitting}
                        className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black cursor-pointer disabled:opacity-50 transition-all duration-300"
                        style={{
                            background: "linear-gradient(135deg, #8B6914, #C9A227, #E8C94A)",
                            boxShadow: "0 4px 20px rgba(201,162,39,0.3)",
                        }}
                    >
                        {submitting ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                        ) : (
                            <Save size={14} />
                        )}
                        {editingEvent ? "Submit Changes" : "Submit"}
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold cursor-pointer transition-all duration-300"
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#aaa",
                        }}
                    >
                        <X size={14} />
                        Cancel
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

// ─── Event Card ──────────────────────────────────────────────
const EventCard = ({ event, onEdit, onDelete }) => {
    const eventDate = new Date(event.eventDate);
    const isPast = eventDate < new Date();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative overflow-hidden rounded-[18px] p-5 transition-all duration-300"
            style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,162,39,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
        >
            <div className="flex gap-4">
                {/* Poster thumbnail */}
                <div
                    className="shrink-0 w-20 h-24 rounded-xl overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                    {event.poster?.url ? (
                        <img src={event.poster.url} alt={event.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <ImageIcon size={22} style={{ color: "rgba(201,162,39,0.4)" }} />
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start gap-2 mb-2">
                        {isPast && (
                            <span
                                className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                                style={{ background: "rgba(107,114,128,0.15)", border: "1px solid rgba(107,114,128,0.3)", color: "#9ca3af" }}
                            >
                                Expired
                            </span>
                        )}
                    </div>
                    <h4 className="font-black text-white text-sm leading-snug truncate mb-2">{event.title}</h4>
                    <div className="flex flex-wrap gap-3 text-[11px] text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={11} style={{ color: "#C9A227" }} />
                            {eventDate.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={11} style={{ color: "#C9A227" }} />
                            {event.eventTime}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin size={11} style={{ color: "#C9A227" }} />
                            <span className="truncate max-w-[150px]">{event.venue}</span>
                        </span>
                    </div>
                    {event.registrationUrl && (
                        <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 mt-2 text-[11px] font-bold transition-colors duration-200"
                            style={{ color: "#C9A227" }}
                        >
                            <ExternalLink size={10} />
                            Registration Link
                        </a>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div
                className="flex flex-wrap items-center gap-2 mt-4 pt-4"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
                <button
                    onClick={() => onEdit(event)}
                    id={`edit-event-${event._id}`}
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-bold cursor-pointer transition-all duration-200"
                    style={{
                        background: "rgba(201,162,39,0.1)",
                        border: "1px solid rgba(201,162,39,0.25)",
                        color: "#C9A227",
                    }}
                >
                    <Edit3 size={12} /> Edit
                </button>

                <button
                    onClick={() => onDelete(event)}
                    id={`delete-event-${event._id}`}
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-bold cursor-pointer transition-all duration-200 ml-auto"
                    style={{
                        background: "rgba(239,68,68,0.08)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        color: "#f87171",
                    }}
                >
                    <Trash2 size={12} /> Delete
                </button>
            </div>
        </motion.div>
    );
};

// ─── Main Admin Dashboard ────────────────────────────────────
const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [deletingEvent, setDeletingEvent] = useState(null);
    const [toast, setToast] = useState(null);

    const showToast = (message, type = "success") => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    const getAuthHeaders = () => {
        const token = localStorage.getItem("token");
        return token ? { Authorization: `Bearer ${token}` } : {};
    };

    const fetchEvents = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/events/admin`, {
                headers: getAuthHeaders(),
                credentials: "include",
            });
            const data = await res.json();
            if (data.success) setEvents(data.events);
            else showToast(data.message || "Failed to load events.", "error");
        } catch {
            showToast("Failed to connect to server.", "error");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchEvents(); }, [fetchEvents]);

    const handleLogout = async () => {
        await logout();
        navigate("/admin/login");
    };

    const handleFormSuccess = (updatedEvent, message) => {
        fetchEvents();
        setShowForm(false);
        setEditingEvent(null);
        showToast(message);
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
        setShowForm(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleDelete = async () => {
        if (!deletingEvent) return;
        try {
            const res = await fetch(`${API_URL}/api/events/admin/${deletingEvent._id}`, {
                method: "DELETE",
                headers: getAuthHeaders(),
                credentials: "include",
            });
            const data = await res.json();
            if (data.success) {
                setEvents((prev) => prev.filter((e) => e._id !== deletingEvent._id));
                showToast("Event deleted.");
            } else {
                showToast(data.message || "Failed to delete event.", "error");
            }
        } catch {
            showToast("An error occurred.", "error");
        } finally {
            setDeletingEvent(null);
        }
    };

    const handlePublish = async (id) => {
        const target = events.find((e) => e._id === id);
        if (target && (!target.poster || !target.poster.url)) {
            showToast("Cannot publish: Please edit this event and upload a poster first.", "error");
            return;
        }
        try {
            const res = await fetch(`${API_URL}/api/events/admin/${id}/publish`, {
                method: "PATCH",
                headers: getAuthHeaders(),
                credentials: "include",
            });
            const data = await res.json();
            if (data.success) {
                setEvents((prev) => prev.map((e) => (e._id === id ? { ...e, status: "published" } : e)));
                showToast("Event published! It will now appear in the popup.");
            } else {
                showToast(data.message || "Failed to publish.", "error");
            }
        } catch {
            showToast("An error occurred.", "error");
        }
    };

    const handleUnpublish = async (id) => {
        try {
            const res = await fetch(`${API_URL}/api/events/admin/${id}/unpublish`, {
                method: "PATCH",
                headers: getAuthHeaders(),
                credentials: "include",
            });
            const data = await res.json();
            if (data.success) {
                setEvents((prev) => prev.map((e) => (e._id === id ? { ...e, status: "unpublished" } : e)));
                showToast("Event unpublished.");
            } else {
                showToast(data.message || "Failed to unpublish.", "error");
            }
        } catch {
            showToast("An error occurred.", "error");
        }
    };

    // Stats
    const published = events.filter((e) => e.status === "published").length;
    const drafts = events.filter((e) => e.status === "draft").length;
    const upcoming = events.filter((e) => new Date(e.eventDate) >= new Date()).length;

    return (
        <div className="min-h-screen" style={{ background: "#080808" }}>
            {/* Gold top accent */}
            <div
                className="fixed top-0 left-0 right-0 h-[3px] z-50"
                style={{ background: "linear-gradient(90deg, #8B6914, #C9A227, #E8C94A, #C9A227, #8B6914)" }}
            />

            {/* Header */}
            <header
                className="sticky top-[3px] z-40 px-4 py-4"
                style={{
                    background: "rgba(8,8,8,0.9)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    backdropFilter: "blur(20px)",
                }}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div
                            className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                            style={{
                                background: "linear-gradient(135deg, rgba(139,105,20,0.4), rgba(201,162,39,0.2))",
                                border: "1px solid rgba(201,162,39,0.3)",
                            }}
                        >
                            <Shield size={16} style={{ color: "#C9A227" }} />
                        </div>
                        <div>
                            <h1 className="font-black text-white text-sm leading-tight" style={{ letterSpacing: "-0.01em" }}>
                                Event Manager
                            </h1>
                            <p className="text-[10px] text-gray-600">5678 Dance & Fitness Studio</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex items-center gap-2">
                            <div
                                className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-black text-black"
                                style={{ background: "linear-gradient(135deg, #8B6914, #C9A227)" }}
                            >
                                {user?.username?.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-xs font-bold text-gray-400">{user?.username}</span>
                        </div>
                        <button
                            onClick={handleLogout}
                            id="admin-logout"
                            className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold cursor-pointer transition-all duration-200"
                            style={{
                                background: "rgba(239,68,68,0.1)",
                                border: "1px solid rgba(239,68,68,0.2)",
                                color: "#f87171",
                            }}
                        >
                            <LogOut size={13} />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 pt-8 pb-20 space-y-8">
                {/* Stats row */}
                <div className="grid grid-cols-2 gap-4 max-w-lg">
                    {[
                        { label: "Total Events", value: events.length, icon: Calendar, color: "#C9A227" },
                        { label: "Upcoming", value: upcoming, icon: Sparkles, color: "#a78bfa" },
                    ].map(({ label, value, icon: Icon, color }) => (
                        <div
                            key={label}
                            className="rounded-[16px] p-4"
                            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                        >
                            <div className="flex items-center gap-2.5 mb-2">
                                <Icon size={14} style={{ color }} />
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600">{label}</p>
                            </div>
                            <p className="text-2xl font-black text-white">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Create / Edit form */}
                {showForm ? (
                    <EventForm
                        editingEvent={editingEvent}
                        onSuccess={handleFormSuccess}
                        onCancel={() => { setShowForm(false); setEditingEvent(null); }}
                    />
                ) : (
                    <button
                        onClick={() => { setEditingEvent(null); setShowForm(true); }}
                        id="create-event-btn"
                        className="flex w-full items-center justify-center gap-3 rounded-[18px] py-4 text-sm font-bold cursor-pointer transition-all duration-300"
                        style={{
                            background: "rgba(201,162,39,0.07)",
                            border: "2px dashed rgba(201,162,39,0.3)",
                            color: "#C9A227",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,162,39,0.12)"; e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(201,162,39,0.07)"; e.currentTarget.style.borderColor = "rgba(201,162,39,0.3)"; }}
                    >
                        <Plus size={18} />
                        Create New Event
                    </button>
                )}

                {/* Events list */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-black text-white text-base">All Events</h2>
                        {events.length > 0 && (
                            <span className="text-[11px] text-gray-600 font-bold uppercase tracking-widest">
                                {events.length} total
                            </span>
                        )}
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-4">
                            <div
                                className="h-12 w-12 animate-spin rounded-full border-t-3 border-r-3"
                                style={{ borderColor: "#C9A227 #C9A227 transparent transparent", borderWidth: "3px", borderStyle: "solid" }}
                            />
                            <p className="text-gray-600 text-sm font-semibold">Loading events...</p>
                        </div>
                    ) : events.length === 0 ? (
                        <div
                            className="flex flex-col items-center justify-center py-20 rounded-[18px]"
                            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                        >
                            <Calendar size={36} style={{ color: "rgba(201,162,39,0.3)" }} className="mb-4" />
                            <p className="text-gray-400 font-bold mb-1">No events yet</p>
                            <p className="text-gray-600 text-sm">Click the button above to create your first event.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <AnimatePresence mode="popLayout">
                                {events.map((event) => (
                                    <EventCard
                                        key={event._id}
                                        event={event}
                                        onEdit={handleEdit}
                                        onDelete={setDeletingEvent}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </main>

            {/* Delete confirmation modal */}
            {deletingEvent && (
                <ConfirmDeleteModal
                    event={deletingEvent}
                    onConfirm={handleDelete}
                    onCancel={() => setDeletingEvent(null)}
                />
            )}

            {/* Toast */}
            <Toast toast={toast} onClose={() => setToast(null)} />
        </div>
    );
};

export default AdminDashboard;
