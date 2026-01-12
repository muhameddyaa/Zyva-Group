/**
 * Products Section - Kinetic Typography Design
 * Features:
 * - Staggered card animations
 * - Hover effects with scale and glow
 * - Scroll-triggered reveals
 * - Image overlay transitions
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    id: 1,
    title: "Seafood",
    description: "Fresh wild caught fish, shellfish, farmed or smoked fish, frozen seafood items",
    image: "/images/hero-seafood.jpg",
    color: "oklch(0.55 0.15 220)",
  },
  {
    id: 2,
    title: "Premium Meat",
    description: "Certified high quality Wagyu, Black Angus and A Grade beef and premium Lamb",
    image: "/images/hero-meat.jpg",
    color: "oklch(0.55 0.15 25)",
  },
  {
    id: 3,
    title: "Artisan Cheese",
    description: "Diverse selection of soft and hard cheeses from around the world",
    image: "/images/hero-cheese.jpg",
    color: "oklch(0.65 0.12 85)",
  },
  {
    id: 4,
    title: "Grocery",
    description: "Pantry staples and essential ingredients for every kitchen",
    image: "/images/hero-grocery.jpg",
    color: "oklch(0.50 0.12 140)",
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: "easeOut" as const
      }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-[3/4] overflow-hidden bg-[oklch(0.18_0.03_250)] cursor-pointer"
      >
        {/* Image */}
        <motion.img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_250)] via-[oklch(0.08_0.02_250)]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Color Accent Line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: product.color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
          >
            <span 
              className="text-xs uppercase tracking-widest font-medium"
              style={{ color: product.color }}
            >
              Premium Selection
            </span>
            <h3 className="text-display text-4xl md:text-5xl text-white mt-2 mb-3">
              {product.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {product.description}
            </p>
          </motion.div>
          
          {/* Hover Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <button 
              className="px-6 py-3 border border-[oklch(0.75_0.12_85)] text-[oklch(0.75_0.12_85)] text-sm uppercase tracking-widest hover:bg-[oklch(0.75_0.12_85)] hover:text-[oklch(0.12_0.025_250)] transition-all duration-300"
            >
              View Products
            </button>
          </motion.div>
        </div>
        
        {/* Number Badge */}
        <div className="absolute top-6 right-6">
          <span className="text-display text-6xl text-white/10 group-hover:text-white/20 transition-colors duration-300">
            0{product.id}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative py-32 bg-[oklch(0.10_0.02_250)]"
    >
      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-[oklch(0.75_0.12_85)] uppercase tracking-widest text-sm font-medium">
              Our Products
            </span>
            <h2 className="text-display text-5xl md:text-6xl lg:text-7xl text-white mt-4">
              QUALITY<br />
              <span className="text-gold-gradient">PRODUCTS</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-lg">
            Discover our extensive range of premium products sourced from 
            the finest suppliers across the globe.
          </p>
        </motion.div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-[oklch(0.75_0.12_85)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[oklch(0.75_0.12_85)]/5 rounded-full blur-3xl" />
    </section>
  );
}
