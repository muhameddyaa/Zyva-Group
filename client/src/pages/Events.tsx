/**
 * Zyva Events Page - Coming Soon
 * Design: Elegant coming soon page with animated elements and event imagery
 * Colors: Purple (#6B46C1) to Teal (#14B8A6) gradient
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, PartyPopper, Calendar, Sparkles, Mail, Bell } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

const eventTypes = [
  { icon: "🎉", title: "Corporate Events", description: "Professional gatherings that inspire" },
  { icon: "💍", title: "Weddings", description: "Unforgettable celebrations of love" },
  { icon: "🎪", title: "Brand Activations", description: "Engaging brand experiences" },
  { icon: "🎭", title: "Private Parties", description: "Exclusive and memorable moments" },
  { icon: "🏆", title: "Award Ceremonies", description: "Celebrating achievements in style" },
  { icon: "🎤", title: "Conferences", description: "Knowledge sharing events" }
];


export default function Events() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll notify you when we launch.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <span className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
              Back to Zyva Group
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <img src="/images/ZYVA-PNG.png" alt="Zyva" className="w-8 h-8" />
            <span className="font-semibold">Events</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img 
            src="/images/events-hero.jpg" 
            alt="Events" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </motion.div>

        {/* Animated Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-400/30" />
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-teal-500 flex items-center justify-center">
              <PartyPopper className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Coming Soon
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-white to-teal-400 bg-clip-text text-transparent">
              ZYVA EVENTS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto"
          >
            We're crafting extraordinary experiences and unforgettable events.
            Something amazing is on the way.
          </motion.p>


          {/* Email Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-md mx-auto"
          >
            <p className="text-slate-400 mb-4">Get notified when we launch</p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-4 bg-gradient-to-r from-purple-600 to-teal-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
              >
                <Bell className="w-5 h-5" />
                <span className="hidden md:inline">Notify Me</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Event Types Preview */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We're <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Preparing</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              From intimate gatherings to grand celebrations, we'll bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-slate-400 text-sm">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-teal-900/30" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(107, 70, 193, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(107, 70, 193, 0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have an Event in Mind?
            </h2>
            <p className="text-slate-300 mb-8">
              While we're preparing our full launch, we're already taking inquiries for special events.
              Let's start planning your extraordinary experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@zyvasolutions.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <Link href="/">
                <span className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors cursor-pointer">
                  Back to Zyva Group
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/ZYVA-PNG.png" alt="Zyva" className="w-8 h-8" />
              <span className="font-semibold">Zyva Events</span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2024 Zyva Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
