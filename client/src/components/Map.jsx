import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Map = () => {
  return (
    <section
      id="location"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#D4AF37] text-sm font-semibold">
            FIND US
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            Visit Our Studio
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Experience the energy of dance and fitness in our
            premium training space.
          </p>

        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">

          {/* Google Map */}

          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20">

            <iframe
              src="YOUR_GOOGLE_MAP_LINK"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              className="border-0"
            ></iframe>

          </div>

          {/* Contact */}

          <div className="rounded-3xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl p-10">

            <div className="flex gap-4">

              <MapPin className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Address
                </h3>

                <p className="text-gray-400 mt-2">
                  5678 Dance & Fitness Studio,
                  <br />
                  Chidambaram,
                  Tamil Nadu
                </p>

              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <Phone className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Contact
                </h3>

                <p className="text-gray-400 mt-2">
                  +91 XXXXX XXXXX
                </p>

              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <Clock className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Working Hours
                </h3>

                <p className="text-gray-400 mt-2">
                  Monday - Sunday
                  <br />
                  6:00 AM - 9:00 PM
                </p>

              </div>

            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-12 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black hover:scale-105 transition"
            >
              Get Directions
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Map;