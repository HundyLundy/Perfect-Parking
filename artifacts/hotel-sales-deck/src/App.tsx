import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, DollarSign, Users, ShieldCheck, Zap, Hotel, BarChart3, Smartphone } from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const slides = [
  { id: "cover" },
  { id: "problem" },
  { id: "solution" },
  { id: "how-dashboard" },
  { id: "how-validate-lp" },
  { id: "how-validate-mobile" },
  { id: "how-qr" },
  { id: "parker-experience" },
  { id: "revenue" },
  { id: "close" },
];

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center gap-3 px-8 py-4 bg-[#0f3d6e]/95 backdrop-blur">
      <span className="text-white/40 text-xs font-mono w-16">{current + 1} / {total}</span>
      <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#dec600] rounded-full"
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
}

function NavArrows({ onPrev, onNext, hasPrev, hasNext }: { onPrev: () => void; onNext: () => void; hasPrev: boolean; hasNext: boolean }) {
  return (
    <>
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 flex items-center justify-center text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
}

function SlideCover() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <img src={`${BASE}logo-pp.webp`} alt="Perfect Parking" className="h-20 mx-auto mb-10 drop-shadow-lg" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
        <div className="inline-block bg-[#dec600]/20 border border-[#dec600]/40 rounded-full px-5 py-2 text-[#dec600] text-sm font-bold uppercase tracking-widest mb-8">
          Hotel & Resort Parking Solution
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Parking Lot<br />Should Pay You.
        </h1>
        <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-12">
          A fully digital parking revenue platform that eliminates front desk friction, stops unauthorized parking, and generates passive income — with zero operational burden.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
          {["No upfront cost", "Live in under 30 days", "Revenue share model", "Texas-based team"].map(b => (
            <span key={b} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#dec600]" /> {b}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SlideProblem() {
  const problems = [
    {
      icon: DollarSign,
      title: "Revenue walking out the door",
      body: "Non-guests park in your lot for free while your paying guests circle looking for spots. Every unpaid parker is money left on the table — indefinitely."
    },
    {
      icon: Users,
      title: "Front desk bottleneck",
      body: "Staff spend valuable time manually registering plates, managing paper passes, and fielding parking complaints. That's not hospitality — that's logistics."
    },
    {
      icon: Hotel,
      title: "Guests frustrated at checkout",
      body: "Guests get surprise charges, parking confusion, or worse — their car is towed. That's a one-star review waiting to happen."
    },
  ];
  return (
    <div className="flex flex-col justify-center h-full px-12 md:px-20 max-w-6xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">The Problem</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14 leading-tight">
          Most hotels are losing<br />$2,000–$8,000/month<br />on parking. Here's why.
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="bg-white/8 border border-white/15 rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
              <p.icon className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
            <p className="text-white/60 leading-relaxed text-sm">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SlideSolution() {
  const points = [
    { icon: Zap, label: "Guests validated in seconds — no front desk involvement" },
    { icon: ShieldCheck, label: "Non-guests pay market rate automatically via QR code" },
    { icon: BarChart3, label: "Live dashboard: see every session, payment, and validation" },
    { icon: DollarSign, label: "Monthly revenue share deposited directly to you" },
    { icon: Smartphone, label: "Guests exit gated lots with one tap on their phone" },
    { icon: TrendingUp, label: "No upfront cost — we only win when you win" },
  ];
  return (
    <div className="flex flex-col justify-center h-full px-12 md:px-20 max-w-6xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">The Solution</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Perfect Parking handles everything.<br />You collect the revenue.
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          We install, operate, and maintain a fully digital parking system tailored to your hotel's needs — from guest validation to enforcement to monthly reporting.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 bg-white/8 border border-white/12 rounded-xl px-6 py-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#dec600]/20 flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-[#dec600]" />
            </div>
            <span className="text-white font-medium text-sm leading-snug">{p.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SlidePortalDashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center h-full px-12 md:px-20 max-w-6xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">Step 1 — Partner Portal</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Your command center.<br />Everything in one view.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Log into the Perfect Parking Partner Portal to see total payments due, active parkers, and current month validations — all updated in real time. One login, total visibility.
        </p>
        <ul className="space-y-3">
          {[
            "Total revenue & payments at a glance",
            "See every active parker by name or plate",
            "Current month validation count and value",
            "Search parkers by name, plate, or email",
          ].map(l => (
            <li key={l} className="flex items-center gap-3 text-white/80 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#dec600] shrink-0" /> {l}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/15">
          <div className="bg-gray-800 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
            <span className="text-white/40 text-xs font-mono ml-2">owner.perfectparking.com / dashboard</span>
          </div>
          <img src={`${BASE}portal-dashboard.png`} alt="Partner Portal Dashboard" className="w-full block" />
        </div>
      </motion.div>
    </div>
  );
}

function SlideValidateLP() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center h-full px-12 md:px-20 max-w-6xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">Step 2 — Guest Validation via License Plate</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Validate a guest in 5 seconds.<br />No front desk required.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Your staff clicks "Quick Validation," enters the guest's license plate, and the system instantly applies free parking to their active session — or sends them a text to use later.
        </p>
        <div className="bg-[#dec600]/10 border border-[#dec600]/30 rounded-xl p-5">
          <p className="text-[#dec600] font-bold text-sm mb-1">How it works</p>
          <p className="text-white/70 text-sm leading-relaxed">Enter plate → click Submit → guest is validated. If they haven't parked yet, they get a promo code by text to apply when they arrive.</p>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col gap-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/15">
          <img src={`${BASE}portal-quick-validation.png`} alt="Quick Validation" className="w-full block" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <img src={`${BASE}portal-lp-active.png`} alt="License Plate Entry" className="w-full block" />
        </div>
      </motion.div>
    </div>
  );
}

function SlideValidateMobile() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center h-full px-12 md:px-20 max-w-6xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">Step 2B — Validation via Mobile Number</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          No plate? No problem.<br />Validate by phone number.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          If a guest hasn't parked yet or doesn't know their plate, enter their mobile number. The system texts them a validation link they can apply at any time — before or during their parking session.
        </p>
        <ul className="space-y-3">
          {[
            "Works even before the guest has parked",
            "Validation sent instantly by text",
            "Guest applies it themselves — zero staff follow-up",
            "Promo code option available as backup",
          ].map(l => (
            <li key={l} className="flex items-center gap-3 text-white/80 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#dec600] shrink-0" /> {l}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col gap-4">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/15">
          <img src={`${BASE}portal-mobile-active.png`} alt="Mobile Validation" className="w-full block" />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <img src={`${BASE}portal-mobile-no-session.png`} alt="No Active Session" className="w-full block" />
        </div>
      </motion.div>
    </div>
  );
}

function SlideQR() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center h-full px-12 md:px-20 max-w-6xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">Step 3 — QR Code Validation</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Print a QR code.<br />Let guests validate themselves.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Display the validation QR code at the front desk, in the lobby, or at restaurant checkout. Guests scan it and their parking is instantly validated — completely self-serve, zero staff time.
        </p>
        <div className="bg-white/8 border border-white/15 rounded-xl p-6">
          <p className="text-white font-bold mb-3">Perfect for:</p>
          <ul className="space-y-2">
            {["Hotel lobby self-check-in kiosks", "Restaurant or bar validation", "Event or conference parking", "Spa and amenity guest validation"].map(l => (
              <li key={l} className="text-white/70 text-sm flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#dec600] shrink-0" /> {l}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/15">
          <img src={`${BASE}portal-qr.png`} alt="QR Code Validation" className="w-full block" />
        </div>
      </motion.div>
    </div>
  );
}

function SlideParkerExperience() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center h-full px-12 md:px-20 max-w-6xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">The Guest Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Frictionless for guests.<br />Five stars at checkout.
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-8">
          Your guests scan a QR code, pay in seconds with Apple Pay or any card, and exit a gated lot with one tap on their phone. No confusion, no tickets, no frustration.
        </p>
        <ul className="space-y-3">
          {[
            "No app download required",
            "Apple Pay, Google Pay, or credit card",
            "Gated exit with one tap",
            "Instant receipt by text or email",
            "Validation applied automatically",
          ].map(l => (
            <li key={l} className="flex items-center gap-3 text-white/80 text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#dec600] shrink-0" /> {l}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex justify-center">
        <div className="w-[220px] rounded-[2.5rem] border-[6px] border-white/25 bg-black shadow-2xl overflow-hidden">
          <div className="relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-10" />
            <img src={`${BASE}parker-phone.png`} alt="Guest app experience" className="w-full block" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SlideRevenue() {
  const tiers = [
    { size: "50 spaces", freq: "Weekends only", monthly: "$1,000+", note: "Wimberley, TX — verified" },
    { size: "80–120 spaces", freq: "Daily operation", monthly: "$2,500–$4,500", note: "Typical mid-size hotel lot" },
    { size: "150+ spaces", freq: "Daily + events", monthly: "$5,000–$10,000+", note: "High-demand urban/resort" },
  ];
  return (
    <div className="flex flex-col justify-center h-full px-12 md:px-20 max-w-5xl mx-auto w-full">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-[#dec600] font-bold tracking-widest uppercase text-sm mb-4">Revenue Potential</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          What could your lot earn?
        </h2>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Revenue depends on lot size, location, and market rates. Here's what our partners typically see:
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {tiers.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-2xl p-8 border ${i === 1 ? "bg-[#dec600]/15 border-[#dec600]/40" : "bg-white/8 border-white/15"}`}
          >
            <div className="text-3xl font-bold text-white mb-1">{t.monthly}</div>
            <div className="text-[#dec600] text-sm font-bold mb-4">per month</div>
            <div className="text-white/70 text-sm mb-1">{t.size}</div>
            <div className="text-white/50 text-sm mb-4">{t.freq}</div>
            <div className="text-white/40 text-xs italic">{t.note}</div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white/5 border border-white/10 rounded-xl px-6 py-4"
      >
        <p className="text-white/40 text-xs">† Results vary by market, utilization, and pricing model. Revenue share structure and property-specific projections provided at no cost during your free analysis. Wimberley, TX example is verified.</p>
      </motion.div>
    </div>
  );
}

function SlideClose() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <img src={`${BASE}logo-pp.webp`} alt="Perfect Parking" className="h-16 mx-auto mb-10 drop-shadow-lg" />
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to turn your<br />parking lot into<br /><span className="text-[#dec600]">passive income?</span>
        </h2>
        <p className="text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
          We'll analyze your hotel's parking situation and build a custom revenue projection — free, no commitment required, done in 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:+13615851111"
            className="px-10 py-4 bg-[#dec600] text-[#0f3d6e] font-bold rounded-xl hover:bg-[#dec600]/90 transition-all shadow-lg text-lg"
          >
            Call (361) 585-1111
          </a>
          <a
            href="mailto:support@perfectparking.com"
            className="px-10 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/15 transition-all text-lg"
          >
            support@perfectparking.com
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/40">
          {["No upfront cost", "Revenue share — we only win when you win", "Live in under 30 days", "Texas-based team"].map(b => (
            <span key={b} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#dec600]/60" /> {b}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const slideComponents: Record<string, () => JSX.Element> = {
  cover: SlideCover,
  problem: SlideProblem,
  solution: SlideSolution,
  "how-dashboard": SlidePortalDashboard,
  "how-validate-lp": SlideValidateLP,
  "how-validate-mobile": SlideValidateMobile,
  "how-qr": SlideQR,
  "parker-experience": SlideParkerExperience,
  revenue: SlideRevenue,
  close: SlideClose,
};

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= slides.length) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, goTo]);

  const SlideComp = slideComponents[slides[current].id];

  return (
    <div className="min-h-screen bg-[#0f3d6e] overflow-hidden select-none" style={{ userSelect: "none" }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 flex items-center justify-center pb-16"
        >
          <SlideComp />
        </motion.div>
      </AnimatePresence>

      <NavArrows
        onPrev={() => goTo(current - 1)}
        onNext={() => goTo(current + 1)}
        hasPrev={current > 0}
        hasNext={current < slides.length - 1}
      />

      <ProgressBar current={current} total={slides.length} />

      {/* Dot nav */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all ${i === current ? "w-6 h-2 bg-[#dec600]" : "w-2 h-2 bg-white/25 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
