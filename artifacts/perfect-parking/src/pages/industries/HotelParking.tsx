import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Building, Smartphone, QrCode, Car, ArrowRight, CheckCircle2, ChevronRight, LogIn, MousePointerClick } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { Link } from "wouter";

const steps = {
  setup: [
    {
      step: "1",
      title: "Log In to the Self-Serve Portal",
      description:
        "Hotel staff access the Perfect Parking portal from any browser — desktop, tablet, or mobile. No app download required. Login credentials are set up during onboarding.",
      icon: LogIn,
    },
    {
      step: "2",
      title: "Select Quick Validation",
      description:
        "From the dashboard, click 'Quick Validation' to bring up the validation screen. This is typically bookmarked or pinned at the front desk for one-tap access.",
      icon: MousePointerClick,
    },
    {
      step: "3",
      title: "Choose a Validation Method",
      description:
        "Three methods are available depending on what information the guest provides: License Plate, Mobile Number, or QR Code. Staff pick whichever is fastest for the situation.",
      icon: CheckCircle2,
    },
  ],
};

const validationFlows = [
  {
    id: "license-plate",
    icon: Car,
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600 bg-blue-100",
    badgeColor: "bg-blue-600",
    title: "Flow 1 — License Plate",
    bestFor: "Walk-in guests at the front desk",
    steps: [
      {
        label: "Active session",
        detail:
          "Guest has already started a parking session. Staff enters the license plate and clicks Submit — validation is applied instantly. No further action needed.",
      },
      {
        label: "No active session",
        detail:
          "Guest hasn't scanned to start parking yet. Staff enters the license plate and clicks Submit to open a session. A pop-up appears on the portal screen — the guest takes a photo of it as their validation record.",
      },
    ],
  },
  {
    id: "mobile-number",
    icon: Smartphone,
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600 bg-emerald-100",
    badgeColor: "bg-emerald-600",
    title: "Flow 2 — Mobile Number",
    bestFor: "Remote validation or contactless service",
    steps: [
      {
        label: "Active session",
        detail:
          "Guest is already in the lot. Staff enters the guest's mobile number and clicks Submit — validation is applied directly to their active session.",
      },
      {
        label: "No active session",
        detail:
          "Guest is still on their way. Staff enters the mobile number and submits. The guest receives a text message with a direct link to start a pre-validated parking session — no desk visit required.",
      },
    ],
  },
  {
    id: "qr-code",
    icon: QrCode,
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600 bg-amber-100",
    badgeColor: "bg-amber-700",
    title: "Flow 3 — QR Code",
    bestFor: "Self-serve kiosks or busy lobbies",
    steps: [
      {
        label: "Active session",
        detail:
          "Staff clicks 'Show QR' on the portal. Guest scans the code with their phone — it links directly to their ongoing session and validation is automatically applied.",
      },
      {
        label: "No active session",
        detail:
          "Guest scans the QR before entering the lot. The code opens a form to start a new validated session — fully self-serve, no staff interaction required.",
      },
    ],
  },
];

const parkerExperience = [
  {
    step: "A",
    title: "Guest arrives at the lot",
    detail: "Guest scans a QR code at the entry point or entrance signage to start their parking session.",
  },
  {
    step: "B",
    title: "Validation is applied",
    detail:
      "Hotel staff validates via the portal (license plate, phone number, or QR). The guest's session is updated in real time — no ticket required.",
  },
  {
    step: "C",
    title: "Exit is seamless",
    detail:
      "At the exit, the guest shows their validation QR code (received via text or on their phone) at the POS machine. Gate opens. Done.",
  },
];

const otherIndustries = [
  { name: "Healthcare Facilities", href: "/industries/healthcare", soon: true },
  { name: "Multifamily & Apartments", href: "/industries/multifamily", soon: true },
  { name: "HOA Communities", href: "/industries/hoa", soon: true },
  { name: "Commercial Real Estate", href: "/industries/cre", soon: true },
  { name: "Universities", href: "/industries/universities", soon: true },
  { name: "Truck Parking", href: "/industries/truck-parking", soon: true },
];

