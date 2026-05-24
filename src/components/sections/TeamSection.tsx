import React from "react";
import { Users, CheckCircle } from "lucide-react";

export const TeamSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-solera-dark leading-tight">
              Une équipe d'installateurs, <br />
              <span className="text-gray-400">pas un courtier.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground font-body">
              Solera a été fondée en 2014 par deux ingénieurs solaires. 
              Notre cœur de métier, c'est l'installation. Pas de sous-traitance 
              obscure, pas de marketing agressif. Juste du travail bien fait.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold font-heading text-solera-dark">2014</div>
                <div className="text-sm font-medium text-muted-foreground">Année de création</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold font-heading text-solera-dark">64</div>
                <div className="text-sm font-medium text-muted-foreground">Collaborateurs internes</div>
              </div>
            </div>
            
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFD100]" />
                <span className="text-solera-dark font-medium">Certification RGE QualiPV 500</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFD100]" />
                <span className="text-solera-dark font-medium">Bureau d'études intégré</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-[#FFD100]" />
                <span className="text-solera-dark font-medium">Service de maintenance propre</span>
              </div>
            </div>
            
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 shadow-xl border border-gray-200">
               <img src="/team.png" alt="L'équipe Solera" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block">
              <div className="flex flex-col">
                <span className="text-solera-dark font-bold font-heading">100% Intégré</span>
                <span className="text-sm text-muted-foreground">Aucun sous-traitant</span>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};
