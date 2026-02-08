import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 p-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-2">
        <Button variant="solar" className="flex-1" asChild>
          <Link to="/contact">Demander un devis gratuit</Link>
        </Button>
        <a href="tel:+33100000000">
          <Button variant="navy" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
