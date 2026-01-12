/**
 * Hero Section - Kinetic Typography Design
 * Features:
 * - Full-screen hero with parallax background
 * - Animated text reveal
 * - Marquee text animation
 * - Scroll indicator
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.025_250)]/70 via-[oklch(0.12_0.025_250)]/50 to-[oklch(0.12_0.025_250)]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center px-6"
      >
        {/* Main Title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-display text-6xl md:text-8xl lg:text-9xl text-white text-center"
          >
            PREMIUM
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-display text-6xl md:text-8xl lg:text-9xl text-gold-gradient text-center"
          >
            QUALITY
          </motion.h1>
        </div>
        
        <div className="overflow-hidden mb-8">
          <motion.h1
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-display text-6xl md:text-8xl lg:text-9xl text-white text-center"
          >
            FOODS
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-white/70 text-lg md:text-xl text-center max-w-2xl mb-12"
        >
          Discover the art of culinary excellence with our premium selection of 
          seafood, meats, cheeses, and gourmet ingredients from around the world.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px oklch(0.75 0.12 85 / 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-[oklch(0.75_0.12_85)] text-[oklch(0.12_0.025_250)] font-semibold uppercase tracking-widest rounded-none hover:bg-[oklch(0.85_0.10_85)] transition-colors"
        >
          Explore Products
        </motion.button>
      </motion.div>

      {/* Marquee Text */}
      <div className="absolute bottom-24 left-0 right-0 overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex whitespace-nowrap animate-marquee"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-display text-7xl md:text-8xl text-white/5 mx-8"
            >
              SEAFOOD • MEAT • CHEESE • GROCERY • DELICATESSEN •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
