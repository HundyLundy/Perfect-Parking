import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { AppShowcase } from "@/components/AppShowcase";
import {
  ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Activity,
  Building, Hospital, CarFront, Users, Home as HomeIcon, ShoppingBag,
  Landmark, LayoutGrid, Music, GraduationCap, ParkingCircle, Plane,
  Truck, MapPin, BarChart3, QrCode, Bell, CreditCard, UserCheck, Globe
} from "lucide-react";
import { useLocation } from "wouter";
import { useCountUp } from "@/hooks/useCountUp";

export default function Home() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"owners" | "drivers">("owners");

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
    { icon: QrCode,       title: "No More Paper Parking Permits",      desc: "Issue digital permits for residents and guests instantly from the dashboard — no printing, no handouts, no lost passes." },
    { icon: UserCheck,    title: "You Are In Control",                  desc: "Only authorized people park in your community. You decide who belongs — we enforce it automatically." },
    { icon: ShieldCheck,  title: "Eliminate Guest Parking Abuse",       desc: "Stop unauthorized vehicles from taking spaces meant for residents. Real enforcement, zero confrontations.", teal: true },
    { icon: MapPin,       title: "Real-Time Space Availability",        desc: "Live occupancy data ensures accurate, up-to-the-minute information on every space in your property.", teal: true },
    { icon: Activity,     title: "User-Friendly Interface",             desc: "Intuitive navigation for a seamless parking experience — for property managers and parkers alike." },
    { icon: BarChart3,    title: "Reporting & Analytics",               desc: "User-friendly dashboards with detailed reports on revenue, occupancy, violations, and compliance.", teal: true },
    { icon: CreditCard,   title: "Payment & Billing Support",           desc: "Apple Pay, Google Pay, credit card — accepted instantly. Auto receipts. Zero billing disputes on your end." },
    { icon: TrendingUp,   title: "Revenue Share Program",               desc: "We only win when you win. Our revenue share model aligns our incentives with your property's success.", green: true },
    { icon: Globe,        title: "Integration & Scalability",           desc: "Connect with your existing PMS, access control, and property management systems. Scale across multiple locations.", teal: true },
    { icon: Bell,         title: "Hassle-Free Setup & Onboarding",      desc: "From satellite mapping to digital signage to enforcement — we handle everything. You're live in under 30 days." },
    { icon: CheckCircle2, title: "Eliminate Enforcement Mistakes",       desc: "Digital LPR and automated violation notices eliminate the human error in manual enforcement.", green: true },
    { icon: ShieldCheck,  title: "Create a Safer Parking Environment",  desc: "Only authorized vehicles on property means fewer strangers, less trespassing, and a safer community overall." }
  ];

  return (
    <>
      <SEO
        title="Turn Your Parking Into Profit"
        description="We help hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners generate consistent monthly revenue from underutilized parking. Zero upfront cost. Zero staff required."
        keywords="parking management company, parking revenue share, hotel parking management, HOA parking management, multifamily parking management, automated parking enforcement Texas, manage and monetize parking"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Perfect Parking",
            "description": "Technology-enabled parking revenue platform. We help hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners monetize underutilized parking into passive monthly income.",
            "slogan": "We Turn Parking Into Profits",
            "url": "https://www.perfectparking.com",
            "telephone": "(361) 585-1111",
            "email": "info@perfectparking.com",
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
                  onClick={() => setLocation("/contact")}
                  className="px-8 py-4 bg-secondary text-secondary-foreground text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-secondary/90 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Get My Parking Analysis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setLocation("/solutions")}
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

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">The Process</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">From empty spaces to monthly deposits in 4 steps.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Free Audit",             desc: "We analyze your property to project exact revenue potential.",                                         color: "blue" },
              { num: "02", title: "Custom Setup",           desc: "We deploy our hardware-light, automated system at zero cost to you.",                                  color: "teal" },
              { num: "03", title: "Automated Collections",  desc: "We handle payments, compliance, and guest support 24/7.",                                              color: "primary" },
              { num: "04", title: "Monthly Revenue",        desc: "You receive a direct deposit and transparent reporting every month.",                                   color: "accent" }
            ].map((step, i) => (
              <motion.div
                key={i}
                className={`relative p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  step.color === "accent"  ? "bg-accent/5 border-accent/30" :
                  step.color === "blue"   ? "bg-brand-blue/5 border-brand-blue/25" :
                  step.color === "teal"   ? "bg-brand-teal/5 border-brand-teal/25" :
                  "bg-muted border-border"
                }`}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`text-5xl font-display font-extrabold mb-4 ${
                  step.color === "accent"  ? "text-accent/30" :
                  step.color === "blue"   ? "text-brand-blue/25" :
                  step.color === "teal"   ? "text-brand-teal/25" :
                  "text-primary/20"
                }`}>{step.num}</div>
                <h4 className={`text-xl font-bold mb-3 ${
                  step.color === "accent" ? "text-accent" :
                  step.color === "blue"  ? "text-brand-blue" :
                  step.color === "teal"  ? "text-brand-teal" :
                  "text-foreground"
                }`}>{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
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
                In Wimberley, TX, a small property owner with just 50 parking spaces partnered with us to monetize weekend traffic. With zero upfront cost and zero staff required, their lot became a passive income machine.
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
                src={`${import.meta.env.BASE_URL}boat-ramp.jpeg`}
                alt="Perfect Parking Sign at Property"
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

      {/* WHY PERFECT PARKING */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Why Perfect Parking?</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              An easy-to-use system built for real property owners.
            </h3>
            <p className="text-muted-foreground text-lg">
              One platform that handles parking space management, payment and billing, integration, enforcement, and reporting — all without adding work to your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* CTA below features */}
          <div className="text-center mt-12">
            <button
              onClick={() => setLocation("/contact")}
              className="px-10 py-4 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Get My Parking Analysis <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* PLATFORM DEMO */}
      <section className="py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-3">The Platform</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">One platform. Two perspectives.</h3>
            <p className="text-white/70 text-lg">See what it's like for your renters and for you as an owner.</p>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {(["owners", "drivers"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  activeTab === tab
                    ? "bg-secondary text-navy shadow-lg scale-105"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {tab === "owners" ? "For Property Owners" : "For Drivers"}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {activeTab === "owners" ? (
                <motion.div key="owners" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">Your revenue dashboard — always on.</h4>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Log in anytime to see live transactions, occupancy rates, and monthly projections. We handle all the accounting and deposit revenue directly to your account.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { label: "Real-time revenue tracking", desc: "See every transaction as it happens" },
                      { label: "Occupancy & utilization reports", desc: "Know exactly how your lot is performing" },
                      { label: "Violation management", desc: "Automated notices — no confrontations" },
                      { label: "Monthly direct deposit", desc: "Revenue lands in your account automatically" },
                    ].map((item) => (
                      <li key={item.label} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-white font-semibold text-sm">{item.label}</div>
                          <div className="text-white/50 text-xs">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div key="drivers" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  <h4 className="text-2xl font-display font-bold text-white mb-4">Pay in seconds. No app required.</h4>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Drivers scan a QR code or text a shortcode to pay with Apple Pay, Google Pay, or any card. Instant receipt. Zero friction.
                  </p>
                  <ul className="space-y-4">
                    {[
                      { label: "Scan or text to pay", desc: "QR code visible on every sign" },
                      { label: "Apple Pay & Google Pay", desc: "One tap checkout, no card entry needed" },
                      { label: "Instant digital receipt", desc: "Sent by text or email automatically" },
                      { label: "No app download", desc: "Works on any smartphone, any time" },
                    ].map((item) => (
                      <li key={item.label} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-white font-semibold text-sm">{item.label}</div>
                          <div className="text-white/50 text-xs">{item.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Mock Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                {activeTab === "owners" ? (
                  <motion.div key="owners-ui" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {/* Dashboard Header */}
                    <div className="bg-navy px-5 py-4 flex items-center gap-3">
                      <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"/><div className="w-3 h-3 rounded-full bg-yellow-400"/><div className="w-3 h-3 rounded-full bg-green-400"/></div>
                      <span className="text-white/60 text-xs font-mono">owner.perfectparking.com/dashboard</span>
                    </div>
                    <div className="bg-gray-50 p-6">
                      <div className="mb-5">
                        <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Revenue This Month</div>
                        <div className="text-4xl font-display font-bold text-foreground">$2,847</div>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-green-600 text-sm font-bold">+18%</span>
                          <span className="text-muted-foreground text-xs">vs last month</span>
                        </div>
                      </div>
                      <div className="mb-5">
                        <div className="flex justify-between text-xs font-semibold text-muted-foreground mb-1.5">
                          <span>Lot Occupancy</span><span className="text-foreground">76%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-3 bg-primary rounded-full" style={{ width: "76%" }} />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white rounded-xl p-3 border border-border text-center">
                          <div className="text-xl font-bold text-foreground">47</div>
                          <div className="text-xs text-muted-foreground">Transactions</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 border border-border text-center">
                          <div className="text-xl font-bold text-red-500">3</div>
                          <div className="text-xs text-muted-foreground">Violations</div>
                        </div>
                        <div className="bg-white rounded-xl p-3 border border-green-100 bg-green-50 text-center">
                          <div className="text-xl font-bold text-green-600">$0</div>
                          <div className="text-xs text-muted-foreground">Staff Cost</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="drivers-ui" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <div className="bg-primary px-5 py-4 flex items-center gap-3">
                      <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400"/><div className="w-3 h-3 rounded-full bg-yellow-400"/><div className="w-3 h-3 rounded-full bg-green-400"/></div>
                      <span className="text-white/60 text-xs font-mono">pay.perfectparking.com</span>
                    </div>
                    <div className="bg-gray-50 p-6">
                      <div className="text-center mb-4">
                        <div className="bg-white inline-flex p-4 rounded-2xl shadow-sm mb-3 border border-border">
                          <QrCode className="w-16 h-16 text-foreground" />
                        </div>
                        <div className="font-bold text-foreground text-lg">Lot 14A — Main Street</div>
                        <div className="text-muted-foreground text-sm">$3.00 / hour · Open 24 hrs</div>
                      </div>
                      <div className="bg-white rounded-xl border border-border p-4 mb-4">
                        <div className="text-xs font-semibold text-muted-foreground mb-3">SELECT DURATION</div>
                        <div className="flex gap-2 mb-4">
                          {["1 hr", "2 hrs", "4 hrs", "All Day"].map((d, i) => (
                            <button key={d} className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${i === 1 ? "bg-primary text-white border-primary" : "border-border text-muted-foreground"}`}>{d}</button>
                          ))}
                        </div>
                        <div className="flex justify-between text-sm font-semibold">
                          <span className="text-muted-foreground">Total</span>
                          <span className="text-foreground">$6.00</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                          <span className="text-lg"></span> Apple Pay
                        </button>
                        <button className="w-full py-3 bg-white border border-border text-foreground rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                          <CreditCard className="w-4 h-4" /> Pay with Card
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
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
                Figures reflect average monthly gross revenue paid to property owners from Perfect Parking's active U.S. partner portfolio (2023 – 2025). Results vary by market, utilization rate, pricing model, and seasonality. <span className="text-white/65">Verified example: Wimberley, TX — 50-space lot generating <strong className="text-white/80">$1,000/month profit</strong>, weekends only, zero staff.</span> Revenue share structure and property-specific projections provided at no cost during your free audit.
              </p>
            </div>

            <button
              onClick={() => setLocation("/contact")}
              className="px-10 py-5 bg-secondary text-secondary-foreground text-xl font-bold rounded-xl shadow-[0_0_40px_rgba(222,198,0,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(222,198,0,0.5)] transition-all duration-200 inline-flex items-center gap-3"
            >
              Get My Parking Analysis <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
