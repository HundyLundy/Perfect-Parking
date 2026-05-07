import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import Industries from "@/pages/Industries";
import CaseStudies from "@/pages/CaseStudies";
import Education from "@/pages/Education";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ThankYou from "@/pages/ThankYou";
import LandingPage from "@/pages/LandingPage";
import FAQ from "@/pages/FAQ";
import Locations from "@/pages/Locations";
import CityPage from "@/pages/CityPage";
import HowItWorksParker from "@/pages/HowItWorksParker";
import Estimate from "@/pages/Estimate";
import { ContactModalProvider } from "@/context/ContactModalContext";
import { trackPageView } from "@/lib/analytics";

const queryClient = new QueryClient();

function PageViewTracker() {
  const [location] = useLocation();
  useEffect(() => {
    trackPageView(location);
  }, [location]);
  return null;
}

const EXCLUDED_PATHS = ["/estimate", "/contact"];

function GHLChatWidget() {
  const [location] = useLocation();
  useEffect(() => {
    const excluded = EXCLUDED_PATHS.some(path => location.startsWith(path));
    const widget = document.querySelector("chat-widget, [data-widget-id='69fbcfbecc730673a2a33e67'], #chat-widget-container, .chat-widget-container") as HTMLElement | null;
    if (excluded) {
      if (widget) widget.style.display = "none";
    } else {
      if (widget) widget.style.display = "";
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <Layout>
      <PageViewTracker />
      <GHLChatWidget />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/industries" component={Industries} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/education" component={Education} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/faq" component={FAQ} />
        <Route path="/locations" component={Locations} />
        <Route path="/locations/:citySlug" component={CityPage} />
        <Route path="/how-it-works/parker" component={HowItWorksParker} />
        <Route path="/lp" component={LandingPage} />
        <Route path="/estimate" component={Estimate} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <ContactModalProvider>
              <Router />
            </ContactModalProvider>
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
