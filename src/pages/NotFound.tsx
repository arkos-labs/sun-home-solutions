import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <SEOHead
        title="Page introuvable"
        description="La page demandée est introuvable."
        canonical={`${BASE_URL}/404`}
        noindex
      />
      <div className="text-center">
        <h1 className="mb-3 text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Cette page n'existe pas.</p>
        <Button variant="solar" asChild>
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
