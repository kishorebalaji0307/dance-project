import { motion } from "framer-motion";
import { Award, Users, Dumbbell } from "lucide-react";
import aboutImg from "../../assets/images/about.png";

const features = [
  {
    icon: <Award size={24} strokeWidth={1.8} />,
    title: "Professional Training",
    desc: "Expert mentors with structured learning programs.",
  },
  {
    icon: <Users size={24} strokeWidth={1.8} />,
    title: "All Age Groups",
    desc: "Kids, Teens & Adults are warmly welcome.",
  },
  {
    icon: <Dumbbell size={24} strokeWidth={1.8} />,
    title: "Dance & Fitness",
    desc: "Build confidence, fitness and creativity together.",
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Subtle Gold Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ================= SECTION HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {/* Section Label */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-8 bg-[#D4AF37]" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#B8860B]">
              About The Studio
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.025em] text-gray-950 sm:text-5xl lg:text-6xl">
            Where Passion
            <br />
            Meets{" "}
            <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
              Excellence.
            </span>
          </h2>

          {/* Gold Accent */}
          <div className="mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-transparent" />
        </motion.div>

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 overflow-hidden rounded-[24px] border border-black/[0.06] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:mt-16 sm:rounded-[32px]"
        >
          {/* Gold Top Border */}
          <div className="absolute left-0 right-0 top-0 z-10 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-transparent" />

          {/* Image */}
          <img
            src={aboutImg}
            alt="5678 Dance & Fitness Studio"
            className="h-[240px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[380px] md:h-[520px]"
            style={{ objectPosition: "center" }}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* ================= FLOATING BADGE ================= */}
          {/* <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
            <div className="rounded-2xl border border-[#D4AF37]/50 bg-black/75 px-5 py-4 shadow-[0_8px_30px_rgba(212,175,55,0.18)] backdrop-blur-xl sm:rounded-3xl sm:px-7 sm:py-5">
              <h3 className="text-3xl font-black text-[#D4AF37] sm:text-4xl">
                5678
              </h3>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-sm">
                Dance • Fitness • Passion
              </p>
            </div>
          </div> */}
        </motion.div>

        {/* ================= BOTTOM CONTENT ================= */}
        <div className="mt-14 grid gap-12 sm:mt-20 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT — TEXT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[15px] font-medium leading-[1.9] text-gray-600 sm:text-lg">
              <span className="font-bold text-gray-950">
                5678 Dance & Fitness Studio
              </span>{" "}
              is one of Chidambaram's premier dance academies where students
              discover confidence, discipline and creativity through
              professional dance and fitness training.
            </p>

            <p className="mt-6 text-[15px] font-medium leading-[1.9] text-gray-500 sm:text-lg">
              From  Hip-Hop Freestyle to Bharatanatyam, Aerobics and Fitness, we
              nurture every learner with structured guidance in a positive,
              energetic environment.
            </p>
          </motion.div>

          {/* ================= RIGHT — FEATURE CARDS ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_18px_rgba(0,0,0,0.05)] transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_10px_30px_rgba(180,140,20,0.12)] sm:p-6"
              >
                {/* Gold Accent */}
                <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#B8860B] via-[#D4AF37] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#FFF9E6] text-[#B8860B] transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white group-hover:shadow-[0_5px_18px_rgba(212,175,55,0.3)]">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold tracking-tight text-gray-950 sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;