import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { AppShowcase } from "@/components/AppShowcase";
import {
  ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Activity,
  Building, Hospital, CarFront, Users, Home as HomeIcon, ShoppingBag,
  Landmark, LayoutGrid, Music, GraduationCap, ParkingCircle, Plane,
  Truck, MapPin, BarChart3, QrCode, Bell, CreditCard, UserCheck, Globe
} from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

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
    { icon: QrCode,       title: "No More Paper Parking Permits",   desc: "Issue digital permits for residents and guests instantly from the dashboard — no printing, no handouts, no lost passes." },
    { icon: UserCheck,    title: "You Are In Control",              desc: "Only authorized people park in your community. You decide who belongs — we enforce it automatically." },
    { icon: ShieldCheck,  title: "Eliminate Guest Parking Abuse",   desc: "Stop unauthorized vehicles from taking spaces meant for residents. Real enforcement, zero confrontations." },
    { icon: MapPin,       title: "Real-Time Space Availability",    desc: "Live occupancy data ensures accurate, up-to-the-minute information on every space in your property." },
    { icon: Activity,     title: "User-Friendly Interface",         desc: "Intuitive navigation for a seamless parking experience — for property managers and parkers alike." },
    { icon: BarChart3,    title: "Reporting & Analytics",           desc: "User-friendly dashboards with detailed reports on revenue, occupancy, violations, and compliance." },
    { icon: CreditCard,   title: "Payment & Billing Support",       desc: "Apple Pay, Google Pay, credit card — accepted instantly. Auto receipts. Zero billing disputes on your end." },
    { icon: TrendingUp,   title: "Revenue Share Program",           desc: "We only win when you win. Our revenue share model aligns our incentives with your property's success.", green: true },
    { icon: Globe,        title: "Integration & Scalability",       desc: "Connect with your existing PMS, access control, and property management systems. Scale across multiple locations." },
    { icon: Bell,         title: "Hassle-Free Setup & Onboarding",  desc: "From satellite mapping to digital signage to enforcement — we handle everything. You're live in under 30 days." },
    { icon: CheckCircle2, title: "Eliminate Enforcement Mistakes",  desc: "Digital LPR and automated violation notices eliminate the human error in manual enforcement.", green: true },
    { icon: ShieldCheck,  title: "Create a Safer Parking Environment", desc: "Only authorized vehicles on property means fewer strangers, less trespassing, and a safer community overall." }
  ];

  return (
    <>
      <SEO
        title="Turn Your Parking Into Profit"
        description="We help properties generate consistent monthly revenue from parking with zero operational burden."
      />

      {/* HERO SECTION */}
      <section className="relative bg-navy overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}parking-dollar.png`}
            alt="Parking Revenue"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 text-secondary border border-secondary/40 text-sm font-semibold mb-6 tracking-wide uppercase">
                Operationally Passive Revenue
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
                Turn Your Parking <br /><span className="text-secondary">Into Profit.</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                We help hotels, hospitals, multifamily communities, and commercial real estate owners generate consistent monthly revenue from underutilized parking — with zero operational burden.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setLocation("/contact")}
                  className="px-8 py-4 bg-secondary text-secondary-foreground text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-secondary/90 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Get a Free Revenue Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setLocation("/solutions")}
                  className="px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all duration-200"
                >
                  How It Works
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-muted py-8 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50 text-center">
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-navy mb-1">50+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Locations Served</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-accent mb-1">$1M+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Revenue Generated</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-navy mb-1">0</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Staff Required</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
              <div className="text-3xl lg:text-4xl font-display font-bold text-primary mb-1">30 Days</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Average Setup</div>
            </motion.div>
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
              { num: "01", title: "Free Audit", desc: "We analyze your property to project exact revenue potential." },
              { num: "02", title: "Custom Setup", desc: "We deploy our hardware-light, automated system at zero cost to you." },
              { num: "03", title: "Automated Collections", desc: "We handle payments, compliance, and guest support 24/7." },
              { num: "04", title: "Monthly Revenue", desc: "You receive a direct deposit and transparent reporting every month.", accent: true }
            ].map((step, i) => (
              <motion.div
                key={i}
                className={`relative p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${step.accent ? "bg-accent/5 border-accent/30" : "bg-muted border-border"}`}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`text-5xl font-display font-extrabold mb-4 ${step.accent ? "text-accent/30" : "text-primary/20"}`}>{step.num}</div>
                <h4 className={`text-xl font-bold mb-3 ${step.accent ? "text-accent" : "text-foreground"}`}>{step.title}</h4>
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
                  feature.green
                    ? "bg-accent/5 border-accent/25 hover:border-accent/50"
                    : "bg-white border-border hover:border-primary/20"
                }`}
                {...fadeIn}
                transition={{ delay: (i % 6) * 0.07 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  feature.green ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"
                }`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${feature.green ? "text-accent" : "text-foreground"}`}>{feature.title}</h4>
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
              Schedule a Free Demo <ArrowRight className="w-5 h-5" />
            </button>
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
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Also serving</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {additionalIndustries.map((ind, i) => (
                <motion.button
                  key={i}
                  onClick={() => setLocation("/industries")}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-muted hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ind.icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{ind.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MILITARY PARTNER SECTION */}
      <section className="relative py-24 text-white overflow-hidden min-h-[520px] flex items-center">
        {/* Soldiers background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}military-partner.png`}
            alt="Soldiers background"
            className="w-full h-full object-cover"
            style={{ objectPosition: "30% center" }}
          />
          {/* Strong overlay to obscure any rectangle artifacts from the source image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/85 to-black/78" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — quote content, no box */}
            <motion.div {...fadeIn}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">★ New Partnership Announcement</p>
              <p className="text-white/90 text-lg leading-relaxed italic mb-6" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
                "We are thrilled to share some exciting news! Today, we proudly announce our brand-new partnership with Perfect Parking, a collaboration that will help make a real difference in the lives of our nation's heroes. Now, every time you park at a Perfect Parking lot, you're not just finding a spot — you're actively supporting combat-wounded veterans and Gold Star spouses. Together, we're turning everyday moments into meaningful change."
              </p>
              <p className="text-secondary font-bold text-sm mb-6 uppercase tracking-wider" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.6)' }}>
                — Military Warriors Support Foundation
              </p>
              <p className="text-white/60 text-xs uppercase tracking-widest">Show Your Support</p>
            </motion.div>

            {/* RIGHT — Perfect Parking partnership card, rebuilt without image box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="inline-block bg-primary/90 text-white text-xs font-bold uppercase tracking-[0.25em] px-6 py-2 mb-5">
                New Partnership
              </div>

              {/* PERFECT PARKING grid-style wordmark */}
              <div className="mb-4 grid grid-cols-8 gap-[3px] text-white font-display font-black text-2xl md:text-3xl leading-none w-fit mx-auto">
                {["P","E","R","F","E","C","T",""].map((l, i) => (
                  <div key={`r1-${i}`} className={`w-9 h-9 md:w-11 md:h-11 flex items-center justify-center border border-white/40 ${l ? "bg-white/15" : "bg-transparent border-transparent"}`}>{l}</div>
                ))}
                {["P","A","R","K","🚗","N","G",""].map((l, i) => (
                  <div key={`r2-${i}`} className={`w-9 h-9 md:w-11 md:h-11 flex items-center justify-center border border-white/40 text-xl ${l && l !== "" ? "bg-white/15" : "bg-transparent border-transparent"}`}>{l}</div>
                ))}
              </div>

              <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-1">Manage &amp; Monetize Your Parking</p>
              <p className="text-white font-bold text-sm tracking-wider mb-8">PERFECTPARKING.COM</p>

              <div className="w-full border-t border-white/25 pt-6">
                <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">Thank You For Helping Us</p>
                <p className="text-white/80 text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2">
                  <span>★</span> Serve the Heroes Who Serve For Us
                </p>
              </div>
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

            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                <div className="text-white/70 font-semibold uppercase tracking-wider mb-2 text-sm">50 Spaces</div>
                <div className="text-4xl font-bold text-secondary mb-2">$800 – $1.5k</div>
                <div className="text-white/60 text-sm">per month</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-secondary/40 p-8 rounded-2xl relative transform sm:-translate-y-4 shadow-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-navy text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">MOST COMMON</div>
                <div className="text-white/70 font-semibold uppercase tracking-wider mb-2 text-sm">100 Spaces</div>
                <div className="text-4xl font-bold text-secondary mb-2">$2k – $4k</div>
                <div className="text-white/60 text-sm">per month</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
                <div className="text-white/70 font-semibold uppercase tracking-wider mb-2 text-sm">200+ Spaces</div>
                <div className="text-4xl font-bold text-secondary mb-2">$5k+</div>
                <div className="text-white/60 text-sm">per month</div>
              </div>
            </div>

            <button
              onClick={() => setLocation("/contact")}
              className="px-10 py-5 bg-secondary text-secondary-foreground text-xl font-bold rounded-xl shadow-[0_0_40px_rgba(222,198,0,0.4)] hover:scale-105 hover:shadow-[0_0_60px_rgba(222,198,0,0.5)] transition-all duration-200"
            >
              Schedule a Free Demo
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
