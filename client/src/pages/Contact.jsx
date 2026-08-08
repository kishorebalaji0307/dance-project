import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Contact = () => {
  const mapSrc = "https://www.google.com/maps?q=5678+Dance+%26+Fitness+Studio%2C+South+Car+Street%2C+Chidambaram%2C+Tamil+Nadu&output=embed";

  const items = [
    { Icon: MapPin, title: "Address", content: <p className="text-gray-400 mt-2 text-sm sm:text-base leading-[2]">5678 Dance &amp; Fitness Studio<br />No.51, South Car Street,<br />Opp. Natural Salon,<br />Chidambaram, Tamil Nadu</p> },
    { Icon: Phone, title: "Phone", content: <a href="tel:+918825385706" className="text-gray-400 mt-2 text-sm block hover:text-[#C9A227] transition-colors">+91 88253 85706</a> },
    { Icon: Mail, title: "Email", content: <a href="mailto:info@5678dance.com" className="text-gray-400 mt-2 text-sm block hover:text-[#C9A227] transition-colors">info@5678dance.com</a> },
    { Icon: Clock, title: "Working Hours", content: <p className="text-gray-400 mt-2 text-sm leading-[2]">Monday – Sunday<br />6:00 AM – 9:00 PM</p> },
  ];

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-white min-h-screen py-28 sm:py-36">
        {/* Gold tint */}
        <div className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-[#C9A227]/5 blur-[160px] pointer-events-none" />
        <div className="absolute right-0 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[#C9A227]/4 blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
              <p className="uppercase tracking-[0.40em] text-[#C9A227] text-xs font-bold">Contact</p>
              <div className="h-px w-8 bg-[#C9A227] opacity-60" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-[-0.03em] text-gray-950 sm:text-5xl md:text-6xl">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] bg-clip-text text-transparent">Connect</span>
            </h1>
            <div className="mx-auto mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#B8860B] to-[#C9A227]" />
            <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-[2]">
              We'd love to welcome you to 5678 Dance &amp; Fitness Studio.
            </p>
          </div>

          {/* Grid */}
          <div className="mt-16 sm:mt-20 grid gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Contact Info */}
            <div className="space-y-7">
              {items.map(({ Icon, title, content }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/22 bg-[#FFF8E1] shadow-sm">
                    <Icon className="text-[#C9A227]" size={17} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-semibold">{title}</h3>
                    {content}
                  </div>
                </div>
              ))}

              <a
                href="https://share.google/HNlnlzXzgAz8I6kaA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B6914] via-[#C9A227] to-[#E8C94A] px-7 py-3.5 font-bold text-black text-sm shadow-[0_4px_20px_rgba(180,140,20,0.22)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(180,140,20,0.38)]"
              >
                <MapPin size={15} />
                Get Directions
              </a>
            </div>

            {/* Map */}
            <div className="relative overflow-hidden rounded-[22px] sm:rounded-[30px] border border-gray-100 shadow-[0_15px_50px_rgba(0,0,0,0.09),0_0_30px_rgba(180,140,20,0.06)]">
              <div className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-gradient-to-r from-[#B8860B] via-[#C9A227] to-transparent" />
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen=""
                className="border-0 min-h-[300px] w-full sm:min-h-[420px] lg:min-h-[500px]"
                style={{ minHeight: "320px" }}
                title="5678 Dance & Fitness Studio Location"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;