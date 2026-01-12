/**
 * Footer Component - Kinetic Typography Design
 * Features:
 * - Marquee text animation
 * - Minimal design
 * - Back to top button
 */

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[oklch(0.08_0.015_250)] overflow-hidden">
      {/* Marquee */}
      <div className="py-8 border-y border-[oklch(0.20_0.02_250)]">
        <div className="flex whitespace-nowrap animate-marquee-slow">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-display text-5xl md:text-6xl text-white/5 mx-8"
            >
              QUALITY PROMISED • QUALITY DELIVERED •
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo */}
          <div>
            <h3 className="text-display text-4xl text-gold-gradient mb-4">
              JM FOODS
            </h3>
            <p className="text-white/50 text-sm">
              The ultimate source for all your<br />
              food and beverage requirements.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {["About", "Products", "Animations", "Contact"].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-white/50 hover:text-[oklch(0.75_0.12_85)] text-sm uppercase tracking-wider transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="flex justify-end">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5, boxShadow: "0 0 20px oklch(0.75 0.12 85 / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-[oklch(0.75_0.12_85)] flex items-center justify-center"
            >
              <ArrowUp className="w-5 h-5 text-[oklch(0.12_0.025_250)]" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[oklch(0.20_0.02_250)] py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © 2024 JM Foods Animation Demo. Built with React & Framer Motion.
            </p>
            <p className="text-white/30 text-sm">
              This is a demo showcasing animation techniques.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
