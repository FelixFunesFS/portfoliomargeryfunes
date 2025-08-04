import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AltHome from "./pages/AltHome";
import AltHome2 from "./pages/AltHome2";
import CaseStudies from "./pages/CaseStudies";
import CaseStudies2 from "./pages/CaseStudies2";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AltHome2 />} />
          <Route path="/original-home" element={<Index />} />
          <Route path="/alt" element={<AltHome />} />
          <Route path="/alt2" element={<AltHome2 />} />
          <Route path="/case-studies" element={<CaseStudies2 />} />
          <Route path="/original-case-studies" element={<CaseStudies />} />
          <Route path="/case-studies2" element={<CaseStudies2 />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;