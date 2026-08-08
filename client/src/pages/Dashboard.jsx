import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { User, Mail, Calendar, LogOut, Award, Sparkles, BookOpen, Clock } from "lucide-react";
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
    if (res.success) navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-[#FAF8F3] pt-28 pb-20 px-6 lg:px-8">

        {/* Gold tint */}
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[160px] pointer-events-none" />
        <div className="absolute right-0 bottom-20 h-[400px] w-[400px] rounded-full bg-[#C9A227]/4 blur-[150px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-gray-100">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-6 bg-[#C9A227] opacity-60" />
                <p className="uppercase tracking-[0.35em] text-[#C9A227] text-xs font-bold">Dancer Dashboard</p>
              </div>
              <h1 className="text-3xl font-extrabold tracking-[-0.03em] text-gray-950 md:text-5xl">
                Welcome back,{" "}
                <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">
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
              className="inline-flex items-center gap-3 rounded-full border border-red-200 bg-red-50 px-6 py-3 font-semibold text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 self-start cursor-pointer text-sm"
            >
              <LogOut size={15} />
              Log Out
            </motion.button>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-8">

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-[28px] border border-gray-100 bg-white p-8 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A]" />

              <div>
                {/* Avatar */}
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] text-black shadow-[0_6px_20px_rgba(180,140,20,0.28)]">
                    <User size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-[-0.02em] text-gray-950">{user?.username}</h3>
                    <p className="text-sm text-[#C9A227] flex items-center gap-1.5 mt-0.5 font-semibold">
                      <Sparkles size={11} />
                      Premium Member
                    </p>
                  </div>
                </div>

                <div className="mt-7 h-px bg-gray-100" />

                <div className="mt-6 space-y-4">
                  {[
                    { Icon: Mail, text: user?.email },
                    { Icon: Calendar, text: "Joined July 2026" },
                    { Icon: Award, text: "Membership Level: Elite Scholar" },
                  ].map(({ Icon, text }, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-500">
                      <Icon size={14} className="text-[#C9A227] shrink-0" />
                      <span className="text-sm truncate">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-4 rounded-2xl border border-[#C9A227]/18 bg-[#FFF8E1] text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest">Next billing date</p>
                <p className="mt-1.5 text-sm font-bold text-gray-900">August 17, 2026</p>
              </div>
            </motion.div>

            {/* Classes Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:col-span-2 overflow-hidden rounded-[28px] border border-gray-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A]" />

              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold tracking-[-0.02em] text-gray-950 flex items-center gap-3 sm:text-2xl">
                  <BookOpen className="text-[#C9A227] shrink-0" size={22} />
                  My Active Classes
                </h3>
                <span className="rounded-full bg-[#FFF8E1] border border-[#C9A227]/20 px-4 py-1.5 text-xs font-bold text-[#8B6914]">
                  {myClassesMock.length} Enrolled
                </span>
              </div>

              <div className="mt-6 h-px bg-gray-100" />

              <div className="mt-6 space-y-4">
                {myClassesMock.map((cls, idx) => (
                  <motion.div
                    key={cls.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="group relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-6 hover:border-[#C9A227]/30 hover:bg-[#FFF8E1] transition-all duration-300 overflow-hidden"
                  >
                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl bg-gradient-to-b from-[#B8860B] to-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="pl-1">
                      <h4 className="text-base font-bold text-gray-900 group-hover:text-[#8B6914] transition-colors">{cls.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">Instructor: {cls.instructor}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1.5">
                          <Clock size={11} className="text-[#C9A227]" />
                          {cls.time}
                        </span>
                        <span className="rounded-md bg-gray-100 border border-gray-200 px-2.5 py-1 text-gray-500">{cls.level}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate("/classes")}
                      className="rounded-full bg-[#FFF8E1] border border-[#C9A227]/25 text-[#8B6914] px-5 py-2.5 text-xs font-bold hover:bg-[#C9A227] hover:text-black hover:border-[#C9A227] transition-all duration-300 shrink-0 cursor-pointer"
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
