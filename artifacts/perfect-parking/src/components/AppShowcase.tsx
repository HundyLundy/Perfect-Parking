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
    img: "app-find.png",
    imgAlt: "Perfect Parking app showing map view with parking locations and Start Parking Session button",
  },
  {
    id: "session",
    label: "Live Session",
    icon: Bell,
    color: "text-amber-400",
    headline: "Real-time session tracking.",
    body: "Parkers see their active session live — time elapsed, expiry, and options to extend or add a validation. Full transparency, zero confusion.",
    img: "app-session.png",
    imgAlt: "Perfect Parking app showing active parking session in progress with Extend, Stop, and Add Promotion buttons",
  },
  {
    id: "control",
    label: "Access Control",
    icon: ShieldCheck,
    color: "text-blue-400",
    headline: "Authorized people only.",
    body: "You decide who parks in your lot. Enforce it automatically with LPR technology — no confrontations, no hassle. Guests tap to exit seamlessly.",
    img: "app-gated.png",
    imgAlt: "Perfect Parking app showing gated parking session with Tap to Exit and Add Validation buttons",
  },
  {
    id: "revenue",
    label: "Revenue Share",
    icon: BarChart3,
    color: "text-secondary",
    headline: "Your lot. Your income stream.",
    body: "Track every transaction live. Receive direct deposits monthly. Our Revenue Share Program means we only win when you win.",
    img: "app-history.png",
    imgAlt: "Perfect Parking app showing past session detail with Payment Successful confirmation",
  },
  {
    id: "extend",
    label: "Flexible Pricing",
    icon: QrCode,
    color: "text-green-400",
    headline: "Hourly, daily, or custom.",
    body: "Parkers choose exactly how long they need — 2 hours, 6 hours, 24 hours, or a custom time. Pricing updates instantly. No guesswork.",
    img: "app-extend.png",
    imgAlt: "Perfect Parking app showing Extend Time screen with 2, 3, 6, and 24 hour pricing options",
  },
  {
    id: "billing",
    label: "Billing & Payments",
    icon: CreditCard,
    color: "text-purple-400",
    headline: "Frictionless billing. Zero disputes.",
    body: "Credit card, debit, and digital wallets all accepted. Payment profiles let parkers sort sessions by business or personal — receipts sent automatically.",
    img: "app-payments.png",
    imgAlt: "Perfect Parking app showing Payments screen with saved Visa and Amex cards and option to add payment methods",
  },
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
          {/* App screenshot with CSS phone frame */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-primary/40 blur-[60px] rounded-full scale-90" />
              <div className="absolute inset-0 bg-secondary/10 blur-[80px] rounded-full scale-75" />

              {/* Phone frame */}
              <div className="relative z-10 w-[260px] md:w-[290px]">
                <div className="relative rounded-[2.8rem] border-[7px] border-white/20 bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_80px_rgba(0,0,0,0.6)] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />
                  {/* Screen */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={screen.id}
                      src={`${import.meta.env.BASE_URL}${screen.img}`}
                      alt={screen.imgAlt}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="w-full h-auto block"
                    />
                  </AnimatePresence>
                  {/* Home bar */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
                </div>
              </div>

              {/* Feature callout badge — bottom */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3 whitespace-nowrap"
                >
                  <screen.icon className={`w-5 h-5 ${screen.color}`} />
                  <span className="text-white text-sm font-semibold">{screen.label}</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Feature tabs + description */}
          <div>
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

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
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
