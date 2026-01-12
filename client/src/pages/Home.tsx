/**
 * Home Page - Zyva Group Landing
 * 
 * Design Philosophy: Modern Corporate with Gradient Accents
 * - Brand Colors: Purple to Teal gradient
 * - Three divisions entry point
 * - Professional yet dynamic feel
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Building2, Calculator, Calendar } from "lucide-react";

const divisions = [
  {
    id: "trading",
    title: "ZYVA INTERNATIONAL",
    subtitle: "GENERAL TRADING",
    description: "Premium quality meat, poultry, and rice products sourced from the finest suppliers worldwide.",
    icon: Building2,
    href: "/trading",
    color: "from-[oklch(0.45_0.15_280)] to-[oklch(0.55_0.15_280)]",
    hoverColor: "group-hover:from-[oklch(0.50_0.15_280)] group-hover:to-[oklch(0.60_0.15_280)]",
  },
  {
    id: "financial",
    title: "ZYVA FINANCIAL",
    subtitle: "SOLUTIONS",
    description: "Expert accounting, tax consultancy, and financial advisory services for your business success.",
    icon: Calculator,
    href: "/financial",
    color: "from-[oklch(0.55_0.15_230)] to-[oklch(0.65_0.15_185)]",
    hoverColor: "group-hover:from-[oklch(0.60_0.15_230)] group-hover:to-[oklch(0.70_0.15_185)]",
  },
  {
    id: "events",
    title: "ZYVA",
    subtitle: "EVENTS",
    description: "Creating memorable experiences and exceptional events that leave lasting impressions.",
    icon: Calendar,
    href: "/events",
    color: "from-[oklch(0.65_0.15_185)] to-[oklch(0.55_0.12_160)]",
    hoverColor: "group-hover:from-[oklch(0.70_0.15_185)] group-hover:to-[oklch(0.60_0.12_160)]",
  },
];

function DivisionCard({ division, index }: { division: typeof divisions[0]; index: number }) {
  const Icon = division.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
    >
      <Link href={division.href}>
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative h-full cursor-pointer"
        >
          {/* Card */}
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${division.color} ${division.hoverColor} p-8 md:p-10 h-full min-h-[320px] flex flex-col justify-between transition-all duration-500`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>
            
            {/* Icon */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6"
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-display text-3xl md:text-4xl text-white mb-1">
                {division.title}
              </h3>
              <h4 className="text-display text-2xl md:text-3xl text-white/80 mb-4">
                {division.subtitle}
              </h4>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                {division.description}
              </p>
              
              {/* CTA */}
              <div className="flex items-center gap-2 text-white font-medium">
                <span className="text-sm uppercase tracking-wider">Explore</span>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="group-hover:translate-x-2 transition-transform"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-white/5" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Elements */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[oklch(0.45_0.15_280)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[oklch(0.65_0.15_185)]/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src="/images/zyva-logo.png" 
              alt="Zyva Group Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </motion.div>

          {/* Title */}
          <div className="text-center mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-display text-6xl md:text-8xl lg:text-9xl text-white mb-2"
            >
              ZYVA
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-display text-4xl md:text-5xl lg:text-6xl text-zyva-gradient"
            >
              GROUP
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 text-lg md:text-xl text-center max-w-2xl mb-16"
          >
            Providing Innovative Solutions for Businesses
          </motion.p>

          {/* Division Cards */}
          <div className="w-full max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {divisions.map((division, index) => (
                <DivisionCard key={division.id} division={division} index={index} />
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/30 text-xs uppercase tracking-widest"
            >
              Scroll for more
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6 bg-[oklch(0.08_0.015_260)]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-display text-4xl md:text-5xl text-white mb-6">
                GET IN <span className="text-zyva-gradient">TOUCH</span>
              </h3>
              <p className="text-white/60 mb-8">
                Ready to work with us? Contact our team for inquiries and assistance.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zyva-gradient flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white">contact@zyvasolutions.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zyva-gradient flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-white">+971 50 901 1323</span>
                </div>
              </div>
              
              <div className="mt-8 text-white/50 text-sm">
                Office no. 1152, Tower 2, Mazyad Mall, Mussafah, Abu Dhabi, UAE
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-[oklch(0.20_0.02_260)]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/zyva-logo.png" alt="Zyva" className="w-8 h-8" />
              <span className="text-white/50 text-sm">© 2024 Zyva Group. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <Link href="/trading" className="text-white/50 hover:text-white text-sm transition-colors">Trading</Link>
              <Link href="/financial" className="text-white/50 hover:text-white text-sm transition-colors">Financial</Link>
              <Link href="/events" className="text-white/50 hover:text-white text-sm transition-colors">Events</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
