import React from "react";
import { Info } from "lucide-react";

export const SubsidiesSection = () => {
  return (
    <section className="py-24 bg-solera-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Jusqu'à <span className="text-[#FFD100]">4 230 €</span> d'aides<br />
            déduites directement.
          </h2>
          <p className="text-lg text-gray-400 font-body">
            Oubliez la paperasse. On avance les aides de l'État sur votre devis. 
            Vous payez le reste à charge, on s'occupe de récupérer les primes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Prime à l'autoconsommation</h3>
            <div className="text-2xl font-bold font-heading text-white mb-2">90 à 380 € / kWc</div>
            <p className="text-sm text-gray-500">Versée la première année de production.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">TVA Réduite</h3>
            <div className="text-2xl font-bold font-heading text-white mb-2">10% au lieu de 20%</div>
            <p className="text-sm text-gray-500">Pour les installations jusqu'à 3 kWc.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Éco-PTZ</h3>
            <div className="text-2xl font-bold font-heading text-white mb-2">Jusqu'à 30 000 €</div>
            <p className="text-sm text-gray-500">Prêt à taux zéro pour financer le reste.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <h3 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Rachat de surplus</h3>
            <div className="text-2xl font-bold font-heading text-[#FFD100] mb-2">Tarif EDF OA</div>
            <p className="text-sm text-gray-500">Vous revendez ce que vous ne consommez pas.</p>
          </div>

        </div>

        <div className="mt-16 bg-[#1E293B] max-w-3xl mx-auto rounded-3xl p-8 border border-white/10">
          <div className="flex gap-4 items-start">
            <Info className="h-6 w-6 text-[#FFD100] shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold font-heading mb-2">Exemple concret</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Pour une installation de 6 kWc à 13 000 €, avec une prime de 1 680 €.
              </p>
              
              <div className="space-y-3 font-mono text-sm border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span>Prix installation TTC</span>
                  <span>13 000 €</span>
                </div>
                <div className="flex justify-between text-green-400">
                  <span>Prime à l'autoconsommation (déduite)</span>
                  <span>- 1 680 €</span>
                </div>
                <div className="flex justify-between font-bold text-white pt-2 border-t border-white/10 text-base">
                  <span>Reste à charge</span>
                  <span>11 320 €</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
