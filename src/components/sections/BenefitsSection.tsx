import React from "react";
import { CheckCircle2, TrendingDown, Leaf, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const BenefitsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-solera-dark leading-tight">
              Trois bonnes raisons, <br /> aucun jargon.
            </h2>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg text-muted-foreground max-w-2xl font-body">
              On vous explique tout simplement : ce que vous payez, ce que vous gagnez, et quand ils seront rentables.
              Notre matériel est conçu pour durer, notre accompagnement aussi.
            </p>
          </div>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-100 flex flex-col gap-4"
          >
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center text-solera-dark">
              <TrendingDown className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-solera-dark">Des factures dès le 1er mois</h3>
            <p className="text-muted-foreground font-body">
              L'énergie produite est consommée instantanément par votre foyer. Votre facture baisse, pas votre confort.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <span className="font-bold text-solera-dark">Jusqu'à 1500 €/an</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-100 flex flex-col gap-4"
          >
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center text-solera-dark">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-solera-dark">Empreinte carbone divisée</h3>
            <p className="text-muted-foreground font-body">
              Vous participez activement à la transition écologique. Un toit, c'est l'équivalent de 150 arbres plantés.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <span className="font-bold text-solera-dark">- 1.5t CO2/an</span>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-[#F8F9FA] border border-gray-100 flex flex-col gap-4"
          >
            <div className="h-12 w-12 rounded-full bg-white shadow-sm flex items-center justify-center text-solera-dark">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-solera-dark">Indépendance énergétique</h3>
            <p className="text-muted-foreground font-body">
              Vous ne subissez plus les hausses du prix de l'électricité. Vous produisez, vous consommez.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <span className="font-bold text-solera-dark">Jusqu'à 70% autonomes</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
