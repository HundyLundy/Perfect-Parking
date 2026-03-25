import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Building, Hospital, CarFront, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Industries() {
  const [, setLocation] = useLocation();

  const industries = [
    {
      id: "hotels",
      title: "Hotels & Resorts",
      icon: Building,
      problem: "Hotels often give parking away for free or rely on outdated front-desk registration systems that cause revenue leakage and guest frustration.",
      opportunity: "Convert your surface lot or garage into an organized digital asset where non-guests pay market rate and guests are validated effortlessly.",
      outcome: "Increased RevPAR, reduced front-desk friction, and elimination of unauthorized parking.",
      color: "bg-blue-50 border-blue-100 text-blue-900"
    },
    {
      id: "hospitals",
      title: "Healthcare Facilities",
      icon: Hospital,
      problem: "Hospitals struggle to balance free staff parking with paid visitor parking, often leading to doctors unable to find spots.",
      opportunity: "Implement digital registries for staff while monetizing visitor parking seamlessly via QR codes.",
      outcome: "Protected staff parking, organized visitor flow, and a new funding stream for hospital operations.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-900"
    },
    {
      id: "cre",
      title: "Commercial Real Estate",
      icon: CarFront,
      problem: "Retail centers and office buildings have massive surface lots that sit empty at night or are abused by non-tenants during the day.",
      opportunity: "Monetize after-hours parking and implement strict but passive tenant-only rules during business hours.",
      outcome: "Enhanced property NOI and increased property valuation through newly discovered ancillary revenue.",
      color: "bg-purple-50 border-purple-100 text-purple-900"
    }
  ];

  return (
    <>
      <SEO 
        title="Industries We Serve | Perfect Parking" 
        description="Tailored parking monetization solutions for Hotels, Hospitals, and Commercial Real Estate."
      />

      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Specialized Solutions.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Different properties have different rules. We customize our technology to fit your specific operational needs.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid lg:grid-cols-12 gap-12 items-start"
              >
                <div className="lg:col-span-4 lg:sticky lg:top-32">
                  <div className={`p-6 rounded-2xl inline-flex mb-6 ${ind.color}`}>
                    <ind.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">{ind.title}</h2>
                  <button 
                    onClick={() => setLocation("/contact")}
                    className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Get a custom audit <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="lg:col-span-8 space-y-6">
                  <div className="bg-muted p-8 rounded-2xl border border-border">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">The Problem</h3>
                    <p className="text-lg text-foreground leading-relaxed">{ind.problem}</p>
                  </div>
                  <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-3">The Opportunity</h3>
                    <p className="text-lg text-foreground leading-relaxed">{ind.opportunity}</p>
                  </div>
                  <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-3">The Outcome</h3>
                    <p className="text-lg text-foreground font-medium leading-relaxed">{ind.outcome}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
