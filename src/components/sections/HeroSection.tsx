import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Leaf, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
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
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-end justify-between">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8 max-w-3xl"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl xl:text-6xl/none">
                Votre toit produit <br className="hidden sm:block" />
                l'énergie <span className="text-[#FFD100]">que</span> <br className="hidden sm:block" />
                <span className="text-[#FFD100]">vous payez trop cher.</span>
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl font-body">
                Étude photovoltaïque personnalisée, en 2 minutes et sans engagement.
                On vous accompagne du début à la fin de votre projet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FFD100] text-gray-900 hover:bg-[#FFD100]/90 rounded-full px-8 py-6 text-base font-semibold shadow-sm w-full sm:w-auto">
                Faire une simulation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium w-full sm:w-auto border-gray-400 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                Voir nos réalisations
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium">
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
          </motion.div>

          {/* Floating cards repositioned to the right on large screens */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4 mb-8"
          >
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#FFD100]/20 flex items-center justify-center text-[#FFD100]">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium">Économie estimée</p>
                  <p className="text-xl font-bold text-white">1 200 € / an</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 font-medium">Énergie verte</p>
                  <p className="text-xl font-bold text-white">100% Locale</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Stats Section below Hero, using a glass effect overlapping the background */}
        <div className="mt-16 p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl">
          {[
            { value: "8 400", label: "Installations réalisées" },
            { value: "4.8 / 5", label: "Avis clients vérifiés" },
            { value: "92 %", label: "D'indépendance" },
            { value: "25 ans", label: "De garantie produit" }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-heading font-bold text-white">
                {stat.value}<span className="text-[#FFD100]">.</span>
              </span>
              <span className="text-sm font-medium text-gray-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
