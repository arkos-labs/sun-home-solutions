import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const steps = [
  { num: "1", title: "Prise de contact", desc: "Vous remplissez le formulaire ou nous appelez. Un conseiller vous rappelle sous 24h pour discuter de votre projet.", duration: "Jour 1" },
  { num: "2", title: "Visite technique", desc: "Un technicien se déplace gratuitement pour étudier votre toiture, l'orientation, l'ombrage et votre compteur électrique.", duration: "Sous 1 semaine" },
  { num: "3", title: "Proposition & devis", desc: "Vous recevez un devis détaillé avec la simulation de production, les économies estimées et les aides applicables.", duration: "48h après visite" },
  { num: "4", title: "Démarches administratives", desc: "Nous prenons en charge la déclaration en mairie, la demande de raccordement Enedis et les dossiers d'aides.", duration: "2 à 4 semaines" },
  { num: "5", title: "Installation", desc: "Nos installateurs certifiés RGE posent vos panneaux en 1 à 2 jours. Mise en service et vérifications incluses.", duration: "1-2 jours" },
  { num: "6", title: "Mise en service & suivi", desc: "Raccordement au réseau, activation du contrat de rachat et accès à votre espace de suivi de production.", duration: "Sous 2 semaines" },
];

const BASE_URL = "https://sun-home-solutions.vercel.app";

const CommentCaMarche = () => {
  return (
    <div>
      <SEOHead
        title="Comment ça marche ?"
        description="Le déroulé complet d'un projet solaire : étude, devis, démarches, installation et suivi."
        canonical={`${BASE_URL}/comment-ca-marche`}
      />
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Comment ça marche ?</h1>
          <p className="max-w-3xl text-muted-foreground">
            De la première prise de contact à la mise en service, nous vous accompagnons à chaque étape de votre projet solaire pour votre maison. Voici le déroulement type d'une installation.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Durée moyenne totale : 6 à 8 semaines.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-solar font-heading text-xl font-bold text-primary-foreground">
                    {s.num}
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3">
                    <h2 className="font-heading text-xl font-semibold text-foreground">{s.title}</h2>
                    <span className="rounded-full bg-muted px-3 py-0.5 text-xs font-medium text-muted-foreground">{s.duration}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-2xl gradient-solar p-8 text-center shadow-solar lg:p-12">
            <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground">Le rôle de l'installateur RGE</h2>
            <p className="mx-auto mb-6 max-w-2xl text-primary-foreground/90">
              Seul un installateur certifié RGE (Reconnu Garant de l'Environnement) vous permet de bénéficier des aides de l'État. Nos équipes sont toutes certifiées et formées aux dernières technologies.
            </p>
            <Button variant="navy" size="lg" asChild>
              <Link to="/contact">Lancer mon projet <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentCaMarche;
