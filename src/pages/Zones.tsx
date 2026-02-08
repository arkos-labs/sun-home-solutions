import { Link } from "react-router-dom";
import regions from "@/data/geo/regions.json";
import departements from "@/data/geo/departements.json";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

export default function Zones() {
  return (
    <main className="container mx-auto px-4 py-12 lg:px-8">
      <SEOHead
        title="Zones d’intervention"
        description="Nos études photovoltaïques sont disponibles partout en France. Accédez aux pages par région et département."
        canonical={`${BASE_URL}/zones`}
      />
      <h1 className="mb-6 text-3xl font-bold lg:text-5xl">Zones d’intervention</h1>
      <p className="mb-8 text-muted-foreground">
        Toutes nos études photovoltaïques sont disponibles partout en France. Retrouvez ci‑dessous les
        pages régionales et départementales.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Régions</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(regions as any[]).map((r) => (
            <Link key={r.slug} className="rounded-lg border p-3 hover:bg-muted" to={`/regions/${r.slug}`}>
              {r.name}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Départements</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(departements as any[]).map((d) => (
            <Link key={d.slug} className="rounded-lg border p-3 hover:bg-muted" to={`/departements/${d.slug}`}>
              {d.name} ({d.code})
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
