import { motion } from "framer-motion";
import teamImage from "../../assets/images/Team.png";

const Team = () => {
  return (
    <section id="team" className="relative overflow-hidden bg-[#F9F6F0] py-28 sm:py-32">

      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#C9A227]/6 blur-[180px] pointer-events-none" />

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
            <span className="uppercase tracking-[0.40em] text-[#C9A227] font-bold text-xs">The Faces of 5678</span>
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-[-0.03em] text-gray-950 sm:text-5xl md:text-6xl">
            Meet Our Team
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

          <p className="mx-auto mt-7 max-w-3xl text-sm leading-[2] text-gray-500 sm:text-base lg:text-lg">
            Behind every performance is a passionate team committed to inspiring confidence,
            creativity, discipline, and excellence through professional dance education.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 overflow-hidden rounded-[36px] sm:rounded-[44px] border border-gray-100 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.09),0_0_40px_rgba(180,140,20,0.06)] transition-all duration-700 hover:shadow-[0_30px_90px_rgba(0,0,0,0.12),0_0_50px_rgba(180,140,20,0.10)] relative"
        >
          {/* Gold top accent */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

          <div className="grid items-center lg:grid-cols-2">

            {/* Left Image */}
            <div className="relative flex items-center justify-center p-10 lg:p-16 bg-[#FAFAF5]">
              {/* Glow */}
              <div className="hidden sm:block absolute h-[320px] w-[320px] rounded-full bg-[#C9A227]/12 blur-[90px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]" />
              {/* Decorative rings */}
              <div className="hidden sm:block absolute h-[340px] w-[340px] rounded-full border border-[#C9A227]/15 sm:h-[440px] sm:w-[440px] lg:h-[510px] lg:w-[510px]" />
              <div className="hidden sm:block absolute h-[260px] w-[260px] rounded-full border border-[#C9A227]/08 sm:h-[350px] sm:w-[350px] lg:h-[410px] lg:w-[410px]" />

              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                src={teamImage}
                alt="5678 Team"
                className="relative z-10 w-full max-w-[260px] object-contain sm:max-w-[380px] lg:max-h-[500px] lg:max-w-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
              />
            </div>

            {/* Right Content */}
            <div className="p-7 sm:p-10 lg:p-14 border-t border-gray-100 lg:border-t-0 lg:border-l lg:border-gray-100">

              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-6 bg-[#C9A227] opacity-60" />
                <p className="uppercase tracking-[0.35em] text-[#C9A227] text-xs font-bold">Our Instructors</p>
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:gap-10 sm:items-start lg:gap-12">
                <div>
                  <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-gray-950 sm:text-3xl lg:text-4xl">Sri Janani</h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#C9A227] font-bold sm:text-sm">Co-founder & Instructor</p>
                </div>
                <div className="hidden sm:block h-12 w-px bg-gray-100 self-center" />
                <div>
                  <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-gray-950 sm:text-3xl lg:text-4xl">Jowi</h3>
                  <p className="mt-2 text-xs uppercase tracking-widest text-[#C9A227] font-bold sm:text-sm">Instructor</p>
                </div>
              </div>

              <p className="mt-7 text-sm leading-[2] text-gray-500 sm:text-base lg:text-[1.0625rem]">
                With dedication, creativity, and years of dance experience, Sri Janani and Jowi
                inspire every student to grow with confidence. Their goal is to create an energetic
                and welcoming environment where every dancer discovers their true potential.
              </p>

              {/* Skill Tags */}
              <div className="mt-9 flex flex-wrap gap-2.5">
                {["Hip Hop", "Aerobics & Fitness", "Bharatanatyam", "Performance Training", "Events Choreography"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#C9A227]/25 bg-[#FFF8E1] px-5 py-2 text-sm font-semibold text-[#8B6914] transition-all duration-300 hover:border-[#C9A227]/60 hover:bg-[#C9A227] hover:text-black cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-10 relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#B8860B] to-[#C9A227]" />
                <p className="text-lg italic text-gray-600 leading-[1.85]">
                  "Dance is not just movement — it's confidence, discipline, expression, and a way of life."
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