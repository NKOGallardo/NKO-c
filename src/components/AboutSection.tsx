import { motion } from "framer-motion";
import { Code2, Users, Trophy, Clock } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Trophy, value: "3+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const AboutSection = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4 block">
          About Us
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Building the future,
          <br />
          one line at a time.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          NKO CODING is a premium web development studio focused on creating
          fast, modern, and powerful digital experiences. We work with
          businesses, startups, creators, schools, and organizations to bring
          ideas to life with clean code and beautiful design.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our approach combines cutting-edge technology with a deep
          understanding of our clients' needs. Every project is treated as a
          partnership, ensuring results that exceed expectations.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-6"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className="glass-card-hover p-6 text-center"
          >
            <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <p className="text-3xl font-bold mb-1">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
