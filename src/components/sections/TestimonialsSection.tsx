import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Valérie B.",
      location: "Tours",
      savings: "-120€",
      text: "Un équipement discret et au top ! L'équipe de pose a été super professionnelle et le suivi administratif a été très rigoureux. Je recommande !"
    },
    {
      name: "Thomas D.",
      location: "Lyon",
      savings: "-2 200 €",
      text: "L'installation a duré 48h. Les détails sont expliqués, pas de surprises. La production a commencé de suite et mon appli me permet de suivre ma consommation."
    },
    {
      name: "Aurélie & Marc",
      location: "Nantes",
      savings: "-1 350 €",
      text: "Maison gagnée de 20%. J'ai profité de la prime de l'état sans avancer. Gros plus pour le conseiller très pro !"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-solera-dark leading-tight">
              Ce qu'en disent <br />
              nos clients.
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-[#F8F9FA] px-6 py-3 rounded-full border border-gray-100">
            <div className="flex text-[#FFD100]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-solera-dark">4.8 <span className="text-muted-foreground font-normal text-sm">sur Trustpilot</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
            >
              <div className="mb-8">
                <div className="flex text-[#FFD100] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-solera-dark font-medium leading-relaxed">
                  « {testi.text} »
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <p className="font-bold text-solera-dark">{testi.name}</p>
                  <p className="text-sm text-muted-foreground">{testi.location}</p>
                </div>
                <div className="bg-[#E6F4EA] text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                  {testi.savings}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
