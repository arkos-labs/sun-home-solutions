import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import r01 from "@/assets/realisations/r01.jpeg";
import r02 from "@/assets/realisations/r02.png";
import r03 from "@/assets/realisations/r03.jpg";
import r04 from "@/assets/realisations/r04.jpg";
import r05 from "@/assets/realisations/r05.jpg";
import r06 from "@/assets/realisations/r06.jpg";
import r07 from "@/assets/realisations/r07.jpg";
import r08 from "@/assets/realisations/r08.jpg";
import r09 from "@/assets/realisations/r09.jpg";
import r10 from "@/assets/realisations/r10.jpg";
import r11 from "@/assets/realisations/r11.jpg";
import r12 from "@/assets/realisations/r12.jpg";
import r13 from "@/assets/realisations/r13.jpg";
import r14 from "@/assets/realisations/r14.jpg";
import r15 from "@/assets/realisations/r15.jpeg";
import r16 from "@/assets/realisations/r16.jpeg";
import r17 from "@/assets/realisations/r17.jpeg";
import r18 from "@/assets/realisations/r18.jpeg";
import r19 from "@/assets/realisations/r19.jpeg";
import r20 from "@/assets/realisations/r20.jpeg";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const realisations = [
  { dept: "Var (83)", saving: "1 400 €/an", image: r01 },
  { dept: "Ille-et-Vilaine (35)", saving: "1 200 €/an", image: r02 },
  { dept: "Côte-d'Or (21)", saving: "1 650 €/an", image: r03 },
  { dept: "Gironde (33)", saving: "2 100 €/an", image: r04 },
  { dept: "Ain (01)", saving: "1 450 €/an", image: r05 },
  { dept: "Hérault (34)", saving: "1 000 €/an", image: r06 },
  { dept: "Loire-Atlantique (44)", saving: "1 900 €/an", image: r07 },
  { dept: "Aude (11)", saving: "1 500 €/an", image: r08 },
  { dept: "Nord (59)", saving: "1 150 €/an", image: r09 },
  { dept: "Rhône (69)", saving: "1 700 €/an", image: r10 },
  { dept: "Calvados (14)", saving: "1 400 €/an", image: r11 },
  { dept: "Ardèche (07)", saving: "1 150 €/an", image: r12 },
  { dept: "Alpes-de-Haute-Provence (04)", saving: "2 100 €/an", image: r13 },
  { dept: "Finistère (29)", saving: "1 500 €/an", image: r14 },
  { dept: "Bouches-du-Rhône (13)", saving: "1 300 €/an", image: r15 },
  { dept: "Charente-Maritime (17)", saving: "1 650 €/an", image: r16 },
  { dept: "Alpes-Maritimes (06)", saving: "1 200 €/an", image: r17 },
  { dept: "Aisne (02)", saving: "1 300 €/an", image: r18 },
  { dept: "Isère (38)", saving: "1 900 €/an", image: r19 },
  { dept: "Allier (03)", saving: "1 700 €/an", image: r20 },
];

const avis = [
  { name: "Marie L.", location: "Lyon", rating: 5, text: "Installation impeccable ! En 6 mois, j'ai déjà économisé plus de 800€. L'équipe est très pro et réactive." },
  { name: "Pierre D.", location: "Toulouse", rating: 5, text: "Très satisfait du suivi. Le devis correspondait parfaitement à la réalité. Je recommande !" },
  { name: "Sophie M.", location: "Nantes", rating: 5, text: "Grâce aux aides et à leur accompagnement, le coût final a été très raisonnable. Excellent service." },
  { name: "Jean-Marc R.", location: "Montpellier", rating: 5, text: "Passage au solaire sans stress. Ils ont tout géré : mairie, Enedis, aides. Parfait !" },
  { name: "Isabelle K.", location: "Lille", rating: 4, text: "Bon travail dans l'ensemble. La production est conforme aux estimations même dans le Nord." },
  { name: "Thomas B.", location: "Bordeaux", rating: 5, text: "Installation rapide et propre. Le suivi de production est un vrai plus. Merci Sun Home Solutions !" },
];

const pageSize = 15;

const Realisations = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(realisations.length / pageSize);
  const pageItems = realisations.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <SEOHead
        title="Réalisations & avis clients"
        description="Découvrez des installations récentes et les retours d'expérience de nos clients partout en France."
        canonical={`${BASE_URL}/realisations`}
      />
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Réalisations & avis clients</h1>
          <p className="max-w-3xl text-muted-foreground">
            Plus de 2 000 installations solaires réalisées partout en France. Découvrez nos projets et les retours de nos clients satisfaits.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">Nos installations récentes</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((r, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border bg-card shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.image}
                    alt={`Installation solaire — ${r.dept}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{r.dept}</h3>
                  <div className="mt-3 text-sm">
                    <span className="text-muted-foreground">Économie :</span> <span className="font-semibold text-gradient-solar">{r.saving}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm">
            <button
              className="rounded-full border border-border px-4 py-2 text-muted-foreground disabled:opacity-40"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Précédent
            </button>
            <span className="px-2 text-muted-foreground">Page {page} / {totalPages}</span>
            <button
              className="rounded-full border border-border px-4 py-2 text-muted-foreground disabled:opacity-40"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Suivant
            </button>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 font-heading text-2xl font-bold text-foreground">Avis clients</h2>
          <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="rounded-full border border-border bg-card px-3 py-1">⭐ 4.9/5</span>
            <span>Plus de 2 000 installations</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {avis.map((a, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: a.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">"{a.text}"</p>
                <p className="text-sm font-semibold text-foreground">{a.name}</p>
                <p className="text-xs text-muted-foreground">{a.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <Button variant="solar" size="lg" asChild>
            <Link to="/contact">Démarrer mon projet <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: avis.map((a, i) => ({
              "@type": "Review",
              position: i + 1,
              author: { "@type": "Person", name: a.name },
              reviewRating: { "@type": "Rating", ratingValue: a.rating, bestRating: 5 },
              reviewBody: a.text,
            })),
          }),
        }}
      />
    </div>
  );
};

export default Realisations;
