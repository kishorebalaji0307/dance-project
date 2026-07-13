import {
  Phone,
  MapPin,
  Clock,
  Heart,
  ChevronRight,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] text-gray-300">

      {/* Gold Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Studio Info */}

          <div>

            <h2 className="text-4xl font-black tracking-wide">

              <span className="bg-gradient-to-r from-[#8f6b00] via-[#D4AF37] to-[#F7DD7D] bg-clip-text text-transparent">
                5678
              </span>

              <span className="ml-2 text-white">
                Studio
              </span>

            </h2>

            <div className="mt-5 h-[2px] w-20 rounded-full bg-[#D4AF37]" />

            <p className="mt-6 leading-8 text-gray-500">

              Inspiring every student through dance,
              discipline, creativity and fitness.

              Join our vibrant family and express yourself
              through movement.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-[2px] w-12 rounded-full bg-[#D4AF37]" />

            <ul className="mt-8 space-y-4">

              {[
                "Home",
                "About",
                "Classes",
                "Gallery",
                "Achievements",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-3 text-gray-400 transition hover:text-[#D4AF37]"
                  >

                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </div>
                    {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-3 h-[2px] w-12 rounded-full bg-[#D4AF37]" />

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                  <Phone size={18} className="text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="mt-1 text-white">
                    +91 88253 85706
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                  <MapPin size={18} className="text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>

                  <p className="mt-1 leading-7 text-white">
                    No.51, South Car Street,
                    <br />
                    Opp. Natural Salon,
                    <br />
                    Chidambaram.
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                  <Clock size={18} className="text-[#D4AF37]" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Working Hours</p>

                  <p className="mt-1 text-white">
                    Mon – Sun : 6:00 AM – 9:00 PM
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Follow Us
            </h3>

            <div className="mt-3 h-[2px] w-12 rounded-full bg-[#D4AF37]" />

            <a
              href="https://www.instagram.com/5_6_7_8_soulofdance"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-[#e8c75d] shadow-[0_10px_30px_rgba(212,175,55,.35)]"
            >
              <FaInstagram size={22} />
              Follow on Instagram
            </a>

            <p className="mt-8 leading-8 text-gray-500">
              Stay connected for class updates,
              performances, competitions,
              workshops and exciting dance events.
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-[#D4AF37]/20 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} 5678 Dance & Fitness Studio.
              All Rights Reserved.
            </p>

            {/* <p className="flex items-center gap-2 text-sm text-gray-500">

              Designed with

              <Heart
                size={16}
                className="fill-[#D4AF37] text-[#D4AF37]"
              /> */}

              {/* <span className="font-semibold text-[#D4AF37]">
                by Kishore Balaji
              </span> */}

            {/* </p> */}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;