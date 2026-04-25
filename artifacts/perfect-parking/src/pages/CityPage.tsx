import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { texasCities } from "@/data/texasCities";
import { useContactModal } from "@/context/ContactModalContext";

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const { openContactModal } = useContactModal();
  const city = texasCities.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">City not found</h1>
          <Link href="/locations" className="text-primary hover:underline">
            ← Back to all locations
          </Link>
        </div>
      </div>
    );
  }

  const popDisplay = city.population > 0 ? city.population.toLocaleString() : null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Perfect Parking — ${city.name}, TX`,
    "description": `Automated parking revenue management for property owners in ${city.name}, Texas. Turn your underused parking into passive monthly income.`,
    "url": `https://perfectparking.com/locations/${city.slug}`,
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "serviceType": "Parking Revenue Management",
    "telephone": "(361) 585-1111",
    "email": "support@perfectparking.com"
  };

  const nearbyCities = texasCities
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .slice(0, 6);

  return (
    <>
      <Helmet>
        <title>{city.name} Parking Management Services | Perfect Parking TX</title>
        <meta name="description" content={`Perfect Parking provides fully automated parking revenue management in ${city.name}, TX. Turn your parking lot into $500–$3,000/month in passive income. Free analysis, zero upfront cost.`} />
        <link rel="canonical" href={`https://perfectparking.com/locations/${city.slug}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${city.name} Parking Management | Perfect Parking`} />
        <meta property="og:description" content={`Automated parking revenue for property owners in ${city.name}, TX. No staff, no upfront cost. Start earning in 30 days.`} />
        <meta property="og:url" content={`https://perfectparking.com/locations/${city.slug}`} />
        <meta property="og:site_name" content="Perfect Parking" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content={`${city.name}, Texas`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${city.name} Parking Management | Perfect Parking`} />
        <meta name="twitter:description" content={`Automated parking revenue for property owners in ${city.name}, TX. Free analysis.`} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="bg-navy text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
              {city.region} · Texas
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              Parking Revenue Management<br />in {city.name}, TX
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Property owners in {city.name} are leaving $1,000–$4,000/month on the table.
              Perfect Parking turns your underused lot into automated monthly income — zero staff, zero operational burden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openContactModal}
                className="bg-secondary text-navy font-bold px-8 py-4 rounded text-center hover:bg-yellow-300 transition"
              >
                Get My Free {city.name} Parking Analysis →
              </button>
              <a
                href="tel:3615851111"
                className="border border-white text-white font-semibold px-8 py-4 rounded text-center hover:bg-white hover:text-navy transition"
              >
                Call (361) 585-1111
              </a>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-secondary py-6 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-navy">$500–$3,000</p>
              <p className="text-sm text-gray-800">Monthly revenue to owner</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">30–60 Days</p>
              <p className="text-sm text-gray-800">Average setup timeline</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy">~0 Hours</p>
              <p className="text-sm text-gray-800">Owner time per week</p>
            </div>
          </div>
        </section>

        {/* Body Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Perfect Parking Works in {city.name}
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Whether you own a commercial lot, multifamily complex, hotel, or mixed-use property in {city.name},
              Perfect Parking handles everything — signage, enforcement, digital payments, and monthly direct deposits.
              {popDisplay ? ` With a population of ${popDisplay}, ${city.name} has consistent parking demand that most property owners aren't monetizing.` : ""}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">What We Handle</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Full setup in under 30 days</li>
                  <li>✓ Digital payment processing</li>
                  <li>✓ Automated violation enforcement</li>
                  <li>✓ Real-time revenue dashboard</li>
                  <li>✓ Monthly direct deposit to owner</li>
                  <li>✓ Zero upfront cost</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Properties We Serve in {city.name}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Commercial real estate</li>
                  <li>✓ Multifamily & HOA communities</li>
                  <li>✓ Hotels & hospitality</li>
                  <li>✓ Medical & healthcare facilities</li>
                  <li>✓ Retail & mixed-use</li>
                  <li>✓ Event venues</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Frequently Asked Questions — {city.name} Parking Management
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: `How much can I earn from parking in ${city.name}, TX?`,
                  a: `Most property owners in ${city.name} earn between $500 and $3,000 per month depending on lot size, location, and demand. Perfect Parking offers a free analysis to give you an exact estimate for your property.`
                },
                {
                  q: `How long does setup take in ${city.name}?`,
                  a: `Most ${city.name} properties are fully operational within 30 days. We handle all signage, payment systems, and enforcement setup at no upfront cost to you.`
                },
                {
                  q: `Do I need staff to manage parking in ${city.name}?`,
                  a: `No. Perfect Parking is fully automated. Our platform handles payments, violations, and reporting — you receive a monthly direct deposit with zero operational involvement.`
                },
                {
                  q: `What types of properties does Perfect Parking serve in ${city.name}?`,
                  a: `We work with commercial real estate, multifamily communities, hotels, medical facilities, retail centers, and event venues throughout ${city.name} and the ${city.region} area.`
                },
                {
                  q: `Is there a cost to get started in ${city.name}?`,
                  a: `There is no upfront cost. Perfect Parking operates on a revenue-share model — we only earn when you earn. The free parking analysis is the first step.`
                }
              ].map((item, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy text-white py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Monetize Your {city.name} Parking?
            </h2>
            <p className="text-gray-300 mb-8">
              Free analysis. No commitment. We'll tell you exactly how much your lot is worth.
            </p>
            <button
              onClick={openContactModal}
              className="bg-secondary text-navy font-bold px-10 py-4 rounded text-lg hover:bg-yellow-300 transition"
            >
              Get My Free {city.name} Analysis →
            </button>
          </div>
        </section>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <section className="py-12 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Also Serving the {city.region} Area
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}`}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-secondary hover:text-navy transition text-sm font-medium"
                  >
                    {c.name}, TX
                  </Link>
                ))}
                <Link
                  href="/locations"
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200 transition text-sm"
                >
                  View all Texas cities →
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
