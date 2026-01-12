/**
 * Trading Page - Zyva International General Trading
 * 
 * Design Philosophy: Premium Food Trading
 * - Showcase products with elegant animations
 * - Professional product grid
 * - Contact section for inquiries
 */

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, Package, Globe, Award, Truck } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Indian Buffalo Meat",
    description: "Premium quality Indian buffalo meat, assorted cuts, carefully selected and processed to meet international standards.",
    origin: "India",
    image: "/images/product-buffalo-meat.jpg",
    category: "Meat",
  },
  {
    id: 2,
    name: "Indian Veal Frozen",
    description: "High-quality frozen Indian veal, assorted cuts, tender and flavorful for various culinary applications.",
    origin: "India",
    image: "/images/product-veal.jpg",
    category: "Meat",
  },
  {
    id: 3,
    name: "Frozen Chicken Grillers",
    description: "Whole frozen chicken grillers, perfect for grilling and roasting, consistent quality and size.",
    origin: "Brazil",
    image: "/images/product-chicken-grillers.jpg",
    category: "Poultry",
  },
  {
    id: 4,
    name: "Frozen Chicken Shawarma",
    description: "Pre-marinated frozen chicken shawarma, ready for cooking, authentic Middle Eastern flavor.",
    origin: "Brazil",
    image: "/images/product-chicken-shawarma.jpg",
    category: "Poultry",
  },
  {
    id: 5,
    name: "Frozen Chicken Breast",
    description: "Boneless, skinless frozen chicken breast from Brazil, lean and versatile for any recipe.",
    origin: "Brazil",
    image: "/images/product-chicken-breast.jpg",
    category: "Poultry",
  },
  {
    id: 6,
    name: "Frozen Chicken Thigh",
    description: "Juicy frozen chicken thighs from Brazil, bone-in with skin, rich flavor for various dishes.",
    origin: "Brazil",
    image: "/images/product-chicken-thigh.jpg",
    category: "Poultry",
  },
  {
    id: 7,
    name: "Frozen Chicken Wings",
    description: "Premium frozen chicken wings from Brazil, perfect for appetizers and main courses.",
    origin: "Brazil",
    image: "/images/product-chicken-wings.jpg",
    category: "Poultry",
  },
  {
    id: 8,
    name: "Frozen Chicken Leg Quarter",
    description: "Quality frozen chicken leg quarters from USA, includes thigh and drumstick, great value.",
    origin: "USA",
    image: "/images/product-chicken-leg.jpg",
    category: "Poultry",
  },
  {
    id: 9,
    name: "1121 Sella Basmati Rice",
    description: "Premium 1121 Sella Basmati rice, extra-long grain, aromatic and fluffy when cooked.",
    origin: "India",
    image: "/images/product-basmati-rice.jpg",
    category: "Rice",
  },
];

const features = [
  { icon: Globe, title: "Global Sourcing", description: "Products from India, Brazil, and USA" },
  { icon: Award, title: "Premium Quality", description: "Strict quality control standards" },
  { icon: Truck, title: "Reliable Delivery", description: "Efficient logistics network" },
  { icon: Package, title: "Bulk Orders", description: "Competitive wholesale pricing" },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-[oklch(0.15_0.025_260)] rounded-xl overflow-hidden border border-[oklch(0.28_0.03_260)] hover:border-[oklch(0.65_0.15_185)] transition-colors"
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.02_260)] via-transparent to-transparent opacity-60" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-zyva-gradient text-white text-xs font-medium rounded-full">
              {product.category}
            </span>
          </div>
          
          {/* Origin Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full">
              {product.origin}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-heading text-xl text-white mb-2 group-hover:text-[oklch(0.65_0.15_185)] transition-colors">
            {product.name}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">
            {product.description}
          </p>
          
          {/* Inquiry Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toast.info("Contact us for pricing and availability")}
            className="mt-4 w-full py-3 border border-[oklch(0.65_0.15_185)] text-[oklch(0.65_0.15_185)] text-sm font-medium rounded-lg hover:bg-[oklch(0.65_0.15_185)] hover:text-white transition-all"
          >
            Request Quote
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Trading() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[oklch(0.10_0.02_260)]/80 backdrop-blur-md border-b border-[oklch(0.28_0.03_260)]">
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
              <span className="text-white font-semibold">Zyva Trading</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="/images/trading-hero.jpg"
            alt="Premium Food Trading"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.02_260)]/70 via-[oklch(0.10_0.02_260)]/50 to-[oklch(0.10_0.02_260)]" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 pt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[oklch(0.65_0.15_185)] uppercase tracking-widest text-sm font-medium">
              Zyva International
            </span>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-white mt-4">
              GENERAL<br />
              <span className="text-zyva-gradient">TRADING</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mt-6">
              Premium quality meat, poultry, and rice products sourced from 
              the finest suppliers in India, Brazil, and USA.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[oklch(0.08_0.015_260)]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-zyva-gradient flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[oklch(0.65_0.15_185)] uppercase tracking-widest text-sm font-medium">
              Our Products
            </span>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-white mt-4">
              PREMIUM <span className="text-zyva-gradient">SELECTION</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              Discover our extensive range of high-quality meat, poultry, and rice products 
              carefully sourced from trusted suppliers worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[oklch(0.08_0.015_260)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display text-4xl md:text-5xl text-white">
                CONTACT <span className="text-zyva-gradient">US</span>
              </h2>
              <p className="text-white/60 mt-4">
                Interested in our products? Get in touch for pricing and availability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-6 bg-[oklch(0.12_0.025_260)] rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-zyva-gradient flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-white/60 text-sm">contact@zyvasolutions.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center text-center p-6 bg-[oklch(0.12_0.025_260)] rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-zyva-gradient flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-white/60 text-sm">+971 50 901 1323</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center text-center p-6 bg-[oklch(0.12_0.025_260)] rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-zyva-gradient flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-white/60 text-sm">Office 1152, Tower 2, Mazyad Mall, Mussafah, Abu Dhabi, UAE</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[oklch(0.20_0.02_260)]">
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
