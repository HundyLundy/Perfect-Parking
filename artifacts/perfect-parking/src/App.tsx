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
import LandingPage from "@/pages/LandingPage";
import FAQ from "@/pages/FAQ";
import Locations from "@/pages/Locations";
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

function Router() {
  return (
    <Layout>
      <PageViewTracker />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/industries" component={Industries} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/education" component={Education} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/locations" component={Locations} />
        <Route path="/lp" component={LandingPage} />
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
