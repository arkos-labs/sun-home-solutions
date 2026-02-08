import { useState, useEffect } from "react";
// Deployment trigger
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, TrendingDown, Shield, Leaf, ArrowRight, Star, Phone, CheckCircle, HelpCircle, Zap, Euro, Calendar, Ruler, PiggyBank, Wallet, Home, Plus, Minus } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import SavingsSimulator from "@/components/SavingsSimulator";
import SEOHead from "@/components/SEOHead";
import heroHouse1 from "@/assets/hero/house-solar-1.jpg";
import heroHouse2 from "@/assets/hero/house-solar-2.jpg";
import heroHouse3 from "@/assets/hero/house-solar-3.jpg";
import heroHouse4 from "@/assets/hero/house-solar-4.jpg";

const heroImages = [heroHouse1, heroHouse2, heroHouse3, heroHouse4];

const benefits = [
  { icon: TrendingDown, title: "Jusqu'à 70% d'économies", desc: "Réduisez drastiquement votre facture d'électricité dès la première année." },
  { icon: Shield, title: "Garantie 25 ans", desc: "Nos panneaux sont garantis 25 ans avec un rendement optimal assuré." },
  { icon: Leaf, title: "100% énergie verte", desc: "Produisez une énergie propre et contribuez à la transition écologique." },
  { icon: Zap, title: "Autonomie énergétique", desc: "Devenez indépendant du réseau et des hausses de prix de l'énergie." },
];

const steps = [
  { num: "01", title: "Étude personnalisée", desc: "Analyse gratuite de votre toiture par notre bureau d’étude photovoltaïque." },
  { num: "02", title: "Proposition sur-mesure", desc: "Devis détaillé avec simulation des économies et des aides disponibles." },
  { num: "03", title: "Installation par experts RGE", desc: "Pose professionnelle par nos installateurs certifiés en quelques jours." },
  { num: "04", title: "Suivi & rentabilité", desc: "Monitoring de votre production et accompagnement tout au long de la vie de vos panneaux." },
];

const testimonials = [
  { name: "Marie L.", location: "Lyon", rating: 5, text: "Installation impeccable ! En 6 mois, j'ai déjà économisé plus de 800€ sur ma facture. L'équipe est très professionnelle." },
  { name: "Pierre D.", location: "Toulouse", rating: 5, text: "Très satisfait du suivi. Le devis était précis, l'installation rapide et je produis même plus que prévu." },
  { name: "Sophie M.", location: "Nantes", rating: 5, text: "J'hésitais depuis longtemps. Grâce aux aides et à leur accompagnement, le coût réel a été très raisonnable." },
];

const faqs = [
  { icon: Euro, q: "Combien coûte une installation solaire ?", a: "Le coût moyen d'une installation résidentielle se situe entre 7 000 € et 15 000 € avant aides. Avec les subventions, le reste à charge peut être réduit de 30 à 50%." },
  { icon: TrendingDown, q: "Est-ce encore rentable en 2025/2026 ?", a: "Oui. L'autoconsommation, la revente de surplus et les aides rendent le projet rentable en moyenne en 7 à 10 ans." },
  { icon: Ruler, q: "Quelle surface pour une maison ?", a: "En général, 15 à 30 m² suffisent pour une installation 3 à 6 kWc. L'étude précise selon votre toiture." },
  { icon: Calendar, q: "En combien de temps l'installation est-elle rentable ?", a: "En moyenne, une installation solaire est rentabilisée en 7 à 10 ans. La durée de vie des panneaux dépasse 30 ans." },
  { icon: PiggyBank, q: "Quelles aides sont disponibles ?", a: "Prime à l'autoconsommation, obligation d'achat EDF OA, TVA réduite à 10%, MaPrimeRénov' dans certains cas, et aides locales selon votre région." },
  { icon: Wallet, q: "Puis-je financer mon installation ?", a: "Oui, des solutions de financement existent. Nous vous orientons vers les options adaptées à votre budget." },
  { icon: Home, q: "Mon toit est-il compatible ?", a: "La plupart des toitures sont compatibles. Nos experts réalisent une étude gratuite de faisabilité incluant l'orientation, l'inclinaison et l'ombrage." },
];

