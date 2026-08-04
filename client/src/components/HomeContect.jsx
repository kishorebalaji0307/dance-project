import { MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Google Maps embed for 5678 Dance & Fitness Studio, Chidambaram
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=5678+Dance+%26+Fitness+Studio%2C+South+Car+Street%2C+Chidambaram%2C+Tamil+Nadu&output=embed";

const HomeContact = () => {
  return (
    <section className="bg-[#0B0B0B] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-semibold">
            FIND US
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Visit Our Studio
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Step into a place where passion meets performance.
            Experience premium dance and fitness training.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[30px] border border-[#D4AF37]/20 shadow-[0_15px_50px_rgba(212,175,55,0.08)]"
          >
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full"
              style={{ minHeight: "280px", height: "100%", display: "block" }}
              title="5678 Dance & Fitness Studio on Google Maps"
            />
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[20px] sm:rounded-[28px] md:rounded-[30px] border border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10"
          >

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <MapPin className="text-[#D4AF37]" size={16} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Studio Address</h3>
                <p className="text-gray-400 mt-2 text-sm leading-7">
                  5678 Dance &amp; Fitness Studio
                  <br />
                  No.51, South Car Street,
                  <br />
                  Opp. Natural Salon,
                  <br />
                  Chidambaram, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Phone className="text-[#D4AF37]" size={16} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Contact</h3>
                <a
                  href="tel:+918825385706"
                  className="text-gray-400 mt-2 text-sm block hover:text-[#D4AF37] transition"
                >
                  +91 88253 85706
                </a>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Clock className="text-[#D4AF37]" size={16} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Working Hours</h3>
                <p className="text-gray-400 mt-2 text-sm leading-7">
                  Monday – Sunday
                  <br />
                  6:00 AM – 9:00 PM
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-6 py-3.5 font-semibold text-black text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,.35)]"
              >
                Contact Us
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <a
                href="https://share.google/HNlnlzXzgAz8I6kaA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-3.5 font-semibold text-[#D4AF37] text-sm transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/20"
              >
                <MapPin size={15} />
                Get Directions
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default HomeContact;