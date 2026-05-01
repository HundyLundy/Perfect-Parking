import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { CheckCircle2, MonitorSmartphone, Receipt, ShieldAlert, Zap, ArrowRight } from "lucide-react";
import { useLocation, Link } from "wouter";

export default function Solutions() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEO />

      <section className="bg-navy py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Modern Parking.<br/>Zero Headaches.
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Old parking systems rely on expensive boom gates, constant maintenance, and staff intervention. Perfect Parking is a 100% digital, integration-first platform that runs on autopilot.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "No upfront hardware costs",
                  "QR code & text-to-pay technology",
                  "Automated enforcement and compliance",
                  "Live revenue dashboard"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setLocation("/contact")}
                className="px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/90 transition-colors shadow-lg"
              >
                Book a Platform Demo
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black">
                <video 
                  src={`${import.meta.env.BASE_URL}pp-automated.mp4`} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full aspect-video object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How the platform works</h2>
            <p className="text-xl text-muted-foreground">A completely passive system designed to maximize your lot's earning potential while minimizing friction.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: MonitorSmartphone,
                title: "Frictionless Digital Payments",
                desc: "Drivers scan a highly visible QR code or text a shortcode to pay instantly via Apple Pay, Google Pay, or Credit Card. No apps to download, no confusing meters."
              },
              {
                icon: ShieldAlert,
                title: "Automated Enforcement",
                desc: "We utilize smart digital enforcement and LPR (License Plate Recognition) partnerships to ensure compliance. If someone doesn't pay, our system issues violation notices automatically—you never have to confront a driver."
              },
              {
                icon: Zap,
                title: "Integration-First Architecture",
                desc: "Whether you use hotel property management systems (PMS) or tenant registries, our software integrates seamlessly to ensure guests and VIPs park free while everyone else pays."
              },
              {
                icon: Receipt,
                title: "Transparent Revenue Dashboard",
                desc: "Log in anytime to see live transactions, occupancy rates, and monthly projections. We handle all the accounting and send you a direct deposit every month."
              }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted p-10 rounded-2xl border border-border"
              >
                <feat.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DRIVER APP SHOWCASE */}
      <section className="py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Phone screenshots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-5 flex-wrap"
            >
              {[
                { img: "app-find.png",     alt: "Find & Pay — map view" },
                { img: "app-session.png",  alt: "Live session tracking" },
                { img: "app-gated.png",    alt: "Gated lot access control" },
              ].map((s, i) => (
                <div key={i} className="relative" style={{ marginTop: i === 1 ? "2.5rem" : 0 }}>
                  <div className="w-[120px] md:w-[145px] rounded-[2.4rem] border-[6px] border-white/20 bg-black shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-10" />
                    <img src={`${import.meta.env.BASE_URL}${s.img}`} alt={s.alt} className="w-full h-auto block" loading="lazy" />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Parker App</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-snug">
                A world-class experience<br />for your drivers.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                From finding a spot on the map to tapping to exit a gated lot — the Perfect Parking app is fast, intuitive, and works on any phone with zero download required for first-time parkers.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Find nearby lots on an interactive map",
                  "Scan QR or text to pay — 30 seconds or less",
                  "Live session timer with one-tap extend",
                  "Gated lot exit with license plate recognition",
                  "Instant receipts by text or email",
                ].map((l) => (
                  <li key={l} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" /> {l}
                  </li>
                ))}
              </ul>
              <Link
                href="/how-it-works/parker"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-navy font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg"
              >
                See the full driver walkthrough <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTAL SCREENSHOT */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Owner Portal</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-snug">
                Your dashboard.<br />Real numbers.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Log into the Perfect Parking Partner Portal anytime to see total revenue, active parkers, and month-to-date validations. Everything in one clean view — no spreadsheets, no calls needed.
              </p>
              <button
                onClick={() => setLocation("/contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg"
              >
                Get a Free Analysis <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-gray-400 text-xs font-mono ml-2">owner.perfectparking.com / dashboard</span>
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}portal-dashboard.png`}
                  alt="Perfect Parking Partner Portal showing revenue, parkers, and validations dashboard"
                  className="w-full block"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
