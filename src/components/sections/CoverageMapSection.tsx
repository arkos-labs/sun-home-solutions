import React from "react";
import { CheckCircle2, MapPin } from "lucide-react";

export const CoverageMapSection = () => {
  const regions = [
    "Grand Ouest",
    "Rhône-Alpes",
    "PACA",
    "Hauts-de-France",
    "Occitanie",
    "Nouvelle-Aquitaine"
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-solera-dark leading-tight mb-6">
              Présents dans <br />
              72 départements
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-md">
              D'un bout à l'autre de la France, Solera déploie ses équipes d'installateurs 
              certifiés RGE QualiPV. Notre expertise vient à vous.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FFD100] h-5 w-5" />
                  <span className="font-medium text-solera-dark">{region}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <MapPin className="h-4 w-4" /> Et bien d'autres régions
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center">
            {/* Minimalist Map Image */}
            <div className="relative w-full max-w-[500px] aspect-square bg-gray-100 rounded-[3rem] border border-gray-200 overflow-hidden flex items-center justify-center">
               <img src="/coverage_map.png" alt="Carte de France des zones couvertes" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};
