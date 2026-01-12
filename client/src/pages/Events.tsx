/**
 * Events Page - Zyva Events (Coming Soon)
 * 
 * Design Philosophy: Elegant Coming Soon Page
 * - Animated background
 * - Countdown or notification signup
 * - Professional teaser
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Calendar, Sparkles, Bell } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Events() {
  const [email, setEmail] = useState("");

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks! We'll notify you when we launch.");
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[oklch(0.45_0.15_280)]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[oklch(0.65_0.15_185)]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-[oklch(0.55_0.15_230)]/15 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-[oklch(0.65_0.15_185)] rounded-full"
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.10_0.02_260)]/50 backdrop-blur-md border-b border-[oklch(0.28_0.03_260)]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <motion.div
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-white/70 hover:text-white cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm">Back to Home</span>
              </motion.div>
            </Link>
            <div className="flex items-center gap-3">
              <img src="/images/zyva-logo.png" alt="Zyva" className="w-8 h-8" />
              <span className="text-white font-semibold">Zyva Events</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border-2 border-dashed border-[oklch(0.65_0.15_185)]/30 flex items-center justify-center"
            >
              <div className="w-24 h-24 rounded-full bg-zyva-gradient flex items-center justify-center">
                <Calendar className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-8 h-8 text-[oklch(0.65_0.15_185)]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-[oklch(0.65_0.15_185)] uppercase tracking-widest text-sm font-medium">
            Zyva Events
          </span>
          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-white mt-4">
            COMING<br />
            <span className="text-zyva-gradient">SOON</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mt-6"
        >
          We're crafting extraordinary experiences and unforgettable events. 
          Something amazing is on the way. Stay tuned!
        </motion.p>

        {/* Notification Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 w-full max-w-md"
        >
          <form onSubmit={handleNotify} className="flex gap-3">
            <div className="flex-1 relative">
              <Bell className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="email"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[oklch(0.15_0.025_260)] border border-[oklch(0.28_0.03_260)] rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/40 focus:border-[oklch(0.65_0.15_185)] focus:outline-none transition-colors"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-zyva-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Notify Me
            </motion.button>
          </form>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {[
            { label: "Corporate Events", icon: "🏢" },
            { label: "Private Parties", icon: "🎉" },
            { label: "Conferences", icon: "🎤" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <span className="text-white/50 text-sm">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 py-6 px-6 border-t border-[oklch(0.20_0.02_260)]/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/images/zyva-logo.png" alt="Zyva" className="w-8 h-8" />
            <span className="text-white/50 text-sm">© 2024 Zyva Group. All rights reserved.</span>
          </div>
          <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">
            Back to Zyva Group
          </Link>
        </div>
      </footer>
    </div>
  );
}
