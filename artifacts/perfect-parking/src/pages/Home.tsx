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

      {/* WHAT THIS MEANS FINANCIALLY */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              What This Means Financially
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Most property owners don't realize how much their parking is underperforming.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { stat: "20–40%", label: "of parking revenue goes unrealized at a typical property", color: "text-secondary" },
              { stat: "30 Days", label: "Most locations start collecting revenue within 30 days of setup", color: "text-secondary" },
              { stat: "$0", label: "Most locations require $0 upfront capital — we invest in the infrastructure", color: "text-secondary" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all"
              >
                <div className={`text-4xl md:text-5xl font-display font-bold mb-4 ${item.color}`}>{item.stat}</div>
                <p className="text-white/75 leading-snug">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center bg-secondary/15 border border-secondary/30 rounded-2xl px-8 py-7">
            <p className="text-secondary font-display font-bold text-xl md:text-2xl leading-snug mb-2">
              "Your parking should be producing income every day."
            </p>
            <p className="text-white/70 text-base">
              Most properties are leaving money on the table. Let's find out how much yours is worth.
            </p>
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

      {/* THE PLATFORM */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">The Platform</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Built to run without you.
            </h3>
            <p className="text-muted-foreground text-lg">
              Maximum revenue. Zero overhead. Every feature automates a task your staff used to handle manually.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {whyFeatures.map((feature, i) => (
              <motion.div
                key={i}
                className={`p-7 rounded-2xl shadow-sm border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                  feature.green ? "bg-accent/5 border-accent/25 hover:border-accent/50"
                  : feature.teal ? "bg-brand-teal/5 border-brand-teal/20 hover:border-brand-teal/40"
                  : "bg-white border-border hover:border-primary/20"
                }`}
                {...fadeIn}
                transition={{ delay: (i % 6) * 0.07 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  feature.green ? "bg-accent/15 text-accent"
                  : feature.teal ? "bg-brand-teal/15 text-brand-teal"
                  : "bg-primary/10 text-primary"
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${feature.green ? "text-accent" : feature.teal ? "text-brand-teal" : "text-foreground"}`}>{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => handleCtaClick("Get My Parking Estimate", "platform_features")}
              className="px-10 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Get My Parking Estimate <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY OWNERS SWITCH */}
      <section className="py-20 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Why Owners Switch</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 leading-tight">
                Why Owners Switch<br />to Perfect Parking
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Turn parking into a revenue-generating asset — without adding work, staff, or complexity to your operations.
              </p>
            </motion.div>
            <motion.ul {...fadeIn} transition={{ delay: 0.1 }} className="space-y-5">
              {[
                "Underperforming lots become predictable revenue streams",
                "No staffing, no training, no operational burden",
                "Real-time reporting and full transparency",
                "Faster setup than traditional operators",
                "Designed for property owners, not parking companies",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border hover:border-primary/25 hover:shadow-sm transition-all">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium leading-snug">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* WHY US VS OTHERS */}
      <section className="py-24 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Why Perfect Parking</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Not all parking management is equal.
            </h3>
            <p className="text-muted-foreground text-lg">We're the only platform that combines full automation, revenue-share alignment, and zero upfront cost.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 pr-6 text-muted-foreground font-semibold w-48"></th>
                  <th className="py-4 px-4 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">Perfect Parking</div>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-semibold">Traditional Meters</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-semibold">Human Attendants</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Upfront Cost",        pp: "$0",         meters: "$10K+",    humans: "$0" },
                  { label: "Staff Required",       pp: "None",       meters: "None",     humans: "1–3 per lot" },
                  { label: "Revenue to Owner",     pp: "You keep it",meters: "City fee", humans: "Shared 3+ ways" },
                  { label: "Setup Time",           pp: "< 30 days",  meters: "Months",   humans: "Weeks" },
                  { label: "Digital Payments",     pp: true,         meters: false,      humans: "Sometimes" },
                  { label: "Real-Time Reporting",  pp: true,         meters: false,      humans: false },
                  { label: "24/7 Enforcement",     pp: true,         meters: false,      humans: false },
                ].map((row, i) => (
                  <motion.tr
                    key={i}
                    className="border-b border-border/60 last:border-0"
                    {...fadeIn}
                    transition={{ delay: i * 0.04 }}
                  >
                    <td className="py-4 pr-6 font-semibold text-foreground">{row.label}</td>
                    <td className="py-4 px-4 text-center bg-primary/5">
                      {row.pp === true ? (
                        <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                      ) : row.pp === false ? (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      ) : (
                        <span className="font-bold text-primary">{row.pp}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.meters === true ? (
                        <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                      ) : row.meters === false ? (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">{row.meters}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.humans === true ? (
                        <CheckCircle2 className="w-5 h-5 text-accent mx-auto" />
                      ) : row.humans === false ? (
                        <X className="w-4 h-4 text-muted-foreground/40 mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">{row.humans}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 bg-primary/5 border border-primary/15 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-foreground font-semibold text-lg leading-snug max-w-lg">
              Ready to see how much your lot is worth?<br />
              <span className="text-muted-foreground font-normal text-base">Estimate is free. No commitment.</span>
            </p>
            <button
              onClick={() => handleCtaClick("Get My Parking Estimate", "comparison_table")}
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-md shrink-0 inline-flex items-center gap-2"
            >
              Get My Parking Estimate <ArrowRight className="w-5 h-5" />
            </button>
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
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Building className="w-3.5 h-3.5" /> Property Owners
              </div>
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
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <Smartphone className="w-3.5 h-3.5" /> Drivers
              </div>
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
          </motion.div>

        </div>
      </section>

      {/* PLATFORM PREVIEW */}
      <section className="py-24 bg-[#0a1628] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">Platform Preview</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">See How It Works</h3>
            <p className="text-white/60 text-lg">One platform built for property owners. Zero complexity. Total visibility.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {([
              { id: "dashboard", label: "Owner Dashboard", icon: BarChart3 },
              { id: "driver",    label: "Driver Experience", icon: Smartphone },
              { id: "reporting", label: "Reporting",         icon: TrendingUp },
            ] as const).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeTab === id
                    ? "bg-secondary text-navy shadow-lg"
                    : "bg-white/8 text-white/60 hover:bg-white/12 hover:text-white border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" /> {label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left panel — copy */}
            <div className="lg:col-span-2 pt-4">
              {activeTab === "dashboard" && (
                <motion.div key="d-copy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <h4 className="text-2xl font-display font-bold text-white mb-4 leading-snug">Your revenue, always visible.</h4>
                  <p className="text-white/60 leading-relaxed mb-8">Log in anytime to see live revenue, occupancy rates, session activity, and violation status. We send a monthly summary and direct deposit automatically.</p>
                  <ul className="space-y-4">
                    {["Real-time revenue & occupancy", "Every session tracked with time & plate", "Automated violation notices", "Monthly direct deposit with full audit trail"].map((l) => (
                      <li key={l} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{l}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {activeTab === "driver" && (
                <motion.div key="dr-copy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <h4 className="text-2xl font-display font-bold text-white mb-4 leading-snug">Frictionless for drivers. Profitable for you.</h4>
                  <p className="text-white/60 leading-relaxed mb-8">Drivers scan a QR code or text a shortcode to pay in seconds. No app download. No meter hunting. Apple Pay, Google Pay, or any card accepted.</p>
                  <ul className="space-y-4">
                    {["Scan QR or text to pay instantly", "Apple Pay & Google Pay — one tap", "Instant digital receipt by text or email", "No app required — works on any phone"].map((l) => (
                      <li key={l} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{l}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {activeTab === "reporting" && (
                <motion.div key="r-copy" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <h4 className="text-2xl font-display font-bold text-white mb-4 leading-snug">Complete reporting. Zero accounting work.</h4>
                  <p className="text-white/60 leading-relaxed mb-8">Every session, payment, and violation is logged and exportable. Month-end summaries automatically prepared. Export to CSV in one click.</p>
                  <ul className="space-y-4">
                    {["Revenue by day, week, and month", "Per-space and per-lot breakdown", "Violation and compliance tracking", "One-click CSV export for your records"].map((l) => (
                      <li key={l} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm">{l}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Right panel — mock UI */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute -inset-6 bg-primary/15 blur-3xl rounded-full pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/10">

                  {/* OWNER DASHBOARD */}
                  {activeTab === "dashboard" && (
                    <motion.div key="d-ui" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
                      <div className="bg-[#111827] px-5 py-3 flex items-center gap-3 border-b border-white/10">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/80"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"/><div className="w-2.5 h-2.5 rounded-full bg-green-400/80"/></div>
                        <span className="text-white/40 text-xs font-mono">owner.perfectparking.com / dashboard</span>
                      </div>
                      <img
                        src={`${import.meta.env.BASE_URL}portal-dashboard.png`}
                        alt="Perfect Parking Partner Portal dashboard showing Total Payment Due, Total Parkers, and Current Month Validations"
                        className="w-full block"
                        loading="lazy"
                      />
                    </motion.div>
                  )}

                  {/* DRIVER EXPERIENCE */}
                  {activeTab === "driver" && (
                    <motion.div key="dr-ui" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
                      <div className="bg-primary px-5 py-3 flex items-center gap-3 border-b border-white/10">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/80"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"/><div className="w-2.5 h-2.5 rounded-full bg-green-400/80"/></div>
                        <span className="text-white/50 text-xs font-mono">pay.perfectparking.com / lot-14a</span>
                      </div>
                      <div className="bg-white p-6">
                        {/* Lot header */}
                        <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-100">
                          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-foreground text-base leading-tight">Lot 14A — Main Street</div>
                            <div className="text-muted-foreground text-sm">$3.00 / hour · Open 24 hrs</div>
                          </div>
                          <div className="ml-auto flex items-center gap-1.5 bg-green-50 text-green-600 px-2.5 py-1 rounded-full text-xs font-bold border border-green-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Open
                          </div>
                        </div>
                        {/* QR */}
                        <div className="flex justify-center mb-5">
                          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 inline-flex flex-col items-center gap-2">
                            <QrCode className="w-20 h-20 text-foreground" />
                            <div className="text-xs text-muted-foreground font-medium">Scan to pay</div>
                          </div>
                        </div>
                        {/* Duration */}
                        <div className="bg-gray-50 rounded-xl p-4 mb-4">
                          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Select Duration</div>
                          <div className="grid grid-cols-4 gap-2 mb-4">
                            {[{l:"1 hr",v:3},{l:"2 hrs",v:6},{l:"4 hrs",v:12},{l:"All Day",v:20}].map((d, i) => (
                              <button key={d.l} className={`py-2.5 rounded-xl text-xs font-bold border transition-all ${i === 1 ? "bg-primary text-white border-primary shadow-sm" : "border-gray-200 text-muted-foreground bg-white"}`}>{d.l}</button>
                            ))}
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground text-sm font-medium">Total due</span>
                            <span className="text-2xl font-display font-bold text-foreground">$6.00</span>
                          </div>
                        </div>
                        {/* Pay buttons */}
                        <div className="space-y-2.5">
                          <button className="w-full py-3.5 bg-black text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm">
                            <span className="text-base"> </span>Apple Pay
                          </button>
                          <button className="w-full py-3.5 bg-white border border-gray-200 text-foreground rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                            <CreditCard className="w-4 h-4 text-muted-foreground" /> Pay with Card
                          </button>
                        </div>
                        <p className="text-center text-xs text-muted-foreground mt-3">No account needed · Receipt sent by text</p>
                      </div>
                    </motion.div>
                  )}

                  {/* REPORTING */}
                  {activeTab === "reporting" && (
                    <motion.div key="r-ui" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
                      <div className="bg-[#111827] px-5 py-3 flex items-center gap-3 border-b border-white/10">
                        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400/80"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"/><div className="w-2.5 h-2.5 rounded-full bg-green-400/80"/></div>
                        <span className="text-white/40 text-xs font-mono">owner.perfectparking.com / reports</span>
                      </div>
                      <div className="bg-[#0f172a] p-5">
                        {/* Report header */}
                        <div className="flex items-center justify-between mb-5">
                          <div>
                            <div className="text-white font-bold text-base">Revenue Report</div>
                            <div className="text-white/40 text-xs mt-0.5">All Locations</div>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex items-center gap-1.5 text-xs text-white/50 bg-white/5 px-3 py-2 rounded-lg border border-white/10 font-medium">
                              June 2025 <ChevronDown className="w-3 h-3" />
                            </button>
                            <button className="flex items-center gap-1.5 text-xs text-secondary bg-secondary/10 px-3 py-2 rounded-lg border border-secondary/20 font-bold">
                              <Download className="w-3 h-3" /> Export
                            </button>
                          </div>
                        </div>
                        {/* KPI row */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                          <div className="bg-white/5 rounded-xl p-3.5">
                            <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Total Revenue</div>
                            <div className="text-xl font-display font-bold text-white">$2,847</div>
                          </div>
                          <div className="bg-white/5 rounded-xl p-3.5">
                            <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Avg Ticket</div>
                            <div className="text-xl font-display font-bold text-white">$6.20</div>
                          </div>
                          <div className="bg-white/5 rounded-xl p-3.5">
                            <div className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Sessions</div>
                            <div className="text-xl font-display font-bold text-white">459</div>
                          </div>
                        </div>
                        {/* Bar chart */}
                        <div className="bg-white/5 rounded-xl p-4 mb-4">
                          <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Revenue by Day</div>
                          <div className="flex items-end gap-1 h-16">
                            {[40,55,35,70,60,85,72,50,65,90,78,45,80,68,55,75,88,65,70,45,82,60,50,72,65,88,75,92,65,80].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: h > 85 ? '#dec600' : 'rgba(55,139,255,0.45)' }} />
                            ))}
                          </div>
                        </div>
                        {/* Peak hours */}
                        <div className="bg-white/5 rounded-xl p-4">
                          <div className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">Peak Activity Hours</div>
                          <div className="space-y-2.5">
                            <div>
                              <div className="flex justify-between text-xs mb-1"><span className="text-white/60">10 AM – 2 PM</span><span className="text-secondary font-bold">38%</span></div>
                              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-2 bg-secondary rounded-full" style={{ width: "78%" }} /></div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1"><span className="text-white/60">5 PM – 8 PM</span><span className="text-primary font-bold">27%</span></div>
                              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-2 bg-primary rounded-full" style={{ width: "55%" }} /></div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1"><span className="text-white/60">8 PM – 12 AM</span><span className="text-white/50 font-bold">18%</span></div>
                              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-2 bg-white/30 rounded-full" style={{ width: "36%" }} /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT ON A REAL OPERATING SYSTEM */}
      <section className="py-24 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Technology</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Built on a Real Operating System
            </h3>
            <p className="text-muted-foreground text-lg">
              Not just an app. A full infrastructure layer for automated parking revenue management with zero operational burden.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { icon: KeyRound, title: "Permit Management", desc: "Digital resident, staff, and guest permits. No paper. No manual tracking.", badge: "Automated" },
              { icon: CreditCard, title: "Payment Automation", desc: "QR & text-to-pay. Apple Pay, Google Pay, or card. Every session captured automatically.", badge: "24/7" },
              { icon: ShieldCheck, title: "Enforcement Integration", desc: "We manage enforcement at every location — notices, compliance, and follow-through handled for you.", badge: "Passive" },
              { icon: BarChart3, title: "Reporting Dashboard", desc: "Live revenue, occupancy, and session data. Exportable, visible from anywhere.", badge: "Real-Time" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }}
                className="relative p-8 rounded-2xl bg-muted border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all text-center group"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{item.badge}</span>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 mt-3 group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <AppShowcase />

      {/* INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Industries We Serve</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tailored solutions for complex properties.</h3>
            </div>
            <button onClick={() => setLocation("/industries")} className="text-primary font-bold hover:text-navy transition-colors flex items-center gap-2 shrink-0">
              View all industries <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {featuredIndustries.map((ind, i) => (
              <motion.div key={i} className="group cursor-pointer" onClick={() => setLocation("/industries")} {...fadeIn}>
                <div className="bg-muted rounded-2xl p-10 h-full border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-all">
                  <ind.icon className="w-12 h-12 text-primary mb-6" />
                  <h4 className="text-2xl font-bold text-foreground mb-4">{ind.title}</h4>
                  <p className="text-muted-foreground mb-8">{ind.desc}</p>
                  <div className="text-primary font-semibold flex items-center gap-2">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border pt-10">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">All property types we serve</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {additionalIndustries.map((ind, i) => (
                <motion.button
                  key={i}
                  onClick={() => setLocation("/industries")}
                  className="flex flex-col items-start gap-3 p-5 rounded-2xl border border-border bg-muted hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-md transition-all text-left group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{ind.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
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
