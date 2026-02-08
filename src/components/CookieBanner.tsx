import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent_v1");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent_v1", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-xl border border-border bg-white/95 p-4 shadow-lg backdrop-blur md:left-auto md:right-4 md:max-w-md">
      <p className="text-sm text-muted-foreground">
        Nous utilisons uniquement des cookies nécessaires au bon fonctionnement du site. En poursuivant votre navigation, vous acceptez notre politique.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <Button onClick={accept} size="sm" variant="solar">J'accepte</Button>
        <a href="/politique-confidentialite" className="text-xs underline text-muted-foreground">En savoir plus</a>
      </div>
    </div>
  );
};

export default CookieBanner;
