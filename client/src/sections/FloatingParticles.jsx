import { motion } from "framer-motion";

const particles = [...Array(18)].map((_, index) => ({
  id: index,
  size: Math.random() * 6 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 8 + 8,
  delay: Math.random() * 5,
}));

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: [-40, -180],
            x: [0, Math.random() * 40 - 20],
            scale: [0.5, 1.2, 0.4],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            boxShadow: "0 0 12px rgba(212,175,55,.8)",
          }}
        />
      ))}

      {/* Large Glow Left */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-10 top-1/3 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px]"
      />

      {/* Large Glow Right */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]"
      />

      {/* Moving Light Beam */}

      <motion.div
        animate={{
          x: ["-20%", "120%"],
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-full w-40 rotate-12 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent blur-3xl"
      />

    </div>
  );
};

export default FloatingParticles;