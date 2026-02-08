import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, Zap, TrendingDown, Sun, Layers, Home, ChevronRight, Leaf, Battery, Settings, FileText, HelpCircle, Euro } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const sections = [
  { id: "introduction", label: "Introduction", icon: Sun },
  { id: "fonctionnement", label: "Comment ça marche", icon: Settings },
  { id: "types", label: "Types de panneaux", icon: Layers },
  { id: "rentabilite", label: "Rentabilité", icon: TrendingDown },
  { id: "aides", label: "Aides & subventions", icon: Euro },
  { id: "installation", label: "Installation", icon: Home },
  { id: "garanties", label: "Garanties & durée de vie", icon: ShieldCheck },
  { id: "environnement", label: "Impact environnemental", icon: Leaf },
  { id: "faq", label: "Questions fréquentes", icon: HelpCircle },
];

const PanneauxSolaires = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEOHead
        title="Panneaux solaires pour maison"
        description="Guide complet sur les panneaux solaires : fonctionnement, types, rentabilité, aides et installation pour particuliers."
        canonical={`${BASE_URL}/panneaux-solaires`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Installation de panneaux solaires photovoltaïques",
          "description": "Étude et installation solaire pour particuliers partout en France.",
          "provider": { "@type": "LocalBusiness", "name": "Sun Home Solutions" },
          "areaServed": "FR",
        }}
      />

      {/* Header removed */}

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center py-12">

          {/* Main Content */}
          <main className="max-w-3xl w-full">

            {/* Introduction */}
            <section id="introduction" className="mb-16 scroll-mt-28">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold mb-6">
                  <FileText className="h-3 w-3" /> Guide complet
                </span>
                <h1 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                  Tout savoir sur les panneaux solaires photovoltaïques
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Ce guide vous explique en détail le fonctionnement, les avantages, les coûts et la rentabilité d'une installation solaire pour votre maison. Objectif : vous donner toutes les clés pour une décision claire et rentable pour votre foyer.
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">En résumé</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" /> Réduction de facture de 50 à 70% dès la première année.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" /> Retour sur investissement en 7 à 10 ans en moyenne.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" /> Durée de vie des panneaux supérieure à 30 ans.</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" /> Aides de l'État : prime autoconsommation, TVA réduite, rachat EDF OA.</li>
                  </ul>
                </div>
              </motion.div>
            </section>

            {/* Comment ça marche */}
            <section id="fonctionnement" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Settings className="h-5 w-5" />
                </span>
                Comment fonctionne un panneau solaire ?
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>Un panneau solaire photovoltaïque est composé de cellules en silicium qui convertissent la lumière du soleil en électricité. Ce phénomène s'appelle l'<strong>effet photovoltaïque</strong>.</p>

                <h3>Les étapes de production</h3>
                <ol>
                  <li><strong>Captation de la lumière</strong> — Les photons du soleil frappent les cellules et libèrent des électrons.</li>
                  <li><strong>Génération de courant continu (DC)</strong> — Le mouvement des électrons crée un courant électrique continu.</li>
                  <li><strong>Conversion en courant alternatif (AC)</strong> — L'onduleur transforme le courant DC en AC, utilisable dans votre maison.</li>
                  <li><strong>Consommation et injection</strong> — Vous consommez votre électricité. Le surplus est soit stocké (batterie), soit vendu au réseau (EDF OA).</li>
                </ol>

                <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                    <Zap className="h-6 w-6 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-1">Micro-onduleurs</h4>
                    <p className="text-sm text-slate-600">Chaque panneau a son propre onduleur. Si un panneau est ombragé, les autres continuent à produire normalement.</p>
                  </div>
                  <div className="p-5 bg-green-50 rounded-xl border border-green-100">
                    <Battery className="h-6 w-6 text-green-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-1">Stockage (optionnel)</h4>
                    <p className="text-sm text-slate-600">Une batterie permet de stocker l'énergie produite en journée pour l'utiliser le soir.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types de panneaux */}
            <section id="types" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <Layers className="h-5 w-5" />
                </span>
                Les différents types de panneaux
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>Il existe plusieurs technologies de panneaux solaires. Voici les principales :</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-heading font-bold text-lg text-slate-900">Monocristallin (recommandé)</h3>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">Le plus courant</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">Fabriqué à partir de silicium pur. Couleur noire uniforme, esthétique premium.</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Rendement élevé : 18 à 23%</li>
                    <li>✓ Idéal pour les surfaces réduites</li>
                    <li>✓ Meilleure performance par faible luminosité</li>
                  </ul>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Polycristallin</h3>
                  <p className="text-slate-600 text-sm mb-3">Fabriqué à partir de fragments de silicium fondus. Couleur bleutée caractéristique.</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Rendement : 15 à 18%</li>
                    <li>✓ Moins cher à l'achat</li>
                    <li>✗ Moins performant par temps chaud</li>
                  </ul>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">Bifacial</h3>
                  <p className="text-slate-600 text-sm mb-3">Capte la lumière sur les deux faces (directe + réfléchie par le sol).</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>✓ Gain de production jusqu'à +20%</li>
                    <li>✓ Idéal pour toitures claires ou pergolas</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Rentabilité */}
            <section id="rentabilite" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <TrendingDown className="h-5 w-5" />
                </span>
                Rentabilité : est-ce un bon investissement ?
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>Oui. Avec la hausse continue du prix de l'électricité et les aides de l'État, le solaire est aujourd'hui l'un des meilleurs investissements pour les particuliers.</p>

                <h3>Exemple concret</h3>
                <p>Pour une installation de <strong>6 kWc</strong> (environ 15-18 panneaux) en région ensoleillée :</p>
              </div>
              <div className="my-6 overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-700">Coût moyen (avant aides)</td>
                      <td className="px-4 py-3 text-right text-slate-900">10 000 € – 14 000 €</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-semibold text-slate-700">Prime autoconsommation</td>
                      <td className="px-4 py-3 text-right text-emerald-600">– 1 500 € à 2 500 €</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <td className="px-4 py-3 font-semibold text-slate-700">Économies annuelles</td>
                      <td className="px-4 py-3 text-right text-slate-900">1 200 € – 1 800 €</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-slate-700">Retour sur investissement</td>
                      <td className="px-4 py-3 text-right font-bold text-slate-900">7 à 10 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="prose prose-slate max-w-none">
                <p>Après le retour sur investissement, <strong>vous profitez d'une énergie quasi gratuite pendant 20 ans ou plus</strong>.</p>
              </div>
            </section>

            {/* Aides */}
            <section id="aides" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-700">
                  <Euro className="h-5 w-5" />
                </span>
                Aides et subventions disponibles
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>L'État français encourage fortement l'installation de panneaux solaires. Voici les principales aides :</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Prime à l'autoconsommation</h4>
                  <p className="text-sm text-slate-600">Versée sur 5 ans. Montant variable selon la puissance (environ 350 à 500 €/kWc).</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">TVA réduite à 10%</h4>
                  <p className="text-sm text-slate-600">Pour les installations ≤ 3 kWc sur logement de plus de 2 ans.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Obligation d'achat (EDF OA)</h4>
                  <p className="text-sm text-slate-600">EDF rachète votre surplus d'électricité à un tarif garanti pendant 20 ans.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Aides locales</h4>
                  <p className="text-sm text-slate-600">Certaines régions, départements ou communes proposent des aides complémentaires.</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link to="/aides-subventions">Voir le détail des aides <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Home className="h-5 w-5" />
                </span>
                Comment se passe l'installation ?
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>L'installation d'un système photovoltaïque est un processus bien rodé qui prend généralement <strong>1 à 2 jours</strong> pour la pose.</p>

                <h3>Les étapes</h3>
                <ol>
                  <li><strong>Étude de faisabilité</strong> — Analyse de votre toiture (orientation, inclinaison, ombrage) et dimensionnement.</li>
                  <li><strong>Démarches administratives</strong> — Déclaration préalable en mairie, demande de raccordement.</li>
                  <li><strong>Installation</strong> — Pose des panneaux en surimposition (sans toucher à l'étanchéité), câblage, onduleur.</li>
                  <li><strong>Mise en service</strong> — Validation Consuel, raccordement Enedis, activation du contrat EDF OA.</li>
                </ol>

                <h3>Conditions pour une bonne installation</h3>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "Être propriétaire de votre logement",
                  "Orientation sud, sud-est ou sud-ouest",
                  "Surface de toiture ≥ 15 m²",
                  "Inclinaison idéale : 15° à 35°",
                  "Peu ou pas d'ombrage",
                  "Charpente en bon état",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Garanties */}
            <section id="garanties" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                Garanties et durée de vie
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>Les panneaux solaires sont conçus pour durer. Voici ce que vous pouvez attendre :</p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="p-5 bg-purple-50 rounded-xl border border-purple-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Durée de vie : 30 à 40 ans</h4>
                  <p className="text-sm text-slate-600">Les panneaux continuent de produire bien au-delà de la période de garantie.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Garantie de production : 25 ans</h4>
                  <p className="text-sm text-slate-600">Les fabricants garantissent au moins 80-85% du rendement initial à 25 ans.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Garantie matériel : 12 à 25 ans</h4>
                  <p className="text-sm text-slate-600">Couvre les défauts de fabrication des panneaux et des micro-onduleurs.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Entretien minimal</h4>
                  <p className="text-sm text-slate-600">Un simple nettoyage 1 à 2 fois par an suffit. Pas de pièces mobiles, pas d'usure.</p>
                </div>
              </div>
            </section>

            {/* Environnement */}
            <section id="environnement" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                  <Leaf className="h-5 w-5" />
                </span>
                Impact environnemental
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>Les panneaux solaires ont un <strong>bilan carbone très positif</strong> sur leur durée de vie :</p>
                <ul>
                  <li><strong>Temps de retour énergétique</strong> : 1 à 3 ans. Après cette période, le panneau a produit autant d'énergie qu'il en a fallu pour le fabriquer.</li>
                  <li><strong>Recyclage</strong> : Les panneaux sont recyclables à plus de 94%. La filière est structurée (PV Cycle, Soren).</li>
                  <li><strong>Réduction CO2</strong> : Une installation moyenne évite l'émission de 1 à 2 tonnes de CO2 par an.</li>
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16 scroll-mt-28">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <HelpCircle className="h-5 w-5" />
                </span>
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Les panneaux fonctionnent-ils par temps nuageux ?", a: "Oui. La production est réduite mais pas nulle. Les panneaux captent la lumière diffuse." },
                  { q: "Faut-il changer de compteur ?", a: "Non. Enedis installe gratuitement un compteur Linky compatible avec l'injection." },
                  { q: "L'installation abîme-t-elle le toit ?", a: "Non. La pose en surimposition ne nécessite pas de percer la couverture." },
                  { q: "Que se passe-t-il la nuit ?", a: "Les panneaux ne produisent pas la nuit. Vous consommez l'électricité du réseau (ou de votre batterie si vous en avez une)." },
                  { q: "Puis-je revendre toute ma production ?", a: "Oui, c'est possible (vente totale), mais l'autoconsommation avec vente du surplus est généralement plus intéressante." },
                ].map((item, i) => (
                  <details key={i} className="group p-5 bg-slate-50 rounded-xl border border-slate-100 cursor-pointer">
                    <summary className="font-semibold text-slate-900 list-none flex justify-between items-center">
                      {item.q}
                      <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-3 text-sm text-slate-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA Final */}
            <section className="mt-16 p-8 bg-slate-900 rounded-3xl text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">Prêt à passer à l'action ?</h3>
              <p className="text-slate-300 mb-6 max-w-md mx-auto">
                Demandez votre étude personnalisée. C'est gratuit, sans engagement, et vous recevez une réponse sous 24h.
              </p>
              <Button size="lg" className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold" asChild>
                <Link to="/contact">Demander mon étude gratuite <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default PanneauxSolaires;
