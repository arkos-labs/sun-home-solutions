import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";

const LeadForm = ({ onSubmitted }: { onSubmitted?: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmitted?.();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl bg-eco-light p-8 text-center">
        <CheckCircle className="h-12 w-12 text-eco" />
        <h3 className="font-heading text-2xl font-bold text-foreground">Demande envoyée !</h3>
        <p className="text-muted-foreground">
          Nous vous recontactons dans les plus brefs délais pour étudier votre projet solaire.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet *</Label>
          <Input id="name" placeholder="Jean Dupont" required maxLength={100} className="h-11 rounded-xl bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone *</Label>
          <Input id="phone" type="tel" placeholder="06 00 00 00 00" required maxLength={20} className="h-11 rounded-xl bg-background" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="jean@exemple.fr" required maxLength={255} className="h-11 rounded-xl bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="surface">Surface (m²) *</Label>
          <Input id="surface" type="number" min={20} max={5000} placeholder="120" required className="h-11 rounded-xl bg-background" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="heating">Type de chauffage *</Label>
        <Select>
          <SelectTrigger className="h-11 rounded-xl bg-background">
            <SelectValue placeholder="Sélectionner" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electrique">Électrique</SelectItem>
            <SelectItem value="gaz">Gaz</SelectItem>
            <SelectItem value="fioul">Fioul</SelectItem>
            <SelectItem value="pac">Pompe à chaleur</SelectItem>
            <SelectItem value="bois">Bois</SelectItem>
            <SelectItem value="autre">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="roof">Type de toiture *</Label>
          <Select>
            <SelectTrigger className="h-11 rounded-xl bg-background">
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tuiles">Tuiles</SelectItem>
              <SelectItem value="ardoises">Ardoises</SelectItem>
              <SelectItem value="bac-acier">Bac acier</SelectItem>
              <SelectItem value="toit-plat">Toit plat</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bill">Facture électrique / mois *</Label>
          <Select>
            <SelectTrigger className="h-11 rounded-xl bg-background">
              <SelectValue placeholder="Sélectionner" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50-100">50 – 100 €</SelectItem>
              <SelectItem value="100-150">100 – 150 €</SelectItem>
              <SelectItem value="150-200">150 – 200 €</SelectItem>
              <SelectItem value="200+">200 € et plus</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-start gap-2 text-xs text-muted-foreground">
        <input id="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-border" />
        <label htmlFor="consent">
          J'accepte d'être recontacté par Sun Home Solutions et que mes données soient traitées conformément à la{" "}
          <a href="/politique-confidentialite" className="underline hover:text-primary"> politique de confidentialité</a>.
        </label>
      </div>

      <Button type="submit" variant="solar" size="lg" className="w-full rounded-xl">
        Obtenir mon devis gratuit
      </Button>
    </form>
  );
};

export default LeadForm;
