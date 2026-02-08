
import { useState, useEffect } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingDown, Clock, Calculator, Euro } from "lucide-react";

const Counter = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
    const spring = useSpring(0, { bounce: 0, duration: 1000 });
    const display = useTransform(spring, (current) =>
        `${prefix}${Math.round(current).toLocaleString("fr-FR")}${suffix}`
    );

    useEffect(() => {
        spring.set(value);
    }, [value, spring]);

    return <motion.span>{display}</motion.span>;
};

const SavingsSimulator = () => {
    const [bill, setBill] = useState<string>("");
    const [isInteracting, setIsInteracting] = useState(false);

    const defaultBill = 2400;
    // Si l'utilisateur tape quelque chose, on utilise sa valeur, sinon la valeur par défaut
    const displayBill = bill ? parseInt(bill) || 0 : defaultBill;

    // Hypothèses simplifiées pour la simulation
    const savingsRatio = 0.70; // 70% d'économie
    const estimatedSavings = Math.round(displayBill * savingsRatio);
    // ROI simplifié : Coût système (ex: 12000) / économie annuelle
    // On borne le ROI entre 5 et 15 ans pour du réalisme
    const systemCost = 14000; // Coût moyen après aides estimé
    const rawRoi = systemCost / (Math.max(estimatedSavings, 1)); // éviter division par 0
    const roi = Math.max(5, Math.min(15, Math.round(rawRoi)));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // N'autoriser que les chiffres
        const val = e.target.value.replace(/\D/g, "");
        setBill(val);
        setIsInteracting(true);
    };

    return (
        <section className="relative overflow-hidden py-16">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto w-full rounded-3xl border border-white/20 bg-white/40 shadow-2xl backdrop-blur-xl dark:bg-slate-950/40 dark:border-white/10 lg:p-8 p-6 overflow-hidden md:p-8"
                >
                    {/* Header */}
                    <div className="mb-10 text-center">

                        <h2 className="mb-4 font-heading text-3xl font-bold text-foreground lg:text-5xl">
                            Estimez votre potentiel solaire
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Saisissez votre facture annuelle pour découvrir combien vous pourriez économiser dès la première année.
                        </p>
                    </div>

                    {/* Input Section */}
                    <div className="mx-auto mb-12 w-full max-w-xl">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-solar-glow rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                            <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-inner border border-input p-2">
                                <div className="pl-4 pr-2 text-muted-foreground">
                                    <Euro className="h-5 w-5" />
                                </div>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={bill}
                                    onChange={handleInputChange}
                                    placeholder={`Exemple : ${defaultBill}`}
                                    className="flex-1 bg-transparent p-2 text-xl font-semibold outline-none placeholder:text-muted-foreground/40 text-foreground"
                                />
                                <Button
                                    variant="solar"
                                    size="lg"
                                    className="rounded-xl shadow-lg hover:shadow-primary/25 transition-all hidden sm:flex"
                                    onClick={() => { }} // Just visual focus, data is reactive
                                >
                                    Estimer
                                </Button>
                            </div>
                        </div>
                        <p className="mt-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            {isInteracting ? "Estimation basée sur votre facture" : "Données basées sur une maison moyenne de 100m²"}
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Card 1: Bill */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative overflow-hidden rounded-2xl border border-input bg-background/50 p-6 text-center shadow-lg transition-all"
                        >
                            <div className="mb-4 flex justify-center text-muted-foreground/60">
                                <div className="p-3 bg-muted rounded-2xl">
                                    <Zap className="h-6 w-6 text-muted-foreground" />
                                </div>
                            </div>
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Facture Actuelle</p>
                            <div className="mt-2 font-heading text-3xl font-bold text-foreground">
                                <Counter value={displayBill} suffix=" €" />
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">par an</p>
                        </motion.div>

                        {/* Card 2: Savings (Highlight) */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-6 text-center shadow-xl shadow-primary/10 transition-all ring-1 ring-primary/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
                            <div className="mb-4 flex justify-center text-primary relative z-10">
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm ring-1 ring-primary/20">
                                    <TrendingDown className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <p className="relative z-10 text-xs font-bold uppercase tracking-wider text-primary">Économie Estimée</p>
                            <div className="relative z-10 mt-2 font-heading text-4xl font-bold text-gradient-solar">
                                <Counter value={estimatedSavings} prefix="+ " suffix=" €" />
                            </div>
                            <p className="relative z-10 mt-1 text-xs font-medium text-primary/80">d'économies / an</p>
                        </motion.div>

                        {/* Card 3: ROI */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative overflow-hidden rounded-2xl border border-input bg-background/50 p-6 text-center shadow-lg transition-all"
                        >
                            <div className="mb-4 flex justify-center text-muted-foreground/60">
                                <div className="p-3 bg-muted rounded-2xl">
                                    <Clock className="h-6 w-6 text-eco-green" />
                                </div>
                            </div>
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Retour Investissement</p>
                            <div className="mt-2 font-heading text-3xl font-bold text-eco-green">
                                ~{roi} ans
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">Amortissement rapide</p>
                        </motion.div>
                    </div>

                    {/* CTA Footer */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
                        <p className="max-w-md text-sm text-muted-foreground">
                            Ces chiffres sont une estimation. Pour une étude précise et personnalisée de votre toiture, contactez nos experts.
                        </p>
                        <Button variant="solar" size="lg" className="rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300" asChild>
                            <Link to="/contact">
                                Obtenir mon étude détaillée <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default SavingsSimulator;
