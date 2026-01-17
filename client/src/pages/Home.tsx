/**
 * Zyva Group Home Page
 * Design: Professional corporate landing with animated sections
 * Colors: Purple (#6B46C1) to Teal (#14B8A6) gradient
 */

import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { ArrowRight, Building2, Calculator, PartyPopper, ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";

const divisions = [
  {
    id: "trading",
    title: "Zyva General Trading",
    subtitle: "Premium Food Distribution",
    description: "Your trusted partner for premium quality meat, poultry, and rice products. We deliver excellence across the Gulf region with our carefully selected range of frozen and fresh products.",
    icon: Building2,
    image: "/images/trading-hero-new.jpg",
    link: "/trading",
    color: "from-purple-600 to-purple-800",
    features: ["Premium Buffalo Meat", "Brazilian Chicken", "Basmati Rice"]
  },
  {
    id: "financial",
    title: "Zyva Financial Solutions",
    subtitle: "We Focus on Your Tomorrow",
    description: "Comprehensive financial services including accounting, VAT compliance, audit, and business consulting. Let us handle your finances so you can focus on growing your business.",
    icon: Calculator,
    image: "/images/financial-hero.jpg",
    link: "/financial",
    color: "from-teal-500 to-teal-700",
    features: ["Accounting & Bookkeeping", "VAT Services", "Audit & Assurance"]
  },
  {
    id: "events",
    title: "Zyva Events",
    subtitle: "Creating Unforgettable Moments",
    description: "From corporate gatherings to grand celebrations, we craft extraordinary experiences that leave lasting impressions. Coming soon to transform your events.",
    icon: PartyPopper,
    image: "/images/events-hero.jpg",
    link: "/events",
    color: "from-purple-500 to-teal-500",
    features: ["Corporate Events", "Private Celebrations", "Brand Activations"]
  }
];

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "", label: "Business Divisions" },
  { value: 24, suffix: "/7", label: "Support Available" }
];

// Counter Animation Component - Counts from 0 to target value
function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true;
      
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;
      
      const updateCounter = () => {
        const now = Date.now();
        const remaining = Math.max(endTime - now, 0);
        const progress = 1 - remaining / (duration * 1000);
        
        // Easing function
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * value);
        
        setDisplayValue(current);
        
        if (remaining > 0) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue(value);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div 
      ref={ref} 
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-2"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {displayValue}{suffix}
    </motion.div>
  );
}

// Animated Logo Component
function AnimatedLogo() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="mb-8"
    >
      <motion.img 
        src="/images/ZYVA-PNG.png" 
        alt="Zyva Group" 
        className="w-32 h-32 mx-auto drop-shadow-2xl"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        whileHover={{
          scale: 1.1,
          rotateY: 0,
          transition: { duration: 0.3 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Scroll to top when navigating to divisions
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-slate-950 to-teal-900/90" />
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(107, 70, 193, 0.4) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(20, 184, 166, 0.4) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(107, 70, 193, 0.4) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(107, 70, 193, 0.4) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          {/* Animated Logo */}
          <AnimatedLogo />

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-white to-teal-400 bg-clip-text text-transparent">
              ZYVA GROUP
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            Providing Innovative Solutions for Businesses
          </motion.p>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-12"
          >
            <motion.span 
              className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
            >
              General Trading
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(20, 184, 166, 0.6)" }}
            >
              Financial Solutions
            </motion.span>
            <motion.span 
              className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.6)" }}
            >
              Events Management
            </motion.span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a 
              href="#divisions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Explore Our Divisions
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900/50 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-slate-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section id="divisions" className="py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Divisions</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Three specialized divisions working together to provide comprehensive business solutions
            </p>
          </motion.div>

          {/* Division Cards */}
          <div className="space-y-32">
            {divisions.map((division, index) => (
              <motion.div
                key={division.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl"
                  >
                    <img
                      src={division.image}
                      alt={division.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${division.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <division.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <motion.span 
                      className="text-sm uppercase tracking-wider text-teal-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {division.subtitle}
                    </motion.span>
                    <motion.h3 
                      className="text-3xl md:text-4xl font-bold mt-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {division.title}
                    </motion.h3>
                  </div>

                  <motion.p 
                    className="text-slate-400 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {division.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {division.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link href={division.link} onClick={scrollToTop}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${division.color} text-white font-semibold cursor-pointer hover:shadow-lg transition-shadow duration-300`}
                      >
                        {division.id === 'events' ? 'Coming Soon' : 'Learn More'}
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-teal-900/50" />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 50%, rgba(107, 70, 193, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 50%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 50%, rgba(107, 70, 193, 0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Grow</span> Your Business?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Partner with Zyva Group and experience the difference. Our team of experts is ready to help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/financial" onClick={scrollToTop}>
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors cursor-pointer">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <a 
                href="tel:+971557372006"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <motion.img 
                src="/images/ZYVA-PNG.png" 
                alt="Zyva" 
                className="w-10 h-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xl font-bold">Zyva Group</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <Link href="/trading" onClick={scrollToTop} className="hover:text-white transition-colors">Trading</Link>
              <Link href="/financial" onClick={scrollToTop} className="hover:text-white transition-colors">Financial</Link>
              <Link href="/events" onClick={scrollToTop} className="hover:text-white transition-colors">Events</Link>
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
