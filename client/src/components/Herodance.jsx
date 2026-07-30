import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

/* ─────────────────────────────────────────────────────────────
   CINEMATIC CONTEMPORARY DANCER  ·  GSAP  ·  MINIMALIST LUXURY
   A clean, premium, fluid contemporary dancer silhouette.
   Designed to look like a high-end creative agency / fashion art piece.
   Animations are kept extremely calm, fluid, and mesmerizing.
───────────────────────────────────────────────────────────── */

const HeroDancer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Subtle global floating effect for the dancer
      gsap.to("#dancer-body", {
        y: -10,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // 2. Slow breathing and torso sway
      gsap.to("#torso", {
        rotate: 1.5,
        scaleY: 1.02,
        transformOrigin: "bottom center",
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // 3. Mesmerizing port de bras (arm movement)
      // Left Arm: Graceful sway upward and outward
      gsap.to("#left-arm", {
        rotate: -8,
        x: -4,
        y: -2,
        transformOrigin: "top right",
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Right Arm: Elegant diagonal reaching motion
      gsap.to("#right-arm", {
        rotate: 6,
        x: 3,
        y: -3,
        transformOrigin: "top left",
        duration: 7,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5,
      });

      // 4. Elegant flowing dress panels (flowing movement)
      const panels = ["#skirt-panel-1", "#skirt-panel-2", "#skirt-panel-3"];
      panels.forEach((panel, i) => {
        gsap.to(panel, {
          rotate: (i % 2 === 0 ? 5 : -5) * (i + 1) * 0.5,
          scaleX: 1.03,
          transformOrigin: "top center",
          duration: 4.5 + i * 0.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });

      // 5. Gentle head tilt to match the grace
      gsap.to("#head", {
        rotate: -2.5,
        transformOrigin: "bottom center",
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.2,
      });

      // 6. Spotlight slow pulsing
      gsap.to("#spotlight-glow", {
        opacity: 0.15,
        scale: 1.05,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex w-full items-center justify-center py-6 px-4 md:px-0"
    >
      {/* Subtle radial background glow centered behind the dancer */}
      <div
        className="pointer-events-none absolute h-[350px] w-[350px] rounded-full bg-[#D4AF37]/10 blur-[100px] md:h-[500px] md:w-[500px]"
        style={{ transform: "translateY(-10%)" }}
      />

      <svg
        viewBox="0 0 500 650"
        className="h-auto w-full max-w-[340px] md:max-w-[440px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Luxury Gold Gradients */}
          <linearGradient id="gold-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE08A" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>

          <linearGradient id="gold-soft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="gold-costume" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1E1E" />
            <stop offset="40%" stopColor="#2A2A2A" />
            <stop offset="100%" stopColor="#121212" />
          </linearGradient>

          <radialGradient id="spotlight-radial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          {/* Premium Soft Shadows & Glows */}
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Pulsing Spotlight */}
        <circle
          id="spotlight-glow"
          cx="250"
          cy="280"
          r="220"
          fill="url(#spotlight-radial)"
          opacity="0.1"
        />

        {/* Cinematic Minimal Floor Shadow */}
        <ellipse
          cx="250"
          cy="590"
          rx="90"
          ry="10"
          fill="#000000"
          opacity="0.6"
          filter="url(#soft-glow)"
        />

        {/* Grounding Base Line - Super Thin, Elegant */}
        <line
          x1="120"
          y1="590"
          x2="380"
          y2="590"
          stroke="#D4AF37"
          strokeWidth="0.5"
          strokeOpacity="0.25"
        />

        {/* MAIN DANCER GROUP */}
        <g id="dancer-body">
          
          {/* Back Leg - Elegant Stretch (Dancer's Left Leg) */}
          <path
            d="M 235 380 Q 190 480 170 575"
            stroke="url(#gold-primary)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Front Leg - Grounding Leg (Dancer's Right Leg) */}
          <path
            d="M 255 380 Q 252 480 250 580"
            stroke="url(#gold-primary)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          
          {/* Flowing Skirt / Dress Panels (Behind & Around Hips) */}
          <g id="skirt">
            <path
              id="skirt-panel-1"
              d="M 220 340 Q 140 420 125 510 Q 195 490 235 380 Z"
              fill="url(#gold-soft)"
              opacity="0.7"
            />
            <path
              id="skirt-panel-2"
              d="M 260 340 Q 320 430 335 520 Q 260 480 240 380 Z"
              fill="url(#gold-soft)"
              opacity="0.6"
            />
            <path
              id="skirt-panel-3"
              d="M 230 350 Q 210 450 190 535 Q 240 480 250 370 Z"
              fill="url(#gold-soft)"
              opacity="0.8"
            />
          </g>

          {/* Torso & Costume - Fluid, Sculpted Silhouette */}
          <g id="torso">
            <path
              d="M 225 210 Q 210 280 220 350 L 265 350 Q 275 280 260 210 Z"
              fill="url(#gold-costume)"
              stroke="url(#gold-primary)"
              strokeWidth="1.5"
            />
            {/* Elegant Golden Corset Lines */}
            <path
              d="M 220 250 Q 242 270 265 250 M 218 290 Q 242 310 267 290"
              stroke="url(#gold-primary)"
              strokeWidth="0.8"
              strokeOpacity="0.4"
            />
          </g>

          {/* Left Arm - Poised, Classic Contemporary Form */}
          <g id="left-arm">
            <path
              d="M 225 210 Q 160 180 115 130"
              stroke="url(#gold-primary)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Soft gold highlight */}
            <circle cx="115" cy="130" r="3" fill="#D4AF37" filter="url(#soft-glow)" />
          </g>

          {/* Right Arm - Reaching upwards gracefully */}
          <g id="right-arm">
            <path
              d="M 260 210 Q 310 160 345 85"
              stroke="url(#gold-primary)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Soft gold highlight */}
            <circle cx="345" cy="85" r="3" fill="#D4AF37" filter="url(#soft-glow)" />
          </g>

          {/* Head & Neck */}
          <g id="head">
            {/* Elegant Slender Neck */}
            <path
              d="M 238 210 L 238 180 L 248 180 L 248 210 Z"
              fill="url(#gold-primary)"
              opacity="0.8"
            />
            {/* Sleek Minimalist Face Profile Silhouette */}
            <path
              d="M 233 180 Q 230 140 248 135 Q 262 145 258 175 Q 254 182 245 180 Z"
              fill="url(#gold-primary)"
            />
            {/* Hair Bun - Sophisticated Silhouette */}
            <ellipse
              cx="256"
              cy="148"
              rx="8"
              ry="12"
              fill="#121212"
              stroke="url(#gold-primary)"
              strokeWidth="1.5"
            />
          </g>

        </g>
      </svg>
    </motion.div>
  );
};

export default HeroDancer;