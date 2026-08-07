import { motion } from "framer-motion";
import teamImage from "../../assets/images/Team.png";

const Team = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-gradient-to-b from-[#08080C] via-[#050505] to-[#0A0A0A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-40 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />
        <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
        <div className="absolute -right-40 top-0 h-[300px] w-[300px] rounded-full bg-[#D4AF37]/5 blur-[150px]" />
        
        {/* Soft purple depth glow */}
        <div className="absolute right-[10%] bottom-[15%] h-[450px] w-[450px] rounded-full bg-[#6B46C1]/4 blur-[160px] pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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

          <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Meet Our Team
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 lg:text-lg lg:leading-8">
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
          className="mt-20 overflow-hidden rounded-[40px] border border-white/[0.08] bg-[#0C0C0C]/40 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.55)] hover:border-[#D4AF37]/20 transition-colors duration-500"
        >
          <div className="grid items-center lg:grid-cols-2">

            {/* Left Image */}

            <div className="relative flex items-center justify-center p-10 lg:p-16">

              {/* Gold Glow — hidden on very small screens */}
              <div className="hidden sm:block absolute h-[280px] w-[280px] rounded-full bg-[#D4AF37]/20 blur-[80px] sm:h-[380px] sm:w-[380px] sm:blur-[120px]" />

              {/* Decorative Circle — hidden on mobile */}
              <div className="hidden sm:block absolute h-[350px] w-[350px] rounded-full border border-[#D4AF37]/20 sm:h-[450px] sm:w-[450px] lg:h-[520px] lg:w-[520px]" />

              <motion.img
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.5,
                }}
                src={teamImage}
                alt="5678 Team"
                className="relative z-10 w-full max-w-[260px] object-contain sm:max-w-[380px] lg:max-h-[500px] lg:max-w-none"
              />

            </div>

            {/* Right Content */}

            <div className="p-6 sm:p-10 lg:p-16">

              <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
                Our Instructors
              </p>

              <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:gap-10 sm:items-start lg:gap-12">
                <div>
                  <h3 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                    Sri Janani
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold sm:text-sm">
                    Co-founder & Instructor
                  </p>
                </div>

                <div className="hidden sm:block h-12 w-px bg-white/[0.08] self-center" />

                <div>
                  <h3 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                    Jowi
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold sm:text-sm">
                    Instructor
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-gray-400 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
                With dedication, creativity, and years of dance experience,
                Sri Janani and Jowi inspire every student to grow with confidence.
                Their goal is to create an energetic and welcoming environment
                where every dancer discovers their true potential.
              </p>

              {/* Skills */}

              <div className="mt-10 flex flex-wrap gap-4">

                {[
                  "Hip Hop",
                  "Aerobics & Fitness",
                  "Bharatanatyam",
                  "Performance Training",
                  "Events Choreography",
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