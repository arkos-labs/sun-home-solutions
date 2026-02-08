import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingDown, Sun } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const Autoconsommation = () => {
  return (
    <div>
      <SEOHead
        title="Autoconsommation solaire et économies"
        description="Comprendre l'autoconsommation : fonctionnement, revente du surplus et économies pour votre maison."
        canonical={`${BASE_URL}/autoconsommation`}
      />
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Autoconsommation & économies</h1>
          <p className="max-w-3xl text-muted-foreground">
            L'autoconsommation solaire pour votre maison consiste à utiliser directement l'électricité produite par vos panneaux. Vous réduisez votre dépendance au réseau et maîtrisez votre budget énergie sur le long terme.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">Comment fonctionne l'autoconsommation ?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Sun, title: "Vos panneaux produisent", desc: "Pendant la journée, vos panneaux solaires génèrent de l'électricité à partir de la lumière du soleil." },
              { icon: Zap, title: "Vous consommez en direct", desc: "L'électricité produite alimente directement vos appareils : chauffe-eau, électroménager, climatisation…" },
              { icon: TrendingDown, title: "Le surplus est revendu", desc: "L'excédent est injecté dans le réseau et racheté par EDF OA, générant un revenu complémentaire." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg gradient-solar">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl bg-card p-8 shadow-card">
            <h2 className="mb-6 font-heading text-2xl font-bold text-center text-foreground">Cas concret : famille de 4 personnes</h2>
            <p className="mb-6 text-center text-xs text-muted-foreground">Exemple indicatif — estimation moyenne, variable selon la région.</p>
            <div className="grid gap-6 text-center sm:grid-cols-2">
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">Consommation annuelle</p>
                <p className="font-heading text-2xl font-bold text-foreground">6 500 kWh</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">Production panneaux (6 kWc)</p>
                <p className="font-heading text-2xl font-bold text-primary">7 200 kWh</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">Taux d'autoconsommation</p>
                <p className="font-heading text-2xl font-bold text-eco">60-70%</p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">Économie annuelle</p>
                <p className="font-heading text-2xl font-bold text-gradient-solar">1 500 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Estimez vos économies</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Chaque projet est unique. Demandez une étude gratuite pour connaître le potentiel solaire de votre maison.
          </p>
          <Button variant="solar" size="lg" asChild>
            <Link to="/contact">Demander mon étude gratuite <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Autoconsommation;
