import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What is Perfect Parking?",
        a: "Perfect Parking is a technology-enabled parking revenue platform that helps hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners turn underutilized parking spaces into consistent, passive monthly income — with zero upfront cost and zero staff required."
      },
      {
        q: "Who owns the parking revenue?",
        a: "You do. Perfect Parking operates on a revenue share model, meaning we take a percentage of what's collected and pass the rest directly to you via monthly bank deposit. You see every dollar in your live dashboard."
      },
      {
        q: "What types of properties do you work with?",
        a: "We work with hotels and resorts, hospitals and healthcare facilities, multifamily apartment communities, HOAs, commercial real estate and office buildings, universities and student housing, truck parking lots, airport lots, marinas, and event venues. If you have surface parking that isn't fully monetized, we can help."
      },
      {
        q: "Are you available in my city?",
        a: "We are currently active throughout Texas — including San Antonio, Austin, Houston, Corpus Christi, the Hill Country, and surrounding markets — and expanding nationally. Contact us to confirm availability in your market."
      }
    ]
  },
  {
    category: "Revenue & Pricing",
    items: [
      {
        q: "How much can I earn from my parking lot?",
        a: "Revenue varies by property size, location, utilization, and pricing strategy. Based on our active partner portfolio, properties with 50 spaces typically generate $800–$1,500/month. 100-space properties average $2,000–$4,000/month. Properties with 200+ spaces often exceed $5,000/month. We provide a free, no-obligation revenue projection for your specific property."
      },
      {
        q: "What does Perfect Parking charge?",
        a: "There are no upfront fees, no hardware costs, and no monthly minimums. We operate on a revenue share model — we only earn when you earn. The exact split is disclosed during your free audit and depends on your property type, volume, and services required."
      },
      {
        q: "How and when do I get paid?",
        a: "Property owners receive a direct bank deposit monthly, accompanied by a full revenue and transaction report. Everything is visible in real time on your owner dashboard."
      },
      {
        q: "What is a parking revenue share program?",
        a: "A revenue share program is a partnership where Perfect Parking handles all operations — technology, enforcement, payment collection, customer support — and shares the gross parking revenue with you, the property owner. You provide the space; we provide everything else."
      }
    ]
  },
  {
    category: "Technology & Setup",
    items: [
      {
        q: "Do I need cameras or hardware to get started?",
        a: "Our platform is hardware-light by design. We use QR codes, mobile payment, and digital signage as the primary infrastructure. License Plate Recognition (LPR) cameras can be added for enhanced enforcement but are not required to launch. Most properties go live with minimal or zero hardware installation."
      },
      {
        q: "How long does it take to set up?",
        a: "Most properties are fully live within 30 days of signing. This includes satellite-based lot mapping, digital signage design and installation, permit system configuration, payment infrastructure setup, and team training."
      },
      {
        q: "Will I need to manage the system day-to-day?",
        a: "No. That's the core promise of Perfect Parking. Our platform runs on autopilot — automated payment collection, automated enforcement notices, automated reporting, and 24/7 guest support. You log into your dashboard when you want to check revenue. That's it."
      },
      {
        q: "What payment methods do you support?",
        a: "We support Apple Pay, Google Pay, all major credit and debit cards, and text-to-pay. No cash handling, no ticketing booths, no staff required at the point of payment."
      },
      {
        q: "Can Perfect Parking integrate with my existing property management system?",
        a: "Yes. Our platform is built for integration with major PMS platforms, access control systems, and HOA management software. We work with your existing tech stack rather than replacing it."
      }
    ]
  },
  {
    category: "Enforcement & Compliance",
    items: [
      {
        q: "How does parking enforcement work?",
        a: "Enforcement is automated. Our system cross-references vehicles against your authorized permit database in real time. Unauthorized vehicles receive automated violation notices via license plate — no manual ticketing, no confrontations, no staff involvement."
      },
      {
        q: "What happens if someone doesn't pay?",
        a: "Non-payment triggers an automated escalation process including digital violation notices and, where applicable, towing authorization. Our enforcement layer is designed to be firm without requiring property staff to get involved."
      },
      {
        q: "How does guest parking work for apartments and HOAs?",
        a: "Residents issue digital guest passes directly from a mobile app or web portal. Guests register their vehicle digitally. If a vehicle isn't registered as either a resident or an active guest pass, it's flagged automatically. No paper passes, no honor system."
      }
    ]
  },
  {
    category: "Getting Started",
    items: [
      {
        q: "What does a free parking revenue audit include?",
        a: "Our free audit includes a satellite-based review of your property, a revenue projection based on your space count and market rate, a customized monetization plan, and a 15-minute call to walk you through the numbers. There's no commitment required."
      },
      {
        q: "Is there a contract or long-term commitment?",
        a: "We work with partners on agreements that are structured to be fair for both parties. Because we invest in your property's setup at our cost, we do ask for a reasonable partnership term. All terms are fully disclosed before you sign anything."
      },
      {
        q: "How do I get started?",
        a: "Request your free revenue audit at perfectparking.com. We'll review your property, model your revenue potential, and schedule a quick call to share the numbers. If it makes sense for both parties, we move forward — on your timeline."
      }
    ]
  }
];

