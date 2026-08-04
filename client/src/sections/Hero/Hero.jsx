import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] pt-24 pb-16 sm:pt-32 sm:pb-20 lg:py-0"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        <img
          src={heroBg}
          alt="Dance Studio Hero Background"
          className="w-full h-full object-cover object-center opacity-30 sm:opacity-35"
        />
        {/* Subtle radial/linear dark overlays to fade out the image at edges */}
        <div className="absolute inset-0 bg-[#050505]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_95%)]" />
      </div>

      {/* Background Deep Luxury Glows (Subtle, Clean) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Soft Golden Glow behind content */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[160px]" />
        
        {/* Subtle accent corner glows */}
        <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/3 blur-[150px]" />
        
        {/* Royal deep purple/indigo accent glows for depth */}
        <div className="absolute right-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#6B46C1]/4 blur-[160px]" />
        <div className="absolute left-[10%] bottom-[15%] h-[450px] w-[450px] rounded-full bg-[#4338CA]/3 blur-[150px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto flex flex-col items-center justify-center text-center max-w-4xl px-6 lg:px-8">
        
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="uppercase tracking-[0.45em] text-[#D4AF37] text-xs font-semibold sm:text-sm"
          >
            One Soul • Many Styles • Endless Movement
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            Language
            <br />
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFE08A] bg-clip-text text-transparent">
              Of Soul
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-4 text-2xl font-light text-gray-200 sm:text-3xl"
          >
            Dance & Fitness Studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-xl mx-auto text-base leading-relaxed text-gray-400 sm:text-lg sm:leading-8 text-center"
          >
            Where passion meets performance. Learn Bharatanatyam, Hip Hop,
            Freestyle, Folk, and Fitness from professional instructors inside
            a premium learning environment.
          </motion.p>

          {/* Luxury Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.65,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center justify-center w-full sm:w-auto"
          >
            <a
              href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] px-7 py-4 font-semibold text-black shadow-[0_0_30px_rgba(212,175,55,.15)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_45px_rgba(212,175,55,.45)] cursor-pointer w-full sm:w-auto"
            >
              Enquire Now
              <ArrowRight size={18} />
            </a>

            <Link
              to="/classes"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
            >
              <Play size={16} />
              Explore Classes
            </Link>
          </motion.div>
        </div>

      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;