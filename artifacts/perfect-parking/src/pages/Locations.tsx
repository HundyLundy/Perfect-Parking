import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";

const primaryMarkets = [
  {
    city: "San Antonio, TX",
    description: "Our home market. Active partners across multifamily communities, HOAs, healthcare campuses, and commercial real estate throughout the greater San Antonio area.",
    industries: ["Multifamily", "HOA", "Healthcare", "CRE"],
  },
  {
    city: "Austin, TX",
    description: "Serving hotels, mixed-use developments, and student housing in one of the fastest-growing urban parking markets in the country.",
    industries: ["Hotels", "Mixed-Use", "Student Housing"],
  },
  {
    city: "Houston, TX",
    description: "Houston's sprawling commercial real estate landscape and large Texas Medical Center make it a prime market for automated parking revenue optimization.",
    industries: ["CRE", "Healthcare", "Hotels", "Retail"],
  },
  {
    city: "Corpus Christi, TX",
    description: "Coastal hospitality, marina facilities, and waterfront commercial properties are actively partnering with Perfect Parking in the Coastal Bend.",
    industries: ["Hotels", "Marinas", "CRE", "Multifamily"],
  },
  {
    city: "Dallas / Fort Worth, TX",
    description: "The DFW metroplex's density of commercial office parks, hotels, and multifamily developments makes it a high-opportunity expansion market.",
    industries: ["CRE", "Hotels", "Multifamily", "Airports"],
  },
  {
    city: "Texas Hill Country",
    description: "Event venues, weekend tourism destinations, and boat ramps in the Hill Country corridor — including our verified Wimberley case study property.",
    industries: ["Event Venues", "Marinas", "Tourism"],
  },
  {
    city: "Laredo, TX",
    description: "Truck parking and commercial logistics are high-demand use cases in the Laredo border corridor, with consistent daily volume year-round.",
    industries: ["Truck Parking", "CRE"],
  },
];

const coastalMarkets = [
  { city: "Flour Bluff, TX", tag: "Coastal / Military" },
  { city: "Calallen, TX", tag: "Suburban / CRE" },
  { city: "Portland, TX", tag: "Industrial / CRE" },
  { city: "Aransas Pass, TX", tag: "Marina / Tourism" },
  { city: "Port Aransas, TX", tag: "Hotels / Tourism" },
  { city: "Rockport, TX", tag: "Marina / Hotels" },
  { city: "Kingsville, TX", tag: "University / CRE" },
  { city: "Alice, TX", tag: "CRE / Retail" },
  { city: "Brownsville, TX", tag: "Border / CRE" },
  { city: "McAllen, TX", tag: "Retail / Hotels" },
  { city: "Harlingen, TX", tag: "Healthcare / CRE" },
  { city: "South Padre Island, TX", tag: "Hotels / Tourism" },
  { city: "Victoria, TX", tag: "Healthcare / CRE" },
  { city: "Beeville, TX", tag: "CRE / Retail" },
  { city: "Robstown, TX", tag: "Retail / CRE" },
];

