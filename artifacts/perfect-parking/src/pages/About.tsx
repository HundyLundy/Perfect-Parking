import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Target, Zap, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO title="About Us | Perfect Parking" description="Meet the team behind Perfect Parking." />
      
      <section className="py-24 bg-muted text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-display font-bold text-foreground mb-6">Operators and problem-solvers, not corporate consultants.</h1>
          <p className="text-xl text-muted-foreground">
            We are a team of real estate and technology operators dedicated to unlocking the hidden value in commercial properties.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4">Our Leadership</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Hunter Lundquist', 'Cooper Lundquist', 'Ray Euresti'].map((name, i) => (
              <motion.div 
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted rounded-2xl p-8 text-center border border-border"
              >
                <div className="w-24 h-24 mx-auto bg-primary/10 text-primary font-display font-bold text-2xl flex items-center justify-center rounded-full mb-6">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
                <p className="text-muted-foreground text-sm">Co-Founder</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel-dark p-8 rounded-2xl text-center">
              <Target className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Turnkey Execution</h3>
              <p className="text-white/70">We handle everything so our partners can focus on their core business.</p>
            </div>
            <div className="glass-panel-dark p-8 rounded-2xl text-center">
              <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tech-First</h3>
              <p className="text-white/70">We believe hardware is dead. Software solves parking better.</p>
            </div>
            <div className="glass-panel-dark p-8 rounded-2xl text-center">
              <ShieldCheck className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Total Transparency</h3>
              <p className="text-white/70">Live dashboards and honest reporting. You see what we see.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