export default function HotelParking() {
  const { openContactModal } = useContactModal();

  return (
    <>
      <Helmet>
        <title>Hotel Parking Management & Validation System | Perfect Parking</title>
        <meta
          name="description"
          content="Perfect Parking's hotel validation system lets staff validate guest parking in seconds via license plate, mobile number, or QR code — all from a browser-based portal."
        />
        <link rel="canonical" href="https://perfectparking.com/industries/hotels" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hotel Parking Management & Validation | Perfect Parking" />
        <meta
          property="og:description"
          content="Effortless guest parking validation for hotels. Three methods, zero friction. Turn your lot into revenue and give guests a seamless experience."
        />
        <meta property="og:url" content="https://perfectparking.com/industries/hotels" />
        <meta property="og:site_name" content="Perfect Parking" />
      </Helmet>

      {/* BREADCRUMB */}
      <div className="bg-muted border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/industries" className="hover:text-primary transition-colors">Industries</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Hotels & Resorts</span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-navy text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
            <span className="text-secondary text-sm font-bold uppercase tracking-widest">Hotels & Resorts</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Parking That Works<br className="hidden md:block" /> as Hard as Your Staff
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Perfect Parking turns your hotel lot into a managed revenue asset — with a built-in guest validation system your front desk can operate in seconds.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={openContactModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-navy font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg text-lg"
            >
              Get a Free Hotel Parking Audit <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-lg"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / OPPORTUNITY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "The Problem",
                bg: "bg-red-50 border-red-100",
                labelColor: "text-red-500",
                text: "Hotels often give parking away for free, rely on outdated front-desk binders, or lose revenue to unauthorized vehicles taking guest spaces.",
              },
              {
                label: "The Opportunity",
                bg: "bg-blue-50 border-blue-100",
                labelColor: "text-primary",
                text: "Convert your surface lot or garage into a digital revenue asset. Non-guests pay market rate. Hotel guests are validated in seconds — no key cards, no paper tickets.",
              },
              {
                label: "The Outcome",
                bg: "bg-green-50 border-green-100",
                labelColor: "text-green-600",
                text: "Increased RevPAR, zero front-desk friction, elimination of unauthorized parking, and a new monthly income stream from your existing lot.",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border ${item.bg}`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${item.labelColor}`}>{item.label}</p>
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STAFF SETUP — 3 steps */}
      <section id="how-it-works" className="py-20 bg-muted border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Staff Portal</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Three Steps for Staff to Issue Validation
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Your front desk, concierge, or valet staff can validate any guest's parking from any browser — no app, no training required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.setup.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-border p-8 relative"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-navy text-white font-bold flex items-center justify-center text-sm shrink-0">
                    {s.step}
                  </div>
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 VALIDATION FLOWS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Validation Methods</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Three Ways to Validate a Guest
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Staff choose whichever method is fastest. All three handle both guests already parked and guests who haven't arrived yet.
            </p>
          </div>

          <div className="space-y-8">
            {validationFlows.map((flow, i) => (
              <motion.div
                key={flow.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border-2 ${flow.color} overflow-hidden`}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${flow.iconColor} flex items-center justify-center shrink-0`}>
                      <flow.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">{flow.title}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        <span className="font-semibold">Best for:</span> {flow.bestFor}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {flow.steps.map((s, j) => (
                      <div key={j} className="bg-white rounded-xl p-5 border border-white/80 shadow-sm">
                        <div className="flex items-start gap-3">
                          <span className={`mt-0.5 text-xs font-bold px-2 py-0.5 rounded-full text-white shrink-0 ${flow.badgeColor}`}>
                            {s.label}
                          </span>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed mt-3">{s.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARKER EXPERIENCE */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-3">Guest Experience</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              What the Guest Sees
            </h2>
            <p className="text-white/70 mt-4 text-lg max-w-2xl mx-auto">
              Guests interact with a simple, mobile-first flow — no app to download, no paper ticket to lose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {parkerExperience.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-full bg-secondary text-navy font-bold flex items-center justify-center text-sm mb-5">
                  {item.step}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS FOR HOTELS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Why Hotels Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Built for Hospitality Operations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "No app for guests or staff", detail: "Everything runs in a mobile browser. Front desk, concierge, and valet all use the same portal link." },
              { title: "Works with existing lots", detail: "No gate arm hardware required to start. We integrate with your lot or structure at whatever stage makes sense." },
              { title: "Three validation methods", detail: "License plate, mobile number, or QR code — staff use whichever is fastest for the situation." },
              { title: "Non-guests pay, guests don't", detail: "The system distinguishes validated guests from unvalidated vehicles automatically, so you never accidentally charge a hotel guest." },
              { title: "Real-time reporting", detail: "See daily revenue, validation counts, and occupancy from the same portal your staff uses — on any device." },
              { title: "Zero upfront cost", detail: "We operate on a revenue-share model. You pay nothing to get started, and we earn when you earn." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.05 }}
                className="flex gap-4 p-6 rounded-2xl border border-border bg-muted"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
            Ready to Stop Giving Parking Away for Free?
          </h2>
          <p className="text-navy/70 text-lg mb-10">
            We'll audit your hotel's parking situation and build a custom revenue projection — no commitment required.
          </p>
          <button
            onClick={openContactModal}
            className="inline-flex items-center gap-2 px-10 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy/90 transition-all shadow-lg text-lg"
          >
            Get My Free Hotel Parking Audit <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="py-16 bg-muted border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Other Industries</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {otherIndustries.map((ind) => (
              <div
                key={ind.name}
                className="flex items-center justify-between p-4 rounded-xl border border-border bg-white text-sm font-semibold text-foreground/70"
              >
                <span>{ind.name}</span>
                {ind.soon && (
                  <span className="text-xs text-muted-foreground font-normal ml-2 shrink-0">Coming soon</span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/industries" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
              ← Back to all industries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
