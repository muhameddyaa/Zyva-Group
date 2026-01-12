/**
 * Financial Page - Zyva Financial Solutions
 * 
 * Design Philosophy: Professional Financial Services
 * - Clean, trustworthy design
 * - Service categories with icons
 * - Contact form for inquiries
 */

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Calculator, 
  FileText, 
  PieChart, 
  Shield, 
  Building, 
  Receipt,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import { toast } from "sonner";

const services = [
  {
    id: 1,
    category: "Tax Agent & Agency",
    icon: Receipt,
    items: ["Tax Consultancy", "Tax Planning", "Penalty Reconsideration"],
    color: "from-[oklch(0.45_0.15_280)] to-[oklch(0.55_0.15_280)]",
  },
  {
    id: 2,
    category: "Audit & Assurance",
    icon: Shield,
    items: ["Internal Audit", "Stock Audit"],
    color: "from-[oklch(0.50_0.15_250)] to-[oklch(0.60_0.15_220)]",
  },
  {
    id: 3,
    category: "Software Solutions",
    icon: Building,
    items: ["Accounting Software", "POS Software", "Customized ERP Software"],
    color: "from-[oklch(0.55_0.15_220)] to-[oklch(0.65_0.15_185)]",
  },
  {
    id: 4,
    category: "Financial Analysis & Advising",
    icon: PieChart,
    items: ["Cash Flow Management", "Stock Management", "Operations Management", "Financial Management"],
    color: "from-[oklch(0.60_0.15_200)] to-[oklch(0.65_0.15_185)]",
  },
  {
    id: 5,
    category: "VAT Services",
    icon: FileText,
    items: ["VAT Registration in UAE", "VAT/TRN De-Registration", "VAT Return Filing", "FTA Account Amendments"],
    color: "from-[oklch(0.65_0.15_185)] to-[oklch(0.55_0.12_160)]",
  },
  {
    id: 6,
    category: "Accounting & Bookkeeping",
    icon: Calculator,
    items: ["Financial Reporting", "Payroll Accounting", "Data Entry", "General Book Keeping", "CFO Services"],
    color: "from-[oklch(0.55_0.12_160)] to-[oklch(0.45_0.15_280)]",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = service.icon;

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
        className="h-full bg-[oklch(0.15_0.025_260)] rounded-xl overflow-hidden border border-[oklch(0.28_0.03_260)] hover:border-[oklch(0.65_0.15_185)] transition-colors"
      >
        {/* Header with gradient */}
        <div className={`p-6 bg-gradient-to-r ${service.color}`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-heading text-xl text-white">
              {service.category}
            </h3>
          </div>
        </div>
        
        {/* Services List */}
        <div className="p-6">
          <ul className="space-y-3">
            {service.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="flex items-center gap-3 text-white/70"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.15_185)]" />
                <span className="text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Financial() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

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
              <span className="text-white font-semibold">Zyva Financial</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.45_0.15_280)]/20 via-[oklch(0.10_0.02_260)] to-[oklch(0.65_0.15_185)]/20" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[oklch(0.45_0.15_280)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[oklch(0.65_0.15_185)]/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[oklch(0.65_0.15_185)] uppercase tracking-widest text-sm font-medium">
              Zyva Financial
            </span>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-white mt-4">
              FINANCIAL<br />
              <span className="text-zyva-gradient">SOLUTIONS</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mt-6">
              Empowering Financial Confidence with Expert Accounting & Tax Solutions. 
              Our financial advisory can support your business and fuel its success.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[oklch(0.65_0.15_185)] uppercase tracking-widest text-sm font-medium">
              What We Offer
            </span>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-white mt-4">
              OUR <span className="text-zyva-gradient">SERVICES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[oklch(0.08_0.015_260)]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display text-4xl md:text-5xl text-white">
                TALK TO OUR <span className="text-zyva-gradient">EXPERTS</span>
              </h2>
              <p className="text-white/60 mt-4">
                Get in touch with Zyva Solutions for any inquiries or assistance
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zyva-gradient flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <p className="text-white/60">contact@zyvasolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zyva-gradient flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <p className="text-white/60">+971 50 901 1323</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zyva-gradient flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Address</h3>
                      <p className="text-white/60">
                        Office no. 1152, Tower 2, Mazyad Mall,<br />
                        Mussafah, Abu Dhabi, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[oklch(0.15_0.025_260)] border border-[oklch(0.28_0.03_260)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[oklch(0.65_0.15_185)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[oklch(0.15_0.025_260)] border border-[oklch(0.28_0.03_260)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[oklch(0.65_0.15_185)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full bg-[oklch(0.15_0.025_260)] border border-[oklch(0.28_0.03_260)] rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-[oklch(0.65_0.15_185)] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-zyva-gradient text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
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
