import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    desc: "A full-featured online store with payment integration and inventory management.",
  },
  {
    title: "School Portal",
    category: "Education",
    desc: "Student management system with real-time grades, attendance, and communication tools.",
  },
  {
    title: "Startup Landing Page",
    category: "Marketing",
    desc: "High-conversion landing page with animations, analytics, and lead capture forms.",
  },
  {
    title: "Portfolio Website",
    category: "Creative",
    desc: "Sleek portfolio showcasing photography, design work, and case studies.",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4 block">
        Our Work
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Featured Projects
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="glass-card-hover p-8 group cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <span className="text-xs font-mono text-primary tracking-wider uppercase">
              {p.category}
            </span>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
