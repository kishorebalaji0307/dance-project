import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm">
            FIND US
          </p>

          <h2 className="mt-5 text-5xl font-black text-white">
            Visit Our Studio
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Step into a place where passion meets performance.
            Experience premium dance and fitness training.
          </p>

        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          {/* MAP */}

          <div className="overflow-hidden rounded-[30px] border border-[#D4AF37]/20">

            <iframe
              src="YOUR_GOOGLE_EMBED_LINK"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

          {/* DETAILS */}

          <div className="rounded-[30px] border border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl p-10">

            <div className="flex items-start gap-4">

              <MapPin className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Studio Address
                </h3>

                <p className="text-gray-400 mt-2">
                  5678 Dance & Fitness Studio
                  <br />
                  Chidambaram,
                  Tamil Nadu
                </p>

              </div>

            </div>

            <div className="mt-8 flex items-start gap-4">

              <Phone className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Contact
                </h3>

                <p className="text-gray-400 mt-2">
                  +91 88253 85706
                </p>

              </div>

            </div>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeContact;