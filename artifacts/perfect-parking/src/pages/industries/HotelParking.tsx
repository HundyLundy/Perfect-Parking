import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { Link } from "wouter";

import imgPortalDashboard from "@assets/Screenshot_2026-04-30_at_7.12.04_PM_1777597927283.png";
import imgQuickValidation from "@assets/Screenshot_2026-04-30_at_7.12.15_PM_1777597937574.png";
import imgSelectValidation from "@assets/Screenshot_2026-04-30_at_7.12.24_PM_1777597947454.png";
import imgLicensePlateActive from "@assets/Screenshot_2026-04-30_at_7.12.34_PM_1777597957099.png";
import imgLicensePlatePopup from "@assets/Screenshot_2026-04-30_at_7.12.46_PM_1777597968837.png";
import imgMobileActive from "@assets/Screenshot_2026-04-30_at_7.12.56_PM_1777597979702.png";
import imgMobileNoSession from "@assets/Screenshot_2026-04-30_at_7.13.07_PM_1777597989527.png";
import imgQrCode from "@assets/Screenshot_2026-04-30_at_7.13.18_PM_1777597999991.png";
import imgParkerPhone from "@assets/Screenshot_2026-04-30_at_7.13.27_PM_1777598009302.png";

function PortalScreenshot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="w-full">
      <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-white">
        <img src={src} alt={alt} className="w-full h-auto block" />
      </div>
      {caption && (
        <p className="text-center text-sm text-muted-foreground mt-3 font-medium">{caption}</p>
      )}
    </div>
  );
}

const setupSteps = [
  {
    step: "1",
    title: "Log In to the Self-Serve Portal",
    description:
      "Staff access the Perfect Parking portal from any browser — desktop, tablet, or phone. The dashboard shows live stats: payment due, active parkers, and monthly validations at a glance.",
    img: imgPortalDashboard,
    alt: "Perfect Parking Partner Portal Dashboard showing payment due, total parkers, and current month validations",
  },
  {
    step: "2",
    title: "Click 'Quick Validation'",
    description:
      "From the dashboard, click the Quick Validation button in the lower right. Staff typically bookmark this screen at the front desk for one-tap access during check-in.",
    img: imgQuickValidation,
    alt: "Dashboard with Quick Validation button highlighted in red",
  },
  {
    step: "3",
    title: "Select the Validation Type",
    description:
      "The validation library shows all configured validation types — for example, 'Full Validation — Free Parking 100%'. Select the appropriate one for the guest, then choose a validation method.",
    img: imgSelectValidation,
    alt: "Validations screen showing Full Validation - Free Parking 100% tile",
  },
];

