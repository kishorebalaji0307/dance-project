import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeLinks = [
    { title: "About", href: "#about" },
    { title: "Gallery", href: "#gallery" },
    { title: "Achievements", href: "#achievements" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP INFO BAR ================= */}

      <div className="hidden lg:block bg-[#ffffff] border-b border-[#D4AF37]/20">
        <div className="mx-auto flex h-11 max-w-7xl items-center justify-between px-6">

          {/* Left */}

          <div className="flex items-center gap-8 text-sm text-black">

            <div className="flex items-center gap-2">
              <Phone
                size={15}
                className="text-[#D4AF37]"
              />
              <span>+91 88253 85706</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin
                size={15}
                className="text-[#D4AF37]"
              />
              <span>Chidambaram, Tamil Nadu</span>
            </div>

          </div>

          {/* Right */}

          <a
            href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20%26%20Fitness%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full
            bg-gradient-to-r
            from-[#B8860B]
            via-[#D4AF37]
            to-[#F5D76E]
            px-5 py-2
            text-sm
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(212,175,55,.45)]"
          >
            <MessageCircle size={16} />
            Enquire Now
          </a>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

  <header
  className="sticky top-0 z-50 w-full bg-black"
>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center"
          >
            <h1
              className={`text-3xl font-black tracking-wide transition ${
                scrolled
                  ? "text-white"
                  : "text-white"
              }`}
            >
              <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                5678
              </span>

              <span className="ml-2 text-white">
                Studio
              </span>
            </h1>
          </Link>
          {/* ================= Desktop Menu ================= */}

<nav className="hidden items-center gap-10 lg:flex">

  <Link
    to="/"
    className={`group relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
      scrolled
        ? "text-white hover:text-[#D4AF37]"
        : "text-white hover:text-[#D4AF37]"
    }`}
  >
    Home
    <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

  {location.pathname === "/" &&
    homeLinks.map((link) => (
      <a
        key={link.title}
        href={link.href}
        className={`group relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
          scrolled
            ? "text-white hover:text-[#D4AF37]"
            : "text-white hover:text-[#D4AF37]"
        }`}
      >
        {link.title}

        <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
      </a>
    ))}

  <Link
    to="/classes"
    className={`group relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
      scrolled
        ? "text-white hover:text-[#D4AF37]"
        : "text-white hover:text-[#D4AF37]"
    }`}
  >
    Classes

    <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

</nav>

{/* ================= Desktop CTA ================= */}

<div className="hidden lg:block">

  <a
    // href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20%26%20Fitness%20Studio."
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-[#D4AF37]
    bg-[#D4AF37]
    px-7 py-3
    font-semibold
    text-black
    transition-all
    duration-300
    hover:scale-105
    hover:bg-[#E6C04A]
    hover:shadow-[0_0_30px_rgba(212,175,55,.45)]"
  >
    Register Now
  </a>

</div>

{/* ================= Mobile Menu Button ================= */}

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`lg:hidden transition ${
    scrolled
      ? "text-white"
      : "text-white"
  }`}
>
  {menuOpen ? (
    <X size={30} />
  ) : (
    <Menu size={30} />
  )}
</button>

</div>
</header>
{/* ================= Mobile Menu ================= */}

<AnimatePresence>

  {menuOpen && (

    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.35 }}
      className="border-t border-[#D4AF37]/20 bg-[#050505] lg:hidden"
    >

      <div className="flex flex-col gap-6 px-6 py-8">

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold text-white transition hover:text-[#D4AF37]"
        >
          Home
        </Link>

        {location.pathname === "/" &&
          homeLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold text-white transition hover:text-[#D4AF37]"
            >
              {link.title}
            </a>
          ))}

        <Link
          to="/classes"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold text-white transition hover:text-[#D4AF37]"
        >
          Classes
        </Link>

        <div className="my-2 border-t border-[#D4AF37]/20"></div>

        <a
          href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20%26%20Fitness%20Studio."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gradient-to-r
          from-[#B8860B]
          via-[#D4AF37]
          to-[#F5D76E]
          py-3
          text-center
          font-bold
          text-black
          transition-all
          duration-300
          hover:scale-105"
        >
          ✨ Enquire Now
        </a>

      </div>

    </motion.div>

  )}

</AnimatePresence>

    </>
  );
};

export default Navbar;