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
    <section id="studio" className="relative overflow-hidden bg-[#F9F6F0] py-24 md:py-32">

      {/* Gold glow */}
      <div className="absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C9A227]/4 blur-[170px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            <span className="uppercase tracking-[0.45em] font-bold text-[#C9A227] text-xs">Our Studio</span>
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-gray-950 sm:text-5xl md:text-6xl">
            Designed For
            <span className="block bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent mt-1">
              Every Dancer
            </span>
          </h2>

          <div className="mx-auto mt-7 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-[2] text-gray-500 sm:text-lg">
            Every detail inside our studio has been carefully designed to inspire confidence,
            creativity and excellence. Experience a premium atmosphere where passion meets performance.
          </p>
        </motion.div>

        {/* Studio Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 md:mt-24 overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-black/[0.06] shadow-[0_25px_70px_rgba(0,0,0,0.12),0_0_50px_rgba(180,140,20,0.08)]"
        >
          {/* Gold top line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-transparent" />

          <img
            src={studioImage}
            alt="5678 Dance & Fitness Studio"
            className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[380px] md:h-[520px] lg:h-[720px]"
          />

          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

          {/* Desktop Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex absolute inset-y-0 left-0 w-[56%] items-end bg-gradient-to-r from-black/90 via-black/65 to-transparent px-14 pb-14"
          >
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-6 bg-[#C9A227] opacity-70" />
                <p className="text-xs font-bold uppercase tracking-[0.40em] text-[#C9A227]">Premium Experience</p>
              </div>
              <h3 className="text-5xl font-extrabold leading-[1.1] tracking-[-0.03em] text-white">
                Step Into
                <span className="block bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#F5D76E] bg-clip-text text-transparent">
                  Excellence
                </span>
              </h3>
              <p className="mt-6 max-w-md leading-[1.9] text-gray-200 text-[0.9375rem]">
                Our spacious dance floor, premium mirror setup, fully Air-Conditioned studio
                and professional learning environment are thoughtfully designed to help every
                student practice, perform and grow with confidence.
              </p>
              <div className="mt-8 space-y-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-4">
                    <CheckCircle2 size={17} className="text-[#C9A227] shrink-0" />
                    <span className="text-gray-100 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/studio"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-8 py-4 font-bold text-black transition-all duration-400 hover:scale-105 hover:shadow-[0_10px_35px_rgba(180,140,20,0.45)]"
              >
                Explore Our Studio <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Desktop Bottom Right Card */}
          {/* <div className="hidden lg:block absolute right-10 bottom-10 rounded-[22px] border border-white/15 bg-white/12 backdrop-blur-2xl px-8 py-6 shadow-xl">
            <div className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227] mb-4" />
            <h4 className="text-2xl font-gold text-white">Professional</h4>
             <p className="mt-2 text-gray-300 text-sm leading-relaxed">Dance Floor<br />Mirror Studio<br />Sound System</p>
          </div> */}
        </motion.div>

        {/* Mobile Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="lg:hidden mt-6 rounded-[22px] sm:rounded-[28px] border border-gray-100 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.07)]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-[#C9A227] opacity-70" />
            <p className="text-xs font-bold uppercase tracking-[0.40em] text-[#C9A227]">Premium Experience</p>
          </div>
          <h3 className="text-2xl font-extrabold leading-[1.1] tracking-tight text-gray-950 sm:text-3xl">
            Step Into{" "}
            <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">
              Excellence
            </span>
          </h3>
          <p className="mt-4 text-sm leading-[1.9] text-gray-500 sm:text-base">
            Our spacious dance floor, premium mirror setup, world-class ambience and professional
            learning environment are thoughtfully designed to help every student practice, perform
            and grow with confidence.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle2 size={15} className="shrink-0 text-[#C9A227]" />
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>
          <Link
            to="/studio"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-7 py-3.5 font-bold text-black text-sm shadow-[0_6px_24px_rgba(180,140,20,0.25)] transition-all duration-300 hover:scale-105"
          >
            Explore Our Studio <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default StudioShowcase;