const stateMarkets = [
  { city: "El Paso, TX", tag: "Major Market" },
  { city: "Lubbock, TX", tag: "University / CRE" },
  { city: "Amarillo, TX", tag: "Hotels / CRE" },
  { city: "Waco, TX", tag: "University / Tourism" },
  { city: "Midland / Odessa, TX", tag: "CRE / Hotels" },
  { city: "Beaumont, TX", tag: "Healthcare / CRE" },
  { city: "Tyler, TX", tag: "Healthcare / Hotels" },
  { city: "Abilene, TX", tag: "Military / CRE" },
  { city: "Wichita Falls, TX", tag: "Military / CRE" },
  { city: "San Marcos, TX", tag: "University / Hotels" },
  { city: "New Braunfels, TX", tag: "Tourism / Hotels" },
  { city: "College Station, TX", tag: "University / CRE" },
  { city: "Round Rock, TX", tag: "Multifamily / CRE" },
  { city: "Georgetown, TX", tag: "HOA / Multifamily" },
  { city: "Killeen / Fort Cavazos, TX", tag: "Military / Multifamily" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

export default function Locations() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEO
        title="Locations We Serve | Parking Management Texas"
        description="Perfect Parking provides automated parking revenue management in San Antonio, Austin, Houston, Corpus Christi, Dallas-Fort Worth, the Texas Gulf Coast, South Texas, and across the state. Expanding nationally."
        keywords="parking management Texas, parking management San Antonio, parking management Corpus Christi, parking management Austin, parking management Houston, HOA parking Texas, hotel parking Texas, Flour Bluff parking, Port Aransas parking, South Padre Island parking"
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
              ...primaryMarkets.map(m => ({ "@type": "City", "name": m.city })),
              ...coastalMarkets.map(m => ({ "@type": "City", "name": m.city })),
              ...stateMarkets.map(m => ({ "@type": "City", "name": m.city }))
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
              <TrendingUp className="w-4 h-4 text-secondary" /> Texas-Born. Fast-Growing.
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Parking Management<br />
              <span className="text-secondary">Across Texas</span> — and Growing Fast.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We are rooted in Texas and expanding aggressively. From major metros to small coastal towns, Perfect Parking is bringing passive parking revenue to property owners across the state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PRIMARY MARKETS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Major Markets</p>
            <h2 className="text-3xl font-display font-bold text-foreground">Primary Service Areas</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryMarkets.map((market, i) => (
              <motion.div
                key={market.city}
                {...fadeIn}
                transition={{ delay: i * 0.07 }}
                className="p-7 rounded-2xl border border-border bg-white hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{market.city}</h3>
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full mt-1">
                      ● Active Market
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{market.description}</p>
                <div className="flex flex-wrap gap-2">
                  {market.industries.map((ind) => (
                    <span key={ind} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                      {ind}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COASTAL SOUTH TEXAS */}
      <section className="py-20 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-2">Gulf Coast & South Texas</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Corpus Christi Region & Coastal Markets</h2>
            <p className="text-muted-foreground max-w-xl">
              The Gulf Coast is one of our fastest-growing corridors. From marina towns to border communities, we're bringing automated parking revenue to every corner of Coastal Bend and South Texas.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {coastalMarkets.map((m, i) => (
              <motion.div
                key={m.city}
                {...fadeIn}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded-xl border border-border p-4 hover:border-brand-teal/40 hover:shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-brand-teal mb-2" />
                <div className="font-semibold text-sm text-foreground leading-tight mb-1">{m.city}</div>
                <div className="text-xs text-muted-foreground">{m.tag}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEWIDE MARKETS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Statewide Expansion</p>
            <h2 className="text-3xl font-display font-bold text-foreground mb-3">Growing Across All of Texas</h2>
            <p className="text-muted-foreground max-w-xl">
              We are not just a coastal company. Perfect Parking is actively expanding to serve property owners in every major and mid-size Texas city — from the Panhandle to the Permian Basin.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {stateMarkets.map((m, i) => (
              <motion.div
                key={m.city}
                {...fadeIn}
                transition={{ delay: i * 0.04 }}
                className="bg-muted rounded-xl border border-border p-4 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-primary mb-2" />
                <div className="font-semibold text-sm text-foreground leading-tight mb-1">{m.city}</div>
                <div className="text-xs text-muted-foreground">{m.tag}</div>
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
              <div className="text-4xl font-display font-bold text-secondary mb-2">37+</div>
              <div className="text-white/70 font-medium">Texas Cities Served or Expanding</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-secondary mb-2">$1M+</div>
              <div className="text-white/70 font-medium">Revenue Generated for TX Partners</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-secondary mb-2">50+</div>
              <div className="text-white/70 font-medium">Managed Locations Statewide</div>
            </div>
          </div>
        </div>
      </section>

      {/* NATIONAL + CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 text-primary">
            <TrendingUp className="w-4 h-4" /> National Expansion in Progress
          </div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Texas First. Then Everywhere.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We are building the most comprehensive parking revenue network in Texas — then taking it national. If you own a property anywhere in the U.S. with high parking demand, reach out. We evaluate new markets fast.
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
