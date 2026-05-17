import { ReactNode, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useLocation } from "wouter";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const isStandalone = location === "/lp" || location === "/estimate";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  if (isStandalone) {
    return (
      <div className="min-h-screen flex flex-col font-sans">
        <main className="flex-grow">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-[180px] lg:pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}
