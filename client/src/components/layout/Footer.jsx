import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import logo from "../../assets/images/5678logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] text-gray-400">

      {/* Gold atmospheric glows */}
      <div className="absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full bg-[#C9A227]/8 blur-[160px] pointer-events-none" />
      <div className="absolute -right-32 top-0 h-[350px] w-[350px] rounded-full bg-[#C9A227]/6 blur-[160px] pointer-events-none" />

      {/* Top gold divider */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img src={logo} alt="5678 Dance Studio" className="h-12 w-auto object-contain mb-4 drop-shadow-[0_0_8px_rgba(180,140,20,0.30)]" />
            <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white">
              <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">5678</span>
              <span className="ml-2">Studio</span>
            </h2>
            <div className="mt-4 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />
            <p className="mt-5 leading-[2] text-gray-500 text-sm">
              Inspiring every student through dance, discipline, creativity and fitness.
              Join our vibrant family and express yourself through movement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.20em] text-white">Quick Links</h3>
            <div className="mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />
            <ul className="mt-7 space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About", href: "#about" },
                { label: "Classes", to: "/classes" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link to={item.to} className="group flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#C9A227] transition-all duration-300">
                      <ChevronRight size={14} className="text-[#C9A227]/40 group-hover:text-[#C9A227] transition-transform group-hover:translate-x-1 duration-300" />
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} className="group flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#C9A227] transition-all duration-300">
                      <ChevronRight size={14} className="text-[#C9A227]/40 group-hover:text-[#C9A227] transition-transform group-hover:translate-x-1 duration-300" />
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.20em] text-white">Contact</h3>
            <div className="mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />
            <div className="mt-7 space-y-6">
              {[
                { Icon: Phone, label: "Phone", content: "+91 88253 85706" },
                {
                  Icon: MapPin, label: "Location",
                  content: <span className="leading-[2]">No.51, South Car Street,<br />Opp. Natural Salon,<br />Chidambaram.</span>
                },
                { Icon: Clock, label: "Hours", content: <span className="leading-[2]">Monday – Saturday<br />4:30 PM– 8:30 PM <br/>
                     Sunday<br/>9:00 AM – 1:00 PM</span> },
              ].map(({ Icon, label, content }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/20 bg-[#C9A227]/8">
                    <Icon size={15} className="text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-600">{label}</p>
                    <p className="mt-1.5 text-sm text-gray-300">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.20em] text-white">Follow Us</h3>
            <div className="mt-3 h-[2px] w-8 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />
            <a
              href="https://www.instagram.com/5_6_7_8_soulofdance"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-7 py-3.5 font-bold text-black text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_28px_rgba(180,140,20,0.40)]"
            >
              <FaInstagram size={17} />
              Follow on Instagram
            </a>
            <p className="mt-7 text-sm leading-[2] text-gray-500">
              Stay connected for class updates, performances, competitions, workshops and exciting dance events.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#C9A227]/12">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-xs text-gray-600 tracking-wide">
              © {new Date().getFullYear()} 5678 Dance & Fitness Studio. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]/25" />
              <span className="text-[#C9A227]/35 text-xs font-bold">5678</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]/25" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;