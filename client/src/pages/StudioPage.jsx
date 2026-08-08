import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, LayoutGrid, Award, Info, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import studio1 from "../assets/images/studio-1.jpg";
import studio2 from "../assets/images/studio-2.jpg";
import studio3 from "../assets/images/studio-3.jpg";
import studio4 from "../assets/images/studio-4.jpg";
import studio5 from "../assets/images/studio-5.jpg";

const StudioPage = () => {
  const galleryItems = [
    { id: "hiphop-wall", src: studio2, title: "Hip Hop Zone", desc: "Our creative wall featuring vibrant graffiti art that inspires energy and self-expression.", icon: Sparkles },
    { id: "welcome-sign", src: studio3, title: "Welcome Foyer", desc: "The entrance to 5678 Studio, welcoming you to the language of the soul.", icon: Info },
    { id: "photo-wall", src: studio4, title: "Hall of Fame", desc: "A display of memories, achievements, and the journey of our dance community.", icon: Award },
    { id: "reception", src: studio5, title: "Reception Desk", desc: "Our front desk, ready to assist you with class schedules, registrations, and inquiries.", icon: Heart },
  ];

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-white py-28">

        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[170px] pointer-events-none" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#C9A227]/4 blur-[170px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <div className="mb-12">
            <Link to="/" className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 shadow-sm hover:border-[#C9A227]/40 hover:text-[#C9A227] hover:shadow-[0_4px_15px_rgba(180,140,20,0.12)] transition-all">
              <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
              <span className="uppercase tracking-[0.45em] font-bold text-[#C9A227] text-xs">Studio Tour</span>
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-4xl font-extrabold tracking-[-0.03em] text-gray-950 sm:text-5xl md:text-6xl">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">Creative Space</span>
            </motion.h1>

            <div className="mx-auto mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="mx-auto mt-6 max-w-3xl text-base leading-[2] text-gray-400 sm:text-lg">
              Take a virtual walkthrough of 5678 Dance & Fitness Studio. Every corner of our professional environment has been designed to nurture creativity, build confidence, and inspire premium dance performances.
            </motion.p>
          </div>

          {/* Featured */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-20">
            <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-gray-100 bg-white p-3 shadow-[0_20px_70px_rgba(0,0,0,0.09)] md:p-4">
              <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A]" />
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px]">
                <img src={studio1} alt="Main Dance Studio Floor" className="h-[220px] w-full object-cover sm:h-[360px] md:h-[500px] lg:h-[650px] transition-transform duration-700 hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  <LayoutGrid size={12} /> Featured Space
                </div>
              </div>
              <div className="p-6 md:p-10">
                <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-950 md:text-3xl">
                      The Main{" "}
                      <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">Dance Floor</span>
                    </h2>
                    <p className="mt-3 max-w-2xl text-gray-400 leading-[2] text-sm sm:text-base">
                      Featuring professional LED-backlit mirror panels, high-performance sound distribution, and custom floors designed to reduce joint impact. Perfectly structured for solos, group rehearsals, and masterclasses.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 shrink-0">
                    <span className="rounded-full bg-gray-50 border border-gray-200 px-4 py-2 text-xs font-medium text-gray-500">Premium Acoustics</span>
                    <span className="rounded-full bg-gray-50 border border-gray-200 px-4 py-2 text-xs font-medium text-gray-500">LED Mirror Setup</span>
                    <span className="rounded-full bg-[#FFF8E1] border border-[#C9A227]/25 px-4 py-2 text-xs font-medium text-[#8B6914]">Professional Floor</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="mt-28">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#C9A227] opacity-60" />
                <h3 className="text-2xl font-extrabold tracking-tight text-gray-950 sm:text-3xl">
                  Studio{" "}
                  <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">Highlights</span>
                </h3>
                <div className="h-px w-8 bg-[#C9A227] opacity-60" />
              </div>
              <div className="mx-auto mt-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {galleryItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-gray-100 bg-white p-3 shadow-[0_6px_25px_rgba(0,0,0,0.06)] transition-all duration-400 hover:border-[#C9A227]/30 hover:shadow-[0_16px_50px_rgba(180,140,20,0.12)]"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <div className="relative overflow-hidden rounded-[16px] sm:rounded-[20px]">
                      <img src={item.src} alt={item.title} className="h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-[270px] md:h-[340px]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md">
                        <Icon size={16} />
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#8B6914] transition-colors sm:text-xl">{item.title}</h4>
                      <p className="mt-2 text-sm text-gray-400 leading-[1.85]">{item.desc}</p>
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
