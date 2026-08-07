import { motion } from "framer-motion";
import {
  Music4,
  Flower2,
  Dumbbell,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";

const classes = [
  {
    icon: Music4,
    title: "Hip Hop Freestyle",
    age: "Age 3+",
    description:
      "Energetic hip hop training for juniors,Beginners, and intermediate & Advance level ,with professional dance battle opportunities.",
  },
  {
    icon: Flower2,
    title: "Bharatanatyam",
    age: "All Ages",
    description:
      "Experience the timeless elegance of Bharatanatyam through proper techniques, expressions and discipline.",
  },
  {
    icon: Dumbbell,
    title: "Aerobics",
    age: "Women Only",
    description:
      "Fun and energetic aerobic sessions that improve strength, flexibility and overall fitness inculding diet management with beginner-friendly training from beginner to advance levels.",
  },
  {
    icon: Users,
    title: "Ladies Dance Batch",
    age: "Women",
    description:
      "Special dance sessions created for women to enjoy fitness, choreography and confidence together.",
  },
  {
    icon: Globe,
    title: "Online Hip Hop",
    age: "Worldwide",
    description:
      "Join our live online dance classes from anywhere in the world with professional instructors.",
  },
];

const Classes = () => {
  return (
    <section
      id="classes"
      className="relative overflow-hidden bg-[#050505] py-28"
    >
      {/* Luxury Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-10%] top-20 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[170px]" />

        <div className="absolute right-[-10%] bottom-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/4 blur-[220px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
            OUR CLASSES
          </p>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">

            Discover Your

            <span className="mt-2 block bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFE08A] bg-clip-text text-transparent">

              Dance Journey

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            From graceful classical performances to energetic hip hop,
            fitness and freestyle, explore professionally designed
            programs that inspire confidence, creativity and lifelong
            passion for dance.
          </p>

        </motion.div>

        {/* Premium Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {classes.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      whileHover={{ y: -10 }}
      className="
      group
      relative
      flex
      h-full
      flex-col
      overflow-hidden
      rounded-[30px]
      border
      border-[#D4AF37]/15
      bg-[#0F0F0F]/80
      backdrop-blur-2xl
      transition-all
      duration-500
      hover:border-[#D4AF37]/50
      hover:shadow-[0_0_45px_rgba(212,175,55,.18)]
      "
    >

      {/* Gold Top Line */}

      <div
        className="
        absolute
        left-0
        top-0
        h-[3px]
        w-0
        bg-gradient-to-r
        from-[#B8860B]
        via-[#D4AF37]
        to-[#FFE08A]
        transition-all
        duration-700
        group-hover:w-full
      "
      />

      {/* Glow */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-48
        w-48
        rounded-full
        bg-[#D4AF37]/5
        blur-[80px]
        opacity-0
        transition
        duration-700
        group-hover:opacity-100
      "
      />

      <div className="relative flex h-full flex-col p-8">

        {/* Icon */}

        <div
          className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-3xl
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/10
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:border-[#D4AF37]
          group-hover:bg-[#D4AF37]/15
        "
        >
          <Icon
            size={38}
            className="text-[#D4AF37]"
          />
        </div>

        {/* Title */}

        <h3 className="mt-8 text-3xl font-black text-white">
          {item.title}
        </h3>

        {/* Badge */}

        <div
          className="
          mt-4
          inline-flex
          w-fit
          rounded-full
          border
          border-[#D4AF37]/20
          bg-[#D4AF37]/10
          px-4
          py-2
          text-sm
          font-semibold
          text-[#D4AF37]
        "
        >
          {item.age}
        </div>

        {/* Description */}

        <p className="mt-6 flex-grow leading-8 text-gray-400">
          {item.description}
        </p>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />

        {/* CTA Button */}

        <a
          href={`https://wa.me/918825385706?text=${encodeURIComponent(
            `Hi! I'm interested in the ${item.title} class. I would like to know more details.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
          group/btn
          inline-flex
          items-center
          gap-3
          self-start
          rounded-full
          bg-gradient-to-r
          from-[#B8860B]
          via-[#D4AF37]
          to-[#F5D76E]
          px-7
          py-3.5
          font-semibold
          text-black
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(212,175,55,.35)]
        "
        >
          Enquire

          <ArrowRight
            size={18}
            className="
            transition-transform
            duration-300
            group-hover/btn:translate-x-1
          "
          />
        </a>

      </div>

    </motion.div>
  );
})}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-24"
        >
          <div
            className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-[#D4AF37]/20
            bg-[#0F0F0F]/80
            px-6
            py-12
            text-center
            backdrop-blur-2xl
            sm:px-8
            md:px-16
          "
          >
            {/* Background Glow */}

            <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[170px]" />

            <div className="relative z-10">

              <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                START YOUR JOURNEY
              </p>

              <h3 className="mt-5 text-2xl font-black text-white sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
                Ready To

                <span className="block bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFE08A] bg-clip-text text-transparent">
                  Dance With Us?
                </span>

              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                Whether you're taking your very first step or looking
                to master your skills, our experienced instructors are
                here to guide you with passion, creativity and
                professional training.
              </p>

              <a
                href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20%26%20Fitness%20Studio."
                target="_blank"
                rel="noopener noreferrer"
                className="
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-[#B8860B]
                via-[#D4AF37]
                to-[#F5D76E]
                px-9
                py-4
                font-semibold
                text-black
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_35px_rgba(212,175,55,.35)]
                "
              >
                Book Your Free Trial

                <ArrowRight size={20} />

              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Classes;