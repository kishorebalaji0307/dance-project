import { motion } from "framer-motion";
import { Award, Users, Dumbbell } from "lucide-react";
import aboutImg from "../../assets/images/about.png";

const features = [
  {
    icon: <Award size={30} />,
    title: "Professional Training",
    desc: "Expert mentors with structured learning.",
  },
  {
    icon: <Users size={30} />,
    title: "All Age Groups",
    desc: "Kids, Teens & Adults are welcome.",
  },
  {
    icon: <Dumbbell size={30} />,
    title: "Dance & Fitness",
    desc: "Build confidence, fitness and creativity.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0B0B0B] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-semibold">
            ABOUT THE STUDIO
          </p>

          <h2 className="text-4xl lg:text-6xl font-black leading-tight text-white">
            Where Passion
            <br />
            Meets
            <span className="text-[#D4AF37]">
              {" "}Excellence.
            </span>
          </h2>

          <div className="mt-7 h-[3px] w-24 rounded-full bg-[#D4AF37]" />
        </motion.div>

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative mt-16 overflow-hidden rounded-[36px] border border-[#D4AF37]/20"
        >

          <img
            src={aboutImg}
            alt="5678 Dance & Fitness Studio"
            className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

          {/* Floating Badge */}

          <div className="absolute bottom-8 left-8 rounded-3xl border border-[#D4AF37]/20 bg-black/60 px-7 py-5 backdrop-blur-xl">

            <h3 className="text-4xl font-black text-[#D4AF37]">
              5678
            </h3>

            <p className="mt-1 text-gray-300">
              Dance • Fitness • Passion
            </p>

          </div>

        </motion.div>

        {/* Bottom Section */}

        <div className="mt-16 grid gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <p className="text-lg leading-9 text-gray-300">

              <span className="font-semibold text-white">
                5678 Dance & Fitness Studio
              </span>{" "}
              is one of Chidambaram's premier dance academies where
              students discover confidence, discipline and creativity
              through professional dance and fitness training.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">

              From Bharatanatyam and Folk to Hip-Hop, Aerobics and
              Fitness, we nurture every learner with structured
              guidance in a positive, energetic and inspiring
              environment.

            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1"
          >

            {features.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-5 rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37]">

                  {item.icon}

                </div>

                <div>

                  <h3 className="font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;