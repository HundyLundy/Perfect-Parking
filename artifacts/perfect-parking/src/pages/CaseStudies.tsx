import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { ArrowRight, DollarSign, MapPin, Calendar, Users, TrendingUp, BarChart3, Building2 } from "lucide-react";
import { useLocation } from "wouter";

export default function CaseStudies() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEO />

      {/* HERO */}
      <section className="bg-muted py-24 text-center border-b border-border">
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
                src={`${import.meta.env.BASE_URL}parking-dollar.png`}
                alt="Parking Revenue Case Study"
                className="rounded-3xl shadow-2xl border border-border w-full object-cover"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-800 font-semibold text-sm mb-6 border border-green-200">
                <MapPin className="w-4 h-4" /> Wimberley, TX
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Small surface lot becomes a $1k/mo passive asset.</h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The owner of a 50-space lot in Wimberley was frustrated by tourists parking for free on weekends. They didn't want to hire attendants or install expensive gates. We deployed our digital signs and payment system in 48 hours — and now they receive a monthly direct deposit without touching a thing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-2xl bg-muted border border-border">
                  <DollarSign className="w-8 h-8 text-green-700 mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">$1,000</div>
                  <div className="text-sm text-muted-foreground font-medium">Monthly Profit</div>
                </div>
                <div className="p-5 rounded-2xl bg-muted border border-border">
                  <BarChart3 className="w-8 h-8 text-primary mb-3" />
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

              <button
                onClick={() => setLocation("/contact")}
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg inline-flex items-center gap-2"
              >
                Get Your Revenue Audit <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TREND SECTION */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-primary/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Parking is Trending Up.</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              The commercial real estate landscape is shifting. Properties that treat parking as a revenue asset are pulling ahead in net operating income.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: TrendingUp,
                stat: "Significant Growth",
                label: "Monetization Demand",
                desc: "Parking monetization demand has increased significantly since 2020, driven by rising operational costs and asset optimization trends."
              },
              {
                icon: Building2,
                stat: "Majority Underutilized",
                label: "Commercial Properties",
                desc: "A large percentage of commercial properties currently underutilize their parking assets — leaving consistent monthly revenue uncaptured."
              },
              {
                icon: BarChart3,
                stat: "Fast Payback",
                label: "Cash Flow Timeline",
                desc: "Many properties see positive cash flow within months of implementing a structured parking management system."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl"
              >
                <item.icon className="w-10 h-10 text-secondary mb-4" />
                <div className="text-2xl font-display font-bold text-white mb-1">{item.stat}</div>
                <div className="text-secondary font-semibold text-sm mb-4 uppercase tracking-wider">{item.label}</div>
                <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-3xl mx-auto text-center">
            <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-2">Industry Sources</p>
            <p className="text-white/40 text-xs">
              Urban Land Institute (ULI) &nbsp;·&nbsp; Parking Industry Reports &nbsp;·&nbsp; McKinsey & Company &nbsp;·&nbsp; Deloitte Real Estate Outlook
            </p>
            <p className="text-white/30 text-xs mt-2 italic">Statistics represent industry trend data. Specific figures may vary by market and property type.</p>
          </div>
        </div>
      </section>

      {/* EXAMPLE SCENARIOS */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">What could your property earn?</h2>
            <p className="text-xl text-muted-foreground">Based on comparable properties we've worked with across Texas and surrounding markets.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: "Boutique Hotel", spaces: "40–80 spaces", estimate: "$800–$2,000/mo", note: "Downtown or near-attraction location" },
              { type: "Medical Office / Hospital", spaces: "100–300 spaces", estimate: "$2,500–$6,000/mo", note: "High visitor turnover, consistent demand" },
              { type: "Surface Lot / CRE", spaces: "50–150 spaces", estimate: "$1,000–$4,000/mo", note: "Mixed validation and public pay model" }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{s.type}</div>
                <div className="text-3xl font-display font-bold text-green-700 mb-2">{s.estimate}</div>
                <div className="text-sm text-muted-foreground font-medium mb-2">{s.spaces}</div>
                <div className="text-xs text-muted-foreground italic">{s.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">Start Your Success Story Today</h2>
          <p className="text-muted-foreground text-lg mb-10">Join the growing number of property owners turning parking into predictable monthly income.</p>
          <button
            onClick={() => setLocation("/contact")}
            className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg text-lg inline-flex items-center gap-2"
          >
            Get a Free Revenue Audit <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
