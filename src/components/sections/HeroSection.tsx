import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Leaf, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F8F9FA] overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                Votre toit produit <br className="hidden sm:block" />
                l'énergie <span className="text-solera-dark font-medium">que</span> <br className="hidden sm:block" />
                <span className="text-solera-dark font-medium">vous payez trop cher.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                Étude photovoltaïque personnalisée, en 2 minutes et sans engagement.
                On vous accompagne du début à la fin de votre projet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FFD100] text-solera-dark hover:bg-[#FFD100]/90 rounded-full px-8 py-6 text-base font-semibold shadow-sm w-full sm:w-auto">
                Faire une simulation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-base font-medium w-full sm:w-auto border-gray-300">
                Voir nos réalisations
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex text-[#FFD100]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-solera-dark">4.8/5 <span className="text-muted-foreground font-normal">sur Trustpilot</span></span>
              <span className="text-gray-300">|</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Garantie 25 ans
              </span>
            </div>
          </motion.div>

          {/* Image & Floating Cards Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main placeholder - the house image */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-2xl bg-gray-200 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-gray-100 flex items-center justify-center text-gray-400">
                [Image Maison Solaire]
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -left-6 top-1/4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#FFD100]/20 flex items-center justify-center text-[#FFD100]">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Économie estimée</p>
                  <p className="text-lg font-bold text-solera-dark">1 200 € / an</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-6 bottom-1/4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Énergie verte</p>
                  <p className="text-lg font-bold text-solera-dark">100% Locale</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Stats Section below Hero */}
        <div className="mt-20 pt-10 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "8 400", label: "Installations réalisées" },
            { value: "4.8 / 5", label: "Avis clients vérifiés" },
            { value: "92 %", label: "D'indépendance" },
            { value: "25 ans", label: "De garantie produit" }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-3xl md:text-4xl font-heading font-bold text-solera-dark">
                {stat.value}<span className="text-[#FFD100]">.</span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
