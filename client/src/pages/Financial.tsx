/**
 * Zyva Financial Solutions Page
 * Design: Professional financial services with hero banner, about section, services with images
 * Colors: Purple (#6B46C1) to Teal (#14B8A6) gradient
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, 
  ArrowRight,
  Calculator, 
  FileText, 
  Shield, 
  Monitor,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Quote
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

const services = [
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    description: "Comprehensive financial reporting, payroll accounting, data entry, and CFO services to keep your business finances in perfect order.",
    image: "/images/service-accounting.jpg",
    icon: Calculator,
    features: ["Financial Reporting", "Payroll Accounting", "Data Entry", "CFO Services"]
  },
  {
    id: "vat",
    title: "VAT Services",
    description: "Complete VAT solutions including registration, de-registration, return filing, and FTA account amendments for UAE businesses.",
    image: "/images/service-vat.jpg",
    icon: FileText,
    features: ["VAT Registration", "VAT Return Filing", "TRN De-Registration", "FTA Amendments"]
  },
  {
    id: "audit",
    title: "Audit & Assurance",
    description: "Professional internal and stock audit services to ensure compliance and provide assurance on your financial statements.",
    image: "/images/service-audit.jpg",
    icon: Shield,
    features: ["Internal Audit", "Stock Audit", "Compliance Review", "Risk Assessment"]
  },
  {
    id: "software",
    title: "Accounting Software",
    description: "Implementation of modern accounting software, POS systems, and customized ERP solutions tailored to your business needs.",
    image: "/images/service-software.jpg",
    icon: Monitor,
    features: ["Accounting Software", "POS Software", "Customized ERP", "Cloud Solutions"]
  },
  {
    id: "tax",
    title: "Tax Agent & Consultancy",
    description: "Expert tax consultancy, strategic tax planning, and penalty reconsideration services to optimize your tax position.",
    image: "/images/service-tax.jpg",
    icon: Users,
    features: ["Tax Consultancy", "Tax Planning", "Penalty Reconsideration", "Excise Tax"]
  }
];

const values = [
  { title: "Integrity", description: "We maintain the highest ethical standards in all our dealings" },
  { title: "Transparency", description: "Clear communication and honest reporting at every step" },
  { title: "Excellence", description: "Committed to delivering exceptional quality in every service" },
  { title: "Trust", description: "Building long-term relationships based on mutual respect" }
];

export default function Financial() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
            <span className="font-semibold">Financial Solutions</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img 
            src="/images/financial-hero.jpg" 
            alt="Financial Solutions" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                Professional Financial Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              We Focus on{" "}
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Your Tomorrow
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 mb-8"
            >
              Let us handle your finances, so you can focus on your business. 
              Trust us to manage your finance department with integrity and expertise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Our Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/images/financial-about.jpg" 
                  alt="About Zyva Financial" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-purple-600 to-teal-500 p-6 rounded-2xl shadow-2xl max-w-xs"
              >
                <Quote className="w-8 h-8 text-white/50 mb-3" />
                <p className="text-white text-sm italic">
                  "We help people and small businesses to see the bigger picture."
                </p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-teal-400 text-sm uppercase tracking-wider font-medium">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Your Trusted Financial Partner
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                ZYVA Financial Solutions is a leading financial services provider that offers a wide range 
                of financial solutions to individuals, businesses, and institutions. Our company is committed 
                to providing innovative and customized financial solutions to meet the diverse needs of our clients.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our team consists of licensed professionals with a wealth of knowledge and experience in the 
                financial industry. We take a holistic approach to financial planning and work closely with 
                our clients to understand their unique needs and goals.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">{value.title}</h4>
                      <p className="text-slate-500 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-teal-400 text-sm uppercase tracking-wider font-medium">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your business needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-2xl group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-teal-400 text-sm uppercase tracking-wider font-medium">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Let's Discuss Your Financial Needs
              </h2>
              <p className="text-slate-400 text-lg mb-8">
                Ready to take control of your finances? Contact us today for a free consultation 
                and discover how we can help your business grow.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-slate-400">+971 50 901 1323</p>
                    <p className="text-slate-400">+971 56 553 9356</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-slate-400">contact@zyvasolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-slate-400">
                      Beside Mazyad Mall, Mohammed Bin Zayed City,<br />
                      Mussafah, Abu Dhabi, UAE
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-slate-900/50 rounded-2xl p-8 border border-white/5">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                      placeholder="Tell us about your financial needs..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-teal-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/ZYVA-PNG.png" alt="Zyva" className="w-8 h-8" />
              <span className="font-semibold">Zyva Financial Solutions</span>
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
