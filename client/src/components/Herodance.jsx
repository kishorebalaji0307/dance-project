import { motion } from "framer-motion";

const HeroDancer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.4,
      }}
      className="relative hidden items-center justify-center lg:flex"
    >
      {/* Gold Glow */}

      <div className="absolute h-[520px] w-[520px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      {/* Rotating Circle */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[430px] w-[430px] rounded-full border border-[#D4AF37]/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[350px] w-[350px] rounded-full border border-[#D4AF37]/10"
      />

      {/* Dancer */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <svg
          width="340"
          height="520"
          viewBox="0 0 340 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head */}

          <circle
            cx="170"
            cy="70"
            r="26"
            stroke="#D4AF37"
            strokeWidth="4"
          />

          {/* Body */}

          <path
            d="M170 96
               C165 150 160 180 170 230"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Arm */}

          <path
            d="M170 130
               C110 110 95 155 80 185"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Right Arm */}

          <path
            d="M170 130
               C245 70 280 120 260 185"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Leg */}

          <path
            d="M170 230
               C145 310 110 370 85 470"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Right Leg */}

          <path
            d="M170 230
               C225 315 255 390 285 480"
            stroke="#D4AF37"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Skirt */}

          <path
            d="M145 190
               C120 235 220 235 195 190"
            stroke="#D4AF37"
            strokeWidth="3"
            fill="rgba(212,175,55,.05)"
          />
        </svg>

        {/* Gold Ring */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/20"
        />

        {/* Light Dot */}

        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-12 h-4 w-4 -translate-x-1/2 rounded-full bg-[#D4AF37]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroDancer;