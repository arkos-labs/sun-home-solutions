import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import PanneauxSolaires from "./pages/PanneauxSolaires";
import Autoconsommation from "./pages/Autoconsommation";
import AidesSubventions from "./pages/AidesSubventions";
import CommentCaMarche from "./pages/CommentCaMarche";
import Realisations from "./pages/Realisations";
import FAQPage from "./pages/FAQ";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import Connexion from "./pages/Connexion";
import GeoPage from "./pages/GeoPage";
import Zones from "./pages/Zones";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/panneaux-solaires" element={<PanneauxSolaires />} />
            <Route path="/autoconsommation" element={<Autoconsommation />} />
            <Route path="/aides-subventions" element={<AidesSubventions />} />
            <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/zones" element={<Zones />} />
            <Route path="/france" element={<GeoPage type="nation" />} />
            <Route path="/regions/:regionSlug" element={<GeoPage type="region" />} />
            <Route path="/departements/:deptSlug" element={<GeoPage type="departement" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
