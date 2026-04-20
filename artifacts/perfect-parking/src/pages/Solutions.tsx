import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { CheckCircle2, MonitorSmartphone, Receipt, ShieldAlert, Zap } from "lucide-react";
import { useLocation } from "wouter";

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
    </>
  );
}
