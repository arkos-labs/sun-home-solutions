import React from "react";
import { Check } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Simulation en ligne",
      description: "En 2 minutes, vous savez combien vous pouvez économiser. C'est gratuit et sans engagement."
    },
    {
      number: "2",
      title: "Visite technique",
      description: "Un expert se déplace chez vous pour valider la faisabilité et le devis final. Aucune surprise."
    },
    {
      number: "3",
      title: "Installation clé en main",
      description: "Nos équipes certifiées posent vos panneaux en 1 ou 2 jours. On s'occupe de toutes les démarches."
    },
    {
      number: "4",
      title: "Suivi 25 ans",
      description: "Une application pour suivre votre production en temps réel. Une garantie produit et performance de 25 ans."
    }
  ];

  return (
    <section className="py-24 bg-solera-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
              Du devis à la première kWh produite : <span className="text-[#FFD100]">4 étapes.</span>
            </h2>
          </div>
          <div className="md:w-1/2 md:flex md:justify-end">
            <p className="text-gray-300 max-w-md font-body">
              On gère tout : démarches Mairie, demande d'aides, raccordement. 
              Vous n'avez à signer qu'un seul devis.
            </p>
          </div>
        </div>

        {/* Timeline Desktop */}
        <div className="hidden md:block relative mt-12">
          {/* Timeline line */}
          <div className="absolute top-[24px] left-[2%] right-[2%] h-[1px] bg-white/20"></div>
          
          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className="h-12 w-12 rounded-full bg-[#FFD100] text-solera-dark flex items-center justify-center font-bold font-heading text-lg mb-6 shadow-lg">
                  {index === 0 ? <Check className="h-6 w-6" /> : step.number}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-12 relative">
          <div className="absolute left-[24px] top-0 bottom-0 w-[1px] bg-white/20"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 relative z-10">
              <div className="h-12 w-12 shrink-0 rounded-full bg-[#FFD100] text-solera-dark flex items-center justify-center font-bold font-heading text-lg shadow-lg">
                {index === 0 ? <Check className="h-6 w-6" /> : step.number}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
