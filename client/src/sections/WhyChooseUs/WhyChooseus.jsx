import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  HeartHandshake,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: GraduationCap,
    title: "Professional Training",
    description:
      "Structured dance programs designed to build confidence, technique and creativity through professional guidance.",
  },
  {
    number: "02",
    icon: Trophy,
    title: "Competitions & Events",
    description:
      "Regular performances, competitions and workshops help students gain stage confidence.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Positive Environment",
    description:
      "A friendly, disciplined and motivating atmosphere where every student feels encouraged.",
  },
  {
    number: "04",
    icon: Users,
    title: "For All Ages",
    description:
      "Special batches for Kids, Women, Beginners and Advanced dancers with personalized attention.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#050505] py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
        
        {/* Soft purple depth glow */}
        <div className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[#6B46C1]/3 blur-[150px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-2 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            More Than Just
            <span className="block bg-gradient-to-r from-[#8c6b00] via-[#D4AF37] to-[#f7dd7d] bg-clip-text text-transparent">
              A Dance Studio
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            We inspire confidence, creativity and discipline through
            professional dance education in a positive learning environment.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                }}
                className="group relative overflow-hidden rounded-[30px]
                border border-white/[0.06]
                bg-gradient-to-b
                from-white/[0.03]
                to-white/[0.01]
                p-8
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[#D4AF37]/50
                hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]"
              >
                {/* Background Number */}

                <span
                  className="absolute right-6 top-2 text-8xl font-black
                  text-[#D4AF37]/10 select-none"
                >
                  {feature.number}
                </span>

                {/* Glow */}

                <div
                  className="absolute -right-16 -top-16 h-48 w-48
                  rounded-full bg-[#D4AF37]/10 blur-3xl
                  opacity-0 transition duration-500
                  group-hover:opacity-100"
                />

                {/* Icon */}

                <div
                  className="relative flex h-20 w-20 items-center
                  justify-center rounded-full
                  border border-[#D4AF37]/30
                  bg-[#D4AF37]/10
                  transition duration-500
                  group-hover:bg-[#D4AF37]
                  group-hover:rotate-6"
                >
                  <Icon
                    size={36}
                    className="text-[#D4AF37] transition group-hover:text-black"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <div className="mt-4 h-[2px] w-14 rounded-full bg-[#D4AF37]" />

                {/* Description */}

                <p className="mt-6 leading-8 text-gray-400">
                  {feature.description}
                </p>

                {/* Button */}

                {/* <button
                  className="mt-10 flex items-center gap-3
                  font-semibold text-[#D4AF37]
                  transition duration-300
                  group-hover:translate-x-2"
                >
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-2"
                  />
                </button> */}

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-24 rounded-[35px]
          border border-[#D4AF37]/25
          bg-gradient-to-r
          from-[#0C0C0C]
          via-[#141217]
          to-[#0C0C0C]
          p-12 text-center shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
            OUR PROMISE
          </p>

          <h3 className="mt-6 text-4xl font-black text-white">
            Every Step Creates
            <span className="block text-[#D4AF37]">
              A Better Dancer
            </span>
          </h3>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            Our mission is to help every student discover confidence,
            discipline and creativity through professional dance education,
            inspiring performances and unforgettable experiences.
          </p>

          <button
            className="mt-10 rounded-full
            bg-[#D4AF37]
            px-8 py-4
            font-semibold
            text-black
            transition
            duration-300
            hover:scale-105
            hover:bg-[#e7c85b]"
          >
            Join Our Family
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;