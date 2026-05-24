import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle2 } from "lucide-react";

export const LeadFunnelSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="simulateur">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-4xl mx-auto">
          {!submitted ? (
            <div className="bg-[#F7F9F8] rounded-[2rem] p-6 sm:p-10 lg:p-14 border border-gray-100 shadow-sm">
              
              {/* Form */}
              <div className="w-full">
                <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-2">
                  Vos coordonnées
                </h2>
                <p className="text-gray-500 mb-10 text-lg">
                  Laissez-nous vos coordonnées pour être rappelé par l'un de nos conseillers.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-sm font-bold text-[#0F172A]">Prénom</label>
                        <span className="text-red-400 font-bold">*</span>
                      </div>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3.5 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#FFD100] outline-none transition-all text-sm bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-sm font-bold text-[#0F172A]">Nom</label>
                        <span className="text-red-400 font-bold">*</span>
                      </div>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3.5 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#FFD100] outline-none transition-all text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-sm font-bold text-[#0F172A]">Code postal</label>
                        <span className="text-red-400 font-bold">*</span>
                      </div>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3.5 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#FFD100] outline-none transition-all text-sm bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-sm font-bold text-[#0F172A]">Ville</label>
                        <span className="text-red-400 font-bold">*</span>
                      </div>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-3.5 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#FFD100] outline-none transition-all text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-sm font-bold text-[#0F172A]">Téléphone portable</label>
                        <span className="text-red-400 font-bold">*</span>
                      </div>
                      <input 
                        required
                        type="tel" 
                        className="w-full px-4 py-3.5 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#FFD100] outline-none transition-all text-sm bg-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-sm font-bold text-[#0F172A]">Facture moyenne (optionnel)</label>
                      </div>
                      <select className="w-full px-4 py-3.5 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#FFD100] outline-none transition-all text-sm bg-white text-gray-700">
                        <option value="">Sélectionnez...</option>
                        <option value="1">Moins de 100€</option>
                        <option value="2">100€ à 200€</option>
                        <option value="3">Plus de 200€</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <label className="text-sm font-bold text-[#0F172A]">Mail</label>
                      <span className="text-red-400 font-bold">*</span>
                    </div>
                    <input 
                      required
                      type="email" 
                      className="w-full px-4 py-3.5 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-[#FFD100] outline-none transition-all text-sm bg-white"
                    />
                  </div>

                  <div className="pt-6 flex justify-end">
                    <Button 
                      type="submit"
                      disabled={loading}
                      className="bg-[#0F172A] text-white hover:bg-[#0F172A]/90 rounded-xl px-10 py-6 text-base font-bold shadow-md transition-all"
                    >
                      {loading ? "Traitement..." : "Être rappelé"} 
                    </Button>
                  </div>
                </form>
              </div>



            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 text-solera-dark text-center animate-in zoom-in-95 duration-500 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-4 text-[#0F172A]">Demande envoyée !</h3>
              <p className="text-gray-600 text-lg mb-8">
                Merci ! Vos coordonnées ont bien été enregistrées. Un de nos conseillers va vous rappeler dans les plus brefs délais pour votre étude gratuite.
              </p>
              <Button 
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="rounded-xl px-8 font-bold border-gray-300"
              >
                Retour
              </Button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
