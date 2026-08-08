import { MapPin, Phone, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=5678+Dance+%26+Fitness+Studio%2C+South+Car+Street%2C+Chidambaram%2C+Tamil+Nadu&output=embed";

const HomeContact = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Subtle glow */}
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-[#C9A227]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            <p className="uppercase tracking-[0.40em] text-[#C9A227] text-xs font-bold">Find Us</p>
            <div className="h-px w-8 bg-[#C9A227] opacity-60" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-gray-950 sm:text-4xl md:text-5xl">
            Visit Our Studio
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-[2]">
            Step into a place where passion meets performance.
            Experience premium dance and fitness training.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.09),0_0_30px_rgba(180,140,20,0.06)]"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-transparent" />
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
            className="relative rounded-[22px] sm:rounded-[28px] border border-gray-100 bg-white p-7 sm:p-9 shadow-[0_15px_45px_rgba(0,0,0,0.07)]"
          >
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[22px] sm:rounded-t-[28px] bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-transparent opacity-60" />

            {[
              {
                Icon: MapPin, label: "Studio Address",
                content: (
                  <p className="text-gray-400 mt-2 text-sm leading-[2]">
                    5678 Dance &amp; Fitness Studio<br />
                    No.51, South Car Street,<br />
                    Opp. Natural Salon,<br />
                    Chidambaram, Tamil Nadu
                  </p>
                ),
              },
              {
                Icon: Phone, label: "Contact",
                content: (
                  <a href="tel:+918825385706" className="text-gray-400 mt-2 text-sm block hover:text-[#C9A227] transition-colors duration-300">
                    +91 88253 85706
                  </a>
                ),
              },
              {
                Icon: Clock, label: "Working Hours",
                content: (
                  <p className="text-gray-400 mt-2 text-sm leading-[2]">
                    Monday – Sunday<br />6:00 AM – 9:00 PM
                  </p>
                ),
              },
            ].map(({ Icon, label, content }, i) => (
              <div key={i} className={`flex items-start gap-4 ${i > 0 ? "mt-8" : ""}`}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/22 bg-[#FFF8E1] shadow-sm">
                  <Icon className="text-[#C9A227]" size={17} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-sm sm:text-base">{label}</h3>
                  {content}
                </div>
              </div>
            ))}

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-6 py-3.5 font-bold text-black text-sm shadow-[0_4px_20px_rgba(180,140,20,0.20)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(180,140,20,0.38)]"
              >
                Contact Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://share.google/HNlnlzXzgAz8I6kaA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/25 bg-[#FFF8E1] px-6 py-3.5 font-semibold text-[#8B6914] text-sm transition-all duration-300 hover:border-[#C9A227]/55 hover:bg-[#C9A227] hover:text-black"
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