const otherIndustries = [
  { name: "Healthcare Facilities" },
  { name: "Multifamily & Apartments" },
  { name: "HOA Communities" },
  { name: "Commercial Real Estate" },
  { name: "Universities" },
  { name: "Truck Parking" },
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
            Perfect Parking turns your hotel lot into a managed revenue asset — with a built-in guest validation system your front desk can operate in seconds, from any browser.
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
              Get a Free Hotel Parking Analysis <ArrowRight className="w-5 h-5" />
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

      {/* PROBLEM / OPPORTUNITY / OUTCOME */}
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

      {/* STAFF PORTAL — 3 steps with real screenshots */}
      <section id="how-it-works" className="py-20 bg-muted border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Staff Portal</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Three Steps to Issue a Validation
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Your front desk, concierge, or valet staff can validate any guest's parking from any browser — no app, no training required.
            </p>
          </div>

          <div className="space-y-20">
            {setupSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="grid md:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-navy text-white font-bold flex items-center justify-center text-sm shrink-0">
                      {s.step}
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <PortalScreenshot src={s.img} alt={s.alt} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 VALIDATION FLOWS with real screenshots */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">Validation Methods</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Three Ways to Validate a Guest
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              All three methods work whether the guest is already parked or hasn't arrived yet.
            </p>
          </div>

          {/* Flow 1 — License Plate */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">Flow 1</span>
              <h3 className="font-display font-bold text-2xl text-foreground">Validation via License Plate</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-sm font-medium">Best for: walk-in guests at the front desk</p>

            <div className="grid sm:grid-cols-2 gap-8 mb-6">
              <div>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Guest has an active session</p>
                  <p className="text-sm text-foreground leading-relaxed">Enter the license plate → click Submit. Validation is applied instantly to their ongoing session.</p>
                </div>
                <PortalScreenshot
                  src={imgLicensePlateActive}
                  alt="Assign Validation form with license plate ABC123 filled in"
                  caption="Enter plate and submit — validation applies automatically"
                />
              </div>
              <div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">No active session yet</p>
                  <p className="text-sm text-foreground leading-relaxed">Enter the plate → Submit to open a new session. A pop-up appears — the guest photographs it as their validation record.</p>
                </div>
                <PortalScreenshot
                  src={imgLicensePlatePopup}
                  alt="Pop-up showing LICENSE PLATE: ABC123, Free Parking Till 24-Apr-2026, Duration 24hrs with Take a Picture prompt"
                  caption="Guest photographs this pop-up as their parking record"
                />
              </div>
            </div>
          </motion.div>

          {/* Flow 2 — Mobile Number */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">Flow 2</span>
              <h3 className="font-display font-bold text-2xl text-foreground">Validation via Mobile Number</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-sm font-medium">Best for: remote or contactless validation — staff can validate before the guest arrives</p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Guest has an active session</p>
                  <p className="text-sm text-foreground leading-relaxed">Enter the mobile number → click Submit. Validation is applied directly to their ongoing parking session.</p>
                </div>
                <PortalScreenshot
                  src={imgMobileActive}
                  alt="Assign Validation form with mobile number 301 123 4567 filled in"
                  caption="Enter mobile number — validation applies to active session"
                />
              </div>
              <div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">No active session yet</p>
                  <p className="text-sm text-foreground leading-relaxed">Enter the number → Submit. The guest receives a text with a direct link to start a pre-validated session — no desk visit required.</p>
                </div>
                <PortalScreenshot
                  src={imgMobileNoSession}
                  alt="Assign Validation screen showing 'Text message sent, further steps are pending with parker' banner"
                  caption="Guest receives a text link to start their validated session"
                />
              </div>
            </div>
          </motion.div>

          {/* Flow 3 — QR Code */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-amber-700 text-white text-xs font-bold rounded-full uppercase tracking-wider">Flow 3</span>
              <h3 className="font-display font-bold text-2xl text-foreground">Validation via QR Code</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-sm font-medium">Best for: self-serve kiosks, busy lobbies, or when guests prefer to scan themselves</p>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Guest has an active session</p>
                  <p className="text-sm text-foreground leading-relaxed">Click Show QR on the portal. The guest scans it with their phone — validation is instantly applied to their ongoing session.</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">No active session yet</p>
                  <p className="text-sm text-foreground leading-relaxed">The guest scans the QR before entering the lot. It opens a form to start a new validated session — fully self-serve, no staff interaction needed.</p>
                </div>
              </div>
              <PortalScreenshot
                src={imgQrCode}
                alt="QR Code validation screen showing a large QR code with instructions to scan or enter validation code FREE100OFF"
                caption="Staff displays QR on screen — guest scans to self-validate"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOR THE PARKER — phone mockup */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-secondary text-sm font-bold uppercase tracking-widest mb-4">Guest Experience</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                What the Guest Sees
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Guests never download an app. They receive a text with a link to their validation QR code, then show it at the exit POS machine on their way out. That's it.
              </p>
              <ul className="space-y-4">
                {[
                  "Receives a text link after staff validates",
                  "Opens the link to see their validation QR",
                  "Shows QR at exit — gate opens automatically",
                  "No paper ticket, no app, no friction",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <PortalScreenshot
                src={imgParkerPhone}
                alt="Two phone mockups: left shows the SMS text with validation QR link, right shows the validation QR code screen branded by Perfect Parking"
                caption="Left: text received · Right: validation QR to show at exit"
              />
            </motion.div>
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
              { title: "Works with your existing lot", detail: "No gate arm hardware required to get started. We integrate at whatever stage makes operational sense." },
              { title: "Three validation methods", detail: "License plate, mobile number, or QR — staff use whichever is fastest for the situation." },
              { title: "Guests park free, others pay", detail: "Validated guests exit at no charge. Unvalidated vehicles pay market rate — automatically, no confrontation." },
              { title: "Real-time dashboard", detail: "See daily revenue, validation counts, and occupancy from the same portal your staff uses, on any device." },
              { title: "Zero upfront cost", detail: "Revenue-share model. You pay nothing to get started — we earn when you earn." },
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
            We'll analyze your hotel's parking situation and build a custom revenue projection — no commitment required.
          </p>
          <button
            onClick={openContactModal}
            className="inline-flex items-center gap-2 px-10 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy/90 transition-all shadow-lg text-lg"
          >
            Get My Free Hotel Parking Analysis <ArrowRight className="w-5 h-5" />
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
                <span className="text-xs text-muted-foreground font-normal ml-2 shrink-0">Coming soon</span>
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
