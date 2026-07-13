import { motion } from "framer-motion";
import teamImage from "../../assets/images/Team.png";

const Team = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-40 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

        <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

        <div className="absolute -right-40 top-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-[#D4AF37] font-semibold">
            The Faces of 5678
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black text-white">
            Meet Our Team
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Behind every performance is a passionate team committed to
            inspiring confidence, creativity, discipline, and excellence
            through professional dance education.
          </p>
        </motion.div>

        {/* Main Card */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl"
        >
          <div className="grid items-center lg:grid-cols-2">

            {/* Left Image */}

            <div className="relative flex items-center justify-center p-10 lg:p-16">

              {/* Gold Glow */}

              <div className="absolute h-[430px] w-[430px] rounded-full bg-[#D4AF37]/20 blur-[120px]" />

              {/* Circle */}

              <div className="absolute h-[520px] w-[520px] rounded-full border border-[#D4AF37]/20" />

              <motion.img
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.5,
                }}
                src={teamImage}
                alt="5678 Team"
                className="relative z-10 max-h-[650px] object-contain"
              />

            </div>

            {/* Right Content */}

            <div className="p-10 lg:p-16">

              <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
                Our Instructors
              </p>

              <h3 className="mt-5 text-5xl lg:text-6xl font-black text-white">
                Janani
                <span className="mx-4 text-[#D4AF37]">&</span>
                Jowi
              </h3>

              <p className="mt-5 text-xl uppercase tracking-widest text-[#D4AF37]">
                Lead Dance Instructors
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-400">
                With dedication, creativity, and years of dance experience,
                Janani and Jowi inspire every student to grow with confidence.
                Their goal is to create an energetic and welcoming environment
                where every dancer discovers their true potential.
              </p>

              {/* Skills */}

              <div className="mt-10 flex flex-wrap gap-4">

                {[
                  "Hip Hop",
                  "Bharatanatyam",
                  "Fitness",
                  "Performance",
                ].map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-6 py-3 text-[#F8E7A1] backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-[#D4AF37]/20"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Quote */}

              <div className="mt-12 border-l-4 border-[#D4AF37] pl-6">

                <p className="text-xl italic text-white leading-9">
                  "Dance is not just movement — it's confidence,
                  discipline, expression, and a way of life."
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Team;