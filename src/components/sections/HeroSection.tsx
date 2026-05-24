import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Leaf, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-6 lg:pt-16 lg:pb-8">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/hero_solar_house.jpg" 
          alt="Maison avec panneaux solaires" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/65" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 max-w-6xl text-center w-full"
          >
            <div className="space-y-3 flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] leading-[1.1] font-heading font-extrabold tracking-tighter text-white drop-shadow-2xl">
                Votre toit produit <br className="hidden md:block" />
                l'énergie <span className="text-[#FFD100]">que</span> <br className="hidden md:block" />
                <span className="text-[#FFD100]">vous payez trop cher.</span>
              </h1>
              <p className="max-w-[800px] text-gray-100 text-lg md:text-xl lg:text-2xl font-body mx-auto drop-shadow-md font-medium">
                Étude photovoltaïque personnalisée, en 2 minutes et sans engagement.
                On vous accompagne du début à la fin de votre projet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Button className="bg-[#FFD100] text-gray-900 hover:bg-[#FFD100]/90 rounded-full px-8 py-6 text-base font-semibold shadow-sm w-full sm:w-auto">
                Faire une simulation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium w-full sm:w-auto border-gray-400 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                Voir nos réalisations
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-sm font-medium">
              <div className="flex text-[#FFD100]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-white">4.8/5 <span className="text-gray-300 font-normal">sur Trustpilot</span></span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-200 flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-[#FFD100]" /> Garantie 25 ans
              </span>
            </div>

            {/* Badges Section */}
            <div className="pt-8 flex flex-nowrap items-center justify-center gap-4 md:gap-12 opacity-100 w-full overflow-hidden">
              <img src="/badges/badge-1.png" alt="Certification 1" className="h-auto w-1/3 max-w-[250px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform" />
              <img src="/badges/badge-2.png" alt="Certification 2" className="h-auto w-1/3 max-w-[250px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform" />
              <img src="/badges/badge-3.png" alt="Certification 3" className="h-auto w-1/3 max-w-[250px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform" />
            </div>
          </motion.div>

        </div>
        

      </div>
    </section>
  );
};
