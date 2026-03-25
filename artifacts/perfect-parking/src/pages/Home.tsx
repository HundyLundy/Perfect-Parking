import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Activity, Building, Hospital, CarFront, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
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
        title="Turn Your Parking Into Profit" 
        description="We help properties generate consistent monthly revenue from parking with zero operational burden." 
      />

      {/* HERO SECTION */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}parking-dollar.png`} 
            alt="Parking Revenue" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-semibold mb-6 tracking-wide uppercase">
                Operationally Passive Revenue
              </span>
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                Turn Your Parking <br/><span className="text-secondary">Into Profit.</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl text-balance">
                We help hotels, hospitals, and commercial real estate owners generate consistent monthly revenue from underutilized parking—with zero operational burden.
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
                  className="px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200"
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
              { num: "04", title: "Monthly Revenue", desc: "You receive a direct deposit and transparent reporting every month." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                className="relative p-8 rounded-2xl bg-muted border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-display font-extrabold text-primary/20 mb-4">{step.num}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
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
                Small Lot.<br/>Big Impact.
              </h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                In Wimberley, TX, a small property owner with just 50 parking spaces partnered with us to monetize weekend traffic. With zero upfront cost and zero staff required, their lot became a passive income machine.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass-panel-dark p-6 rounded-xl">
                  <div className="text-secondary text-3xl font-bold mb-1">50</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Spaces</div>
                </div>
                <div className="glass-panel-dark p-6 rounded-xl">
                  <div className="text-accent text-3xl font-bold mb-1">$1,000</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Monthly Profit</div>
                </div>
                <div className="glass-panel-dark p-6 rounded-xl">
                  <div className="text-white text-xl font-bold mb-1 mt-2">Weekends Only</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Operation</div>
                </div>
                <div className="glass-panel-dark p-6 rounded-xl">
                  <div className="text-primary-foreground text-3xl font-bold mb-1">0</div>
                  <div className="text-white/60 text-sm font-medium uppercase">Staff Management</div>
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
                alt="Wimberley Parking Lot" 
                className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 z-20 glass-panel-dark p-6 rounded-xl flex items-center gap-4 max-w-[280px]">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shrink-0">
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
            <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Why properties choose Perfect Parking.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "Fully Automated", desc: "No boom gates, no tickets, no cash. 100% digital payment infrastructure." },
              { icon: ShieldCheck, title: "Zero CAPEX", desc: "We provide the signage and digital setup. You pay nothing out of pocket." },
              { icon: TrendingUp, title: "Real-Time Reporting", desc: "Watch your revenue grow daily via our transparent partner dashboard." },
              { icon: CheckCircle2, title: "Turnkey Setup", desc: "From mapping to signage to enforcement, we handle the entire launch." }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg transition-all"
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Industries We Serve</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground">Tailored solutions for complex properties.</h3>
            </div>
            <button onClick={() => setLocation("/industries")} className="text-primary font-bold hover:text-navy transition-colors flex items-center gap-2">
              View all industries <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Building, title: "Hotels & Resorts", desc: "Stop revenue leakage and improve the guest check-in experience." },
              { icon: Hospital, title: "Healthcare Facilities", desc: "Ensure staff have spaces while monetizing visitor lots." },
              { icon: CarFront, title: "Commercial Real Estate", desc: "Turn empty tenant spots into a new revenue stream." }
            ].map((ind, i) => (
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
        </div>
      </section>

      {/* REVENUE POTENTIAL */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">What's your parking worth?</h2>
            <p className="text-xl text-white/70 mb-16">See the average monthly profit generated by our partners.</p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              <div className="glass-panel-dark p-8 rounded-2xl">
                <div className="text-white/60 font-semibold uppercase tracking-wider mb-2">50 Spaces</div>
                <div className="text-4xl font-bold text-accent mb-2">$800 - $1.5k</div>
                <div className="text-white/50 text-sm">per month</div>
              </div>
              <div className="glass-panel-dark p-8 rounded-2xl border-primary/50 relative transform sm:-translate-y-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">MOST COMMON</div>
                <div className="text-white/60 font-semibold uppercase tracking-wider mb-2">100 Spaces</div>
                <div className="text-4xl font-bold text-accent mb-2">$2k - $4k</div>
                <div className="text-white/50 text-sm">per month</div>
              </div>
              <div className="glass-panel-dark p-8 rounded-2xl">
                <div className="text-white/60 font-semibold uppercase tracking-wider mb-2">200+ Spaces</div>
                <div className="text-4xl font-bold text-accent mb-2">$5k+</div>
                <div className="text-white/50 text-sm">per month</div>
              </div>
            </div>

            <button 
              onClick={() => setLocation("/contact")}
              className="px-10 py-5 bg-secondary text-secondary-foreground text-xl font-bold rounded-xl shadow-[0_0_30px_rgba(222,198,0,0.3)] hover:scale-105 transition-transform"
            >
              Get Your Custom Estimate
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
