import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, MapPin, ShieldCheck, BarChart3, Bell, QrCode } from "lucide-react";

const screens = [
  {
    id: "find",
    label: "Find & Pay",
    icon: MapPin,
    color: "text-secondary",
    headline: "Find a spot. Pay in seconds.",
    body: "Drivers scan a QR code, enter their plate, and pay via Apple Pay or credit card — no app download required.",
    callouts: [
      { text: "Real-time availability", pos: "top-[12%] -left-[110px]", arrow: "right" },
      { text: "QR code scan", pos: "bottom-[35%] -left-[120px]", arrow: "right" },
    ]
  },
  {
    id: "permits",
    label: "Digital Permits",
    icon: QrCode,
    color: "text-green-400",
    headline: "No more paper parking permits.",
    body: "Issue digital permits to residents and guests instantly. Manage who belongs in your community — all from the dashboard.",
    callouts: [
      { text: "Resident permit", pos: "top-[20%] -right-[115px]", arrow: "left" },
      { text: "Guest pass", pos: "bottom-[30%] -right-[110px]", arrow: "left" },
    ]
  },
  {
    id: "control",
    label: "Access Control",
    icon: ShieldCheck,
    color: "text-blue-400",
    headline: "Authorized people only.",
    body: "You decide who parks in your lot. Enforce it automatically with LPR technology — no confrontations, no hassle.",
    callouts: [
      { text: "Auto enforcement", pos: "top-[15%] -left-[125px]", arrow: "right" },
      { text: "Violation alerts", pos: "bottom-[28%] -left-[115px]", arrow: "right" },
    ]
  },
  {
    id: "revenue",
    label: "Revenue Share",
    icon: BarChart3,
    color: "text-secondary",
    headline: "Your lot. Your income stream.",
    body: "Track every transaction live. Receive direct deposits monthly. Our Revenue Share Program means we only win when you win.",
    callouts: [
      { text: "Live dashboard", pos: "top-[18%] -right-[120px]", arrow: "left" },
      { text: "Monthly deposit", pos: "bottom-[32%] -right-[115px]", arrow: "left" },
    ]
  },
  {
    id: "alerts",
    label: "Smart Alerts",
    icon: Bell,
    color: "text-amber-400",
    headline: "Stay informed, hands-free.",
    body: "Get instant notifications on occupancy changes, violations, and monthly summaries — all without lifting a finger.",
    callouts: [
      { text: "Instant alerts", pos: "top-[16%] -left-[115px]", arrow: "right" },
      { text: "Occupancy data", pos: "bottom-[30%] -left-[110px]", arrow: "right" },
    ]
  },
  {
    id: "billing",
    label: "Billing & Payments",
    icon: CreditCard,
    color: "text-purple-400",
    headline: "Frictionless billing. Zero disputes.",
    body: "Apple Pay, Google Pay, and credit card — all accepted. Receipts sent automatically. Chargebacks handled by us.",
    callouts: [
      { text: "Apple/Google Pay", pos: "top-[20%] -right-[125px]", arrow: "left" },
      { text: "Auto receipts", pos: "bottom-[28%] -right-[110px]", arrow: "left" },
    ]
  }
];

export function AppShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const screen = screens[active];

  return (
    <section className="py-24 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold mb-4 tracking-wide uppercase">
            The Perfect Parking App
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Everything managed from <span className="text-secondary">one platform.</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A purpose-built mobile platform that gives owners full control and gives parkers a seamless experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Callouts */}
              <AnimatePresence>
                {screen.callouts.map((c, i) => (
                  <motion.div
                    key={`${active}-${i}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className={`absolute z-20 hidden lg:flex items-center gap-2 ${c.pos}`}
                  >
                    {c.arrow === "right" && (
                      <>
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-3 py-2 text-white text-xs font-semibold whitespace-nowrap">
                          {c.text}
                        </div>
                        <div className="w-8 h-[2px] bg-secondary/60" />
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </>
                    )}
                    {c.arrow === "left" && (
                      <>
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <div className="w-8 h-[2px] bg-secondary/60" />
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-3 py-2 text-white text-xs font-semibold whitespace-nowrap">
                          {c.text}
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Glow */}
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-75" />

              {/* Phone frame */}
              <div className="relative z-10 w-[260px] h-[530px] bg-gray-900 rounded-[44px] p-3 shadow-2xl border-[6px] border-gray-700">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-2xl z-20" />
                <div className="w-full h-full rounded-[36px] overflow-hidden bg-white relative">
                  <img
                    src={`${import.meta.env.BASE_URL}app-screenshot.png`}
                    alt="Perfect Parking App"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Feature overlay that slides in */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy via-navy/95 to-transparent p-5 pt-10"
                    >
                      <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${screen.color}`}>
                        {screen.label}
                      </div>
                      <p className="text-white text-sm font-semibold leading-snug">
                        {screen.headline}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>

          {/* Feature tabs + description */}
          <div>
            {/* Tab buttons */}
            <div className="grid grid-cols-3 gap-2 mb-10">
              {screens.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-200 ${
                    i === active
                      ? "bg-white/15 border-white/30 shadow-lg"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <s.icon className={`w-5 h-5 ${i === active ? screen.color : "text-white/50"}`} />
                  <span className={`text-xs font-semibold ${i === active ? "text-white" : "text-white/40"}`}>
                    {s.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Active feature description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6`}>
                  <screen.icon className={`w-7 h-7 ${screen.color}`} />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  {screen.headline}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {screen.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 items-center">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-secondary" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            {/* App store badges */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/50 text-sm mb-4 font-medium">Download the Perfect Parking app</p>
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/15 transition-colors cursor-pointer">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <div className="text-white/50 text-xs">Download on the</div>
                    <div className="text-white font-bold text-sm">App Store</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/15 transition-colors cursor-pointer">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.37.21.8.22 1.21-.02l12.66-7.34-2.84-2.84L3.18 23.76zM.5 1.26C.18 1.68 0 2.26 0 3v18c0 .74.18 1.32.5 1.74l.09.09L10.16 13.3v-.21L.59 1.17.5 1.26zM20.04 10.38l-2.96-1.71-3.16 3.16 3.16 3.16 2.96-1.72c.84-.49.84-1.29 0-1.89zM4.39.28L17.08 7.62l-2.84 2.84L3.18.26C3.6.04 4.03.06 4.39.28z"/>
                  </svg>
                  <div>
                    <div className="text-white/50 text-xs">Get it on</div>
                    <div className="text-white font-bold text-sm">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
