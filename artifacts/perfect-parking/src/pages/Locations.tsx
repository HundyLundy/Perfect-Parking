import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const majorMarkets = [
  { city: "Houston",       state: "TX", note: "Texas Medical Center · Hotels · CRE · Multifamily" },
  { city: "San Antonio",   state: "TX", note: "HOA · Healthcare · Multifamily · Commercial" },
  { city: "Dallas",        state: "TX", note: "CRE · Hotels · Mixed-Use · Airports" },
  { city: "Austin",        state: "TX", note: "Hotels · Student Housing · Mixed-Use" },
  { city: "Fort Worth",    state: "TX", note: "CRE · Hotels · Multifamily" },
  { city: "El Paso",       state: "TX", note: "Military · CRE · Retail" },
  { city: "Corpus Christi",state: "TX", note: "Marina · Hotels · Coastal CRE" },
  { city: "Laredo",        state: "TX", note: "Truck Parking · Border · CRE" },
];

// 20 markets — 20 ÷ 4 = 5 perfect desktop rows, 20 ÷ 2 = 10 perfect mobile rows
const texasMarkets = [
  { city: "Port Aransas",      tag: "Hotels / Tourism" },
  { city: "South Padre Island", tag: "Hotels / Tourism" },
  { city: "McAllen",           tag: "Retail / Hotels" },
  { city: "Brownsville",       tag: "Border / CRE" },
  { city: "Harlingen",         tag: "Healthcare / CRE" },
  { city: "Galveston",         tag: "Hotels / Tourism" },
  { city: "Victoria",          tag: "Healthcare / CRE" },
  { city: "Kingsville",        tag: "University / CRE" },
  { city: "Flour Bluff",       tag: "Coastal / Military" },
  { city: "Calallen",          tag: "Suburban / CRE" },
  { city: "Robstown",          tag: "Retail / CRE" },
  { city: "Lubbock",           tag: "University / Hotels" },
  { city: "Waco",              tag: "Tourism / University" },
  { city: "Beaumont",          tag: "Healthcare / Industrial" },
  { city: "Tyler",             tag: "Healthcare / Hotels" },
  { city: "San Marcos",        tag: "University / Tourism" },
  { city: "New Braunfels",     tag: "Tourism / Hotels" },
  { city: "Aransas Pass",      tag: "Marina / Coastal" },
  { city: "Round Rock",        tag: "Multifamily / CRE" },
  { city: "Midland",           tag: "Energy / CRE" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function Locations() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEO
        title="Locations We Serve | Parking Management Texas"
        description="Perfect Parking provides automated parking revenue management across Texas — Houston, San Antonio, Dallas, Austin, Fort Worth, El Paso, Corpus Christi, and dozens of growing Texas markets."
        keywords="parking management Texas, parking management San Antonio, parking management Corpus Christi, parking management Austin, parking management Houston, parking management Dallas, HOA parking Texas, hotel parking Texas"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Perfect Parking",
            "url": "https://www.perfectparking.com",
            "telephone": "(361) 585-1111",
            "email": "info@perfectparking.com",
            "areaServed": [
              ...majorMarkets.map((m) => ({ "@type": "City", "name": m.city + ", TX" })),
              ...texasMarkets.map((m) => ({ "@type": "City", "name": m.city + ", TX" })),
            ],
            "serviceType": "Parking Revenue Management",
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white/80">
              <MapPin className="w-4 h-4 text-secondary" /> Where We Operate
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Parking Revenue Management<br />
              <span className="text-secondary">Across Texas.</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              From major metros to coastal towns, we partner with property owners across the state to turn underutilized parking into passive monthly income.
            </p>
          </motion.div>
        </div>
      </section>

      {/* UNIFIED MARKETS — city skyline background */}
      <section className="relative overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}city-skyline.jpg`}
            alt="Texas city skyline"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/45 to-navy/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          {/* LARGE MARKET CARDS — 8 cities, 4-col desktop (2 even rows), 2-col mobile (4 even rows) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {majorMarkets.map((market, i) => (
              <motion.div
                key={market.city}
                {...fadeIn}
                transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white/22 backdrop-blur-sm hover:bg-white/30 hover:border-secondary/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 p-6"
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 animate-pulse" />
                  <span className="text-xs font-bold text-green-300 uppercase tracking-wide">Active</span>
                </div>
                <div className="text-xl font-display font-bold text-white mb-0.5 leading-tight group-hover:text-secondary transition-colors">
                  {market.city}
                </div>
                <div className="text-xs font-semibold text-white/50 mb-3">{market.state}</div>
                <div className="text-xs text-white/60 leading-relaxed">{market.note}</div>
              </motion.div>
            ))}
          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/15 mb-6" />

          {/* SMALL MARKET TILES — 20 cities, 4-col desktop (5 even rows), 2-col mobile (10 even rows) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {texasMarkets.map((m, i) => (
              <motion.div
                key={m.city}
                {...fadeIn}
                transition={{ delay: i * 0.025 }}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/25 rounded-xl px-4 py-3 hover:bg-white/28 hover:border-white/35 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-white leading-tight">{m.city}</div>
                  <div className="text-xs text-white/45 mt-0.5">{m.tag}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-secondary mb-2">28+</div>
              <div className="text-white/70 font-medium">Texas Markets Served</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-secondary mb-2">$1M+</div>
              <div className="text-white/70 font-medium">Revenue Generated for Partners</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-secondary mb-2">50+</div>
              <div className="text-white/70 font-medium">Managed Locations Statewide</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Don't see your city?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We evaluate new markets quickly. If your property has consistent parking demand, reach out and we'll run the numbers.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg"
          >
            Tell Us About Your Property <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
