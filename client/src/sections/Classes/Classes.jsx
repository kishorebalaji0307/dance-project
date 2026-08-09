import { motion } from "framer-motion";
import { Music4, Flower2, Dumbbell, Users, Globe, ArrowRight } from "lucide-react";

const classes = [
  {
    icon: Music4, title: "Hip Hop Freestyle", age: "Age 3+",
    description: "Energetic hip hop training for juniors, Beginners, and intermediate & Advance level, with professional dance battle opportunities.",
  },
  {
    icon: Flower2, title: "Bharatanatyam", age: "All Ages",
    description: "Experience the timeless elegance of Bharatanatyam through proper techniques, expressions and discipline.",
  },
  {
    icon: Dumbbell, title: "Aerobics", age: "Women Only",
    description: "Fun and energetic aerobic sessions that improve strength, flexibility and overall fitness including diet management.",
  },
  {
    icon: Users, title: "Ladies Dance Batch", age: "Women",
    description: "Special dance sessions created for women to enjoy fitness, choreography and confidence together.",
  },
  {
    icon: Globe, title: "Online Hip Hop", age: "Worldwide",
    description: "Join our live online dance classes from anywhere in the world with professional instructors.",
  },
];

const Classes = () => {
  return (
    <section id="classes" className="relative overflow-hidden bg-[#F9F6F0] py-28 sm:py-32">

      {/* Gold glows */}
      <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-20 h-[400px] w-[400px] rounded-full bg-[#C9A227]/4 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            <span className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A227]">Our Classes</span>
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
          </div>

          <h2 className="mt-3 text-4xl font-extrabold tracking-[-0.03em] leading-[1.08] text-gray-950 sm:text-5xl md:text-6xl">
            Discover Your
            <span className="block bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent mt-1">
              Dance Journey
            </span>
          </h2>

          <div className="mx-auto mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

          <p className="mx-auto mt-8 max-w-3xl text-base leading-[2] text-gray-800 font-medium sm:text-[1.125rem]">
            From graceful classical performances to energetic hip hop, fitness and freestyle, explore
            professionally designed programs that inspire confidence, creativity and lifelong passion for dance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {classes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-[#C9A227]/30 hover:shadow-[0_16px_50px_rgba(180,140,20,0.14),0_4px_20px_rgba(0,0,0,0.06)]"
              >
                {/* Gold top sweep */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A] transition-all duration-700 group-hover:w-full" />

                {/* Corner glow */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C9A227]/5 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col p-8">
                  {/* Icon */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#C9A227]/20 bg-[#FFF8E1] text-[#C9A227] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#C9A227] group-hover:border-transparent group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(180,140,20,0.28)]">
                    <Icon size={34} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-extrabold tracking-[-0.02em] text-gray-950 sm:text-3xl">
                    {item.title}
                  </h3>

                  {/* Age badge */}
                  <div className="mt-4 inline-flex w-fit rounded-full border border-[#C9A227]/25 bg-[#FFF8E1] px-4 py-1.5 text-sm font-bold text-[#8B6914]">
                    {item.age}
                  </div>

                  {/* Description */}
                  <p className="mt-6 flex-grow leading-[2] text-gray-700 font-medium text-[0.975rem]">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="my-7 h-px bg-gray-100" />

                  {/* CTA */}
                  <a
                    href={`https://wa.me/918825385706?text=${encodeURIComponent(`Hi! I'm interested in the ${item.title} class.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 self-start rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-7 py-3.5 font-bold text-black shadow-[0_4px_20px_rgba(180,140,20,0.18)] transition-all duration-400 hover:scale-105 hover:shadow-[0_8px_30px_rgba(180,140,20,0.38)]"
                  >
                    Enquire
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA — Warm Luxury Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 relative overflow-hidden rounded-[36px] sm:rounded-[44px] border border-[#C9A227]/25 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE4] px-6 py-14 text-center shadow-[0_15px_50px_rgba(180,140,20,0.10)]"
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[400px] rounded-full bg-[#C9A227]/8 blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
              <p className="text-xs font-bold uppercase tracking-[0.45em] text-[#C9A227]">Start Your Journey</p>
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            </div>

            <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-gray-950 sm:text-3xl md:text-5xl">
              Ready To
              <span className="block bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent mt-1">
                Dance With Us?
              </span>
            </h3>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-[2] text-gray-800 font-medium sm:text-[1.125rem]">
              Whether you're taking your very first step or looking to master your skills,
              our experienced instructors are here to guide you with passion and creativity.
            </p>

            <a
              href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20%26%20Fitness%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-10 py-4 font-bold text-black shadow-[0_6px_25px_rgba(180,140,20,0.30)] transition-all duration-400 hover:scale-105 hover:shadow-[0_10px_40px_rgba(180,140,20,0.45)]"
            >
              Book Your Free Trial
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Classes;