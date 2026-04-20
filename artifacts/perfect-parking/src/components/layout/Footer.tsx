import { Link, useLocation } from "wouter";
import { Mail, Phone } from "lucide-react";
import { useContactModal } from "@/context/ContactModalContext";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  const { openContactModal } = useContactModal();
  const [location] = useLocation();
  return (
    <footer className="bg-navy pt-20 pb-10 text-white" style={{ borderTop: '3px solid transparent', borderImage: 'linear-gradient(90deg, #0374a7, #3c6e7f, #1965b1) 1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <video
                autoPlay loop muted playsInline preload="none"
                className="h-20 w-auto rounded-xl"
                poster={`${import.meta.env.BASE_URL}logo-pp.webp`}
              >
                <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/mp4" />
                <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/quicktime" />
                <div className="inline-block bg-white rounded-xl px-3 py-2 shadow-sm">
                  <img src={`${import.meta.env.BASE_URL}logo-pp.webp`} alt="Perfect Parking" className="h-10 w-auto object-contain" />
                </div>
              </video>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              One partner. Proven strategies. More profit. We turn your underutilized parking real estate into consistent, passive monthly revenue.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-6 pb-2 border-b border-white/20">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions" className="text-white/80 hover:text-secondary transition-colors text-sm">Fully Automated Setup</Link></li>
              <li><Link href="/solutions" className="text-white/80 hover:text-secondary transition-colors text-sm">Revenue Reporting</Link></li>
              <li><Link href="/industries" className="text-white/80 hover:text-secondary transition-colors text-sm">Hotel Parking</Link></li>
              <li><Link href="/industries" className="text-white/80 hover:text-secondary transition-colors text-sm">Multifamily & HOA</Link></li>
              <li><Link href="/industries" className="text-white/80 hover:text-secondary transition-colors text-sm">Hospitals & CRE</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-6 pb-2 border-b border-white/20">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/80 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/case-studies" className="text-white/80 hover:text-secondary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/education" className="text-white/80 hover:text-secondary transition-colors text-sm">Education Hub</Link></li>
              <li><Link href="/locations" className="text-white/80 hover:text-secondary transition-colors text-sm">Locations We Serve</Link></li>
              <li><Link href="/faq" className="text-white/80 hover:text-secondary transition-colors text-sm">FAQ</Link></li>
              <li><button onClick={() => { trackEvent("cta_click", { cta_label: "Contact", source_page: location || "/", cta_location: "footer_nav" }); openContactModal(); }} className="text-white/80 hover:text-secondary transition-colors text-sm text-left">Contact</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base text-white mb-6 pb-2 border-b border-white/20">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a href="tel:+13615851111" className="text-white/80 hover:text-secondary transition-colors text-sm">Ph: (361) 585-1111</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:support@perfectparking.com" className="text-white/80 hover:text-secondary transition-colors text-sm">support@perfectparking.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Perfect Parking. All rights reserved. A Perfect Synergy Solutions company.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
