/**
 * About Section - Kinetic Typography Design
 * Features:
 * - Split screen layout
 * - Text reveal on scroll
 * - Parallax image
 * - Counter animation
 */

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-display text-5xl md:text-6xl text-gold-gradient">
      {count}{suffix}
    </span>
  );
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const stats = [
    { value: 25, suffix: "+", label: "Years Experience" },
    { value: 500, suffix: "+", label: "Premium Products" },
    { value: 100, suffix: "+", label: "Global Partners" },
    { value: 50, suffix: "+", label: "Countries Served" },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-[oklch(0.12_0.025_250)]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.75 0.12 85) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img
                src="/images/hero-grocery.jpg"
                alt="Premium Ingredients"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.025_250)] via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -right-4 bottom-20 bg-[oklch(0.75_0.12_85)] p-6 shadow-2xl"
            >
              <p className="text-display text-4xl text-[oklch(0.12_0.025_250)]">SINCE</p>
              <p className="text-display text-5xl text-[oklch(0.12_0.025_250)]">1996</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div style={{ y: textY }} className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[oklch(0.75_0.12_85)] uppercase tracking-widest text-sm font-medium">
                About Us
              </span>
              <h2 className="text-display text-5xl md:text-6xl lg:text-7xl text-white mt-4 mb-6">
                QUALITY<br />
                <span className="text-gold-gradient">PROMISED</span><br />
                DELIVERED
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              JM Foods LLC is the ultimate source for all your food and beverage 
              requirements. A private owned company established in 1996, we boast 
              an extensive variety of the finest produce sourced from leading 
              suppliers across the globe.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white/70 text-lg leading-relaxed mb-12"
            >
              We are passionate in everything we do and take pride in our 
              commitment to our ethos. Our repertoire of products comprise of 
              fresh seafood and shellfish, meats, game and poultry, an extensive 
              selection of cheeses, pork, and gourmet ingredients.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-[oklch(0.75_0.12_85)]/30 pl-4">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="text-white/50 text-sm uppercase tracking-wider mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
