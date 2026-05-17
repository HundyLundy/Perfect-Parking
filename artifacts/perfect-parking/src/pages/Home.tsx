import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { AppShowcase } from "@/components/AppShowcase";
import {
  ArrowRight, CheckCircle2, TrendingUp, ShieldCheck,
  Building, Hospital, CarFront, Users, Home as HomeIcon,
  Landmark, LayoutGrid, Music, GraduationCap, Plane,
  Truck, MapPin, BarChart3, QrCode, Bell, CreditCard, Globe,
  Search, Zap, DollarSign, Download, ChevronDown, Smartphone, X, KeyRound, Play
} from "lucide-react";
import { useLocation } from "wouter";
import { useCountUp } from "@/hooks/useCountUp";
import { useContactModal } from "@/context/ContactModalContext";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  const [location, setLocation] = useLocation();
  const { openContactModal } = useContactModal();
  const [activeTab, setActiveTab] = useState<"dashboard" | "driver" | "reporting">("dashboard");

  function handleCtaClick(label: string, ctaLocation: string) {
    trackEvent("cta_click", { cta_label: label, source_page: location || "/", cta_location: ctaLocation });
    openContactModal();
  }

  const { count: locationsCount, ref: locationsRef } = useCountUp(50, 1600);
  const { count: revenueCount, ref: revenueRef } = useCountUp(1, 2000);
  const { count: setupCount, ref: setupRef } = useCountUp(30, 1400);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const featuredIndustries = [
    { icon: Building, title: "Hotels & Resorts", desc: "Stop revenue leakage and improve the guest check-in experience." },
    { icon: Hospital, title: "Healthcare Facilities", desc: "Ensure staff have spaces while monetizing visitor lots." },
    { icon: CarFront, title: "Commercial Real Estate", desc: "Turn empty tenant spots into a new revenue stream." }
  ];

  const additionalIndustries = [
    { icon: HomeIcon, label: "Multifamily / Apartments" },
    { icon: Users, label: "HOA Communities" },
    { icon: Landmark, label: "Office Buildings" },
    { icon: LayoutGrid, label: "Mixed-Use Developments" },
    { icon: Music, label: "Event Venues" },
    { icon: GraduationCap, label: "Universities & Student Housing" },
    { icon: Truck, label: "Truck Parking" },
    { icon: Plane, label: "Airports & Transit Hubs" }
  ];

  const whyFeatures = [
    { icon: TrendingUp,   title: "Revenue Share — Aligned Incentives",  desc: "We earn when you earn. Zero upfront cost. Your success is the only metric we track.", green: true },
    { icon: Bell,         title: "Live in Under 30 Days",               desc: "Satellite mapping, signage, software config, and enforcement setup — we handle everything. You sign off." },
    { icon: QrCode,       title: "Instant Payments",                    desc: "QR scan or text-to-pay. Apple Pay, Google Pay, or card. Works on any phone. No app required." },
    { icon: BarChart3,    title: "Real-Time Revenue Dashboard",         desc: "Live occupancy, session activity, violation status, and revenue — visible from any device, any time.", teal: true },
    { icon: ShieldCheck,  title: "Enforcement",                         desc: "We handle all enforcement — notices, compliance, and follow-through. No staff required. No confrontations.", teal: true },
    { icon: Globe,        title: "Built to Scale",                      desc: "Manage one lot or fifty from a single dashboard." },
  ];

  return (
    <>
      <SEO
        title="Perfect Parking | Hassle-Free Parking Management"
        description="We help hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners generate consistent monthly revenue from underutilized parking. Zero upfront cost. Zero staff required."
        keywords="parking management company, parking revenue share, hotel parking management, HOA parking management, multifamily parking management, automated parking enforcement Texas, manage and monetize parking"
        canonical="https://perfectparking.com/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Perfect Parking",
            "description": "Technology-enabled parking revenue platform. We help hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners monetize underutilized parking into passive monthly income.",
            "slogan": "We Turn Parking Into Profits",
            "url": "https://perfectparking.com",
            "telephone": "(361) 585-1111",
            "email": "info@perfectsynergysolutions.com",
            "areaServed": ["San Antonio, TX", "Austin, TX", "Houston, TX", "Corpus Christi, TX", "Dallas, TX", "Fort Worth, TX", "Texas"],
            "serviceType": "Parking Revenue Management",
            "priceRange": "Revenue Share — No Upfront Cost",
            "sameAs": [],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Parking Management Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hotel Parking Management" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HOA Parking Management" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multifamily Parking Management" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Healthcare Facility Parking" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Real Estate Parking" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Parking Permits" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated Parking Enforcement" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Parking Revenue Reporting" } }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative bg-navy overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-full object-cover opacity-50"
          >
            <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-sm font-semibold mb-6 tracking-wide uppercase">
                Operationally Passive Revenue
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
                Your Parking Lot<br /><span className="text-secondary">Should Pay You.</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                We turn underused parking into consistent monthly revenue with zero operational burden.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={() => handleCtaClick("Get My Parking Estimate", "hero")}
                  className="px-8 py-4 bg-secondary text-secondary-foreground text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-secondary/90 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Get My Parking Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    trackEvent("cta_click", { cta_label: "How It Works", source_page: location || "/", cta_location: "hero" });
                    setLocation("/solutions");
                  }}
                  className="px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all duration-200"
                >
                  How It Works
                </button>
              </div>
              <p className="text-white/60 text-sm" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                Most property owners are leaving $1,000–$4,000/month on the table. Find out exactly how much yours is worth — free, no commitment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-muted py-8 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50 text-center">
            <motion.div ref={locationsRef as unknown as React.RefObject<HTMLDivElement>} {...fadeIn} transition={{ delay: 0.1 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-brand-blue mb-1">{locationsCount}+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Locations Served</div>
            </motion.div>
            <motion.div ref={revenueRef as unknown as React.RefObject<HTMLDivElement>} {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-accent mb-1">${revenueCount}M+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Revenue Generated</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-brand-teal mb-1">0</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Staff Required</div>
            </motion.div>
            <motion.div ref={setupRef as unknown as React.RefObject<HTMLDivElement>} {...fadeIn} transition={{ delay: 0.4 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-primary mb-1">{setupCount} Days</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Average Setup</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOFT CTA */}
      <section className="py-10 bg-white text-center border-b border-border/30">
        <div className="max-w-sm mx-auto px-4">
          <a
            href="/contact"
            className="inline-block px-8 py-4 font-semibold rounded-xl text-base transition-colors hover:opacity-90"
            style={{ background: "#E8EFF7", color: "#0A2342", border: "1px solid #C5D5E8" }}
          >
            Speak to Our Team →
          </a>
          <p className="mt-3 text-sm" style={{ color: "#6B7280" }}>
            No commitment. We'll give you a straight answer either way.
          </p>
        </div>
      </section>

      {/* TYPICAL RESULTS */}
      <section className="py-10 bg-white border-b border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Typical Partner Results</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-green-50 border border-green-100 rounded-2xl px-6 py-5">
              <div className="text-2xl font-display font-bold text-green-700 mb-1">$500 – $3,000<span className="text-base font-semibold text-green-600">/mo</span></div>
              <div className="text-sm text-green-700/70 font-medium">Revenue to property owner</div>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl px-6 py-5">
              <div className="text-2xl font-display font-bold text-primary mb-1">30 – 60 Days</div>
              <div className="text-sm text-primary/70 font-medium">Average ROI timeline</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-100 rounded-2xl px-6 py-5">
              <div className="text-2xl font-display font-bold text-yellow-700 mb-1">~0 Hours</div>
              <div className="text-sm text-yellow-700/70 font-medium">Owner time required per week</div>
            </div>
          </div>
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">How It Works</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Up and running in under 30 days.</h3>
            <p className="text-muted-foreground text-lg">Four steps from analysis to automatic monthly income.</p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-accent/30 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "01", icon: Search,      title: "Analyze",      desc: "We map your property and model your estimated revenue potential — free, no commitment.", color: "bg-primary/10 text-primary" },
                { num: "02", icon: Zap,         title: "Deploy",       desc: "Signage, software, config, and enforcement setup — we handle everything. You sign off.", color: "bg-brand-teal/10 text-brand-teal" },
                { num: "03", icon: CreditCard,  title: "Drivers Pay",  desc: "QR scan or text-to-pay. Apple Pay, Google Pay, or card. Automated 24/7 — no staff.", color: "bg-blue-50 text-brand-blue" },
                { num: "04", icon: DollarSign,  title: "You Earn",     desc: "Monthly direct deposit with full transparent reporting. You do nothing.", color: "bg-accent/10 text-accent" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-200 z-10"
                  {...fadeIn}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${step.color}`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-muted-foreground/50 uppercase tracking-widest mb-1">{step.num}</div>
                  <h4 className="text-lg font-display font-bold text-foreground mb-3">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING VIDEO */}
      <section className="py-24 bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">See It In Action</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              The Automated Parking Revenue System
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No operational burden. No staff required. See how Perfect Parking turns your lot into a revenue-generating asset.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-black aspect-video">
            <video controls playsInline preload="none" className="w-full h-full object-contain">
              <source src={`${import.meta.env.BASE_URL}pp-marketing.mov`} type="video/mp4" />
              <source src={`${import.meta.env.BASE_URL}pp-marketing.mov`} type="video/quicktime" />
              <p className="text-white text-center p-8">Your browser does not support video playback.</p>
            </video>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Zero staff required</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Increase property income without adding work</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Live in under 30 days</span>
          </div>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHT */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Real Results</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                Small Lot.<br />Big Impact.
              </h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                The owner of a 50-space lot in Wimberley was frustrated by weekend visitors to the town's local attractions taking up their valuable retail customer space. They didn't want to hire attendants or install expensive gates. We deployed our signs and payment system — and now they receive a monthly direct deposit averaging over $1,000 a month without touching a thing.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass-panel-dark p-6 rounded-xl">
                  <div className="text-secondary text-3xl font-bold mb-1">50</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Spaces</div>
                </div>
                <div className="glass-panel-dark p-6 rounded-xl border-l-4 border-accent">
                  <div className="text-green-400 text-3xl font-bold mb-1">$1,000</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Monthly Profit</div>
                </div>
                <div className="glass-panel-dark p-6 rounded-xl">
                  <div className="text-white text-xl font-bold mb-1 mt-2">Weekends Only</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Operation</div>
                </div>
                <div className="glass-panel-dark p-6 rounded-xl">
                  <div className="text-white text-3xl font-bold mb-1">0</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Staff Managed</div>
                </div>
              </div>

              <button onClick={() => setLocation("/case-studies")} className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Read full case study <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => setLocation("/case-studies")} className="mt-4 text-white/50 text-sm font-medium flex items-center gap-1.5 hover:text-white/80 transition-colors">
                See all case studies <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <img
                src={`${import.meta.env.BASE_URL}pp-sign-wall.jpg`}
                alt="Perfect Parking Sign Installed at Property"
                loading="lazy"
                className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 z-20 glass-panel-dark p-6 rounded-xl flex items-center gap-4 max-w-[280px]">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-navy shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg">100% Passive</div>
                  <div className="text-white/70 text-sm">Owner handles nothing</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BUILT FOR OWNERS. DESIGNED FOR DRIVERS. */}
      <section className="py-0 overflow-hidden">
        <div className="grid lg:grid-cols-2">

          {/* OWNERS PANEL */}
          <motion.div
            className="bg-navy text-white px-10 py-20 lg:px-16 lg:py-24 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
                Built for<br /><span className="text-secondary">Owners.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-md">
                We manage everything. You collect a check every month.
              </p>
              <ul className="space-y-5 mb-12">
                {[
                  "Turn unused parking into consistent monthly revenue",
                  "Real-time reporting and full financial visibility",
                  "Fully managed system — we handle operations",
                  "Zero operational burden on your team",
                  "Easy setup and deployment in under 30 days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-white/85 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => handleCtaClick("Get My Parking Estimate", "owners_panel")}
              className="self-start px-8 py-4 bg-secondary text-navy font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-2 group"
            >
              Get My Parking Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setLocation("/industries")}
              className="mt-4 text-white/50 text-sm font-medium flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              Explore industries and case studies <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* DRIVERS PANEL */}
          <motion.div
            className="bg-white text-foreground px-10 py-20 lg:px-16 lg:py-24 flex flex-col justify-between border-l border-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                Designed for<br /><span className="text-primary">Drivers.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
                Pay in seconds from your phone. No App Required. No confusion. No hassle.
              </p>
              <ul className="space-y-5">
                {[
                  "Fast, simple mobile payment — scan & pay in seconds",
                  "Extend parking time remotely from your phone",
                  "Clear instructions posted at every location",
                  "No account, no app download required, no confusion",
                  "Secure payments — Apple Pay, Google Pay, or card",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/85 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual accent — mock pay flow */}
            <div className="mt-12 bg-muted border border-border rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">Scan. Pay. Park.</div>
                <div className="text-muted-foreground text-xs mt-0.5">Works on any smartphone, any carrier, anywhere.</div>
              </div>
              <div className="ml-auto text-right">
                <div className="text-xs text-muted-foreground">Avg. pay time</div>
                <div className="font-display font-bold text-primary text-lg">14 sec</div>
              </div>
            </div>
            <button
              onClick={() => setLocation("/parkers")}
              className="mt-6 text-primary/60 text-sm font-medium flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              Get parking help <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* REVENUE POTENTIAL */}
      <section className="py-24 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/98 to-primary/30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.4)' }}>
              What's your parking worth?
            </h2>
            <p className="text-xl text-white/80 mb-16 font-medium">See the average monthly profit generated by our partners.</p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                <div className="text-white/70 font-semibold uppercase tracking-wider mb-2 text-sm">50 Spaces</div>
                <div className="text-4xl font-bold text-secondary mb-2">$800 – $1.5k<span className="text-sm align-super ml-0.5 text-secondary/70">†</span></div>
                <div className="text-white/60 text-sm">per month</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-secondary/40 p-8 rounded-2xl relative transform sm:-translate-y-4 shadow-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-navy text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">MOST COMMON</div>
                <div className="text-white/70 font-semibold uppercase tracking-wider mb-2 text-sm">100 Spaces</div>
                <div className="text-4xl font-bold text-secondary mb-2">$2k – $4k<span className="text-sm align-super ml-0.5 text-secondary/70">†</span></div>
                <div className="text-white/60 text-sm">per month</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                <div className="text-white/70 font-semibold uppercase tracking-wider mb-2 text-sm">200+ Spaces</div>
                <div className="text-4xl font-bold text-secondary mb-2">$5k+<span className="text-sm align-super ml-0.5 text-secondary/70">†</span></div>
                <div className="text-white/60 text-sm">per month</div>
              </div>
            </div>

            {/* Citation block */}
            <div className="mb-12 mx-auto max-w-2xl border border-white/15 rounded-xl bg-white/5 px-6 py-4 text-left">
              <p className="text-white/50 text-xs leading-relaxed">
                <span className="text-secondary/70 font-bold mr-1">†</span>
                Figures reflect average monthly gross revenue paid to property owners from Perfect Parking's active U.S. partner portfolio (2023 – 2025). Results vary by market, utilization rate, pricing model, and seasonality. <span className="text-white/65">Verified example: Wimberley, TX — 50-space lot generating <strong className="text-white/80">$1,000/month profit</strong>, weekends only, zero staff.</span> Revenue share structure and property-specific projections provided at no cost during your free analysis.
              </p>
            </div>

            <button
              onClick={() => handleCtaClick("Get My Parking Estimate", "revenue_potential")}
              className="px-10 py-5 bg-secondary text-secondary-foreground text-xl font-bold rounded-xl shadow-[0_0_40px_rgba(222,198,0,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(222,198,0,0.5)] transition-all duration-200 inline-flex items-center gap-3"
            >
              Get My Parking Estimate <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* MILITARY PARTNER SECTION */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/98 to-navy/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/40 text-red-300 px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
                ★ Partnership Announcement
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                Every parking spot supports our nation's heroes.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                We are proud to partner with the <strong className="text-white">Military Warriors Support Foundation</strong> — the organization that serves combat-wounded veterans and Gold Star spouses.
              </p>
              <blockquote className="border-l-4 border-secondary pl-6 italic text-white/70 leading-relaxed mb-8">
                "Now, every time you park at a Perfect Parking lot, you're not just finding a spot — you're actively supporting combat-wounded veterans and Gold Star spouses. Together, we're turning everyday moments into meaningful change."
              </blockquote>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider">— Military Warriors Support Foundation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}military-partner.png`}
                alt="Military Warriors Support Foundation Partnership with Perfect Parking"
                loading="lazy"
                className="rounded-2xl shadow-2xl max-w-full w-full border-2 border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CROSS-SELL: PERFECT WATER VALVE */}
      <section className="py-12 bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-bold text-foreground mb-2">Own commercial property?</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Perfect Synergy Solutions also helps commercial property owners cut water costs through smart valve technology — reducing usage by 15–40% with no operational burden.
          </p>
          <a
            href="https://perfectwatervalve.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline text-sm"
          >
            Learn about Perfect Water Valve →
          </a>
        </div>
      </section>
    </>
  );
}
