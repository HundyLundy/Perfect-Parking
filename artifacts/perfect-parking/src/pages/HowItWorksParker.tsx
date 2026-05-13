import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { QrCode, CreditCard, Clock, ShieldCheck, MapPin, Bell, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Find a spot. Scan the QR code.",
    body: "No app download needed. Every Perfect Parking location has a clearly posted QR code sign. Scan it with your phone camera and you're ready to go.",
    img: "app-find.png",
    imgAlt: "Perfect Parking app map view showing nearby parking locations with a Start Parking Session button",
    tip: "Works on any iPhone or Android. No account required for your first session.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Choose your time. Pay instantly.",
    body: "Pick exactly how long you need — 1 hour, 6 hours, all day, or a custom duration. Pricing is shown upfront. Pay with Apple Pay, Google Pay, or any credit card.",
    img: "app-extend.png",
    imgAlt: "Perfect Parking app showing Extend Time screen with 2, 3, 6 and 24 hour pricing options",
    tip: "No hidden fees. You see the total before you confirm.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Track your session live.",
    body: "Your active session is always visible in the app. See how much time is remaining, extend with one tap, or stop the session early and only pay for what you used.",
    img: "app-session.png",
    imgAlt: "Perfect Parking app showing an active parking session with time elapsed and options to Extend, Stop, or Add Promotion",
    tip: "Need more time? Extend before the clock runs out — no need to run back to your car.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Tap to exit gated lots.",
    body: "At gated facilities, your session is linked to your license plate. Tap the exit button in the app when you're ready to leave — the gate opens automatically.",
    img: "app-gated.png",
    imgAlt: "Perfect Parking app showing a gated parking session with Tap to Exit and Add Validation buttons",
    tip: "Have a validation code from the hotel or venue? Enter it to reduce or waive your parking fee.",
  },
  {
    number: "05",
    icon: CreditCard,
    title: "Payment handled. Receipt sent.",
    body: "When your session ends, your saved card is charged automatically. A receipt lands in your inbox instantly. No cash, no tickets, no stress.",
    img: "app-payments.png",
    imgAlt: "Perfect Parking app showing Payments screen with saved Visa and Amex cards",
    tip: "Save multiple cards for personal and business use. Switch anytime.",
  },
  {
    number: "06",
    icon: QrCode,
    title: "Full session history, always on hand.",
    body: "Every session is logged and searchable. Pull up receipts, dispute charges, or send a copy to your employer — all from the app in seconds.",
    img: "app-history.png",
    imgAlt: "Perfect Parking app showing a past session detail with Payment Successful confirmation",
    tip: "Need a receipt for expenses? It's always in your session history.",
  },
];

export default function HowItWorksParker() {
  const [, setLocation] = useLocation();

  return (
    <>
      <SEO
        title="How It Works for Parkers | Perfect Parking"
        description="No app download needed. Scan, pay, and park in seconds with Perfect Parking. See the full step-by-step experience for drivers."
      />

      {/* HERO */}
      <section className="bg-navy py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">For Drivers</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight text-white">
            Park in seconds.<br />No app required.
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-xl mx-auto">
            Scan a QR code, pick your time, and pay with Apple Pay or a card. That's it. Here's the full experience, start to finish.
          </p>
        </div>
      </section>

      {/* QUICK BENEFITS BAR */}
      <section className="bg-secondary py-5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-navy font-semibold text-sm">
            {["No app download", "Apple Pay & Google Pay", "Extend time anytime", "Instant digital receipt", "Works at gated lots"].map((b) => (
              <span key={b} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP WALKTHROUGH */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}
                >
                  {/* Phone mockup */}
                  <div className={`flex justify-center ${!isEven ? "lg:[direction:ltr]" : ""}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-90" />
                      <div className="relative w-[240px] md:w-[270px]">
                        <div className="relative rounded-[2.8rem] border-[7px] border-navy/20 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />
                          <img
                            src={`${import.meta.env.BASE_URL}${step.img}`}
                            alt={step.imgAlt}
                            className="w-full h-auto block"
                            loading="lazy"
                          />
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-5xl font-display font-bold text-primary/15">{step.number}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 leading-snug">
                      {step.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {step.body}
                    </p>
                    <div className="bg-secondary/10 border border-secondary/30 rounded-xl px-5 py-4 flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-foreground font-medium leading-relaxed">{step.tip}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Own a parking lot?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            This is the experience your parkers get — seamless, fast, and digital. Let us set it up for you at no upfront cost.
          </p>
          <button
            onClick={() => setLocation("/contact")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-navy font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg text-lg"
          >
            Get a Free Estimate <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
