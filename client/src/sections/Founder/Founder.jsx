import { motion } from "framer-motion";
import founder from "../../assets/images/founder.png";

const Founder = () => {
  return (
    <section id="founder" className="relative overflow-hidden bg-white py-28 sm:py-32">

      {/* Subtle tint */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[160px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#C9A227]/4 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:gap-24 lg:grid-cols-2 lg:px-8">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Soft glow behind image */}
            <div className="absolute inset-0 rounded-[40px] bg-[#C9A227]/12 blur-3xl scale-90" />
            {/* Decorative ring */}
            <div className="hidden sm:block absolute -inset-3 rounded-[44px] border border-[#C9A227]/15 pointer-events-none" />

            <img
              src={founder}
              alt="Mrs. Chitra — Founder"
              className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[480px] rounded-[28px] sm:rounded-[36px] object-contain shadow-[0_20px_60px_rgba(0,0,0,0.12),0_0_0_1.5px_rgba(180,140,20,0.20)]"
            />

            {/* Floating label */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.10)]">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C9A227]">Founder</p>
              <p className="mt-0.5 text-xs text-gray-400">5678 Dance Studio</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            <p className="uppercase tracking-[0.40em] font-bold text-[#C9A227] text-xs">The Heart Behind 5678</p>
          </div>

          <h2 className="text-5xl font-extrabold tracking-[-0.03em] leading-[1.05] text-gray-950 sm:text-6xl md:text-7xl">
            Mrs. Chitra
          </h2>

          <p className="mt-4 text-sm uppercase tracking-[0.20em] text-[#C9A227] font-bold">Founder of 5678</p>

          <div className="mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

          {/* Quote */}
          <blockquote className="mt-8 relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#B8860B] to-[#C9A227]" />
            <p className="text-lg italic leading-[1.85] text-gray-600 sm:text-xl">
              "Every great dancer begins with one step. Our mission is to inspire every student
              to find their rhythm, build confidence and express themselves through dance."
            </p>
          </blockquote>

          <p className="mt-7 text-base leading-[2] text-gray-500 sm:text-lg">
            At 5678 Dance & Fitness Studio, we believe dance is more than movement—it is confidence,
            discipline, creativity and self-expression. Our mission is to inspire every student with
            quality training in a positive and energetic environment.
          </p>

          {/* Stats */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[
              { value: "500+", label: "Students Trained" },
              { value: "4+", label: "Years of Excellence" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all hover:border-[#C9A227]/30 hover:shadow-[0_10px_35px_rgba(180,140,20,0.12)] overflow-hidden cursor-default"
              >
                {/* Gold top border hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <h3 className="text-4xl font-extrabold tracking-tight text-gray-950">{stat.value}</h3>
                <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />
                <p className="mt-3 text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Founder;