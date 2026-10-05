import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, AlertCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, user, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already admin
  useEffect(() => {
    if (user && user.role === "admin") {
      const from = location.state?.from?.pathname || "/admin/dashboard";
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

  useEffect(() => {
    clearError();
    return () => clearError();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!email || !password) {
      setFormError("Please fill in all fields.");
      return;
    }
    setIsSubmitting(true);
    const result = await login(email, password);
    setIsSubmitting(false);
    if (!result.success) {
      setFormError(result.error || "Login failed. Please check your credentials.");
      return;
    }
    // After login, check if user has admin role
    // The user state will be updated by AuthContext; navigate in the useEffect above
    // But we also need to check immediately since the state might not reflect yet
    // We re-fetch to confirm role
    try {
      const API_URL = import.meta.env.VITE_API_URL || "";
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const res = await fetch(`${API_URL}/api/auth/me`, { headers, credentials: "include" });
      const data = await res.json();
      if (data.success && data.user?.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        setFormError("Access denied. Admin privileges are required.");
      }
    } catch {
      setFormError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12"
      style={{ background: "#080808" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-[-20%] left-[50%] -translate-x-1/2 h-[500px] w-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] right-[10%] h-[400px] w-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,105,20,0.06) 0%, transparent 70%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[420px] overflow-hidden rounded-[28px]"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(201,162,39,0.15)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(201,162,39,0.05)",
        }}
      >
        {/* Gold top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(90deg, #8B6914, #C9A227, #E8C94A, #C9A227, #8B6914)" }}
        />

        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(139,105,20,0.3), rgba(201,162,39,0.2))",
                border: "1px solid rgba(201,162,39,0.3)",
              }}
            >
              <ShieldCheck size={28} style={{ color: "#C9A227" }} />
            </div>
            <h1
              className="text-2xl font-black text-white mb-1"
              style={{ letterSpacing: "-0.02em" }}
            >
              Admin{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8B6914, #C9A227, #E8C94A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Portal
              </span>
            </h1>
            <p className="text-sm text-gray-500">5678 Dance & Fitness Studio</p>
          </div>

          {/* Divider */}
          <div
            className="h-px mb-7"
            style={{ background: "linear-gradient(90deg, transparent, rgba(201,162,39,0.25), transparent)" }}
          />

          {/* Error */}
          {formError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 rounded-xl p-4 mb-5 text-sm"
              style={{
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.2)",
                color: "#f87171",
              }}
            >
              <AlertCircle size={15} className="shrink-0" />
              <p>{formError}</p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail
                  size={15}
                  className="absolute left-4 pointer-events-none"
                  style={{ color: "#C9A227" }}
                />
                <input
                  id="admin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@5678studio.com"
                  className="w-full rounded-full py-3.5 pl-11 pr-5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,162,39,0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-[0.3em] text-gray-500">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock
                  size={15}
                  className="absolute left-4 pointer-events-none"
                  style={{ color: "#C9A227" }}
                />
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••"
                  className="w-full rounded-full py-3.5 pl-11 pr-12 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(201,162,39,0.5)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(201,162,39,0.08)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 cursor-pointer transition-colors duration-300"
                  style={{ color: "#666" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A227"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#666"; }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="admin-login-submit"
              disabled={isSubmitting}
              className="w-full rounded-full py-4 font-bold text-sm text-black transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A227, #E8C94A)",
                boxShadow: "0 6px 25px rgba(201,162,39,0.3)",
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                  <span>Signing In...</span>
                </div>
              ) : (
                "Sign In to Admin Panel"
              )}
            </button>
          </form>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-gray-600">
            This portal is for authorized administrators only.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
