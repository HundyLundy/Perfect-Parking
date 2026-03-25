import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <img 
              src={`${import.meta.env.BASE_URL}logo-pp.webp`} 
              alt="Perfect Parking" 
              className="h-12 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              One partner. Proven strategies. More profit. We turn your underutilized parking real estate into consistent, passive monthly revenue.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="text-white/70 hover:text-secondary transition-colors text-sm">Fully Automated Setup</Link></li>
              <li><Link href="/solutions" className="text-white/70 hover:text-secondary transition-colors text-sm">Revenue Reporting</Link></li>
              <li><Link href="/industries" className="text-white/70 hover:text-secondary transition-colors text-sm">Hotel Parking</Link></li>
              <li><Link href="/industries" className="text-white/70 hover:text-secondary transition-colors text-sm">CRE & Hospitals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/70 hover:text-secondary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/case-studies" className="text-white/70 hover:text-secondary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/education" className="text-white/70 hover:text-secondary transition-colors text-sm">Education Hub</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-secondary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>Hunter Lundquist<br/>(720) 937-3004</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:hunter@perfectparking.com" className="hover:text-secondary transition-colors">hello@perfectparking.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Perfect Parking. All rights reserved. A Perfect Synergy Solutions company.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
