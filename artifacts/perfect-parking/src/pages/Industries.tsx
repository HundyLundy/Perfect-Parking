import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Building, Hospital, CarFront, Users, Home as HomeIcon, GraduationCap, Truck, Plane, ArrowRight, LayoutGrid, ShoppingBag } from "lucide-react";
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
      id: "multifamily",
      title: "Multifamily & Apartments",
      icon: HomeIcon,
      problem: "Unauthorized vehicles take spaces meant for residents and guests, creating constant conflict and requiring staff time to manage.",
      opportunity: "Issue digital resident and guest permits, automate enforcement, and generate revenue from overflow or visitor parking.",
      outcome: "Happier residents, zero manual enforcement, and a new monthly income stream from guest and visitor spaces.",
      color: "bg-amber-50 border-amber-100 text-amber-900"
    },
    {
      id: "hoa",
      title: "HOA Communities",
      icon: Users,
      problem: "HOAs struggle to control who parks in community lots, manage guest passes manually, and enforce rules without confrontations.",
      opportunity: "Replace paper permits with digital passes. Authorized residents and their guests are the only ones who can park — enforced automatically.",
      outcome: "Safer, cleaner communities with zero confrontational enforcement and full control over who belongs.",
      color: "bg-rose-50 border-rose-100 text-rose-900"
    },
    {
      id: "cre",
      title: "Commercial Real Estate",
      icon: CarFront,
      problem: "Retail centers and office buildings have massive surface lots that sit empty at night or are abused by non-tenants during the day.",
      opportunity: "Monetize after-hours parking and implement strict but passive tenant-only rules during business hours.",
      outcome: "Enhanced property NOI and increased property valuation through newly discovered ancillary revenue.",
      color: "bg-purple-50 border-purple-100 text-purple-900"
    },
    {
      id: "universities",
      title: "Universities & Student Housing",
      icon: GraduationCap,
      problem: "Campus lots are abused by non-students, visitor overflow is unmanaged, and permit systems are paper-based and slow.",
      opportunity: "Issue digital student, faculty, and visitor permits. Enforce with LPR and collect revenue from non-permit parkers.",
      outcome: "Streamlined campus parking, revenue from unauthorized parkers, and a better campus experience.",
      color: "bg-indigo-50 border-indigo-100 text-indigo-900"
    },
    {
      id: "truck",
      title: "Truck Parking",
      icon: Truck,
      problem: "Truck lots with high demand often have no reliable way to collect payment, enforce occupancy limits, or manage overflow.",
      opportunity: "Deploy QR-based payment at entry points or stalls, with LPR enforcement to ensure compliance and maximize revenue.",
      outcome: "Consistent per-night or hourly revenue, reduced unauthorized stays, and zero manual oversight.",
      color: "bg-slate-50 border-slate-100 text-slate-900"
    },
    {
      id: "airports",
      title: "Airports & Transit Hubs",
      icon: Plane,
      problem: "Off-airport lots and transit hubs have high turnover but outdated payment infrastructure and cash-dependent operations.",
      opportunity: "Modernize with QR and mobile pay technology, real-time availability signage, and digital enforcement.",
      outcome: "Higher revenue capture, cashless operations, and a frictionless traveler experience.",
      color: "bg-sky-50 border-sky-100 text-sky-900"
    }
  ];

  const additionalIndustries = [
    { icon: LayoutGrid, label: "Mixed-Use Developments" },
    { icon: ShoppingBag, label: "Retail Centers" },
  ];

  return (
    <>
      <SEO />

      <section className="bg-brand-teal py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
          >
            Specialized Solutions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Different properties have different rules. We customize our technology to fit your specific operational needs — from HOA communities to airports.
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

          {/* Additional */}
          <div className="border-t border-border mt-24 pt-12">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Also serving</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              {additionalIndustries.map((ind, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted text-left">
                  <ind.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{ind.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted text-left col-span-2 sm:col-span-2">
                <span className="text-sm text-muted-foreground">Don't see your property type? We work with any high-demand parking location.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FOOTER — brand-teal to match hero */}
      <section className="bg-brand-teal py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to monetize your parking?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Tell us about your property and we'll build a custom revenue projection — no commitment required.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="px-10 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg text-lg inline-flex items-center gap-2"
          >
            Get a Custom Audit for Your Property <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