const schemaFaqs = faqs.flatMap(cat =>
  cat.items.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": { "@type": "Answer", "text": item.a }
  }))
);

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-6 py-5 text-left bg-white hover:bg-muted/50 transition-colors gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground text-base leading-snug">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 text-muted-foreground leading-relaxed text-sm border-t border-border bg-muted/30">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [, setLocation] = useLocation();
  return (
    <>
      <SEO
        title="Perfect Parking | Hassle-Free Parking Management"
        description="We help hotels, hospitals, multifamily communities, HOAs, and commercial real estate owners generate consistent monthly revenue from underutilized parking. Zero upfront cost. Zero staff required."
        keywords="parking management FAQ, parking revenue share, how does parking management work, parking lot software, automated parking enforcement"
        canonical="https://perfectparking.com/faq"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": schemaFaqs
          })}
        </script>
      </Helmet>

      <section className="py-20 bg-muted text-center border-b border-border">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Knowledge Base</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about turning your parking into passive monthly income.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category) => (
            <div key={category.category} className="mb-14">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-5 pb-3 border-b border-border">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}

          <div className="mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-5 pb-3 border-b border-border">
              For Drivers &amp; Parkers
            </h2>
            <div className="space-y-3">
              <FaqItem
                q="How do I pay for parking?"
                a="Paying is simple — just scan the QR code posted in the lot or garage and follow the on-screen prompts to complete your session."
              />
              <FaqItem
                q="Can I reserve parking in advance?"
                a="At select Perfect Parking locations, advance reservations are available. Download the My Perfect Parking app from the Apple App Store or Google Play, search your city, and check whether your location offers advance booking."
              />
              <FaqItem
                q="How does the payment process work?"
                a="After scanning the QR code, you'll be prompted to enter your vehicle information and payment details. That information is securely stored so your next visit is even faster — no app needed, no hassle."
              />
              <FaqItem
                q="Do I have to download an app?"
                a="Nope. Just scan the QR code or text the number on the sign and you'll be taken directly to a mobile-friendly page to enter your vehicle and payment details. The whole process takes seconds."
              />
              <FaqItem
                q="How do I view the parking rate for a location?"
                a="Rates are displayed for each location once you scan the QR code to begin your session. Pricing may vary by day, time, and any special events at the location."
              />
              <FaqItem
                q="I'm at a Perfect Parking lot and the QR code won't scan — what do I do?"
                a="No worries! Just text the number listed on the signs in the lot. We'll send you a direct link to start your session right away."
              />
              <FaqItem
                q="My phone doesn't have a camera — how else can I pay?"
                a="No problem — text the number displayed on the signs in the lot and we'll send you a link to complete your session without needing to scan anything."
              />
              <FaqItem
                q="What do I need to display in my car after paying?"
                a="Nothing at all! Your license plate is your pass and your permit. Just make sure you entered it correctly when starting your session — you can update it anytime from within your account."
              />
              <FaqItem
                q="I haven't received the verification code for my phone number — what should I do?"
                a="Check that the phone number shown on screen is correct. If it is, you can request a new code after 60 seconds. If the number is wrong, tap 'Change Phone Number' and re-enter it."
              />
              <FaqItem
                q="I think I was charged incorrectly — how do I request a refund?"
                a="We're sorry something seems off. Reach out through the support section in the app or email us at support@perfectparking.com. Please include your full name, cell phone number, email address, and the license plate tied to the session, and our team will look into it and resolve it as quickly as possible."
              />
              <FaqItem
                q="I'm interested in learning more about Perfect Parking — who do I contact?"
                a="We'd love to connect! Share your name, cell number, and email address with us and someone from our team will follow up with you shortly. You can also reach us at support@perfectparking.com."
              />
              <FaqItem
                q="How do I purchase an ongoing parking permit at the Laguna Madre Boat Ramp?"
                a="Scan the QR code on the sign at the location. It will take you directly to a page where you can choose from weekly, monthly, or annual permit options."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Still have questions?</h2>
          <p className="text-white/70 mb-8">We're happy to walk you through everything on a quick call — no commitment required.</p>
          <button
            onClick={() => setLocation("/contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg"
          >
            Request a Free Audit <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
