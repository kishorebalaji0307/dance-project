import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, LayoutGrid, Award, Info, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Studio image imports
import studio1 from "../assets/images/studio-1.jpg";
import studio2 from "../assets/images/studio-2.jpg";
import studio3 from "../assets/images/studio-3.jpg";
import studio4 from "../assets/images/studio-4.jpg";
import studio5 from "../assets/images/studio-5.jpg";

const StudioPage = () => {
  const galleryItems = [
    {
      id: "hiphop-wall",
      src: studio2,
      title: "Hip Hop Zone",
      desc: "Our creative wall featuring vibrant graffiti art that inspires energy and self-expression.",
      icon: Sparkles,
    },
    {
      id: "welcome-sign",
      src: studio3,
      title: "Welcome Foyer",
      desc: "The entrance to 5678 Studio, welcoming you to the language of the soul.",
      icon: Info,
    },
    {
      id: "photo-wall",
      src: studio4,
      title: "Hall of Fame",
      desc: "A display of memories, achievements, and the journey of our dance community.",
      icon: Award,
    },
    {
      id: "reception",
      src: studio5,
      title: "Reception Desk",
      desc: "Our front desk, ready to assist you with class schedules, registrations, and inquiries.",
      icon: Heart,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#050505] py-24 text-white">
        {/* Luxury Background Glows */}
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[180px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[180px]" />
        <div className="absolute bottom-10 left-1/3 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[180px]" />

        {/* Subtle Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Navigation */}
          <div className="mb-10">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Home
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[0.45em] font-semibold text-[#D4AF37]"
            >
              STUDIO TOUR
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl"
            >
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                Creative Space
              </span>
            </motion.h1>

            <div className="mx-auto mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400"
            >
              Take a virtual walkthrough of 5678 Dance & Fitness Studio. Every corner of our professional environment has been designed to nurture creativity, build confidence, and inspire premium dance performances.
            </motion.p>
          </div>

          {/* Prominent Featured Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-[34px] border border-[#D4AF37]/30 bg-[#0B0B0B] p-3 shadow-[0_15px_60px_rgba(212,175,55,0.15)] md:p-4">
              <div className="relative overflow-hidden rounded-[26px]">
                <img
                  src={studio1}
                  alt="Main Dance Studio Floor"
                  className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] md:h-[650px]"
                />
                {/* Visual overlays for luxury feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md">
                  <LayoutGrid size={14} />
                  Featured Space
                </div>
              </div>

              {/* Detail description card for main studio floor */}
              <div className="p-6 md:p-10">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-3xl font-black text-white md:text-4xl">
                      The Main{" "}
                      <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                        Dance Floor
                      </span>
                    </h2>
                    <p className="mt-3 max-w-2xl text-gray-400 leading-7">
                      Featuring professional LED-backlit mirror panels, high-performance sound distribution, and custom cushioned floors designed to reduce joint impact. Perfectly structured for solos, group rehearsals, and masterclasses.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-gray-300">
                      Premium Acoustics
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-gray-300">
                      LED Backlit Mirror Setup
                    </span>
                    <span className="rounded-full bg-white/5 border border-[#D4AF37]/20 px-4 py-2 text-xs font-medium text-[#D4AF37]">
                      Professional Floor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid Gallery for Other Images */}
          <div className="mt-28">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold uppercase tracking-wider text-white">
                Studio{" "}
                <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                  Highlights
                </span>
              </h3>
              <div className="mx-auto mt-4 h-[1px] w-20 bg-[#D4AF37]/40" />
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {galleryItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-[#0B0B0B] p-3 shadow-lg transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_10px_30px_rgba(212,175,55,0.05)]"
                  >
                    <div className="relative overflow-hidden rounded-[20px]">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] md:h-[380px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                      
                      {/* Floating Icon */}
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 border border-[#D4AF37]/30 text-[#D4AF37] backdrop-blur-md">
                        <IconComponent size={18} />
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-gray-400 leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default StudioPage;
