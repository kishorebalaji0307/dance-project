import { useEffect, useState } from "react";
import logo from "../../assets/images/5678logo.png";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeLinks = [
    { title: "About", href: "#about" },
    { title: "Contact", href: "/contact" },
  ];

  const navLink =
    "group relative text-[11px] font-bold uppercase tracking-[0.14em] text-gray-700 hover:text-[#C9A227] transition-all duration-300";
  const underline =
    "absolute -bottom-[3px] left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#B8860B] to-[#D4AF37] transition-all duration-300 group-hover:w-full";

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="hidden border-b border-gray-100 bg-[#FAFAF7] lg:block">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">
          <a
            href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20%26%20Fitness%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A] px-5 py-1.5 text-[11px] font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_18px_rgba(180,140,20,0.35)]"
          >
            <MessageCircle size={13} />
            Enquire Now
          </a>
          <div className="flex items-center gap-5 text-xs text-gray-500">
            <div className="flex items-center gap-1.5 hover:text-gray-800 transition-colors">
              <Phone size={12} className="text-[#C9A227]" />
              <span>+91 88253 85706</span>
            </div>
            <div className="flex items-center gap-1.5 hover:text-gray-800 transition-colors">
              <MapPin size={12} className="text-[#C9A227]" />
              <span>Chidambaram</span>
            </div>
            <div className="flex items-center gap-2">
              {[
                { href: "https://www.instagram.com/5_6_7_8_soulofdance", Icon: FaInstagram, size: 13 },
                { href: "https://facebook.com/", Icon: FaFacebookF, size: 12 },
              ].map(({ href, Icon, size }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227] hover:text-white hover:border-[#C9A227] transition-all duration-300"
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/97 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] border-b border-gray-100"
            : "bg-white/90 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="5678 Dance & Fitness Studio Logo"
              className="h-14 w-auto object-contain sm:h-16 lg:h-20 transition-all duration-300 hover:scale-105"
            />
            <span className="hidden sm:block text-base sm:text-lg font-extrabold tracking-[-0.02em]">
              <span className="bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">
                5678
              </span>
              <span className="ml-2 text-gray-900">Dance & Fitness</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-9 lg:flex">
            <Link to="/" className={navLink}>Home<span className={underline} /></Link>
            {location.pathname === "/" && homeLinks.map((l) => (
              <a key={l.title} href={l.href} className={navLink}>{l.title}<span className={underline} /></a>
            ))}
            <Link to="/gallery" className={navLink}>Gallery<span className={underline} /></Link>
            <Link to="/classes" className={navLink}>Classes<span className={underline} /></Link>
            {user && (
              <Link to="/dashboard" className="group relative text-[11px] font-bold uppercase tracking-[0.14em] text-[#C9A227] hover:text-[#B8860B] transition-all duration-300">
                Dashboard<span className={underline} />
              </Link>
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-500">
                  Hi, <span className="text-[#C9A227] font-bold">{user.username}</span>
                </span>
                <button
                  onClick={logout}
                  className="rounded-full border border-red-300 bg-red-50 px-6 py-2 text-xs font-bold text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 cursor-pointer"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <Link to="/login" className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-600 hover:text-[#C9A227] transition-colors duration-300">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="rounded-full bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A] px-7 py-2.5 text-[11px] font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_24px_rgba(180,140,20,0.35)]"
                >
                  Register Now
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-gray-700 hover:text-[#C9A227] transition-colors">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sticky top-20 z-40 border-t border-gray-100 bg-white/98 backdrop-blur-2xl lg:hidden shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
          >
            <div className="flex flex-col px-6 py-6 gap-0">
              {[
                { label: "Home", to: "/" },
                ...(location.pathname === "/" ? homeLinks.map((l) => ({ label: l.title, href: l.href })) : []),
                { label: "Gallery", to: "/gallery" },
                { label: "Classes", to: "/classes" },
              ].map((item, i) => (
                <div key={i}>
                  {item.to ? (
                    <Link to={item.to} onClick={() => setMenuOpen(false)}
                      className="block py-4 text-sm font-bold text-gray-800 hover:text-[#C9A227] transition-colors border-b border-gray-50">
                      {item.label}
                    </Link>
                  ) : (
                    <a href={item.href} onClick={() => setMenuOpen(false)}
                      className="block py-4 text-sm font-bold text-gray-800 hover:text-[#C9A227] transition-colors border-b border-gray-50">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}

              <div className="my-3 border-t border-gray-100" />

              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)}
                    className="py-4 text-sm font-bold text-[#C9A227] border-b border-gray-50">
                    ✨ Dashboard ({user.username})
                  </Link>
                  <button onClick={() => { logout(); setMenuOpen(false); }}
                    className="mt-4 rounded-full bg-red-50 border border-red-200 py-3.5 text-center font-bold text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer">
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-3 mt-2">
                  <Link to="/login" onClick={() => setMenuOpen(false)}
                    className="rounded-full border border-gray-200 bg-gray-50 py-3.5 text-center font-bold text-gray-700 hover:border-[#C9A227]/40 hover:bg-[#FFF8E1] transition-all">
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setMenuOpen(false)}
                    className="rounded-full bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-[#E8C94A] py-3.5 text-center font-bold text-black hover:shadow-[0_6px_20px_rgba(180,140,20,0.35)] transition-all">
                    Register Now
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;