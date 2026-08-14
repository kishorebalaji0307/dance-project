import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center overflow-hidden bg-black pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Premium Dance Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroBg}
          alt="5678 Dance & Fitness Studio Background"
          className="h-full w-full object-cover object-center filter brightness-[0.55] contrast-[1.1] scale-[1.03] transition-transform duration-1000"
        />

        {/* Dark Overlay Gradients for Contrast & Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90" />

        {/* Animated Gold Aura & Lighting Effects */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#D4AF37]/25 to-[#E8C94A]/20 blur-[170px]"
        />
        <div className="absolute left-[-10%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#C9A227]/10 blur-[160px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#E8C94A]/10 blur-[160px]" />
      </div>

      {/* Hero Content Container — Luxury Glass Panel */}
      <div className="relative z-10 mx-auto flex flex-col items-center justify-center text-center max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/15 bg-gradient-to-b from-white/[0.08] via-black/65 to-black/85 p-6 sm:p-12 md:p-16 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.85),0_0_80px_rgba(212,175,55,0.12)]"
        >
          {/* Top Gold Glowing Border Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5D76E] to-transparent shadow-[0_0_15px_#F5D76E]" />
          
          {/* Corner Accents */}
          <div className="absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-[#D4AF37]/40 rounded-tl-md" />
          <div className="absolute top-3 right-3 h-3 w-3 border-t-2 border-r-2 border-[#D4AF37]/40 rounded-tr-md" />

          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-4 py-1.5 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <Sparkles size={13} className="text-[#F5D76E] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#F5D76E]">
              Premier Dance &amp; Fitness Studio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="bg-gradient-to-r from-[#FFF0B3] via-[#F5D76E] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(245,215,110,0.35)]">
              5678
            </span>
            <br />
            <span className="font-black text-white drop-shadow-md">
              Dance &amp; Fitness Studio
            </span>
          </motion.h1>

          {/* Tagline — "Language of Soul" */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6"
          >
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
            <span className="text-[#F5D76E] text-xs sm:text-sm font-semibold tracking-[0.2em]">❖</span>
            <span className="uppercase tracking-[0.45em] sm:tracking-[0.55em] text-[11px] sm:text-xs font-bold text-[#F5D76E] drop-shadow-[0_0_12px_rgba(245,215,110,0.3)]">
              Language of Soul
            </span>
            <span className="text-[#F5D76E] text-xs sm:text-sm font-semibold tracking-[0.2em]">❖</span>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
          </motion.div>

          {/* Centered Gold Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-[3px] w-28 origin-center rounded-full bg-gradient-to-r from-[#B8860B] via-[#F5D76E] to-[#E8C94A] mx-auto shadow-[0_0_16px_rgba(245,215,110,0.5)]"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-7 max-w-2xl mx-auto text-base leading-[1.95] text-gray-200/90 sm:text-lg sm:leading-[2]"
          >
            Where passion meets performance. Learn{" "}
            <span className="font-semibold text-[#F5D76E]">Freestyle Hip Hop</span>,{" "}
            <span className="font-semibold text-[#F5D76E]">Bharatanatyam</span>,{" "}
            <span className="font-semibold text-[#F5D76E]">Aerobics</span>, and{" "}
            <span className="font-semibold text-[#F5D76E]">Fitness</span> from professional instructors inside a premium learning environment.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-[#E8C94A] px-8 py-4 font-extrabold text-black shadow-[0_6px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_12px_45px_rgba(245,215,110,0.6)] active:scale-[0.98] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span>Enquire Now</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <Link
              to="/classes"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#F5D76E] hover:bg-[#D4AF37]/25 hover:scale-[1.05] hover:shadow-[0_6px_30px_rgba(212,175,55,0.25)] active:scale-[0.98] w-full sm:w-auto"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37]/40 group-hover:bg-[#F5D76E] transition-colors">
                <Play size={12} className="text-[#F5D76E] group-hover:text-black fill-current translate-x-[0.5px]" />
              </div>
              <span className="text-white font-bold tracking-wide drop-shadow-sm group-hover:text-[#F5D76E] transition-colors">Explore Classes</span>
            </Link>
          </motion.div>

          {/* Centered Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-14 flex flex-wrap justify-center items-center gap-6 sm:gap-12 pt-9 border-t border-white/15 w-full max-w-3xl mx-auto"
          >
            {[
              { value: "1500+", label: "Happy Students", icon: Star },
              { value: "5+", label: "Years Excellence", icon: Award },
              { value: "100%", label: "Passionate Training", icon: Sparkles },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-12">
                  <div className="flex flex-col items-center text-center gap-1 group cursor-default">
                    <div className="flex items-center gap-1.5">
                      <StatIcon size={14} className="text-[#F5D76E] opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] bg-gradient-to-r from-[#FFF0B3] via-[#F5D76E] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,215,110,0.3)]">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-300/80 group-hover:text-gray-200 transition-colors">
                      {stat.label}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div className="hidden sm:block h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  )}
                </div>
              );
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;