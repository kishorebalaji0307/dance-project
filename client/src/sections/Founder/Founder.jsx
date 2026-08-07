import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import founder from "../../assets/images/founder.png";

const Founder = () => {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#08080C] py-28"
    >
      {/* Soft Gold Glow */}
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[140px]" />
      
      {/* Purple depth glow */}
      <div className="absolute left-[15%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#6B46C1]/4 blur-[160px] pointer-events-none" />

      {/* Light Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:gap-20 lg:grid-cols-2 lg:px-8">

        {/* Founder Image */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#D4AF37]/10 blur-3xl" />

            <img
              src={founder}
              alt="Mrs. Chitra"
              className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] rounded-[24px] sm:rounded-[30px] object-contain
              shadow-[0_20px_60px_rgba(212,175,55,0.18)] border border-[#D4AF37]/15"
            />

          </div>

        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.35em] font-semibold text-[#D4AF37]">
            The Heart Behind 5678
          </p>

          <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Mrs. Chitra
          </h2>

          <p className="mt-4 text-xl text-[#D4AF37]">
            Founder of 5678 
          </p>

          <blockquote className="mt-7 sm:mt-10 border-l-2 border-[#D4AF37] pl-5 text-lg italic leading-relaxed text-white sm:pl-6 sm:text-2xl">

            "Every great dancer begins with one step..."

          </blockquote>

          <p className="mt-6 text-base leading-8 text-gray-400 sm:mt-8 sm:text-lg sm:leading-9">

            At 5678 Dance & Fitness Studio, we believe dance is more than
            movement—it is confidence, discipline, creativity and self-expression.
            Our mission is to inspire every student with quality training in a
            positive and energetic environment.

          </p>
                    {/* Stats */}

          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-md transition-all hover:border-[#D4AF37]/40 shadow-lg hover:shadow-[0_15px_35px_rgba(212,175,55,0.06)]"
            >

              <h3 className="text-4xl font-black text-white">
                500+
              </h3>

              <div className="mt-3 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37]" />

              <p className="mt-4 text-gray-400">
                Students Trained
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: .3 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 backdrop-blur-md transition-all hover:border-[#D4AF37]/40 shadow-lg hover:shadow-[0_15px_35px_rgba(212,175,55,0.06)]"
            >

              <h3 className="text-4xl font-black text-white">
                4+
              </h3>

              <div className="mt-3 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37]" />

              <p className="mt-4 text-gray-400">
                Years of Excellence
              </p>

            </motion.div>

          </div>

          {/* Button */}

          {/* <button
            className="group mt-14 inline-flex items-center gap-3 rounded-full
            border border-[#D4AF37]/30
            bg-[#D4AF37]/10
            px-8
            py-4
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-[#D4AF37]/60
            hover:bg-[#D4AF37]
            hover:text-black"
          >

            Know Her Journey

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button> */}

        </motion.div>

      </div>

    </section>
  );
};

export default Founder;