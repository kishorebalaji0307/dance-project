import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { User, Mail, Calendar, LogOut, Award, ShieldAlert, Sparkles, BookOpen, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const myClassesMock = [
  { id: 1, name: "Bharatanatyam (Classical)", instructor: "Smt. Priya", time: "Mon & Wed • 5:00 PM", level: "Intermediate" },
  { id: 2, name: "Hip Hop & Street Dance", instructor: "Jack Sterling", time: "Tue & Thu • 6:30 PM", level: "Beginner to Pro" },
  { id: 3, name: "Zumba & Dance Fitness", instructor: "Elena Gomez", time: "Sat • 7:00 AM", level: "All Levels" },
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout();
    if (res.success) {
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-[#050505] text-white pt-28 pb-16 px-6 lg:px-8">
        {/* Background Glowing Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
          <div className="absolute right-[-10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-[#D4AF37]/10 pb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-xs font-semibold">
                Dancer Dashboard
              </p>
              <h1 className="mt-2 text-4xl font-black md:text-5xl">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFE08A] bg-clip-text text-transparent">
                  {user?.username || "Dancer"}
                </span>
                !
              </h1>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-3 rounded-full border border-red-500/30 bg-red-500/5 px-6 py-3 font-semibold text-red-400 hover:bg-red-500 hover:text-white transition duration-300 self-start"
            >
              <LogOut size={16} />
              Log Out
            </motion.button>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            {/* Left Column: User Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[30px] border border-[#D4AF37]/20 bg-white/[0.02] backdrop-blur-xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black">
                    <User size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{user?.username}</h3>
                    <p className="text-sm text-[#D4AF37] flex items-center gap-1">
                      <Sparkles size={12} /> Premium Member
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={16} className="text-[#D4AF37]" />
                    <span className="text-sm truncate">{user?.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar size={16} className="text-[#D4AF37]" />
                    <span className="text-sm">Joined July 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Award size={16} className="text-[#D4AF37]" />
                    <span className="text-sm">Membership Level: Elite Scholar</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-4 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/10 text-center">
                <p className="text-xs text-gray-400">Next billing date</p>
                <p className="mt-1 text-sm font-semibold text-white">August 17, 2026</p>
              </div>
            </motion.div>

            {/* Right Columns: Enrolled Classes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 rounded-[30px] border border-[#D4AF37]/20 bg-white/[0.02] backdrop-blur-xl p-8"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black flex items-center gap-3">
                  <BookOpen className="text-[#D4AF37]" /> My Active Classes
                </h3>
                <span className="rounded-full bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-semibold text-[#D4AF37]">
                  {myClassesMock.length} Enrolled
                </span>
              </div>

              <div className="mt-8 space-y-6">
                {myClassesMock.map((cls, idx) => (
                  <motion.div
                    key={cls.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="group relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] p-6 hover:border-[#D4AF37]/35 hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition duration-300">
                        {cls.name}
                      </h4>
                      <p className="text-sm text-gray-400 mt-1">Instructor: {cls.instructor}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} className="text-[#D4AF37]" />
                          {cls.time}
                        </span>
                        <span className="rounded-md bg-white/5 px-2 py-0.5 border border-white/5 text-gray-300">
                          {cls.level}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate("/classes")}
                      className="rounded-full bg-white/[0.04] border border-white/[0.08] text-white px-5 py-2.5 text-xs font-semibold hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition duration-300"
                    >
                      Class Info
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
