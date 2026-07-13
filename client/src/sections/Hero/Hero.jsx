import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import HeroDancer from "../../components/Herodance";
import FloatingParticles from "../FloatingParticles";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050505]"
    >
      {/* Background */}

      <div className="absolute inset-0">

        {/* Gold Glow */}

        <div className="absolute left-0 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[170px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <FloatingParticles />

      </div>

      {/* Content */}

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="uppercase tracking-[0.45em] text-[#D4AF37] text-sm font-semibold"
          >
            One Soul • Many Styles • Endless Movement
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .2,
              duration: .8,
            }}
            className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl"
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
            transition={{ delay: .45 }}
            className="mt-5 text-3xl font-light text-gray-200"
          >
            Dance & Fitness Studio
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .65 }}
            className="mt-8 max-w-xl text-lg leading-9 text-gray-400"
          >
            Where passion meets performance. Learn Bharatanatyam,
            Hip Hop, Freestyle, Folk and Fitness from professional
            instructors inside a premium learning environment.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .9,
              duration: .8,
            }}
            className="mt-14 flex flex-col gap-5 sm:flex-row"
          >

            <a
              href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] px-8 py-4 font-semibold text-black shadow-[0_0_35px_rgba(212,175,55,.25)] transition duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(212,175,55,.45)]"
            >
              Enquire Now

              <ArrowRight size={20} />

            </a>

            <Link
              to="/classes"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D4AF37]/40 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
            >
              <Play size={18} />

              Explore Classes

            </Link>

          </motion.div>

        </div>

        {/* RIGHT */}

        <HeroDancer />

      </div>

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#050505] to-transparent" />

    </section>
  );
};

export default Hero;