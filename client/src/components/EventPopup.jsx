import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, ExternalLink, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "";
const SESSION_KEY = "5678_events_dismissed";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * EventPopup — displays published upcoming event posters in a fully responsive popup.
 * - Automatically fetches from /api/events/public on public website load.
 * - Completely mobile-friendly (object-fit: contain, viewport constrained, touch-friendly close).
 * - Never shows admin controls or upload buttons to public visitors.
 * - Displays exact Cloudinary poster URL saved in MongoDB.
 * - Supports keyboard navigation (Escape, Left/Right arrows) and multi-event browsing.
 */
const EventPopup = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Do not display popup on admin routes
  const isAdminPage = location.pathname.startsWith("/admin");

  // Fetch published upcoming events on public page load
  useEffect(() => {
    if (isAdminPage) {
      setVisible(false);
      return;
    }

    const fetchEvents = async () => {
      try {
        const res = await fetch(`${API_URL}/api/events/public`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success && Array.isArray(data.events) && data.events.length > 0) {
          setEvents(data.events);
          setCurrentIndex(0);
          setVisible(true);
        }
      } catch {
        // Silently fail if network/endpoint unavailable
      }
    };

    // Smooth delay so the public page loads first
    const timer = setTimeout(fetchEvents, 500);
    return () => clearTimeout(timer);
  }, [isAdminPage, location.pathname]);

  // Handle close
  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  // Keyboard controls
  useEffect(() => {
    if (!visible) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") setCurrentIndex((i) => Math.min(i + 1, events.length - 1));
      if (e.key === "ArrowLeft") setCurrentIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleClose, events.length]);

  // Prevent background body scroll when popup is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (isAdminPage || events.length === 0) return null;

  const event = events[currentIndex] || events[0];

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-x-hidden overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            key="event-popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            key="event-popup-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Event: ${event.title}`}
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 25 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[880px] max-h-[90vh] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-[0_25px_80px_rgba(0,0,0,0.8)] border border-yellow-500/20"
            style={{
              background: "#0D0D0D",
              boxShadow: "0 0 50px rgba(201,162,39,0.12), 0 25px 80px rgba(0,0,0,0.8)",
            }}
          >
            {/* Top gold accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-[3px] z-30"
              style={{
                background: "linear-gradient(90deg, #8B6914, #C9A227, #E8C94A, #C9A227, #8B6914)",
              }}
            />

            {/* Close Button (Touch-friendly & highly visible) */}
            <button
              onClick={handleClose}
              id="event-popup-close-btn"
              aria-label="Close popup"
              className="absolute top-3.5 right-3.5 z-40 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 cursor-pointer shadow-lg"
              style={{
                background: "rgba(0,0,0,0.75)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,162,39,0.3)";
                e.currentTarget.style.borderColor = "#C9A227";
                e.currentTarget.style.color = "#C9A227";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0,0,0,0.75)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              <X size={18} strokeWidth={2.5} />
            </button>

            {/* Poster Side (Preserves Aspect Ratio, object-contain, never stretched or cropped) */}
            <div
              className="relative w-full md:w-[48%] bg-black/90 flex items-center justify-center overflow-hidden shrink-0 p-2 sm:p-3 md:p-4"
              style={{
                minHeight: "220px",
                maxHeight: "360px",
              }}
            >
              {/* Blur backdrop glow */}
              {
                event.poster?.url && (
                  <div
                    className="absolute inset-0 opacity-25 filter blur-2xl pointer-events-none scale-110"
                    style={{
                      backgroundImage: `url(${event.poster.url})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  />
                )
              }

              {
                event.poster?.url ? (
                  <img
                    src={event.poster.url}
                    alt={`${event.title} Poster`}
                    className="relative z-10 max-h-[240px] sm:max-h-[320px] md:max-h-[500px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-transform duration-300"
                    loading="eager"
                  />
                ) : (
                  <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
                    <div
                      className="text-5xl md:text-6xl font-black mb-2 tracking-tight"
                      style={{
                        background: "linear-gradient(135deg, #8B6914, #C9A227, #E8C94A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      5678
                    </div>
                    <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.25em]">
                      Dance &amp; Fitness Studio
                    </p>
                  </div>
                )}
            </div>

            {/* Content Side (Vertically Scrollable, touch-friendly) */}
            <div className="flex-1 flex flex-col justify-between p-5 sm:p-6 md:p-7 overflow-y-auto max-h-[55vh] md:max-h-[85vh] custom-scrollbar">
              {/* Top Details */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-[0.25em] mb-3"
                  style={{
                    background: "rgba(201,162,39,0.12)",
                    border: "1px solid rgba(201,162,39,0.3)",
                    color: "#C9A227",
                  }}
                >
                  <Sparkles size={11} />
                  <span>Upcoming Event</span>
                </div>

                {/* Event Title */}
                <h2
                  className="text-lg sm:text-xl md:text-2xl font-black text-white leading-snug mb-4 pr-6"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {event.title}
                </h2>

                {/* Event Key Info */}
                <div className="space-y-2.5 mb-4 text-xs sm:text-sm">
                  {event.eventDate && (
                    <div className="flex items-start gap-2.5">
                      <Calendar size={15} style={{ color: "#C9A227", flexShrink: 0, marginTop: "2px" }} />
                      <span className="text-gray-200 font-semibold">{formatDate(event.eventDate)}</span>
                    </div>
                  )}

                  {event.eventTime && (
                    <div className="flex items-center gap-2.5">
                      <Clock size={15} style={{ color: "#C9A227", flexShrink: 0 }} />
                      <span className="text-gray-300">{event.eventTime}</span>
                    </div>
                  )}

                  {event.venue && (
                    <div className="flex items-start gap-2.5">
                      <MapPin size={15} style={{ color: "#C9A227", flexShrink: 0, marginTop: "2px" }} />
                      <span className="text-gray-300 leading-snug">{event.venue}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {event.description && (
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 line-clamp-4 md:line-clamp-6">
                    {event.description}
                  </p>
                )}
              </div>

              {/* Action Buttons & Multi-Event Controls */}
              <div className="space-y-2.5 pt-3 border-t border-white/10">
                {event.registrationUrl && (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="event-popup-register-btn"
                    className="flex w-full items-center justify-center gap-2 rounded-full py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-bold text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #8B6914, #C9A227, #E8C94A)",
                      boxShadow: "0 4px 20px rgba(201,162,39,0.35)",
                    }}
                  >
                    <span>Register / Learn More</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                <button
                  onClick={handleClose}
                  id="event-popup-dismiss-btn"
                  className="flex w-full items-center justify-center py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-400 hover:text-white rounded-full transition-colors duration-200 cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Maybe Later
                </button>

                {/* Multi-event pagination if more than 1 event exists */}
                {events.length > 1 && (
                  <div className="flex items-center justify-between pt-2 text-xs text-gray-400">
                    <button
                      onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                      disabled={currentIndex === 0}
                      className="flex items-center gap-1 font-semibold disabled:opacity-30 hover:text-[#C9A227] transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={14} /> Prev
                    </button>
                    <span className="text-[11px] text-gray-500 font-bold">
                      {currentIndex + 1} of {events.length}
                    </span>
                    <button
                      onClick={() => setCurrentIndex((i) => Math.min(i + 1, events.length - 1))}
                      disabled={currentIndex === events.length - 1}
                      className="flex items-center gap-1 font-semibold disabled:opacity-30 hover:text-[#C9A227] transition-colors cursor-pointer"
                    >
                      Next <ChevronRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;
