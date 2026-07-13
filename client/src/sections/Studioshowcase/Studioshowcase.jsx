import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import studioImage from "../../assets/images/studio.jpg.png";

const features = [
  "Spacious Dance Floor",
  "Premium Mirror Setup",
  "Professional Learning Environment",
];

const StudioShowcase = () => {
  return (
    <section
      id="studio"
      className="relative overflow-hidden bg-[#0b0b0f] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.4em] text-amber-400">
            OUR STUDIO
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
            Where Every Dream Begins
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Designed to inspire confidence, creativity and performance.
            Every corner of our studio creates the perfect atmosphere
            for learning and growing through dance.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[30px]"
        >
          <img
            src={studioImage}
            alt="5678 Dance Studio"
            className="h-[700px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-10 left-10 max-w-xl rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold text-white">
              Step Into Excellence
            </h3>

            <p className="mt-5 leading-8 text-gray-200">
              Our spacious dance floor, premium mirror wall and
              comfortable learning environment are thoughtfully designed
              to help every student practice, perform and grow with
              confidence.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-white"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#D4AF37]"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

           <button
  className="
    mt-8
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-[#D4AF37]/40
    bg-white/5
    backdrop-blur-xl
    px-7
    py-4
    font-semibold
    text-[#D4AF37]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:border-[#D4AF37]
    hover:bg-[#D4AF37]/10
    hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]
  "
>
  Explore our Studio
</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioShowcase;