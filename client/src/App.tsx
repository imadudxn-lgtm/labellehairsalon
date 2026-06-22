/**
 * La Belle Hair Salon — App Router
 * Design: Luxury Editorial Fashion Magazine
 * Routes: Home · Atelier · Menu · CoutureTherapy · Portfolio · Concierge
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import { ScrollToTop } from "./components/Layout";
import Home from "./pages/Home";
import Atelier from "./pages/Atelier";
import MenuPage from "./pages/Menu";
import CoutureTherapy from "./pages/CoutureTherapy";
import Portfolio from "./pages/Portfolio";
import Concierge from "./pages/Concierge";

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/atelier" component={Atelier} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/couture-therapy" component={CoutureTherapy} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/concierge" component={Concierge} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
