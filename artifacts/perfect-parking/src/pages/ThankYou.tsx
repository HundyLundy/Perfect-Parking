import { SEO } from "@/components/SEO";
import { Search, BarChart2, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function ThankYou() {
  const [, navigate] = useLocation();

  return (
    <>
      <SEO
        title="You're In — Perfect Parking"
        description="Thanks for reaching out. The Perfect Parking team will review your property and be in touch within 24 hours."
        canonical="https://perfectparking.com/thank-you"
      />

      {/* HERO */}
      <section className="bg-navy py-28 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-5">Form Received</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-tight">
            You're on our radar.
          </h1>
          <p className="text-xl font-bold text-secondary mb-6">
            We'll be in touch within 24 hours.
          </p>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
            Cooper and the Perfect Parking team will review your property, run the numbers on your revenue potential, and reach out to schedule a quick call. No pressure, no commitment — just real numbers.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-14">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                Icon: Search,
                step: "01",
                title: "We review your property",
                body: "We pull up your lot via satellite map and assess size, location, and traffic patterns.",
              },
              {
                Icon: BarChart2,
                step: "02",
                title: "We run your revenue projection",
                body: "Based on comparable lots in your market, we calculate your realistic monthly earning potential.",
              },
              {
                Icon: Phone,
                step: "03",
                title: "We schedule a quick call",
                body: "Cooper will reach out within 24 hours to walk you through the numbers. 15 minutes, no sales pressure.",
              },
            ].map(({ Icon, step, title, body }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-4xl font-display font-bold text-primary/15 mb-2 leading-none">{step}</span>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10">
            While you wait — see what other property owners are earning.
          </h2>
          <button
            onClick={() => navigate("/case-studies")}
            className="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-navy font-bold rounded-xl hover:bg-secondary/90 transition-all shadow-lg text-lg mb-6"
          >
            View Case Studies <ArrowRight className="w-5 h-5" />
          </button>
          <div>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
