import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Building, Hospital, Home as HomeIcon, ShoppingBag, Landmark, LayoutGrid, Music, Footprints } from "lucide-react";
import { useLocation } from "wouter";

export default function Education() {
  const [, setLocation] = useLocation();

  const candidates = [
    { icon: Building, label: "Hotels & Resorts", desc: "High guest turnover, urban/near-attraction locations, existing parking infrastructure." },
    { icon: Hospital, label: "Hospitals & Medical", desc: "Constant visitor demand, restricted street parking, multiple entry/exit points." },
    { icon: HomeIcon, label: "Multifamily / Apartments", desc: "Guest parking overflow, unassigned spaces, per-night or visitor monetization." },
    { icon: ShoppingBag, label: "Retail Centers", desc: "Adjacent street demand, validated merchant programs, event-day overflow." },
    { icon: Landmark, label: "Office Buildings", desc: "After-hours and weekend surface lot utilization, structured tenant programs." },
    { icon: LayoutGrid, label: "Mixed-Use Developments", desc: "Shared parking pools across retail, residential, and office users." },
    { icon: Music, label: "Event-Driven Locations", desc: "Stadiums, concert venues, fairgrounds — high-volume surge monetization." },
    { icon: Footprints, label: "High Foot Traffic Areas", desc: "Tourist corridors, downtown districts, waterfront properties, and marinas." }
  ];

  return (
    <>
      <SEO
        keywords="parking management, parking revenue, monetize parking, parking solutions for hotels, hospital parking revenue"
      />

      {/* HERO */}
      <section className="bg-navy py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-primary/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
            The Complete Guide to Parking Monetization.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about turning your asphalt into a revenue-generating asset — without lifting a finger.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-blue max-w-none">

            <h2 className="text-3xl font-display font-bold text-foreground mt-8 mb-4">Why parking is an underutilized asset</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For decades, commercial property owners viewed parking strictly as an amenity — a cost center to be paved, striped, and maintained with no direct return on investment. Today, urban density, remote work patterns, and digital payment technology have fundamentally changed the equation. Parking spaces in high-demand areas are now one of the most underexploited micromarket real estate opportunities available to owners.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike other asset improvements, parking monetization requires little capital, no construction, and generates returns almost immediately after deployment.
            </p>

            <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-4">How owners lose money today</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              There are two primary types of parking revenue leakage:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
              <li><strong className="text-foreground">Unauthorized use:</strong> Third parties using your lot to visit adjacent businesses or neighborhoods, taking spaces from paying guests or tenants without any compensation to you.</li>
              <li><strong className="text-foreground">Uncollected premiums:</strong> Offering free parking in high-demand corridors where consumers actively expect, and are willing, to pay for the convenience of a dedicated space.</li>
              <li><strong className="text-foreground">Dispute and enforcement costs:</strong> Staff time spent managing confrontations, towing disputes, and unauthorized vehicle removal — all adding hidden operational costs.</li>
            </ul>

            <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-4">How modern monetization actually works</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Modern systems do not rely on boom gates, ticket spitters, or attendants. They use high-visibility signage combined with QR codes and text-to-pay technology — allowing any driver with a smartphone to pay in under 60 seconds.
            </p>
            <div className="bg-muted p-6 rounded-xl border border-border my-8">
              <h3 className="font-bold text-foreground mb-3 text-lg">The Digital Workflow:</h3>
              <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
                <li>Driver pulls into parking space.</li>
                <li>Driver scans QR code displayed prominently on the signage in front of them.</li>
                <li>Driver enters their license plate and pays via Apple Pay, Google Pay, or credit card — no app download required.</li>
                <li>License Plate Recognition (LPR) cameras or digital enforcement partners verify payment compliance automatically.</li>
                <li>Unpaid vehicles receive violation notices — your staff never confronts a driver.</li>
              </ol>
            </div>

            <h2 className="text-3xl font-display font-bold text-foreground mt-12 mb-4">Is your property a good candidate?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The strongest candidates share one trait: they have parking demand they are currently not capturing revenue from. If your lot has unauthorized parkers, high turnover, or sits near a major attraction, hospital, or commercial corridor — you almost certainly have an untapped revenue opportunity. Below are the property types we work with most frequently:
            </p>
          </div>
        </div>

        {/* CANDIDATE GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidates.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-muted rounded-xl p-6 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <c.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-2">{c.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-blue max-w-none">
            <h2 className="text-3xl font-display font-bold text-foreground mt-4 mb-4">Frequently Asked Questions</h2>

            <div className="space-y-8">
              {[
                {
                  q: "Do I need to replace my existing gates or infrastructure?",
                  a: "No — in many cases, we integrate with what you already have. Our integration-first approach is designed to work alongside existing gates, access systems, and property management platforms."
                },
                {
                  q: "How long does it take to set up?",
                  a: "Most properties are fully operational within 30 days of signing. Simple surface lots with no existing infrastructure can be live in as little as 48–72 hours."
                },
                {
                  q: "What happens if someone doesn't pay?",
                  a: "Our system automatically identifies unpaid vehicles through LPR technology and issues digital violation notices through our enforcement partners. You are never involved in confrontations."
                },
                {
                  q: "How does the revenue share work?",
                  a: "We handle the setup, operations, enforcement, and reporting. You receive a transparent monthly revenue share via direct deposit. The exact structure depends on your property type and arrangement."
                }
              ].map((faq, i) => (
                <div key={i} className="border border-border rounded-xl p-6 bg-muted">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{faq.q}</h4>
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted border-t border-border text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Ready to find out what your parking is worth?</h2>
          <p className="text-muted-foreground text-lg mb-8">Book a free 15-minute analysis and we'll show you the numbers.</p>
          <button
            onClick={() => setLocation("/contact")}
            className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg text-lg inline-flex items-center gap-2"
          >
            Book a Free Analysis <BookOpen className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
