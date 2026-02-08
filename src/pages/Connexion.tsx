import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const Connexion = () => {
  return (
    <div>
      <SEOHead
        title="Espace client"
        description="Accès client pour suivre votre projet solaire et vos documents."
        canonical={`${BASE_URL}/connexion`}
        noindex
      />
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="mb-4 font-heading text-4xl font-bold text-foreground">Espace client</h1>
          <p className="max-w-3xl text-muted-foreground">
            Connectez-vous pour suivre votre projet solaire ou vos documents. Pas encore client ?
            <Link to="/contact" className="ml-2 font-medium text-primary hover:text-primary/90">Demander un devis</Link>
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-6 shadow-card">
            <form className="space-y-6" action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Adresse email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Mot de passe
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="h-4 w-4 rounded border-border" />
                  Se souvenir de moi
                </label>
                <a href="#" className="font-medium text-primary hover:text-primary/90">Mot de passe oublié ?</a>
              </div>

              <Button type="submit" className="w-full" variant="solar">
                Se connecter
              </Button>
            </form>

            <div className="mt-6 text-center text-xs text-muted-foreground">
              Besoin d’aide ? Contactez le support à <a className="underline" href="mailto:contact@sunhomesolutions.fr">contact@sunhomesolutions.fr</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connexion;
