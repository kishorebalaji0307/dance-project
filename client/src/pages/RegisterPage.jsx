import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import logo from "../assets/images/5678logo.png";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, user, error, clearError } = useAuth();
  const navigate = useNavigate();

  // If already logged in, redirect to dashboard
  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [user, navigate]);

  // Clear global auth errors on page load/unload
  useEffect(() => {
    clearError();
    return () => clearError();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    // Input Validation
    if (!username || !email || !password) {
      setFormError("Please fill in all fields");
      return;
    }

    if (username.length < 3) {
      setFormError("Username must be at least 3 characters");
      return;
    }

    if (password.length < 6) {
      setFormError("Password must be at least 6 characters");
      return;
    }

    setIsSubmitting(true);
    const result = await register(username, email, password);
    setIsSubmitting(false);

    if (!result.success) {
      setFormError(result.error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] pt-28 pb-16 px-4">
        {/* Decorative Golden Background Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
          <div className="absolute left-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/3 blur-[120px]" />
          <div className="absolute right-[-10%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-[#D4AF37]/3 blur-[120px]" />
        </div>

        {/* Auth Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-[30px] border border-[#D4AF37]/20 bg-[#0B0B0B]/85 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-10"
        >
          {/* Logo / Header */}
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={logo}
              alt="5678 Dance & Fitness Studio"
              className="h-20 w-auto object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]"
            />
            <h2 className="mt-4 text-3xl font-black text-white">
              Create{" "}
              <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                Account
              </span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Join the premium 5678 Dance Studio
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {/* Error Message */}
            {(formError || error) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400"
              >
                <AlertCircle size={18} className="flex-shrink-0" />
                <p>{formError || error}</p>
              </motion.div>
            )}

            {/* Username Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Username
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                  <User size={18} />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="john_doe"
                  className="w-full rounded-full border border-white/[0.08] bg-white/[0.03] py-4 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-[#D4AF37]/50 focus:bg-[#D4AF37]/5"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Email Address
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-full border border-white/[0.08] bg-white/[0.03] py-4 pl-12 pr-4 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-[#D4AF37]/50 focus:bg-[#D4AF37]/5"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Password
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-full border border-white/[0.08] bg-white/[0.03] py-4 pl-12 pr-12 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-[#D4AF37]/50 focus:bg-[#D4AF37]/5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] py-4 font-semibold text-black shadow-[0_0_20px_rgba(212,175,55,0.15)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
              ) : (
                <>
                  Register
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Toggle Login */}
          <div className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#D4AF37] hover:underline"
            >
              Sign In
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
