import { useState } from "react";
import { Helmet } from "react-helmet-async";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I pay for parking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can pay by scanning the QR code on the sign with your phone camera, texting the code on the sign to the number provided, or using the Perfect Parking app. No cash required."
      }
    },
    {
      "@type": "Question",
      "name": "What payment methods are accepted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We accept all major credit and debit cards. You can save your card in the app for faster checkout next time."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a receipt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open your session in the app or web app, go to Past Sessions, and click Need Receipt. Enter your email and we will send it to you."
      }
    },
    {
      "@type": "Question",
      "name": "How do I extend my parking session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open your active session in the app or web app and tap Extend Time. Choose your additional time, confirm payment, and your timer updates automatically."
      }
    },
    {
      "@type": "Question",
      "name": "I accidentally booked the wrong session or need a refund — what do I do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email our support team at support@perfectparking.com. Include your name and the phone number you used to park. We handle all refund and cancellation requests by email."
      }
    },
    {
      "@type": "Question",
      "name": "I did not receive a confirmation text — what happened?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The confirmation is sent to the phone number entered at checkout. If you did not receive it, the number may have been entered incorrectly. Email support@perfectparking.com and we will track it down for you."
      }
    },
    {
      "@type": "Question",
      "name": "How do I dispute a charge or ticket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Email support@perfectparking.com with your name, phone number, and a brief description of the issue. Our team responds within one business day."
      }
    },
    {
      "@type": "Question",
      "name": "What are your business hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our support team is available Monday through Friday, 8:00 AM to 6:00 PM local time. For urgent issues outside business hours, email support@perfectparking.com and we will follow up first thing."
      }
    }
  ]
};

const faqs = [
  {
    q: "How do I pay for parking?",
    a: "You can pay by scanning the QR code on the sign with your phone camera, texting the code on the sign to the number provided, or using the Perfect Parking app. No cash required."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all major credit and debit cards. You can save your card in the app for faster checkout next time."
  },
  {
    q: "How do I get a receipt?",
    a: "Open your session in the app or web app, go to Past Sessions, and click \"Need Receipt.\" Enter your email and we will send it to you."
  },
  {
    q: "How do I extend my parking session?",
    a: "Open your active session in the app or web app and tap \"Extend Time.\" Choose your additional time, confirm payment, and your timer updates automatically."
  },
  {
    q: "I accidentally booked the wrong session or need a refund — what do I do?",
    a: "Email our support team at support@perfectparking.com. Include your name and the phone number you used to park. We handle all refund and cancellation requests by email."
  },
  {
    q: "I did not receive a confirmation text — what happened?",
    a: "The confirmation is sent to the phone number entered at checkout. If you did not receive it, the number may have been entered incorrectly. Email support@perfectparking.com and we will track it down for you."
  },
  {
    q: "How do I dispute a charge or ticket?",
    a: "Email support@perfectparking.com with your name, phone number, and a brief description of the issue. Our team responds within one business day."
  },
  {
    q: "What are your business hours?",
    a: "Our support team is available Monday through Friday, 8:00 AM to 6:00 PM local time. For urgent issues outside business hours, email support@perfectparking.com and we will follow up first thing."
  }
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="w-full text-left flex justify-between items-center gap-4 py-2"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-lg font-semibold text-gray-900">{q}</span>
        <span className="text-2xl text-gray-400 shrink-0 leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-gray-700 mt-2 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Parkers() {
  return (
    <>
      <Helmet>
        <title>Parking Help | Perfect Parking</title>
        <meta name="description" content="Get help with your Perfect Parking session — how to pay, extend time, get a receipt, or contact support." />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* HERO */}
      <section style={{ background: "#1965b1" }} className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Need Help With Your Parking Session?
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            Everything you need to manage your parking session — no phone call needed.
          </p>
        </div>
      </section>

      {/* REFUND / BILLING CALLOUT */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div
            style={{
              background: "#E8EFF7",
              borderLeft: "4px solid #1965B1",
              borderRadius: "8px",
              padding: "28px 28px 24px",
            }}
          >
            {/* Gold badge */}
            <span
              style={{
                background: "#DEC600",
                color: "#00305b",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: "9999px",
                padding: "4px 12px",
                display: "inline-block",
                marginBottom: "14px",
              }}
            >
              Refund or Billing Issue?
            </span>

            <p style={{ color: "#00305b", fontSize: "1rem", marginBottom: "10px" }}>
              Email our support team:{" "}
              <a
                href="mailto:support@perfectparking.com"
                style={{ color: "#1965B1", fontWeight: 700, textDecoration: "none" }}
              >
                support@perfectparking.com
              </a>
            </p>

            <p style={{ color: "#00305b", fontSize: "0.95rem", marginBottom: "10px" }}>
              To get a faster response, include all of the following in your email:
            </p>

            <ul style={{ color: "#00305b", fontSize: "0.95rem", paddingLeft: "1.25rem", marginBottom: "14px", lineHeight: "1.9" }}>
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Your license plate number</li>
              <li>The parking location (lot name or address)</li>
              <li>The start or end date and time of your parking session</li>
              <li>Your parking session ID (sent to you in your confirmation text)</li>
            </ul>

            <p style={{ color: "#00305b", fontSize: "0.875rem", opacity: 0.75 }}>
              Missing any of these will delay our response — we'll need to follow up to collect the missing info before we can help.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-16 bg-white" style={{ paddingTop: "8px" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How to Park with Perfect Parking
          </h2>
          <video
            controls
            width="700"
            style={{ maxWidth: "100%", borderRadius: "8px", display: "block", margin: "0 auto" }}
          >
            <source src={`${import.meta.env.BASE_URL}HowtoparkwithPerfectParking_Ungated.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#F5F7FA" }} className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1965b1" }} className="py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">Still need help?</h2>
          <p className="text-white/80 text-lg mb-8">Our support team is standing by.</p>
          <a
            href="mailto:support@perfectparking.com"
            style={{ background: "#DEC600", color: "#00305b" }}
            className="inline-block px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Email Support
          </a>
        </div>
      </section>
    </>
  );
}
