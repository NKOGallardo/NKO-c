import { motion } from "framer-motion";
import { Globe, Smartphone, Search, Palette, Zap, Shield } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Custom websites and web apps built with modern technologies for speed and reliability." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts that look stunning on every device, from mobile to desktop." },
  { icon: Search, title: "SEO Optimization", desc: "Search engine strategies that drive organic traffic and improve your online visibility." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces crafted with user experience at the forefront of every decision." },
  { icon: Zap, title: "Performance", desc: "Lightning-fast load times and optimized code for the best user experience." },
  { icon: Shield, title: "Maintenance & Support", desc: "Ongoing support and updates to keep your digital presence secure and current." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4 block">
        What We Do
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Services
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card-hover p-8 group"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
