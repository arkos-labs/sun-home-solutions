import LeadForm from "@/components/LeadForm";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const Contact = () => {
  return (
    <div>
      <SEOHead
        title="Contact & devis gratuit"
        description="Demandez votre étude photovoltaïque gratuite et recevez un devis sous 24h pour votre maison."
        canonical={`${BASE_URL}/contact`}
      />
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="mb-3 font-heading text-4xl font-bold text-foreground">Demandez votre devis gratuit</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Une étude photovoltaïque claire, gratuite et sans engagement pour votre maison. Réponse sous 24h.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="rounded-full border border-border bg-background px-3 py-1">Sans engagement</span>
              <span className="rounded-full border border-border bg-background px-3 py-1">Données protégées</span>
              <span className="rounded-full border border-border bg-background px-3 py-1">Conseiller dédié</span>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-background p-6 lg:p-8">
                <h2 className="mb-6 font-heading text-2xl font-semibold text-foreground">Votre projet solaire</h2>
                <LeadForm />
                <p className="mt-4 text-xs text-muted-foreground">
                  Vos informations restent confidentielles. Aucun appel hors demande.
                </p>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">Coordonnées</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+33100000000" className="font-medium text-foreground hover:text-primary">01 00 00 00 00</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contact@sunhomesolutions.fr" className="hover:text-primary">contact@sunhomesolutions.fr</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Lun – Ven : 9h – 18h</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Intervention France entière</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-background p-6">
                <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">Pourquoi nous choisir</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Installateur certifié RGE</li>
                  <li>Devis gratuit et sans engagement</li>
                  <li>Accompagnement aides & subventions</li>
                  <li>Garantie 25 ans sur les panneaux</li>
                  <li>+2 000 installations réalisées</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
