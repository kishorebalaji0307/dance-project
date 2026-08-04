import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  // Google Maps embed — 5678 Dance & Fitness Studio, Chidambaram
  const mapEmbedSrc =
    "https://www.google.com/maps?q=5678+Dance+%26+Fitness+Studio%2C+South+Car+Street%2C+Chidambaram%2C+Tamil+Nadu&output=embed";

  return (
    <section className="bg-[#0B0B0B] min-h-screen py-20 sm:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-sm font-semibold">
            CONTACT
          </p>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl md:text-6xl">
            Let&apos;s Connect
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            We&apos;d love to welcome you to 5678 Dance &amp; Fitness Studio.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 sm:mt-20 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* LEFT — Contact Info */}
          <div className="space-y-8 sm:space-y-10">

            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <MapPin className="text-[#D4AF37]" size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Address</h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base leading-7">
                  5678 Dance &amp; Fitness Studio
                  <br />
                  No.51, South Car Street,
                  <br />
                  Opp. Natural Salon,
                  <br />
                  Chidambaram, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Phone className="text-[#D4AF37]" size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <a
                  href="tel:+918825385706"
                  className="text-gray-400 mt-2 text-sm sm:text-base block hover:text-[#D4AF37] transition"
                >
                  +91 88253 85706
                </a>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Mail className="text-[#D4AF37]" size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <a
                  href="mailto:info@5678dance.com"
                  className="text-gray-400 mt-2 text-sm sm:text-base block hover:text-[#D4AF37] transition"
                >
                  info@5678dance.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                <Clock className="text-[#D4AF37]" size={18} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Working Hours</h3>
                <p className="text-gray-400 mt-2 text-sm sm:text-base leading-7">
                  Monday – Sunday
                  <br />
                  6:00 AM – 9:00 PM
                </p>
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://share.google/HNlnlzXzgAz8I6kaA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F5D76E] px-7 py-3.5 font-semibold text-black text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.35)] active:scale-95"
            >
              <MapPin size={16} />
              Get Directions
            </a>

          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-[20px] sm:rounded-[30px] md:rounded-[35px] border border-[#D4AF37]/20 shadow-[0_15px_50px_rgba(212,175,55,0.08)]">
            <iframe
              src={mapEmbedSrc}
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
  );
};

export default Contact;