import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const SimulatorSection = () => {
  const [bill, setBill] = useState(120);
  
  // Simple calculation logic for demonstration purposes
  const yearlySavings = Math.round(bill * 12 * 0.68); // 68% savings assumption
  const lifespanSavings = Math.round(yearlySavings * 25); // over 25 years
  const impactTrees = Math.round((bill * 12 * 0.5) / 10); // arbitrary eco metric

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-solera-dark leading-tight">
              Combien vous pourriez <br/>
              économiser, dès demain.
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              Faites bouger le curseur : votre facture mensuelle représente
              notre meilleure indication de votre potentiel d'économies.
            </p>

            <div className="pt-8 pb-4 border-b border-gray-200">
              <div className="flex justify-between items-end mb-6">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Votre facture actuelle</span>
                <div className="text-4xl font-bold font-heading text-solera-dark">
                  {bill} € <span className="text-lg text-muted-foreground font-normal">/ mois</span>
                </div>
              </div>
              
              <Slider
                defaultValue={[120]}
                max={500}
                min={50}
                step={10}
                value={[bill]}
                onValueChange={(val) => setBill(val[0])}
                className="py-4"
              />
            </div>

            <Button className="bg-[#FFD100] text-solera-dark hover:bg-[#FFD100]/90 rounded-full px-8 py-6 text-base font-semibold shadow-sm w-full sm:w-auto">
              Aller plus loin avec l'étude <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col gap-8">
              
              <div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-2">Économies sur 25 ans</span>
                <div className="text-5xl md:text-6xl font-bold font-heading text-solera-dark">
                  {lifespanSavings.toLocaleString('fr-FR')} €
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                <div>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-2">Par an</span>
                  <div className="text-3xl font-bold font-heading text-solera-dark">
                    {yearlySavings.toLocaleString('fr-FR')} €
                  </div>
                </div>
                <div>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider block mb-2">Impact éco</span>
                  <div className="text-3xl font-bold font-heading text-solera-dark flex items-baseline gap-2">
                    {impactTrees} <span className="text-base text-muted-foreground font-normal">arbres / an</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FA] p-4 rounded-xl text-sm text-muted-foreground mt-4 flex gap-3 items-start">
                <div className="text-[#FFD100] mt-0.5">ℹ️</div>
                <p>
                  Ces estimations sont basées sur une augmentation moyenne de l'électricité de 5% par an. 
                  L'étude gratuite vous donnera un chiffre précis.
                </p>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};
