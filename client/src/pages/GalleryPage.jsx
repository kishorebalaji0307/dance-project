import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, Image, Flame, Users, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Gallery image imports
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.png";
import gallery8 from "../assets/images/gallery-8.png";
import gallery9 from "../assets/images/gallery-9.png";

const GalleryPage = () => {
  const featuredPhoto = {
    src: gallery1,
    title: "Stage Energy",
    desc: "Captivating group performance showcasing synchronization, power, and rhythm on the grand stage.",
    badge: "Featured Event",
    icon: Flame,
  };

  const galleryItems = [
    {
      id: "studio-family",
      src: gallery2,
      title: "Studio Family",
      desc: "A group picture celebrating our team spirit, bonding, and shared passion for dance.",
      icon: Users,
    },
    {
      id: "young-champions",
      src: gallery3,
      title: "Young Champions",
      desc: "Our junior dancers posing proudly with the 5678 Language of Soul logo.",
      icon: Award,
    },
    {
      id: "anniversary-milestone",
      src: gallery4,
      title: "Anniversary Milestone",
      desc: "Celebrating a year of movement, training, and achievements at 5678 Dance & Fitness Studio.",
      icon: Calendar,
    },
    {
      id: "outdoor-vibes",
      src: gallery5,
      title: "Outdoor Sessions",
      desc: "Fun outdoor training session building fitness, coordination, and community bonding.",
      icon: Sparkles,
    },
    {
      id: "childrens-day",
      src: gallery6,
      title: "Children's Day",
      desc: "Celebrating our young stars at the Children's Day celebration with dance and joy.",
      icon: Sparkles,
    },
    {
      id: "studio-class",
      src: gallery7,
      title: "Theory & Practice Session",
      desc: "Interactive seminars and classes combining dance techniques with theory education.",
      icon: Users,
    },
    // {
    //   id: "onam-celebration",
    //   src: gallery8,
    //   title: "Onam Festivities",
    //   desc: "Beautiful flower rangoli (Pookalam) created by our students during Onam celebrations.",
    //   icon: Calendar,
    // },
    // {
    //   id: "traditional-celebrations",
    //   src: gallery9,
    //   title: "Traditional Dance Community",
    //   desc: "Our members dressing up in traditional attire for studio festivals and cultural celebrations.",
    //   icon: Award,
    // },
  ];

  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[#050505] py-24 text-white">
        {/* Luxury Background Glows */}
        <div className="absolute right-0 top-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[200px]" />
        <div className="absolute left-0 bottom-20 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[200px]" />

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
              CAPTURED MOMENTS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl"
            >
              Our{" "}
              <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                Gallery
              </span>
            </motion.h1>

            <div className="mx-auto mt-8 h-[2px] w-28 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400"
            >
              A visual journey of our celebrations, stage shows, practice sessions, and the wonderful dance community we build together every single day.
            </motion.p>
          </div>

          {/* Featured Large Stage Performance Image */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-[34px] border border-[#D4AF37]/30 bg-[#0B0B0B] p-3 shadow-[0_15px_60px_rgba(212,175,55,0.12)] md:p-4">
              <div className="relative overflow-hidden rounded-[26px]">
                <img
                  src={featuredPhoto.src}
                  alt={featuredPhoto.title}
                  className="h-[450px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] md:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] backdrop-blur-md">
                  <Image size={14} />
                  {featuredPhoto.badge}
                </div>
              </div>

              {/* Featured photo details */}
              <div className="p-6 md:p-8">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-3xl font-black text-white flex items-center gap-3">
                      <featuredPhoto.icon className="text-[#D4AF37]" size={28} />
                      <span className="bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">
                        {featuredPhoto.title}
                      </span>
                    </h2>
                    <p className="mt-3 max-w-2xl text-gray-400 leading-7">
                      {featuredPhoto.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-gray-300">
                      Synchronized Choreography
                    </span>
                    <span className="rounded-full bg-white/5 border border-[#D4AF37]/20 px-4 py-2 text-xs font-medium text-[#D4AF37]">
                      Live Performance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid Layout for Other Gallery Images */}
          <div className="mt-20">
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
                    className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-[#0B0B0B] p-3 shadow-lg transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-[0_12px_35px_rgba(212,175,55,0.06)]"
                  >
                    <div className="relative overflow-hidden rounded-[20px]">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-[400px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      
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

export default GalleryPage;
