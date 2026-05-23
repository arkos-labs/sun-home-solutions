import React from "react";
import SEOHead from "@/components/SEOHead";
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SimulatorSection } from "@/components/sections/SimulatorSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CoverageMapSection } from "@/components/sections/CoverageMapSection";
import { LeadFunnelSection } from "@/components/sections/LeadFunnelSection";
import { HardwareSection } from "@/components/sections/HardwareSection";
import { SubsidiesSection } from "@/components/sections/SubsidiesSection";
import { TeamSection } from "@/components/sections/TeamSection";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const Index = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <SEOHead
        title="Solera - Panneaux solaires pour votre maison"
        description="Étude photovoltaïque personnalisée, en 2 minutes et sans engagement. On vous accompagne du début à la fin de votre projet."
        canonical={`${BASE_URL}/`}
      />

      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <SimulatorSection />
      <TestimonialsSection />
      <CoverageMapSection />
      <LeadFunnelSection />
      <HardwareSection />
      <SubsidiesSection />
      <TeamSection />
    </main>
  );
};

export default Index;
