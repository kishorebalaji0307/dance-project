import { motion } from "framer-motion";
import { GraduationCap, Trophy, HeartHandshake, Users } from "lucide-react";

const features = [
  {
    number: "01", icon: GraduationCap, title: "Professional Training",
    description: "Structured dance programs designed to build confidence, technique and creativity through professional guidance.",
  },
  {
    number: "02", icon: Trophy, title: "Competitions & Events",
    description: "Regular performances, competitions and workshops help students gain stage confidence.",
  },
  {
    number: "03", icon: HeartHandshake, title: "Positive Environment",
    description: "A friendly, disciplined and motivating atmosphere where every student feels encouraged.",
  },
  {
    number: "04", icon: Users, title: "For All Ages",
    description: "Special batches for Kids, Women, Beginners and Advanced dancers with personalized attention.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-28 sm:py-32">

      {/* Subtle gold glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#C9A227]/6 blur-[160px] pointer-events-none" />

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
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#C9A227]">Why Choose Us</span>
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-gray-950 sm:text-5xl md:text-6xl">
            More Than Just
            <span className="block bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent mt-1">
              A Dance Studio
            </span>
          </h2>

          <div className="mx-auto mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-[2] text-gray-500 sm:text-base lg:text-lg">
            We inspire confidence, creativity and discipline through professional dance education
            in a positive learning environment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 sm:mt-20 grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#C9A227]/30 hover:shadow-[0_16px_50px_rgba(180,140,20,0.14),0_4px_20px_rgba(0,0,0,0.06)]"
              >
                {/* Gold top sweep on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number watermark */}
                <span className="absolute right-4 top-0 text-[88px] font-black text-gray-100 select-none leading-none pointer-events-none group-hover:text-[#C9A227]/12 transition-colors duration-500">
                  {feature.number}
                </span>

                {/* Corner glow */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C9A227]/6 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#C9A227]/20 bg-[#FFF8E1] text-[#C9A227] transition-all duration-500 group-hover:bg-[#C9A227] group-hover:border-transparent group-hover:text-white group-hover:rotate-6 group-hover:shadow-[0_8px_25px_rgba(180,140,20,0.30)]">
                  <Icon size={34} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-xl font-bold text-gray-900 sm:text-2xl">{feature.title}</h3>

                <div className="mt-4 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

                {/* Description */}
                <p className="mt-5 leading-[2] text-gray-400 text-sm sm:text-[0.9375rem]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA — Warm Luxury Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 relative overflow-hidden rounded-[32px] sm:rounded-[40px] border border-[#C9A227]/25 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] p-8 sm:p-14 text-center shadow-[0_15px_50px_rgba(180,140,20,0.10)]"
        >
          {/* Gold top line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A]" />
          {/* Glow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[250px] w-[350px] rounded-full bg-[#C9A227]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
              <p className="text-xs font-bold uppercase tracking-[0.40em] text-[#C9A227]">Our Promise</p>
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            </div>

            <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-gray-950 sm:text-3xl md:text-4xl">
              Every Step Creates
              <span className="block bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent mt-1">
                A Better Dancer
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-[2] text-gray-600 sm:text-base">
              Our mission is to help every student discover confidence, discipline and creativity
              through professional dance education, inspiring performances and unforgettable experiences.
            </p>

            <button className="mt-10 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(180,140,20,0.45)] active:scale-95 cursor-pointer">
              Join Our Family
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;