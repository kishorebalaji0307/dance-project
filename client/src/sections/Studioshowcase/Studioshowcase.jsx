import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import studioImage from "../../assets/images/studio.jpg.png";

const features = [
  "Spacious Dance Floor",
  "Premium Mirror Setup",
  "Professional Learning Environment",
  "High Quality Sound System",
];

const StudioShowcase = () => {
  return (
    <section
      id="studio"
      className="relative overflow-hidden bg-[#050505] py-20 md:py-28"
    >
      {/* Luxury Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/5 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[170px]" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] sm:tracking-[0.45em] font-semibold text-[#D4AF37] text-sm">
            OUR STUDIO
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Designed For
            <span className="block bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
              Every Dancer
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg sm:leading-9">
            Every detail inside our studio has been carefully designed to
            inspire confidence, creativity and excellence. Experience a
            premium atmosphere where passion meets performance.
          </p>
        </motion.div>

        {/* Studio Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-14 md:mt-20 overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[34px] border border-[#D4AF37]/20 shadow-[0_20px_60px_rgba(212,175,55,0.1)]"
        >
          {/* Studio Image — responsive height */}
          <img
            src={studioImage}
            alt="5678 Dance & Fitness Studio"
            className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[380px] md:h-[520px] lg:h-[720px]"
            style={{ objectPosition: "center" }}
          />

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Soft Side Glow */}
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          {/* Premium Glass Card — Desktop Only (absolute overlay) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex absolute inset-y-0 left-0 w-[60%] items-end bg-gradient-to-r from-black/80 via-black/55 to-transparent px-16 pb-12"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                Premium Experience
              </p>

              <h3 className="mt-5 text-5xl font-black leading-tight text-white">
                Step Into
                <span className="block bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                  Excellence
                </span>
              </h3>

              <p className="mt-6 max-w-lg leading-8 text-gray-300">
                Our spacious dance floor, premium mirror setup
              ,Fully Air-Conditioned studio and professional learning environment are thoughtfully
                designed to help every student practice, perform and grow with
                confidence.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <CheckCircle2 size={20} className="text-[#D4AF37]" />
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                to="/studio"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] px-8 py-4 font-semibold text-black transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.35)]"
              >
                Explore Our Studio
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Bottom Right Card — Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="hidden lg:block absolute right-10 bottom-10 rounded-[24px] border border-[#D4AF37]/20 bg-[#0B0B0B]/80 backdrop-blur-2xl px-8 py-6"
          >
            <h4 className="text-3xl font-black text-white">Professional</h4>
            <p className="mt-2 text-gray-400">
              Dance Floor
              <br />
              Mirror Studio
              <br />
              Sound System
            </p>
          </motion.div>
        </motion.div>

        {/* Mobile Content Card — visible only below lg */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="lg:hidden mt-5 sm:mt-6 rounded-[20px] sm:rounded-[24px] border border-[#D4AF37]/20 bg-[#0B0B0B]/90 p-5 sm:p-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Premium Experience
          </p>

          <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
            Step Into{" "}
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
              Excellence
            </span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            Our spacious dance floor, premium mirror setup, world-class ambience
            and professional learning environment are thoughtfully designed to
            help every student practice, perform and grow with confidence.
          </p>

          {/* Features */}
          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 size={16} className="shrink-0 text-[#D4AF37]" />
                <span className="text-sm text-gray-200">{feature}</span>
              </div>
            ))}
          </div>

          <Link
            to="/studio"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] px-6 py-3 font-semibold text-black text-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Our Studio
            <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default StudioShowcase;