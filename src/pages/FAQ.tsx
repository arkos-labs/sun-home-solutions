import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const faqs = [
  { cat: "Coût & rentabilité", questions: [
    { q: "Combien coûte une installation solaire ?", a: "Le coût moyen se situe entre 7 000 € et 15 000 € avant aides pour une installation résidentielle de 3 à 9 kWc. Avec les subventions, le reste à charge peut être réduit de 30 à 50%." },
    { q: "En combien de temps l'investissement est-il rentable ?", a: "En moyenne entre 7 et 10 ans, selon l'ensoleillement, votre consommation et les aides obtenues. La durée de vie des panneaux dépasse 30 ans." },
    { q: "Quel est le retour sur investissement ?", a: "Sur 25 ans, un foyer peut économiser entre 25 000 € et 40 000 € grâce à l'autoconsommation et la revente de surplus." },
  ]},
  { cat: "Installation & travaux", questions: [
    { q: "Combien de temps durent les travaux ?", a: "L'installation elle-même dure 1 à 2 jours. L'ensemble du projet (démarches, installation, raccordement) prend généralement 2 à 3 mois." },
    { q: "Faut-il un permis de construire ?", a: "Non, une simple déclaration préalable de travaux en mairie suffit dans la grande majorité des cas. Nous nous en chargeons pour vous." },
    { q: "Mon toit est-il compatible ?", a: "La plupart des toitures sont compatibles (tuiles, ardoises, bac acier, toit plat). Nos experts réalisent une étude gratuite de faisabilité." },
  ]},
  { cat: "Aides & démarches", questions: [
    { q: "Quelles aides sont disponibles ?", a: "Prime à l'autoconsommation, obligation d'achat EDF OA, TVA réduite à 10%, MaPrimeRénov' (panneaux hybrides), et aides locales variables." },
    { q: "Qui gère les démarches administratives ?", a: "Nous prenons en charge l'intégralité des démarches : déclaration en mairie, demande Enedis, dossiers d'aides." },
    { q: "L'installateur doit-il être certifié RGE ?", a: "Oui, la certification RGE est obligatoire pour bénéficier des aides de l'État. Tous nos installateurs sont certifiés." },
  ]},
  { cat: "Financement & paiement", questions: [
    { q: "Proposez-vous des solutions de financement ?", a: "Oui, nous proposons différentes options selon votre budget. Nous vous conseillons la solution la plus adaptée." },
    { q: "Puis-je étaler le paiement ?", a: "Selon le dossier, un paiement échelonné est possible. Nous détaillons cela lors du devis." },
  ]},
  { cat: "Technique & entretien", questions: [
    { q: "Quelle est la durée de vie des panneaux ?", a: "Les panneaux modernes ont une durée de vie de plus de 30 ans avec un rendement encore supérieur à 80% après 25 ans." },
    { q: "Faut-il entretenir les panneaux ?", a: "L'entretien est minimal. Un nettoyage à l'eau claire 1 à 2 fois par an suffit. La pluie assure un nettoyage naturel régulier." },
    { q: "Que se passe-t-il en cas de panne ?", a: "Nos panneaux sont garantis 25 ans. En cas de problème, notre service SAV intervient rapidement. Le monitoring permet de détecter toute anomalie." },
  ]},
];

const FAQPage = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap((cat) =>
      cat.questions.map((q) => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": { "@type": "Answer", "text": q.a },
      }))
    ),
  };

  return (
    <div>
      <SEOHead
        title="FAQ panneaux solaires"
        description="Réponses aux questions fréquentes sur les panneaux solaires, les aides, l'installation et la rentabilité."
        canonical={`${BASE_URL}/faq`}
        jsonLd={faqJsonLd}
      />
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Questions fréquentes</h1>
          <p className="max-w-3xl text-muted-foreground">
            Retrouvez les réponses aux questions les plus posées sur l'installation de panneaux solaires pour votre maison, les aides, la rentabilité et l'entretien.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-12">
            {faqs.map((cat, ci) => (
              <div key={ci}>
                <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">{cat.cat}</h2>
                <div className="space-y-4">
                  {cat.questions.map((f, i) => (
                    <details key={i} className="group rounded-xl border border-border bg-card p-5 shadow-card">
                      <summary className="flex cursor-pointer items-center justify-between font-heading text-lg font-semibold text-foreground">
                        {f.q}
                        <HelpCircle className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-45" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-4 font-heading text-2xl font-bold text-foreground">Vous avez d'autres questions ?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">Nos conseillers sont à votre disposition pour répondre à toutes vos interrogations.</p>
          <Button variant="solar" size="lg" asChild>
            <Link to="/contact">Nous contacter <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((cat) =>
              cat.questions.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              }))
            ),
          }),
        }}
      />
    </div>
  );
};

export default FAQPage;
