import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const MentionsLegales = () => {
  return (
    <div className="py-16">
      <SEOHead
        title="Mentions légales"
        description="Mentions légales de Sun Home Solutions."
        canonical={`${BASE_URL}/mentions-legales`}
      />
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="mb-8 font-heading text-4xl font-bold text-foreground">Mentions légales</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Éditeur du site</h2>
            <p>Sun Home Solutions SAS<br />
            [Adresse à compléter]<br />
            RCS : [À compléter]<br />
            SIRET : [À compléter]<br />
            Capital social : [À compléter]<br />
            Directeur de la publication : [À compléter]</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Hébergement</h2>
            <p>[Nom de l'hébergeur]<br />
            [Adresse de l'hébergeur]</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Propriété intellectuelle</h2>
            <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Responsabilité</h2>
            <p>Les informations fournies sur ce site le sont à titre indicatif. Sun Home Solutions s'efforce d'assurer l'exactitude des informations mais ne saurait garantir leur complétude ou leur actualité.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact</h2>
            <p>Email : contact@sunhomesolutions.fr<br />
            Téléphone : 01 00 00 00 00</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
