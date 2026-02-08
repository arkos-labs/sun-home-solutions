import SEOHead from "@/components/SEOHead";

const BASE_URL = "https://sun-home-solutions.vercel.app";

const PolitiqueConfidentialite = () => {
  return (
    <div className="py-16">
      <SEOHead
        title="Politique de confidentialité"
        description="Politique de confidentialité et traitement des données chez Sun Home Solutions."
        canonical={`${BASE_URL}/politique-confidentialite`}
      />
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="mb-8 font-heading text-4xl font-bold text-foreground">Politique de confidentialité</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Collecte des données</h2>
            <p>Nous collectons les données personnelles que vous nous transmettez via nos formulaires de contact et de demande de devis : nom, prénom, email, téléphone, ville, type de toiture, consommation énergétique.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Répondre à vos demandes de devis et d'information</li>
              <li>Vous recontacter dans le cadre de votre projet solaire</li>
              <li>Améliorer nos services et notre site web</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Base légale</h2>
            <p>Le traitement de vos données est fondé sur votre consentement (soumission du formulaire) et notre intérêt légitime à développer notre activité commerciale.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Durée de conservation</h2>
            <p>Vos données sont conservées pendant une durée maximale de 3 ans à compter de votre dernier contact avec nous.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants : accès, rectification, suppression, portabilité, limitation et opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à : contact@sunhomesolutions.fr</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Cookies</h2>
            <p>Ce site utilise des cookies pour améliorer votre expérience de navigation et mesurer l'audience. Vous pouvez paramétrer vos préférences de cookies à tout moment.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">Contact DPO</h2>
            <p>Pour toute question relative à la protection de vos données : contact@sunhomesolutions.fr</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
