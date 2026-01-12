/**
 * Home Page - JM Food Animation Demo
 * 
 * Design Philosophy: Kinetic Typography Experience
 * - Text as Hero: Typography is the main visual element
 * - Constant Motion: Continuous animations that engage users
 * - Cinematic Feel: Dark backgrounds with golden accents
 * - Colors: Deep blue (#0A1628), Gold (#C9A227), White (#FFFFFF)
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import AnimationsSection from "@/components/AnimationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <AnimationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
