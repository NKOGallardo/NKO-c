import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-background/70" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm text-sm text-muted-foreground">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Available for new projects
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8"
      >
        We build fast, modern
        <br />
        <span className="text-gradient">&amp; powerful</span> digital
        <br />
        experiences.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
      >
        Premium web development for businesses, startups, creators, and
        organizations. From concept to launch.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#contact"
          className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all duration-300 glow-sm hover:glow-md"
        >
          Start a Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#projects"
          className="flex items-center gap-2 border border-border/50 bg-card/30 backdrop-blur-sm px-8 py-4 rounded-xl font-medium text-lg text-foreground hover:border-primary/40 transition-all duration-300"
        >
          View Our Work
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
