import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/context/ContactModalContext";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { openContactModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Education", href: "/education" },
    { name: "Locations", href: "/locations" },
    { name: "FAQ", href: "/faq" },
    { name: "About", href: "/about" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 z-50">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="h-[120px] w-auto rounded-xl"
              poster={`${import.meta.env.BASE_URL}logo-pp.webp`}
            >
              <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/mp4" />
              <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/quicktime" />
              <img src={`${import.meta.env.BASE_URL}logo-pp.webp`} alt="Perfect Parking Logo" className="h-[120px] w-auto object-contain" />
            </video>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button 
              onClick={() => {
                trackEvent("cta_click", { cta_label: "Get a Free Audit", source_page: location || "/", cta_location: "navbar_desktop" });
                openContactModal();
              }}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground font-bold rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(222,198,0,0.3)] hover:shadow-[0_6px_20px_rgba(222,198,0,0.4)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Get a Free Audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <button 
            className="lg:hidden z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl lg:hidden flex flex-col border-t border-border"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-semibold text-foreground/90 hover:text-primary p-2 rounded-lg hover:bg-muted"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <button 
                  onClick={() => {
                    trackEvent("cta_click", { cta_label: "Get a Free Audit", source_page: location || "/", cta_location: "navbar_mobile" });
                    openContactModal();
                  }}
                  className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-xl"
                >
                  Get a Free Audit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
