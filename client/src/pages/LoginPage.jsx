import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, AlertCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import logo from "../assets/images/5678logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, user, error, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) { const from = location.state?.from?.pathname || "/dashboard"; navigate(from, { replace: true }); }
  }, [user, navigate, location]);
  useEffect(() => { clearError(); return () => clearError(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); setFormError("");
    if (!email || !password) { setFormError("Please fill in all fields"); return; }
    setIsSubmitting(true);
    const result = await login(email, password);
    setIsSubmitting(false);
    if (!result.success) setFormError(result.error);
  };

  const inputClass = "w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-5 text-gray-900 placeholder-gray-300 outline-none transition duration-300 focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(180,140,20,0.12)] text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)]";

  return (
    <>
      <Navbar />
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAF8F3] pt-28 pb-20 px-4">

        {/* Gold tint glows */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]/6 blur-[150px] pointer-events-none" />
        <div className="absolute left-[-10%] top-[5%] h-[300px] w-[300px] rounded-full bg-[#C9A227]/4 blur-[120px] pointer-events-none" />

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-md overflow-hidden rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.09),0_0_40px_rgba(180,140,20,0.05)] sm:p-10"
        >
          {/* Gold top line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A]" />

          {/* Logo + Header */}
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="5678 Dance Studio" className="h-20 w-auto object-contain" />
            <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.02em] text-gray-950">
              Welcome{" "}
              <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">Back</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">Sign in to manage your dance journey</p>
          </div>

          <div className="my-7 h-px bg-gray-100" />

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {(formError || error) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-500"
              >
                <AlertCircle size={17} className="flex-shrink-0" />
                <p>{formError || error}</p>
              </motion.div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.28em] text-gray-500">Email Address</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-300"><Mail size={17} /></span>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className={inputClass} />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-[0.28em] text-gray-500">Password</label>
              <div className="relative flex items-center">
                <span className="absolute left-4 text-gray-300"><Lock size={17} /></span>
                <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                  className="w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-14 text-gray-900 placeholder-gray-300 outline-none transition duration-300 focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(180,140,20,0.12)] text-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-gray-300 hover:text-[#C9A227] transition-colors duration-300">
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] py-4 font-bold text-black shadow-[0_6px_25px_rgba(180,140,20,0.25)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(180,140,20,0.40)] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
              ) : (
                <><span>Sign In</span><ArrowRight size={17} /></>
              )}
            </button>
          </form>

          <div className="mt-7 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="font-bold text-[#C9A227] hover:text-[#8B6914] transition-colors">Register Now</Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
