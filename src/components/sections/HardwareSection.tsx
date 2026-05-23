import React from "react";
import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HardwareSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-solera-dark leading-tight">
              Matériel <br />
              européen, <br />
              garanti 25 ans.
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-muted-foreground font-body">
              On a sélectionné une petite liste pour couvrir 95% des besoins. 
              Des marques mondiales avec des garanties béton. Pas de maintenance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col hover:border-[#FFD100] transition-colors">
            <div className="mb-8">
              <span className="bg-gray-100 text-solera-dark px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">Essentiel</span>
              <div className="text-4xl font-bold font-heading text-solera-dark mb-2">4 470 € <span className="text-sm font-normal text-muted-foreground">TTC</span></div>
              <p className="text-sm text-muted-foreground">Prime de l'état déduite</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Puissance crête : 3 kWc",
                "Panneaux SunPower",
                "Micro-onduleurs Enphase",
                "Pose incluse",
                "Garantie 25 ans"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-solera-dark">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full rounded-full py-6 font-medium border-gray-300">
              Voir le détail
            </Button>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-solera-dark text-white rounded-3xl p-8 border-2 border-[#FFD100] flex flex-col relative transform md:-translate-y-4 shadow-xl">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#FFD100] text-solera-dark px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              Le plus choisi
            </div>
            
            <div className="mb-8 mt-2">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">Optimum</span>
              <div className="text-4xl font-bold font-heading mb-2">7 220 € <span className="text-sm font-normal text-gray-400">TTC</span></div>
              <p className="text-sm text-gray-400">Prime de l'état déduite</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Puissance crête : 6 kWc",
                "Panneaux DualSun (Français)",
                "Micro-onduleurs APsystems",
                "Application de suivi incluse",
                "Pose incluse",
                "Garantie 25 ans pièces et main d'œuvre"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-[#FFD100] shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-[#FFD100] text-solera-dark hover:bg-[#FFD100]/90 rounded-full py-6 font-semibold shadow-sm">
              Choisir ce modèle
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col hover:border-[#FFD100] transition-colors">
            <div className="mb-8">
              <span className="bg-gray-100 text-solera-dark px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">Autonome+</span>
              <div className="text-4xl font-bold font-heading text-solera-dark mb-2">10 770 € <span className="text-sm font-normal text-muted-foreground">TTC</span></div>
              <p className="text-sm text-muted-foreground">Prime de l'état déduite</p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Puissance crête : 6 kWc",
                "Batterie de stockage 5 kWh",
                "Autonomie même en cas de coupure",
                "Panneaux Premium",
                "Garantie 25 ans"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-solera-dark">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="outline" className="w-full rounded-full py-6 font-medium border-gray-300">
              Voir le détail
            </Button>
          </div>

        </div>

        {/* Warranties Block */}
        <div className="mt-24 pt-16 border-t border-gray-200 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <ShieldCheck className="h-16 w-16 text-[#FFD100] mb-6" />
            <h3 className="text-2xl font-bold font-heading text-solera-dark mb-4">
              25 ans de tranquillité, écrits noir sur blanc.
            </h3>
            <p className="text-muted-foreground font-body">
              Chaque installation bénéficie des garanties constructeur maximales.
            </p>
          </div>
          
          <div className="md:w-2/3 w-full">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <div className="flex gap-4 items-center">
                  <div className="text-2xl font-bold text-solera-dark">25 ans</div>
                  <div className="text-sm text-muted-foreground">Garantie performance (85% garantis)</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-2xl font-bold text-solera-dark">25 ans</div>
                  <div className="text-sm text-muted-foreground">Garantie produit (panneaux)</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-2xl font-bold text-solera-dark">25 ans</div>
                  <div className="text-sm text-muted-foreground">Garantie micro-onduleurs</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-2xl font-bold text-solera-dark">10 ans</div>
                  <div className="text-sm text-muted-foreground">Garantie décennale (pose)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
