import { useEffect, useState } from "react";
import logo from "../../assets/images/5678logo.png";
import {
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeLinks = [
    { title: "About", href: "#about" },
    // { title: "Achievements", href: "#achievements" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP INFO BAR ================= */}
{/* import { FaInstagram, FaFacebookF } from "react-icons/fa"; */}

<div className="hidden border-b border-[#D4AF37]/20 bg-[#0B0B0B] lg:block">

  <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6">

    {/* Left */}

    <a
      href="https://wa.me/918825385706?text=Hi%20I'm%20interested%20in%20joining%205678%20Dance%20%26%20Fitness%20Studio."
      target="_blank"
      rel="noopener noreferrer"
      className="
      flex
      items-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-[#B8860B]
      via-[#D4AF37]
      to-[#F5D76E]
      px-5
      py-2
      text-sm
      font-semibold
      text-black
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_0_25px_rgba(212,175,55,.45)]
      "
    >
      <MessageCircle size={16} />
      Enquire Now
    </a>

    {/* Right */}

    <div className="flex items-center gap-6 text-sm text-gray-300">

      <div className="flex items-center gap-2 transition hover:text-white">
        <Phone
          size={15}
          className="text-[#D4AF37]"
        />
        <span>+91 88253 85706</span>
      </div>

      <div className="flex items-center gap-2 transition hover:text-white">
        <MapPin
          size={15}
          className="text-[#D4AF37]"
        />
        <span>Chidambaram</span>
      </div>

      {/* Instagram */}

      <a
        href="https://www.instagram.com/5_6_7_8_soulofdance"
        target="_blank"
        rel="noopener noreferrer"
        className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-[#D4AF37]/20
        text-[#D4AF37]
        transition-all
        duration-300
        hover:border-[#D4AF37]
        hover:bg-[#D4AF37]/10
        hover:shadow-[0_0_20px_rgba(212,175,55,.25)]
        "
      >
        <FaInstagram size={15} />
      </a>

      {/* Facebook */}

      <a
        href="https://facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-[#D4AF37]/20
        text-[#D4AF37]
        transition-all
        duration-300
        hover:border-[#D4AF37]
        hover:bg-[#D4AF37]/10
        hover:shadow-[0_0_20px_rgba(212,175,55,.25)]
        "
      >
        <FaFacebookF size={14} />
      </a>

    </div>

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
            className="flex items-center gap-3"
          >
            {/* Logo image */}
          <img
  src={logo}
  alt="5678 Dance & Fitness Studio Logo"
 className="h-20 w-auto object-contain
  drop-shadow-[0_0_12px_rgba(212,175,55,0.45)]
  transition-all duration-300
  hover:scale-105
  hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.75)]"
/>

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
    to="/gallery"
    className={`group relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
      scrolled
        ? "text-white hover:text-[#D4AF37]"
        : "text-white hover:text-[#D4AF37]"
    }`}
  >
    Gallery

    <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
  </Link>

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

  {user && (
    <Link
      to="/dashboard"
      className={`group relative text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
        scrolled
          ? "text-[#D4AF37] hover:text-white"
          : "text-[#D4AF37] hover:text-white"
      }`}
    >
      Dashboard

      <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )}

</nav>

{/* ================= Desktop CTA ================= */}

<div className="hidden lg:block">
  {user ? (
    <div className="flex items-center gap-4">
      <span className="text-sm font-bold text-gray-300">
        Hi, <span className="text-[#D4AF37]">{user.username}</span>
      </span>
      <button
        onClick={logout}
        className="rounded-full border border-red-500/30 bg-red-500/5 px-6 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500 hover:text-white transition duration-300 cursor-pointer"
      >
        Logout
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-6">
      <Link
        to="/login"
        className="text-sm font-semibold text-gray-300 hover:text-[#D4AF37] transition"
      >
        Login
      </Link>
      <Link
        to="/register"
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
      </Link>
    </div>
  )}
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
          to="/gallery"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold text-white transition hover:text-[#D4AF37]"
        >
          Gallery
        </Link>

        <Link
          to="/classes"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-semibold text-white transition hover:text-[#D4AF37]"
        >
          Classes
        </Link>

        <div className="my-2 border-t border-[#D4AF37]/20"></div>

        {user ? (
          <>
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-bold text-[#D4AF37] transition hover:text-white"
            >
              ✨ My Dashboard ({user.username})
            </Link>
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="rounded-full bg-red-500/10 border border-red-500/20 py-3 text-center font-bold text-red-400 transition hover:bg-red-500 hover:text-white cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-white/10 bg-white/5 py-3 text-center font-bold text-white transition hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] py-3 text-center font-bold text-black transition hover:scale-[1.02]"
            >
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