const BASE_URL = "https://sun-home-solutions.vercel.app";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sun Home Solutions",
    "description": "Bureau d’étude photovoltaïque et installateur certifié RGE pour particuliers en France.",
    "areaServed": "FR",
    "telephone": "+33100000000",
    "url": `${BASE_URL}/`,
    "serviceType": "Installation de panneaux solaires photovoltaïques",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR",
    },
  };

  return (
    <div>
      <SEOHead
        title="Panneaux solaires pour votre maison"
        description="Étude photovoltaïque gratuite, aides 2026 et installation RGE partout en France. Estimez vos économies et votre reste à charge."
        canonical={`${BASE_URL}/`}
        jsonLd={[localBusinessJsonLd, faqJsonLd]}
      />

      {/* Hero */}
      <section className="relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden bg-black lg:min-h-[65vh]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              alt="Installation solaire premium"
              loading={currentImageIndex === 0 ? "eager" : "lazy"}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </AnimatePresence>
          {/* Gradients subtils uniquement en haut et bas pour le texte, centre clair */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10 h-32" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 h-1/2" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-5xl"
          >


            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Devenez 100% autonome <br />
              grâce aux panneaux solaires. <br />
              <span className="text-white block mt-2 text-2xl lg:text-4xl">
                Et revendez le surplus.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-white font-medium md:text-2xl leading-relaxed">
              Réduisez vos factures immédiatement et transformez le toit de votre maison en source de revenus.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-white px-8 text-base font-semibold text-slate-950 hover:bg-slate-100 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Commencer mon projet <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link to="/realisations">
                  Nos réalisations
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-300">Devis gratuit • Sans engagement • Réponse sous 24h</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-14">
              <img src="/badges/qualipv-rge.svg" alt="QualiPV RGE" className="h-32 w-auto object-contain" />
              <img src="/badges/badge-1.png" alt="Garantie 25 ans" className="h-44 w-auto object-contain" />
              <img src="/badges/badge-2.png" alt="CO2 faible impact" className="h-44 w-auto object-contain" />
            </div>

          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-black py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">

            <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight text-white lg:text-5xl">
              Pourquoi passer au <span className="text-primary">solaire</span> ?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              Un investissement patrimonial, des économies immédiates et une valeur immobilière renforcée. <Link to="/autoconsommation" className="text-primary hover:underline">Découvrir l'autoconsommation</Link>.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-primary/30 hover:bg-white/10"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-white">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Bureau d'étude */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/60 via-background to-background" />
        <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">

            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground lg:text-4xl">
              Ingénierie photovoltaïque pilotée par notre bureau d’étude interne
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Chaque projet est dimensionné pour maximiser la production réelle, sécuriser la rentabilité et garantir une conformité totale.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-solar/20">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <TrendingDown className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">Dimensionnement énergétique</h3>
              <p className="text-sm text-muted-foreground">
                Analyse fine des usages, puissance optimale, choix des modules et onduleurs adaptés à votre maison.
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-solar/20">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sun className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">Simulation de production</h3>
              <p className="text-sm text-muted-foreground">
                Modélisation ensoleillement, inclinaison, ombrages et rendement pour une estimation réaliste et fiable.
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-card/80 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-solar/20">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">Conformité & sécurité</h3>
              <p className="text-sm text-muted-foreground">
                Respect strict des normes électriques et administratives, garanties constructeur et traçabilité complète.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button variant="solar" size="lg" asChild>
              <Link to="/contact">Demander une étude gratuite <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Savings example */}
      <SavingsSimulator />

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">

            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground lg:text-4xl">
              Un parcours maîtrisé, du diagnostic à la mise en service
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              4 étapes structurées pour un projet fiable, conforme et rentable — avec un seul interlocuteur.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Durée moyenne totale : 6 à 8 semaines.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-solar/20"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
                    {s.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Étape</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-950 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">

            <h2 className="mb-4 font-heading text-3xl font-bold text-white lg:text-4xl">
              Ils nous confient leur projet solaire
            </h2>
            <p className="mx-auto max-w-2xl text-white/80">
              Plus de 2 000 installations réalisées en France, avec un accompagnement 5★.
            </p>
          </div>
          <div className="mb-6 flex items-center justify-center gap-3 text-sm text-white/80">
            <span className="rounded-full bg-white/10 px-3 py-1">⭐ 4.9/5</span>
            <span>+2 000 clients accompagnés</span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/20"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-slate-300">"{t.text}"</p>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Aides & subventions */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">

            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">Réduisez votre reste à charge</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Prime à l’autoconsommation, TVA réduite, EDF OA… Nous gérons vos démarches et optimisons vos aides. Sources : <a href="https://france-renov.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">France Rénov'</a>.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Prime autoconsommation", "TVA réduite 10%", "EDF OA (rachat)", "Aides locales"].map((t, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 text-center shadow-card">
                <p className="text-sm font-semibold text-foreground">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="solar" size="lg" asChild>
              <Link to="/aides-subventions">Vérifier mon éligibilité <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ clean style */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-heading text-4xl font-bold text-foreground">Questions fréquentes</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Tout ce que vous devez savoir sur l'installation, le coût et la rentabilité.
              <br />Vous ne trouvez pas votre réponse ? <Link to="/contact" className="font-medium text-primary hover:underline">Contactez notre équipe !</Link>
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group border-b border-border pb-4 last:border-0">
                <summary className="flex cursor-pointer items-start justify-between gap-4 py-4 list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-white shadow-sm transition-colors group-hover:border-primary/20">
                      <f.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <span className="mt-2 font-heading text-lg font-semibold text-foreground group-open:text-primary transition-colors">
                      {f.q}
                    </span>
                  </div>
                  <div className="mt-2 shrink-0 text-muted-foreground transition-transform duration-300">
                    <Plus className="h-5 w-5 block group-open:hidden" />
                    <Minus className="h-5 w-5 hidden group-open:block" />
                  </div>
                </summary>
                <div className="pl-[4.5rem] pr-4">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl gradient-solar p-8 text-center shadow-solar lg:p-12">

            <h2 className="mb-4 font-heading text-3xl font-bold text-primary-foreground lg:text-4xl">
              Lancez votre étude gratuite dès maintenant
            </h2>
            <p className="mb-8 text-primary-foreground/90">
              Un expert vous rappelle sous 24h pour valider votre éligibilité et estimer vos économies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="navy" size="lg" asChild>
                <Link to="/contact">Demander un devis gratuit</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:+33100000000"><Phone className="mr-2 h-4 w-4" /> 01 00 00 00 00</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Sun Home Solutions",
            description: "Installation de panneaux solaires photovoltaïques pour particuliers en France",
            url: "https://www.Sun Home Solutions.fr",
            telephone: "+33100000000",
            areaServed: "FR",
            priceRange: "€€",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
};

export default Index;
