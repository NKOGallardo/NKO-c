import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "R500 – R1,000",
    popular: false,
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "Social media links",
    ],
  },
  {
    name: "Standard",
    price: "R1,500 – R3,000",
    popular: true,
    features: [
      "6–10 pages",
      "Custom branding & layout",
      "Enhanced SEO",
      "Google Analytics",
      "Interactive elements",
      "Portfolio or blog setup",
    ],
  },
  {
    name: "Premium",
    price: "R5,000 – R10,000+",
    popular: false,
    features: [
      "10+ fully customized pages",
      "Advanced UI/UX animations",
      "Full SEO & performance optimization",
      "Multiple forms & dashboards",
      "Premium design",
      "Optional content creation",
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="section-padding max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4 block">
        Pricing
      </span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        Choose Your Plan
      </h2>
      <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
        Transparent pricing for every project size. All plans include free
        consultation.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className={`relative rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
            plan.popular
              ? "bg-primary/5 border-2 border-primary/40 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.25)]"
              : "glass-card-hover"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                <Star className="w-3 h-3" /> Most Popular
              </span>
            </div>
          )}

          <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-6">
            {plan.price}
          </p>

          <ul className="space-y-3 mb-8 flex-1">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className={`text-center py-3.5 rounded-xl font-medium transition-all duration-300 ${
              plan.popular
                ? "bg-primary text-primary-foreground hover:opacity-90 glow-sm"
                : "border border-border hover:border-primary/40 text-foreground"
            }`}
          >
            Get Started
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PricingSection;
