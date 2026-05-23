import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building } from "lucide-react";

export const LeadFunnelSection = () => {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<string | null>(null);

  return (
    <section className="py-24 bg-solera-dark text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-white/10 text-[#FFD100] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide mb-6 inline-block">
              2 minutes pour estimer votre potentiel
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
              Quel type de bien souhaitez-vous équiper ?
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-solera-dark">
            
            {/* Simple Step 1 Simulation */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid md:grid-cols-2 gap-6">
                  
                  <button 
                    onClick={() => setPropertyType("maison")}
                    className={`flex flex-col items-center justify-center p-10 rounded-2xl border-2 transition-all duration-200 ${propertyType === 'maison' ? 'border-[#FFD100] bg-[#FFD100]/5' : 'border-gray-200 hover:border-[#FFD100] hover:bg-gray-50'}`}
                  >
                    <Home className={`h-16 w-16 mb-6 ${propertyType === 'maison' ? 'text-[#FFD100]' : 'text-gray-400'}`} />
                    <h3 className="text-xl font-bold font-heading mb-2">Maison individuelle</h3>
                    <p className="text-muted-foreground text-center text-sm">Je suis propriétaire d'une maison avec toiture dégagée.</p>
                  </button>

                  <button 
                    onClick={() => setPropertyType("batiment")}
                    className={`flex flex-col items-center justify-center p-10 rounded-2xl border-2 transition-all duration-200 ${propertyType === 'batiment' ? 'border-[#FFD100] bg-[#FFD100]/5' : 'border-gray-200 hover:border-[#FFD100] hover:bg-gray-50'}`}
                  >
                    <Building className={`h-16 w-16 mb-6 ${propertyType === 'batiment' ? 'text-[#FFD100]' : 'text-gray-400'}`} />
                    <h3 className="text-xl font-bold font-heading mb-2">Bâtiment professionnel</h3>
                    <p className="text-muted-foreground text-center text-sm">Hangar, local commercial, exploitation agricole.</p>
                  </button>

                </div>

                <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-8">
                  <div className="flex gap-2">
                    <div className="h-2 w-8 bg-[#FFD100] rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-2 bg-gray-200 rounded-full"></div>
                  </div>
                  <Button 
                    disabled={!propertyType}
                    onClick={() => setStep(2)}
                    className="bg-solera-dark text-white hover:bg-solera-dark/90 rounded-full px-8 py-6 text-base font-medium"
                  >
                    Étape suivante <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2 Placehoder */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center py-12">
                <h3 className="text-2xl font-bold font-heading mb-4">Merci pour cette première info !</h3>
                <p className="text-muted-foreground mb-8">
                  Le reste du simulateur sera développé très prochainement.
                </p>
                <Button 
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="rounded-full px-8"
                >
                  Retour
                </Button>
              </div>
            )}

          </div>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[#FFD100]/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};
