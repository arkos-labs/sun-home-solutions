import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Euro, LineChart, PieChart } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart as RLineChart,
  Line,
  CartesianGrid,
  PieChart as RPieChart,
  Pie,
  Cell,
} from "recharts";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const SOLAR_DATA = {
  prime: { tier1: 280, tier2: 210, tier3: 110 }, // €/kWc (indicatif)
  oa: {
    surplus: { tier1: 12.69, tier2: 7.61 }, // cts/kWh
    total: { tier1: 14.3, tier2: 12.15, tier3: 13.55 }, // cts/kWh
  },
  productionFactor: 1100, // kWh/kWc/an (moyenne France)
};

const primeChartData = [
  { label: "≤ 3 kWc", value: SOLAR_DATA.prime.tier1 },
  { label: "3–9 kWc", value: SOLAR_DATA.prime.tier2 },
  { label: "9–36 kWc", value: SOLAR_DATA.prime.tier3 },
];

const oaChartData = [
  { label: "1 kWc", total: 14.3, surplus: 12.69 },
  { label: "3 kWc", total: 14.3, surplus: 12.69 },
  { label: "6 kWc", total: 12.15, surplus: 12.69 },
  { label: "9 kWc", total: 12.15, surplus: 12.69 },
];

const AidesSubventions = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [power, setPower] = useState(3);
  const [saleType, setSaleType] = useState<"surplus" | "total">("surplus");
  const [houseAge, setHouseAge] = useState<"old" | "new">("old");

  const results = useMemo(() => {
    let primeAmount = 0;
    let tariff = 0;
    let tvaRate = 20;
    let taxStatus = "Imposable (abattement 71%)";
    const yearlyProduction = power * SOLAR_DATA.productionFactor;

    if (saleType === "surplus") {
      if (power <= 3) primeAmount = power * SOLAR_DATA.prime.tier1;
      else if (power <= 9) primeAmount = power * SOLAR_DATA.prime.tier2;
      else primeAmount = power * SOLAR_DATA.prime.tier3;
    }

    if (saleType === "surplus") {
      tariff = SOLAR_DATA.oa.surplus.tier1;
    } else {
      if (power <= 3) tariff = SOLAR_DATA.oa.total.tier1;
      else if (power <= 9) tariff = SOLAR_DATA.oa.total.tier2;
      else tariff = SOLAR_DATA.oa.total.tier3;
    }

    if (houseAge === "old" && power <= 3) tvaRate = 10;

    if (power <= 3 && saleType === "surplus") taxStatus = "Exonéré d'impôt";

    const soldKwh = saleType === "total" ? yearlyProduction : yearlyProduction * 0.7;
    const annualRevenue = (soldKwh * tariff) / 100;

    return {
      primeAmount,
      tvaRate,
      taxStatus,
      annualRevenue,
      yearlyProduction,
    };
  }, [power, saleType, houseAge]);

  const tvaChartData = useMemo(() => {
    const tva = results.tvaRate;
    return [
      { name: "Coût HT", value: 100 },
      { name: `TVA ${tva}%`, value: tva },
    ];
  }, [results.tvaRate]);

  return (
    <div className="bg-white text-foreground">
      <SEOHead
        title="Aides et subventions pour panneaux solaires"
        description="Découvrez les aides 2026 : prime à l'autoconsommation, TVA réduite, OA EDF et dispositifs locaux pour particuliers."
        canonical={`${BASE_URL}/aides-subventions`}
      />
      {/* Hero */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <span className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Aides 2025–2026
          </span>
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground lg:text-6xl">
            Les aides de l’État pour le <span className="text-primary">solaire</span>
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-muted-foreground">
            Comprenez les dispositifs en vigueur pour votre maison, leurs montants et les conditions d’éligibilité. Simulez vos aides en quelques clics.
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {[
              "Prime autoconsommation",
              "TVA réduite 10%",
              "EDF OA (rachat)",
              "Aides locales",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="solar" size="lg" asChild>
              <Link to="/contact">Vérifier mon éligibilité <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/panneaux-solaires">Comprendre le solaire</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Analysis */}
      <section className="bg-muted py-16" id="analysis">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-heading text-3xl font-bold text-foreground">Analyse des dispositifs clés</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Trois leviers principaux pour réduire votre investissement : prime, rachat du surplus et TVA réduite.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-solar">
                  <Euro className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">Prime à l’autoconsommation</h3>
                  <p className="text-sm text-muted-foreground">Versée en une fois, selon la puissance installée.</p>
                </div>
              </div>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={primeChartData}>
                    <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">Montants indicatifs révisés trimestriellement.</div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">Obligation d’Achat (OA)</h3>
                  <p className="text-sm text-muted-foreground">Tarif garanti sur 20 ans pour le surplus.</p>
                </div>
              </div>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RLineChart data={oaChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#d97706" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="surplus" stroke="#64748b" strokeDasharray="4 4" strokeWidth={2} dot={false} />
                  </RLineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">Comparaison vente totale vs vente du surplus.</div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <PieChart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold">TVA réduite & fiscalité</h3>
                  <p className="text-sm text-muted-foreground">Réduction immédiate du coût d’installation.</p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>• TVA 10% si ≤ 3 kWc et logement &gt; 2 ans</div>
                  <div>• TVA 20% pour puissance supérieure</div>
                  <div>• Revenus exonérés si ≤ 3 kWc</div>
                </div>
                <div className="h-44 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RPieChart>
                      <Pie data={tvaChartData} dataKey="value" innerRadius={45} outerRadius={70} paddingAngle={4}>
                        <Cell fill="#e5e7eb" />
                        <Cell fill="#22c55e" />
                      </Pie>
                      <Tooltip />
                    </RPieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="py-16 bg-white border-t border-border" id="simulator">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Simulateur 2025</span>
            <h2 className="text-3xl font-extrabold text-foreground mt-2">Quelle aide pour votre projet ?</h2>
            <p className="mt-4 text-muted-foreground">Répondez à 3 questions simples pour obtenir une estimation personnalisée.</p>
          </div>

          <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card shadow-card overflow-hidden">
            {/* Progress */}
            <div className="bg-muted/60 border-b border-border px-6 py-4">
              <div className="flex items-center justify-between max-w-xs mx-auto text-sm font-medium text-muted-foreground">
                <span className={step >= 1 ? "text-primary font-semibold" : ""}>Projet</span>
                <span className="border-t-2 border-border flex-grow mx-4" />
                <span className={step >= 2 ? "text-primary font-semibold" : ""}>Logement</span>
                <span className="border-t-2 border-border flex-grow mx-4" />
                <span className={step >= 3 ? "text-primary font-semibold" : ""}>Résultat</span>
              </div>
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div className="p-8 space-y-6">
                <h3 className="text-lg font-bold text-foreground">Configurez votre installation</h3>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Puissance de l'installation (kWc)</label>
                  <input
                    type="range"
                    min={1}
                    max={9}
                    step={0.5}
                    value={power}
                    onChange={(e) => setPower(parseFloat(e.target.value))}
                    className="w-full h-2 bg-border rounded-lg accent-[hsl(var(--primary))]"
                  />
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>1 kWc</span>
                    <span className="text-lg font-bold text-primary">{power} kWc</span>
                    <span>9 kWc</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">3 kWc = standard pour maison individuelle (8–10 panneaux).</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-3">Type de vente</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="saleType"
                        value="surplus"
                        checked={saleType === "surplus"}
                        onChange={() => setSaleType("surplus")}
                        className="sr-only"
                      />
                      <div className={`rounded-lg border p-4 transition ${saleType === "surplus" ? "border-primary bg-primary/10" : "border-border hover:bg-muted/50"}`}>
                        <div className="font-semibold">Autoconsommation + Surplus</div>
                        <div className="text-xs text-muted-foreground mt-1">Vous consommez et vendez le reste.</div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="saleType"
                        value="total"
                        checked={saleType === "total"}
                        onChange={() => setSaleType("total")}
                        className="sr-only"
                      />
                      <div className={`rounded-lg border p-4 transition ${saleType === "total" ? "border-primary bg-primary/10" : "border-border hover:bg-muted/50"}`}>
                        <div className="font-semibold">Vente totale</div>
                        <div className="text-xs text-muted-foreground mt-1">Tout est injecté au réseau.</div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={() => setStep(2)} variant="navy">Suivant</Button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="p-8 space-y-6">
                <h3 className="text-lg font-bold text-foreground">Détails du logement</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                    <input
                      type="radio"
                      name="houseAge"
                      value="old"
                      checked={houseAge === "old"}
                      onChange={() => setHouseAge("old")}
                      className="h-4 w-4 text-primary"
                    />
                    <span className="ml-3 text-muted-foreground font-medium">Plus de 2 ans</span>
                    <span className="ml-auto text-xs text-emerald-600 font-bold bg-emerald-100 px-2 py-1 rounded">TVA réduite*</span>
                  </label>
                  <label className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50">
                    <input
                      type="radio"
                      name="houseAge"
                      value="new"
                      checked={houseAge === "new"}
                      onChange={() => setHouseAge("new")}
                      className="h-4 w-4 text-primary"
                    />
                    <span className="ml-3 text-muted-foreground font-medium">Moins de 2 ans / Neuf</span>
                  </label>
                  <p className="text-xs text-muted-foreground">*Si puissance ≤ 3 kWc.</p>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>Retour</Button>
                  <Button variant="solar" onClick={() => setStep(3)}>Calculer</Button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <div className="bg-primary text-primary-foreground p-6 text-center">
                  <h3 className="text-2xl font-bold">Résultat de la simulation</h3>
                  <p className="opacity-90 mt-1">Basé sur une installation de {power} kWc</p>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center p-4 bg-muted rounded-xl border border-border">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground font-bold mb-1">Prime</div>
                    <div className="text-4xl font-extrabold text-primary">{Math.round(results.primeAmount)} €</div>
                    <div className={`text-sm mt-2 ${saleType === "total" ? "text-rose-600" : "text-muted-foreground"}`}>
                      {saleType === "total" ? "Non éligible en vente totale" : "Versée en 1 fois"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-xl border border-border">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground font-bold mb-1">Revenu annuel (OA)</div>
                    <div className="text-3xl font-extrabold text-foreground">{Math.round(results.annualRevenue)} € / an</div>
                    <div className="text-sm text-muted-foreground mt-2">Tarif garanti 20 ans</div>
                  </div>
                </div>
                <div className="px-8 pb-6">
                  <h4 className="font-bold text-foreground mb-3">Fiscalité</h4>
                  <div className="bg-white border border-border rounded-lg divide-y divide-border">
                    <div className="p-4 flex justify-between items-center">
                      <span className="text-muted-foreground">Taux de TVA applicable</span>
                      <span className="font-bold text-foreground bg-muted px-3 py-1 rounded-full">{results.tvaRate}%</span>
                    </div>
                    <div className="p-4 flex justify-between items-center">
                      <span className="text-muted-foreground">Imposition des revenus</span>
                      <span className="font-bold text-foreground text-right text-sm">{results.taxStatus}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted p-6 flex flex-col items-center border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4 text-center">Estimations basées sur les barèmes actuels.</p>
                  <button onClick={() => setStep(1)} className="text-primary font-semibold hover:underline">Refaire une simulation</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl gradient-solar p-8 shadow-solar lg:p-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground">On s’occupe des démarches</h2>
            <p className="mb-8 text-primary-foreground/90">
              De la demande d’aides à l’installation, notre équipe gère tout. Vous avez un seul interlocuteur, un dossier clair et un projet serein.
            </p>
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">Demander un devis gratuit <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AidesSubventions;
