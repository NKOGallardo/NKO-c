import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const [state, handleSubmit] = useForm("xkgqzzky");

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-mono text-primary tracking-widest uppercase mb-4 block">
          Contact
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Let's Work Together
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            Ready to start your next project? Get in touch and let's discuss how
            we can bring your vision to life.
          </p>

          <div className="space-y-6">
            {[
              { icon: Mail, text: "hello@nkocoding.com" },
              { icon: Phone, text: "+27 XX XXX XXXX" },
              { icon: MapPin, text: "South Africa" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 space-y-6"
        >
          {state.succeeded ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <CheckCircle className="w-16 h-16 text-primary" />
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <p className="text-muted-foreground text-center">We'll get back to you soon.</p>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="your@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity glow-sm disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
