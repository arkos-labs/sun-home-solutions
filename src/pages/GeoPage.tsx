
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import regions from "@/data/geo/regions.json";
import departements from "@/data/geo/departements.json";
import nation from "@/data/geo/nation.json";
import SEOHead from "@/components/SEOHead";
import { Sun, TrendingDown, Shield, Euro, Home, ArrowRight, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const BASE_URL = "https://sun-home-solutions.vercel.app";
const SERVICE = "Étude panneaux photovoltaïques solaires";
const CTA = "Demander une étude gratuite";

function getRegion(slug?: string) {
  return (regions as any[]).find((r) => r.slug === slug);
}

function getDepartement(slug?: string) {
  return (departements as any[]).find((d) => d.slug === slug);
}

function getPreposition(name: string, type: "nation" | "region" | "departement") {
  if (type === "nation") return "en";
  if (type === "region") {
    const dansLes = ["Hauts-de-France", "Pays de la Loire"];
    const dansLe = ["Grand Est"];
    if (dansLes.includes(name)) return "dans les";
    if (dansLe.includes(name)) return "dans le";
    return "en";
  }
  const vowels = ["A", "E", "I", "O", "U", "Y"];
  if (vowels.includes(name[0])) return "en";
  return "dans le";
}

export default function GeoPage({ type }: { type: "nation" | "region" | "departement" }) {
  const { regionSlug, deptSlug } = useParams();

  const data =
    type === "nation"
      ? nation
      : type === "region"
        ? getRegion(regionSlug)
        : getDepartement(deptSlug);

  const name = data?.name || "France";
  const code = data?.code ? ` (${data.code})` : "";
  const prep = getPreposition(name, type);

  const h1 =
    type === "nation"
      ? `${SERVICE} en France`
      : `${SERVICE} ${prep} ${name}${code}`;

  const canonical =
    type === "nation"
      ? `${BASE_URL}/france`
      : type === "region"
        ? `${BASE_URL}/regions/${regionSlug}`
        : `${BASE_URL}/departements/${deptSlug}`;

  const features = [
    { title: "Rentabilité Net", val: "8 à 12%", detail: "Supérieur au Livret A (3%)", icon: Euro, color: "text-green-500" },
    { title: "Prime État 2026", val: "Aide directe", detail: "Versée dès la 1ère année", icon: Shield, color: "text-blue-500" },
    { title: "Plus-value Verte", val: "+7% en moyenne", detail: "Valorisation immobilière", icon: Home, color: "text-primary" }
  ];

  return (
    <main className="container mx-auto px-4 py-12 lg:px-8 space-y-20">
      <SEOHead
        title={h1}
        description={`Étude photovoltaïque locale : aides 2026, rentabilité et installation RGE pour votre maison ${prep} ${name}.`}
        canonical={canonical}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 lg:p-20 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 inline-block px-4 py-1.5 rounded-full bg-white/5 text-primary text-xs font-bold uppercase tracking-[0.2em] border border-white/10"
          >
            Expertise Solaire Qualifiée RGE
          </motion.div>
          <h1 className="mb-8 text-4xl font-bold lg:text-7xl tracking-tight leading-[1.05]">{h1}</h1>
          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            Réponse directe : une installation photovoltaïque bien dimensionnée {prep} <strong>{name}</strong> permet de réduire votre
            facture annuelle de {data?.local_savings_percent || "30 à 60"}% dès la première année.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-all" asChild>
              <Link to="/contact">
                {CTA} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
              <Shield className="h-5 w-5 text-primary" />
              Garantie Rendement 25 ans inclus
            </div>
          </div>
        </div>
      </section>

      {/* Region HUD Stats */}
      {data?.sunlight_hours && (
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-[2.5rem] bg-white border border-slate-100 p-10 lg:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <h2 className="mb-12 text-2xl lg:text-3xl font-bold tracking-tight">Potentiel Solaire : {name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="flex items-center gap-8">
                  <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary shrink-0 transition-transform group-hover:rotate-12">
                    <Sun className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Ensoleillement</p>
                    <p className="text-4xl lg:text-5xl font-black">{data.sunlight_hours} h/an</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="h-20 w-20 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-500 shrink-0 transition-transform group-hover:-rotate-12">
                    <TrendingDown className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Économie Max</p>
                    <p className="text-4xl lg:text-5xl font-black">{data.local_savings_percent}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-900 text-white p-12 flex flex-col justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.15),transparent)]" />
            <span className="text-5xl text-primary font-serif mb-6">“</span>
            <p className="text-xl leading-relaxed relative z-10 font-medium text-slate-300">
              {prep.charAt(0).toUpperCase() + prep.slice(1)} {name}, l'irradiation annuelle permet un amortissement rapide, surtout avec une inclinaison à 35° Sud.
            </p>
          </div>
        </div>
      )}

      {/* Feature Card Grid */}
      <section className="space-y-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-6">Pourquoi franchir le pas {prep} {name} ?</h2>
          <p className="text-lg text-slate-500 font-medium">Investir dans le photovoltaïque {prep} {name} en 2026 est le meilleur moyen de sécuriser vos finances face à l'inflation énergétique.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${item.color} bg-slate-50 mb-8`}>
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-4xl font-black text-slate-950 mb-3">{item.val}</p>
              <p className="text-slate-500 font-medium">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dimensioning Info */}
      <section className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 border border-slate-200/50">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">Une ingénierie de précision pour votre maison.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Chaque toiture {prep} {name} est unique. Nous calculons votre production future via la formule <strong>E = Pc × G × PR</strong>, intégrant les masques d'ombrage locaux et l'irradiation spécifique à votre commune.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Puissance Crête (Pc)", "Irradiation (G)", "Performance (PR)"].map((t) => (
                <span key={t} className="px-4 py-2 bg-white rounded-xl text-sm font-bold border border-slate-200 shadow-sm">{t}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30" />
            <div className="relative bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center">
              <div className="inline-flex h-12 w-12 bg-primary/10 rounded-full items-center justify-center text-primary mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Moyenne Régionale</p>
              <div className="flex flex-col items-center">
                <span className="text-6xl font-black text-slate-950">7.2</span>
                <span className="text-xl font-bold text-primary mb-2">MWh / AN</span>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Base 6 kWc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Geo Link */}
      <section className="py-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-tight">Installateur Solaire {prep} {name}</h2>
          <p className="text-slate-500 text-lg">Nos équipes locales interviennent partout {prep} {name}{code} sous 15 jours.</p>
        </div>
        <Button variant="outline" size="lg" className="rounded-full h-16 px-12 text-lg font-bold border-2 hover:bg-slate-950 hover:text-white transition-colors" asChild>
          <Link to="/zones">Découvrir d'autres régions</Link>
        </Button>
      </section>
    </main>
  );
}
