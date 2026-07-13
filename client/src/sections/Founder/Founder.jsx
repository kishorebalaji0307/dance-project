import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import founder from "../../assets/images/founder.png";

const Founder = () => {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#070707] py-28"
    >

      {/* Soft Gold Glow */}

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      {/* Light Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">

        {/* Founder Image */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
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
              className="relative max-h-[700px] rounded-[30px] object-contain
              drop-shadow-[0_25px_60px_rgba(212,175,55,.18)]"
            />

          </div>

        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.35em] font-semibold text-[#D4AF37]">
            The Heart Behind 5678
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Mrs. Chitra
          </h2>

          <p className="mt-4 text-xl text-[#D4AF37]">
            Founder & Lead Instructor
          </p>

          <blockquote className="mt-10 border-l-2 border-[#D4AF37] pl-6 text-2xl italic leading-relaxed text-white">

            "Every great dancer begins with one step..."

          </blockquote>

          <p className="mt-8 text-lg leading-9 text-gray-400">

            At 5678 Dance & Fitness Studio, we believe dance is more than
            movement—it is confidence, discipline, creativity and self-expression.
            Our mission is to inspire every student with quality training in a
            positive and energetic environment.

          </p>
                    {/* Stats */}

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: .3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all hover:border-[#D4AF37]/25"
            >

              <h3 className="text-4xl font-black text-white">
                500+
              </h3>

              <div className="mt-3 h-[2px] w-14 rounded-full bg-[#D4AF37]/70" />

              <p className="mt-4 text-gray-400">
                Students Trained
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: .3 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all hover:border-[#D4AF37]/25"
            >

              <h3 className="text-4xl font-black text-white">
                1+
              </h3>

              <div className="mt-3 h-[2px] w-14 rounded-full bg-[#D4AF37]/70" />

              <p className="mt-4 text-gray-400">
                Years of Excellence
              </p>

            </motion.div>

          </div>

          {/* Button */}

          <button
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

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default Founder;