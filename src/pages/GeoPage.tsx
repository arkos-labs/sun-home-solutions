import { Link, useParams } from "react-router-dom";
import regions from "@/data/geo/regions.json";
import departements from "@/data/geo/departements.json";
import nation from "@/data/geo/nation.json";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";
const SERVICE = "Étude panneaux photovoltaïques solaires";
const CTA = "Demander une étude gratuite";

function getRegion(slug?: string) {
  return (regions as any[]).find((r) => r.slug === slug);
}

function getDepartement(slug?: string) {
  return (departements as any[]).find((d) => d.slug === slug);
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

  const h1 =
    type === "nation"
      ? `${SERVICE} en France`
      : type === "region"
      ? `${SERVICE} en ${name}`
      : `${SERVICE} dans le ${name}${code}`;

  const canonical =
    type === "nation"
      ? `${BASE_URL}/france`
      : type === "region"
      ? `${BASE_URL}/regions/${regionSlug}`
      : `${BASE_URL}/departements/${deptSlug}`;

  return (
    <main className="container mx-auto px-4 py-12 lg:px-8">
      <SEOHead
        title={h1}
        description={`Étude photovoltaïque locale : aides 2026, rentabilité et installation RGE pour votre maison à ${name}.`}
        canonical={canonical}
      />
      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold lg:text-5xl">{h1}</h1>
        <p className="text-lg text-muted-foreground">
          Réponse directe : une installation photovoltaïque bien dimensionnée permet de réduire la
          facture annuelle de 30 à 60% et d’augmenter la rentabilité photovoltaïque France grâce à
          la revente du surplus. Le prix de l’électricité a bondi de 54% en 14 ans (de 0,1256€ à
          0,1940€ / kWh), ce qui renforce l’intérêt de l’autoconsommation énergétique en France.
          Objectif : un projet fiable pour votre maison, accompagné par un installateur solaire RGE.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            {CTA}
          </Link>
          <span className="text-sm text-muted-foreground self-center">
            Bureau d’études solaire — RGE QualiPV, garanties jusqu’à 25 ans, modules TOPCon.
          </span>
        </div>
      </section>

      <section className="mb-10 rounded-xl border p-6">
        <h2 className="mb-3 text-xl font-semibold">Pourquoi c’est rentable en 2026</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Rentabilité photovoltaïque France : 8 à 12% estimés selon l’ensoleillement, contre 2 à 3% pour le Livret A.</li>
          <li>Prime à l’autoconsommation 2026 : versée en une seule fois dès la 1ère année (ex. 660€ pour 3 kWc).</li>
          <li>Production 6 kWc : ~6 420 kWh/an à Paris vs ~8 120 kWh/an à Marseille.</li>
          <li>Valorisation immobilière : +4% à +10% de plus-value grâce au DPE amélioré.</li>
        </ul>
      </section>

      <section className="mb-10 rounded-xl border p-6">
        <h2 className="mb-3 text-xl font-semibold">Méthode de dimensionnement (transparente)</h2>
        <p className="text-sm text-muted-foreground">
          Formule de production annuelle : <strong>E = Pc × G × PR</strong> — où Pc est la puissance crête,
          G l’irradiation locale, et PR le ratio de performance (souvent 0,8). C’est la base de nos
          études pour dimensionner votre installation photovoltaïque rentable.
        </p>
      </section>

      <section className="mb-10 rounded-xl border p-6">
        <h2 className="mb-3 text-xl font-semibold">Zones couvertes</h2>
        <p className="text-sm text-muted-foreground">
          {type === "nation"
            ? "Études et dimensionnements pour particuliers partout en France, DOM inclus."
            : `Étude photovoltaïque pour particuliers et familles en ${name}${code}.`}
        </p>
      </section>

      <section className="rounded-xl border p-6">
        <h2 className="mb-4 text-xl font-semibold">FAQ Solaire France 2026</h2>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h3 className="font-medium text-foreground">Combien coûte une installation de 3 kWc en 2026 ?</h3>
            <p>Selon le matériel et la pose, 6 000€ à 9 000€ TTC, avec prime à l’autoconsommation déduite.</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">La revente du surplus est-elle rentable ?</h3>
            <p>Oui : elle réduit le temps de retour et stabilise les économies sur 20 ans.</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground">Intervenez-vous partout en France ?</h3>
            <p>Oui, études et dimensionnements nationaux, avec équipes locales selon la zone.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
