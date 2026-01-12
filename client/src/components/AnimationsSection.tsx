/**
 * Animations Section - Showcase of Animation Techniques
 * Features:
 * - Interactive animation demos
 * - Code snippets for each technique
 * - Live examples
 */

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const animationTechniques = [
  {
    id: 1,
    title: "Scroll-Triggered Animations",
    titleAr: "رسوم متحركة عند التمرير",
    description: "Elements animate into view as you scroll down the page",
    descriptionAr: "العناصر تتحرك عند ظهورها في الشاشة أثناء التمرير",
    code: `// Using Framer Motion
const isInView = useInView(ref, { once: true });

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8 }}
/>`,
  },
  {
    id: 2,
    title: "Parallax Effects",
    titleAr: "تأثيرات Parallax",
    description: "Background and foreground elements move at different speeds",
    descriptionAr: "الخلفية والعناصر الأمامية تتحرك بسرعات مختلفة",
    code: `// Parallax with useTransform
const { scrollYProgress } = useScroll();
const y = useTransform(
  scrollYProgress, 
  [0, 1], 
  ["0%", "50%"]
);

<motion.div style={{ y }} />`,
  },
  {
    id: 3,
    title: "Hover Interactions",
    titleAr: "تفاعلات التمرير",
    description: "Smooth animations triggered by mouse hover",
    descriptionAr: "رسوم متحركة سلسة تُفعّل عند تمرير الماوس",
    code: `// Hover animations
<motion.div
  whileHover={{ 
    scale: 1.05,
    boxShadow: "0 0 40px gold"
  }}
  whileTap={{ scale: 0.95 }}
/>`,
  },
  {
    id: 4,
    title: "Staggered Animations",
    titleAr: "رسوم متحركة متتابعة",
    description: "Multiple elements animate in sequence with delays",
    descriptionAr: "عناصر متعددة تتحرك بالتتابع مع تأخيرات",
    code: `// Staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};`,
  },
];

function AnimationDemo({ technique, index }: { technique: typeof animationTechniques[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  // Demo animations based on technique
  const renderDemo = () => {
    switch (technique.id) {
      case 1: // Scroll-triggered
        return (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 bg-[oklch(0.75_0.12_85)] rounded-lg"
          />
        );
      case 2: // Parallax
        return (
          <div className="relative h-24 overflow-hidden">
            <motion.div
              animate={{ y: isHovered ? -20 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-[oklch(0.75_0.12_85)]/30 rounded-full" />
            </motion.div>
            <motion.div
              animate={{ y: isHovered ? 20 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-12 h-12 bg-[oklch(0.75_0.12_85)] rounded-lg" />
            </motion.div>
          </div>
        );
      case 3: // Hover
        return (
          <motion.div
            whileHover={{ 
              scale: 1.2, 
              rotate: 5,
              boxShadow: "0 0 30px oklch(0.75 0.12 85 / 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            className="w-20 h-20 bg-[oklch(0.75_0.12_85)] rounded-lg cursor-pointer"
          />
        );
      case 4: // Staggered
        return (
          <motion.div
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="flex gap-2"
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="w-8 h-8 bg-[oklch(0.75_0.12_85)] rounded"
              />
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-[oklch(0.15_0.025_250)] border border-[oklch(0.30_0.03_250)] p-6 rounded-lg"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="text-[oklch(0.75_0.12_85)] text-xs uppercase tracking-widest">
            Technique #{technique.id}
          </span>
          <h3 className="text-display text-2xl text-white mt-1">
            {technique.title}
          </h3>
          <p className="text-white/50 text-sm mt-1">
            {technique.titleAr}
          </p>
        </div>
      </div>

      {/* Demo Area */}
      <div className="bg-[oklch(0.10_0.02_250)] rounded-lg p-8 mb-6 flex items-center justify-center min-h-[120px]">
        {renderDemo()}
      </div>

      {/* Description */}
      <p className="text-white/70 text-sm mb-4">
        {technique.description}
      </p>
      <p className="text-white/50 text-sm mb-4 text-right" dir="rtl">
        {technique.descriptionAr}
      </p>

      {/* Code Snippet */}
      <div className="bg-[oklch(0.08_0.015_250)] rounded-lg p-4 overflow-x-auto">
        <pre className="text-xs text-white/70 font-mono">
          <code>{technique.code}</code>
        </pre>
      </div>
    </motion.div>
  );
}

export default function AnimationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      id="animations"
      ref={sectionRef}
      className="relative py-32 bg-[oklch(0.12_0.025_250)] overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[oklch(0.75_0.12_85)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[oklch(0.75_0.12_85)] rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[oklch(0.75_0.12_85)] uppercase tracking-widest text-sm font-medium">
            Animation Techniques / تقنيات الرسوم المتحركة
          </span>
          <h2 className="text-display text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            HOW IT'S<br />
            <span className="text-gold-gradient">DONE</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-6 text-lg">
            Learn the animation techniques used in modern websites like JM Foods.
            Each technique is demonstrated with live examples and code snippets.
          </p>
          <p className="text-white/50 max-w-2xl mx-auto mt-4 text-lg" dir="rtl">
            تعلم تقنيات الرسوم المتحركة المستخدمة في المواقع الحديثة مثل JM Foods.
            كل تقنية موضحة بأمثلة حية ومقتطفات من الكود.
          </p>
        </motion.div>

        {/* Techniques Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {animationTechniques.map((technique, index) => (
            <AnimationDemo key={technique.id} technique={technique} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-[oklch(0.15_0.025_250)] border border-[oklch(0.30_0.03_250)] px-8 py-4 rounded-full">
            <span className="text-white/70">Built with</span>
            <span className="text-[oklch(0.75_0.12_85)] font-semibold">Framer Motion</span>
            <span className="text-white/70">+</span>
            <span className="text-[oklch(0.75_0.12_85)] font-semibold">React</span>
            <span className="text-white/70">+</span>
            <span className="text-[oklch(0.75_0.12_85)] font-semibold">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
