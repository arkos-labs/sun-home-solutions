import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white text-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Sun className="h-7 w-7 text-primary" />
              <span className="font-heading text-xl font-bold">Sun Home Solutions</span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Réduisez votre facture, sécurisez votre budget énergie et valorisez votre maison avec une installation solaire fiable.
            </p>
            <p className="text-sm text-muted-foreground">Bureau d’étude photovoltaïque & installateur certifié RGE</p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/panneaux-solaires" className="hover:text-primary transition-colors">Panneaux solaires</Link></li>
              <li><Link to="/autoconsommation" className="hover:text-primary transition-colors">Autoconsommation</Link></li>
              <li><Link to="/aides-subventions" className="hover:text-primary transition-colors">Aides & subventions</Link></li>
              <li><Link to="/zones" className="hover:text-primary transition-colors">Zones d’intervention</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+33100000000" className="hover:text-primary transition-colors">01 00 00 00 00</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@sunhomesolutions.fr" className="hover:text-primary transition-colors">contact@sunhomesolutions.fr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>France entière</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sun Home Solutions. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
