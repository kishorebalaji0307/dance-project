import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] lg:min-h-screen items-center justify-center overflow-hidden bg-[#FAFAF5] pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Background Soft Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FAFAF5] to-[#F5F0E8]" />
        {/* Soft gold glow top center */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[180px]" />
        {/* Subtle accent glows */}
        <div className="absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#E8C94A]/5 blur-[160px]" />
      </div>

      {/* Content — Neatly Centered */}
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center text-center max-w-4xl px-6 lg:px-8">

        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-[#C9A227] opacity-60" />
          <span className="uppercase tracking-[0.45em] text-[#C9A227] text-xs font-bold">
            Language of soul
          </span>
          <div className="h-px w-8 bg-[#C9A227] opacity-60" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-gray-950 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">
            5678
          </span>
          <br />
          Dance &amp; Fitness Studio
        </motion.h1>

        {/* Centered Gold Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 h-[3px] w-24 origin-center rounded-full bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A]"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-7 max-w-2xl text-base leading-[1.95] text-gray-500 sm:text-lg sm:leading-[2]"
        >
          Where passion meets performance. Learn Freestyle Hip Hop, Bharatanatyam,
          Freestyle, Folk, and Fitness from professional instructors inside
          a premium learning environment.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-8 py-4 font-bold text-black shadow-[0_6px_28px_rgba(180,140,20,0.30)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_10px_40px_rgba(180,140,20,0.45)] active:scale-[0.98] w-full sm:w-auto"
          >
            <span>Enquire Now</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <Link
            to="/classes"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-gray-300/80 bg-white px-8 py-4 font-semibold text-gray-800 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#C9A227] hover:bg-[#FFF8E1] hover:scale-[1.04] active:scale-[0.98] w-full sm:w-auto"
          >
            <Play size={15} className="text-[#C9A227] fill-[#C9A227]" />
            Explore Classes
          </Link>
        </motion.div>

        {/* Centered Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-16 pt-10 border-t border-gray-200/70 w-full max-w-2xl"
        >
          {[
            { value: "1500+", label: "Happy Students" },
            { value: "5+", label: "Years Excellence" },
            // { value: "50+", label: "Achievements" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <span className="text-3xl font-extrabold tracking-[-0.03em] bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;