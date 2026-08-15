import { Sparkles, Star, Award, Flame, Zap, Heart } from "lucide-react";

const marqueeItems = [
  { text: "FREESTYLE HIP HOP", icon: Sparkles, highlight: true },
  { text: "BHARATANATYAM", icon: Star, highlight: false },
  { text: "WESTERN DANCE", icon: Flame, highlight: true },
  { text: "AEROBICS & FITNESS", icon: Zap, highlight: false },
  { text: "5678 LANGUAGE OF SOUL", icon: Award, highlight: true },
  { text: "STAGE PERFORMANCES", icon: Star, highlight: false },
  { text: "CHOREOGRAPHY", icon: Sparkles, highlight: true },
  { text: "ZUMBA & CARDIO", icon: Heart, highlight: false },
  { text: "MASTERCLASSES", icon: Flame, highlight: true },
];

const Marquee = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-gradient-to-r from-black via-[#0D0D0D] to-black py-5 sm:py-6 border-y border-[#D4AF37]/25 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      {/* Edge Gradient Overlays for Smooth Fade In/Out */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-black via-black/80 to-transparent" />

      {/* Scrolling Track Container */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee-slow flex items-center gap-8 sm:gap-12 shrink-0">
          {/* Double the array for a seamless, 100% continuous loop */}
          {[...marqueeItems, ...marqueeItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <Icon size={14} className="text-[#F5D76E] opacity-85" />
                <span
                  className={`text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] ${
                    item.highlight
                      ? "bg-gradient-to-r from-[#FFF0B3] via-[#F5D76E] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(245,215,110,0.3)]"
                      : "text-gray-300 hover:text-white transition-colors"
                  }`}>
                  {item.text}
                </span>
                <span className="text-[#D4AF37]/50 text-xs ml-4 sm:ml-6">❖</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
