import { useState } from "react";
import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import citiesData from "@/data/cities_data.json";

type CityData = {
  slug: string;
  city: string;
  state: string;
  tier: number;
  county: string;
  population_approx: number;
  meta_title: string;
  meta_description: string;
  h1: string;
  intro_sentence: string;
  local_paragraph: string;
  cta_text: string;
  faq_q1: string;
  faq_a1: string;
  faq_q2: string;
  faq_a2: string;
  nearby_cities: string;
};

const allCities = citiesData as CityData[];

function toSlug(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="w-full text-left flex justify-between items-center gap-4 py-2"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-gray-900">{q}</span>
        <span className="text-2xl text-gray-400 shrink-0 leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-gray-700 mt-2 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function CityPage() {
  const { citySlug: rawSlug } = useParams<{ citySlug: string }>();
  const citySlug = rawSlug?.replace(/-tx$/i, "");
  const city = allCities.find((c) => c.slug === citySlug);

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

  const showLocalParagraph = (city.tier === 1 || city.tier === 2) && city.local_paragraph?.trim();
  const showNearbyCities = (city.tier === 1 || city.tier === 2) && city.nearby_cities?.trim();

  const nearbyCityList = showNearbyCities
    ? city.nearby_cities.split(",").map((n) => ({ name: n.trim(), slug: toSlug(n) }))
    : [];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Perfect Parking — ${city.city}, TX`,
    "description": city.meta_description,
    "url": `https://perfectparking.com/locations/${city.slug}`,
    "areaServed": {
      "@type": "City",
      "name": city.city,
      "addressRegion": "TX",
      "addressCountry": "US",
    },
    "serviceType": "Parking Revenue Management",
    "telephone": "(361) 585-1111",
    "email": "info@perfectsynergysolutions.com",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": city.faq_q1,
        "acceptedAnswer": { "@type": "Answer", "text": city.faq_a1 },
      },
      {
        "@type": "Question",
        "name": city.faq_q2,
        "acceptedAnswer": { "@type": "Answer", "text": city.faq_a2 },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{city.meta_title}</title>
        <meta name="description" content={city.meta_description} />
        <link rel="canonical" href={`https://perfectparking.com/locations/${city.slug}`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={city.meta_title} />
        <meta property="og:description" content={city.meta_description} />
        <meta property="og:url" content={`https://perfectparking.com/locations/${city.slug}`} />
        <meta property="og:site_name" content="Perfect Parking" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content={`${city.city}, Texas`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={city.meta_title} />
        <meta name="twitter:description" content={city.meta_description} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-navy text-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
              {city.county} · Texas
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
              {city.h1}
            </h1>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl">
              {city.intro_sentence}
            </p>
            {showLocalParagraph && (
              <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">
                {city.local_paragraph}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/estimate"
                className="bg-secondary text-navy font-bold px-8 py-4 rounded text-center hover:bg-yellow-300 transition"
              >
                {city.cta_text} →
              </Link>
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

        {/* How it works body */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Perfect Parking Works in {city.city}
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Whether you own a commercial lot, multifamily complex, hotel, or mixed-use property in {city.city},
              Perfect Parking handles everything — signage, enforcement, digital payments, and monthly direct deposits.
              {city.population_approx > 0
                ? ` With a population of ${city.population_approx.toLocaleString()}, ${city.city} has consistent parking demand that most property owners aren't monetizing.`
                : ""}
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Properties We Serve in {city.city}</h3>
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

        {/* FAQ */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Frequently Asked Questions — {city.city} Parking Management
            </h2>
            <div className="space-y-2">
              <FaqItem q={city.faq_q1} a={city.faq_a1} />
              <FaqItem q={city.faq_q2} a={city.faq_a2} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: "#00305b" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to turn your {city.city} parking lot into monthly revenue?
            </h2>
            <p className="text-white mb-8">
              Free estimate. No commitment. We'll tell you exactly how much your lot is worth.
            </p>
            <Link
              href="/estimate"
              className="inline-block font-bold px-10 py-4 rounded text-lg hover:opacity-90 transition"
              style={{ background: "#DEC600", color: "#00305b" }}
            >
              {city.cta_text} →
            </Link>
          </div>
        </section>

        {/* Nearby Cities — tier 1 & 2 only */}
        {nearbyCityList.length > 0 && (
          <section className="py-12 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                Nearby Cities We Serve
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyCityList.map((c) => (
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
