import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const exploreColumns = [
  {
    label: "Solutions",
    links: [
      { name: "How It Works", href: "/solutions" },
      { name: "Parker Experience", href: "/how-it-works/parker", sub: true },
      { name: "Industries We Serve", href: "/industries" },
      { name: "Hotels & Resorts", href: "/industries/hotels", sub: true },
      { name: "Healthcare Facilities", href: "/industries/hospitals", sub: true },
      { name: "Multifamily & Apartments", href: "/industries/multifamily", sub: true },
      { name: "HOA Communities", href: "/industries/hoa", sub: true },
      { name: "Commercial Real Estate", href: "/industries/cre", sub: true },
      { name: "Universities & Student Housing", href: "/industries/universities", sub: true },
      { name: "Truck Parking", href: "/industries/truck", sub: true },
      { name: "Airports & Transit Hubs", href: "/industries/airports", sub: true },
      { name: "Marinas & Boat Ramps", href: "/industries/marinas", sub: true },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Education Hub", href: "/education" },
    ],
  },
  {
    label: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "FAQ", href: "/faq" },
      { name: "Locations", href: "/locations" },
    ],
  },
  {
    label: "Get Started",
    links: [
      { name: "Partner With Us", href: "/contact" },
      { name: "Parking Help", href: "/parkers" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

const PILL_DESKTOP =
  "inline-flex items-center gap-1.5 rounded-full px-[18px] py-[6px] text-[0.85rem] font-semibold transition-all whitespace-nowrap hover:text-white";
const PILL_DESKTOP_STYLE: React.CSSProperties = {
  border: "1.5px solid #00305b",
  color: "#00305b",
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pillHover, setPillHover] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const getPillStyle = (id: string): React.CSSProperties => ({
    ...PILL_DESKTOP_STYLE,
    backgroundColor: pillHover === id ? "#00305b" : "transparent",
    color: pillHover === id ? "#ffffff" : "#00305b",
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── MOBILE layout: centered logo + 3 pill CTAs ── */}
        <div className="lg:hidden flex flex-col items-center py-2 gap-2">
          <Link href="/" className="flex items-center">
            <video
              autoPlay loop muted playsInline preload="none"
              className="h-[80px] w-auto rounded-xl"
              poster={`${import.meta.env.BASE_URL}logo-pp.webp`}
            >
              <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/mp4" />
              <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/quicktime" />
              <img src={`${import.meta.env.BASE_URL}logo-pp.webp`} alt="Perfect Parking Logo" className="h-[80px] w-auto object-contain" />
            </video>
          </Link>
          <div className="flex flex-wrap justify-center gap-2 pb-1">
            <Link
              href="/parkers"
              className="inline-flex items-center rounded-full px-4 py-1.5 text-[0.78rem] font-semibold transition-all active:bg-[#00305b] active:text-white"
              style={{ border: "1.5px solid #00305b", color: "#00305b" }}
            >
              Click Here for Parking Help
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center rounded-full px-4 py-1.5 text-[0.78rem] font-semibold transition-all active:bg-[#00305b] active:text-white"
              style={{ border: "1.5px solid #00305b", color: "#00305b" }}
            >
              More Info for Lot Owners
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-4 py-1.5 text-[0.78rem] font-semibold transition-all active:bg-[#00305b] active:text-white"
              style={{ border: "1.5px solid #00305b", color: "#00305b" }}
            >
              Would Perfect Parking Work for You?
            </Link>
          </div>
        </div>

        {/* ── DESKTOP layout: original single-row ── */}
        <div className="hidden lg:flex items-center gap-4 py-5">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <video
              autoPlay loop muted playsInline preload="none"
              className="h-[120px] w-auto rounded-xl"
              poster={`${import.meta.env.BASE_URL}logo-pp.webp`}
            >
              <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/mp4" />
              <source src={`${import.meta.env.BASE_URL}pp-logo-anim.mov`} type="video/quicktime" />
              <img src={`${import.meta.env.BASE_URL}logo-pp.webp`} alt="Perfect Parking Logo" className="h-[120px] w-auto object-contain" />
            </video>
          </Link>

          {/* Desktop nav pills */}
          <nav className="flex items-center gap-3">
            <Link
              href="/parkers"
              className={PILL_DESKTOP}
              style={getPillStyle("parking-help")}
              onMouseEnter={() => setPillHover("parking-help")}
              onMouseLeave={() => setPillHover(null)}
            >
              Click Here for Parking Help
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setPillHover("owners")}
                onMouseLeave={() => setPillHover(null)}
                className={PILL_DESKTOP}
                style={getPillStyle("owners")}
              >
                More Info for Lot Owners
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    style={{ background: "#00305b" }}
                  >
                    <div className="grid grid-cols-3 p-8 gap-2">
                      {exploreColumns.map((col) => (
                        <div key={col.label} className="px-3">
                          <p
                            className="text-[10px] font-bold uppercase tracking-widest mb-4"
                            style={{ color: "#DEC600" }}
                          >
                            {col.label}
                          </p>
                          <ul className="space-y-1.5">
                            {col.links.map((link) => {
                              const baseClass = `transition-all block py-0.5 border-l-2 border-transparent hover:border-secondary`;
                              const cls = link.sub
                                ? `${baseClass} text-[12px] pl-3 hover:pl-4`
                                : `${baseClass} text-[14px] pl-0 hover:pl-2`;
                              const linkStyle: React.CSSProperties = link.sub
                                ? { color: "rgba(255,255,255,0.65)", fontWeight: 400 }
                                : { color: "#e8eff7", fontWeight: 700 };
                              const hoverProps = {
                                onMouseEnter: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; },
                                onMouseLeave: (e: React.MouseEvent<HTMLElement>) => { (e.currentTarget as HTMLElement).style.color = linkStyle.color as string; },
                              };
                              return (
                                <li key={link.name}>
                                  {link.href.startsWith("mailto:") ? (
                                    <a href={link.href} onClick={() => setDropdownOpen(false)} className={cls} style={linkStyle} {...hoverProps}>
                                      {link.name}
                                    </a>
                                  ) : (
                                    <Link href={link.href} onClick={() => setDropdownOpen(false)} className={cls} style={linkStyle} {...hoverProps}>
                                      {link.name}
                                    </Link>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className={PILL_DESKTOP}
              style={getPillStyle("works-for-you")}
              onMouseEnter={() => setPillHover("works-for-you")}
              onMouseLeave={() => setPillHover(null)}
            >
              Would Perfect Parking Work for You?
            </Link>
          </nav>

          <div className="flex-1" />

          <div className="flex items-center gap-5">
            <a
              href="tel:+13615851111"
              className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              (361) 585-1111
            </a>
            <Link
              href="/contact"
              onClick={() =>
                trackEvent("cta_click", {
                  cta_label: "Partner With Us",
                  source_page: location || "/",
                  cta_location: "navbar_desktop",
                })
              }
              className="inline-flex items-center gap-2 px-6 py-2.5 font-bold rounded-xl shadow-[0_4px_14px_rgba(222,198,0,0.3)] hover:shadow-[0_6px_20px_rgba(222,198,0,0.4)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              style={{ background: "#DEC600", color: "#00305b" }}
            >
              Partner With Us
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
