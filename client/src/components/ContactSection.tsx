/**
 * Contact Section - Kinetic Typography Design
 * Features:
 * - Animated form inputs
 * - Floating labels
 * - Submit button animation
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! This is a demo.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Dubai Investment Park 2, UAE",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971 4 883 8238",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@jmfoodgulf.com",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-[oklch(0.10_0.02_250)]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-[oklch(0.75_0.12_85)]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-[oklch(0.75_0.12_85)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[oklch(0.75_0.12_85)] uppercase tracking-widest text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="text-display text-5xl md:text-6xl lg:text-7xl text-white mt-4">
            CONTACT<br />
            <span className="text-gold-gradient">US</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-heading text-2xl text-white mb-8">
              Let's Start a Conversation
            </h3>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Whether you're looking for premium ingredients or want to learn 
              more about our products, we're here to help. Reach out to us 
              through any of the following channels.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[oklch(0.75_0.12_85)]/10 rounded-lg flex items-center justify-center group-hover:bg-[oklch(0.75_0.12_85)]/20 transition-colors">
                    <info.icon className="w-5 h-5 text-[oklch(0.75_0.12_85)]" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-wider">
                      {info.title}
                    </p>
                    <p className="text-white text-lg mt-1">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12"
            >
              <p className="text-white/50 text-sm uppercase tracking-wider mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {["Facebook", "LinkedIn", "Instagram"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ y: -3 }}
                    className="px-4 py-2 border border-[oklch(0.30_0.03_250)] text-white/70 text-sm hover:border-[oklch(0.75_0.12_85)] hover:text-[oklch(0.75_0.12_85)] transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-[oklch(0.15_0.025_250)] border border-[oklch(0.30_0.03_250)] px-6 py-4 text-white placeholder-white/30 focus:border-[oklch(0.75_0.12_85)] focus:outline-none transition-colors"
                  placeholder="Your Name"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-[oklch(0.15_0.025_250)] border border-[oklch(0.30_0.03_250)] px-6 py-4 text-white placeholder-white/30 focus:border-[oklch(0.75_0.12_85)] focus:outline-none transition-colors"
                  placeholder="Your Email"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full bg-[oklch(0.15_0.025_250)] border border-[oklch(0.30_0.03_250)] px-6 py-4 text-white placeholder-white/30 focus:border-[oklch(0.75_0.12_85)] focus:outline-none transition-colors resize-none"
                  placeholder="Your Message"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 30px oklch(0.75 0.12 85 / 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[oklch(0.75_0.12_85)] text-[oklch(0.12_0.025_250)] py-4 font-semibold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[oklch(0.85_0.10_85)] transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
