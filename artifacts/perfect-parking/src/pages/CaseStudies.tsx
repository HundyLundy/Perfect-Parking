import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { ArrowRight, DollarSign, MapPin, Calendar, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function CaseStudies() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEO 
        title="Case Studies | Perfect Parking" 
        description="Read how we helped properties turn their empty spaces into $1,000+ monthly profit centers."
      />

      {/* HERO */}
      <section className="bg-muted py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Real Results from Real Properties.</h1>
          <p className="text-xl text-muted-foreground">Discover how our partners stopped leaving money on the table.</p>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img 
                src={`${import.meta.env.BASE_URL}boat-ramp.jpeg`} 
                alt="Wimberley Parking Lot" 
                className="rounded-3xl shadow-2xl border border-border"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6">
                <MapPin className="w-4 h-4" /> Wimberley, TX
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Small surface lot becomes a $1k/mo passive asset.</h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The owner of a 50-space lot in Wimberley was frustrated by tourists parking for free on weekends. They didn't want to hire attendants or install expensive gates. We deployed our digital signs in 48 hours.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-2xl bg-muted border border-border">
                  <DollarSign className="w-8 h-8 text-accent mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">$1,000</div>
                  <div className="text-sm text-muted-foreground font-medium">Monthly Profit</div>
                </div>
                <div className="p-5 rounded-2xl bg-muted border border-border">
                  <CarFrontIcon className="w-8 h-8 text-primary mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">50</div>
                  <div className="text-sm text-muted-foreground font-medium">Parking Spaces</div>
                </div>
                <div className="p-5 rounded-2xl bg-muted border border-border">
                  <Calendar className="w-8 h-8 text-secondary mb-3" />
                  <div className="text-xl font-bold text-foreground mb-1">Weekends</div>
                  <div className="text-sm text-muted-foreground font-medium">Active Operation</div>
                </div>
                <div className="p-5 rounded-2xl bg-muted border border-border">
                  <Users className="w-8 h-8 text-navy mb-3" />
                  <div className="text-xl font-bold text-foreground mb-1">Zero</div>
                  <div className="text-sm text-muted-foreground font-medium">Staff Required</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TREND SECTION */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Parking is Trending Up.</h2>
            <p className="text-xl text-white/70">The commercial real estate landscape is shifting. Owners who monetize their parking drastically outpace their competitors in NOI.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "40%", label: "Demand Increase", desc: "Digital parking monetization demand has surged since 2020." },
              { stat: "78%", label: "Underutilized Lots", desc: "Over 3/4 of commercial properties leave parking money on the table." },
              { stat: "6-12 mo", label: "Average ROI", desc: "Most properties see immediate cash flow within the first month." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl glass-panel-dark"
              >
                <div className="text-5xl font-display font-bold text-secondary mb-4">{item.stat}</div>
                <div className="text-xl font-bold text-white mb-2">{item.label}</div>
                <div className="text-white/60">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-display font-bold mb-8">Start Your Success Story Today</h2>
        <button 
          onClick={() => setLocation("/contact")}
          className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg text-lg inline-flex items-center gap-2"
        >
          Get a Free Revenue Audit <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </>
  );
}

function CarFrontIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.6 5H8.4a2 2 0 0 0-1.9 1.3L5 10 3 8"/><path d="M3 10v6c0 1.1.9 2 2 2h.5c.5 0 .9-.4.9-.9v-1.2c0-.5.4-.9.9-.9h9.4c.5 0 .9.4.9.9v1.2c0 .5.4.9.9.9H19c1.1 0 2-.9 2-2v-6"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg>;
}
