import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight, Building, Hospital, Users, CarFront, Home as HomeIcon } from "lucide-react";
import { useLocation } from "wouter";

const markets = [
  {
    city: "San Antonio, TX",
    description: "Our home market. Active partners across multifamily communities, HOAs, healthcare campuses, and commercial real estate throughout the greater San Antonio area.",
    industries: ["Multifamily", "HOA", "Healthcare", "CRE"],
    active: true,
  },
  {
    city: "Austin, TX",
    description: "Serving hotels, mixed-use developments, and student housing in one of the fastest-growing urban parking markets in the country.",
    industries: ["Hotels", "Mixed-Use", "Student Housing"],
    active: true,
  },
  {
    city: "Houston, TX",
    description: "Houston's sprawling commercial real estate landscape and large medical center make it a prime market for automated parking revenue optimization.",
    industries: ["CRE", "Healthcare", "Hotels", "Retail"],
    active: true,
  },
  {
    city: "Corpus Christi, TX",
    description: "Coastal hospitality, marina facilities, and waterfront commercial properties are actively partnering with Perfect Parking.",
    industries: ["Hotels", "Marinas", "CRE"],
    active: true,
  },
  {
    city: "Texas Hill Country",
    description: "Event venues, weekend tourism destinations, and boat ramps in the Hill Country corridor — including our verified Wimberley case study property.",
    industries: ["Event Venues", "Marinas", "Tourism"],
    active: true,
  },
  {
    city: "Dallas / Fort Worth, TX",
    description: "The DFW metroplex's density of commercial office parks, hotels, and multifamily developments makes it a high-opportunity expansion market.",
    industries: ["CRE", "Hotels", "Multifamily", "Airports"],
    active: true,
  },
  {
    city: "Laredo, TX",
    description: "Truck parking and commercial logistics are high-demand use cases in the Laredo border corridor, with consistent daily volume.",
    industries: ["Truck Parking", "CRE"],
    active: true,
  },
  {
    city: "National Expansion",
    description: "We are actively expanding beyond Texas. If you own high-demand parking in any U.S. market, contact us — we'd like to talk.",
    industries: ["All Property Types"],
    active: false,
  }
];

const iconMap: Record<string, React.ElementType> = {
  "Multifamily": HomeIcon,
  "HOA": Users,
  "Healthcare": Hospital,
  "CRE": Building,
  "Hotels": Building,
  "Marinas": MapPin,
  default: MapPin,
};

export default function Locations() {
  const [, setLocation] = useLocation();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <SEO
        title="Locations We Serve | Parking Management Texas"
        description="Perfect Parking provides automated parking revenue management in San Antonio, Austin, Houston, Corpus Christi, Dallas-Fort Worth, and across Texas. Expanding nationally."
        keywords="parking management Texas, parking management San Antonio, parking management Austin, parking management Houston, HOA parking Texas, hotel parking management Texas"
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
              { "@type": "City", "name": "San Antonio", "containedIn": { "@type": "State", "name": "Texas" } },
              { "@type": "City", "name": "Austin", "containedIn": { "@type": "State", "name": "Texas" } },
              { "@type": "City", "name": "Houston", "containedIn": { "@type": "State", "name": "Texas" } },
              { "@type": "City", "name": "Corpus Christi", "containedIn": { "@type": "State", "name": "Texas" } },
              { "@type": "City", "name": "Dallas", "containedIn": { "@type": "State", "name": "Texas" } },
              { "@type": "City", "name": "Fort Worth", "containedIn": { "@type": "State", "name": "Texas" } },
              { "@type": "City", "name": "Laredo", "containedIn": { "@type": "State", "name": "Texas" } }
            ],
            "serviceType": "Parking Revenue Management",
            "description": "Perfect Parking helps hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners monetize underutilized parking with zero upfront cost."
          })}
        </script>
      </Helmet>

      <section className="bg-navy py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6 text-white/80">
              <MapPin className="w-4 h-4 text-secondary" /> Markets We Serve
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
              Parking Management<br />
              <span className="text-secondary">Across Texas</span> and Beyond.
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We manage and monetize parking across major Texas markets — and we're expanding nationally. Find your market below or reach out to confirm availability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {markets.map((market, i) => (
              <motion.div
                key={market.city}
                {...fadeIn}
                transition={{ delay: i * 0.07 }}
                className={`p-8 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  market.active
                    ? "bg-white border-border hover:border-primary/30"
                    : "bg-muted border-dashed border-border/80"
                }`}
              >
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className={`w-5 h-5 mt-0.5 shrink-0 ${market.active ? "text-primary" : "text-muted-foreground"}`} />
                  <div>
                    <h2 className={`font-display font-bold text-xl ${market.active ? "text-foreground" : "text-muted-foreground"}`}>
                      {market.city}
                    </h2>
                    {market.active && (
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full mt-1">
                        ● Active Market
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{market.description}</p>
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

      <section className="py-20 bg-muted border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-brand-blue mb-2">7+</div>
              <div className="text-muted-foreground font-medium">Active Texas Markets</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-accent mb-2">$1M+</div>
              <div className="text-muted-foreground font-medium">Revenue Generated for Partners</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground font-medium">Managed Locations</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Don't see your city listed?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            We evaluate new markets on a case-by-case basis. If your property has consistent parking demand, there's a good chance we can make it work — regardless of location.
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
