import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You | Perfect Parking"
        description="Thank you for contacting Perfect Parking. We've received your analysis request and will be in touch within 24 hours."
        canonical="https://perfectparking.com/thank-you"
        robots="noindex, nofollow"
      />

      <section className="bg-muted min-h-[80vh] flex items-center py-24 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            We've Got Your Request!
          </h1>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
            Thanks for reaching out. Our team will review your property and get back to you within 24 hours with a custom revenue projection.
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-border p-8 mb-10 text-left max-w-lg mx-auto">
            <h2 className="font-bold text-lg text-foreground border-b border-border pb-4 mb-6">What happens next</h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <p className="text-muted-foreground">We review your property via satellite map and run comparable lot analysis.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <p className="text-muted-foreground">We project your monthly revenue potential based on real market data.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <p className="text-muted-foreground">We schedule a quick 15-minute call to walk you through the numbers — no obligation.</p>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="tel:+13615851111"
              className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (361) 585-1111
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="mailto:support@perfectparking.com"
              className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@perfectparking.com
            </a>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </section>
    </>
  );
}
