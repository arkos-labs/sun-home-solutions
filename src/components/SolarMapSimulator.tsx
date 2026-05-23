
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, Shield, ArrowRight, Loader2, Gauge, Sun, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolarMapSimulator = () => {
    const [address, setAddress] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [step, setStep] = useState<"input" | "map" | "results">("input");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!address) return;
        setIsAnalyzing(true);
        setStep("map");

        // Simulate advanced data processing
        setTimeout(() => {
            setIsAnalyzing(false);
            setStep("results");
        }, 4500);
    };

    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
                        >
                            Analyse de votre potentiel solaire
                        </motion.h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Utilisez notre Intelligence Artificielle pour analyser l'ensoleillement exact de votre maison en quelques secondes.
                        </p>
                    </div>

                    <div className="relative min-h-[550px] rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <AnimatePresence mode="wait">
                            {step === "input" && (
                                <motion.div
                                    key="input"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                                >
                                    {/* Abstract Decoration */}
                                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.15)_0,transparent_70%)]" />
                                    </div>

                                    <div className="relative z-10 w-full max-w-2xl space-y-10">
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-semibold">Estimation rapide de votre projet</h3>
                                            <p className="text-slate-500">Indiquez simplement votre adresse pour lancer une estimation.</p>
                                        </div>

                                        <form onSubmit={handleSearch} className="relative group">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-[2rem] blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
                                            <div className="relative flex flex-col sm:flex-row items-center bg-slate-900/80 border border-white/10 rounded-[2rem] p-2 pr-2 sm:pr-3 gap-2">
                                                <div className="flex flex-1 items-center w-full px-4">
                                                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                                                    <input
                                                        type="text"
                                                        placeholder="Votre adresse"
                                                        className="flex-1 bg-transparent border-none focus:ring-0 text-white px-4 py-4 placeholder:text-slate-600 text-lg font-medium"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                    />
                                                </div>
                                                <Button type="submit" size="lg" className="w-full sm:w-auto rounded-[1.5rem] px-10 py-7 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95">
                                                    Lancer l’estimation
                                                </Button>
                                            </div>
                                        </form>

                                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
                                            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Données protégées</span>
                                            <span className="flex items-center gap-2"><Sun className="h-4 w-4 text-primary" /> Étude personnalisée</span>
                                            <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Réponse rapide</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === "map" && (
                                <motion.div
                                    key="map"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0"
                                >
                                    {/* The high-end satellite image generated */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: "url('/solar_heatmap_tech_bg_1772318553132.png')" }}
                                    />
                                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />

                                    {/* Scanner Effect */}
                                    <motion.div
                                        initial={{ top: "-5%" }}
                                        animate={{ top: "105%" }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_rgba(45,212,191,1)] z-30"
                                    />

                                    {/* Floating Analysis Points */}
                                    <div className="absolute inset-0 pointer-events-none z-20">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                                className="absolute w-8 h-8 border border-primary/40 rounded-full flex items-center justify-center"
                                                style={{
                                                    top: `${20 + i * 12}%`,
                                                    left: `${15 + i * 15}%`
                                                }}
                                            >
                                                <div className="w-1 h-1 bg-primary rounded-full animate-ping" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* HUD Processing Center */}
                                    <div className="absolute inset-0 flex items-center justify-center z-40">
                                        <div className="bg-slate-900/90 backdrop-blur-xl border border-white/20 p-10 rounded-[2rem] text-center shadow-2xl max-w-sm">
                                            <div className="relative mb-6">
                                                <Loader2 className="h-16 w-16 text-primary animate-spin mx-auto opacity-20" />
                                                <Zap className="h-8 w-8 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                            </div>
                                            <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">Analyse Spectrale en cours</h4>
                                            <p className="text-slate-400 text-sm font-medium">
                                                Calcul de l'ombrage dynamique pour <br /> <span className="text-white italic">{address}</span>
                                            </p>

                                            <div className="mt-8 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 4 }}
                                                    className="h-full bg-primary shadow-[0_0_10px_rgba(45,212,191,0.5)]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === "results" && (
                                <motion.div
                                    key="results"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="absolute inset-0 p-8 lg:p-16 flex flex-col md:flex-row gap-12 items-center"
                                >
                                    <div className="flex-1 space-y-10 w-full">
                                        <motion.div variants={itemVariants}>
                                            <div className="inline-block px-3 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-green-500/20">
                                                Rapport de Performance A+
                                            </div>
                                            <h3 className="text-4xl font-bold mb-4 tracking-tight">Analyse Exceptionnelle.</h3>
                                            <p className="text-slate-400 text-lg">
                                                Votre toiture à <span className="text-white font-medium">{address}</span> est idéale pour une installation haute-performance.
                                            </p>
                                        </motion.div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { label: "Production annuelle", val: "5 420 kWh", sub: "Potentiel max", icon: Zap, color: "text-primary" },
                                                { label: "Surface utile", val: "32 m²", sub: "Pente optimale", icon: MapPin, color: "text-blue-400" },
                                                { label: "Economie 25 ans", val: "18 400 €", sub: "Aides incluses", icon: TrendingUp, color: "text-green-400" },
                                                { label: "Indice UV An", val: "2 140 h", sub: "Flux direct", icon: Sun, color: "text-yellow-400" }
                                            ].map((stat, i) => (
                                                <motion.div
                                                    key={i}
                                                    variants={itemVariants}
                                                    className="group bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl transition-all duration-300"
                                                >
                                                    <stat.icon className={`h-5 w-5 ${stat.color} mb-3`} />
                                                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">{stat.label}</p>
                                                    <p className="text-2xl font-bold">{stat.val}</p>
                                                    <p className="text-[10px] text-slate-600 mt-1">{stat.sub}</p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <motion.div variants={itemVariants} className="pt-4">
                                            <Button className="w-full py-8 text-xl font-bold rounded-[1.5rem] group shadow-2xl shadow-primary/20 bg-gradient-to-r from-primary to-blue-600 hover:scale-[1.01] transition-transform" size="lg">
                                                Telecharger mon étude complète (PDF)
                                                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                            <p className="text-center text-slate-500 text-xs mt-4 italic">Document technique gratuit • Sans engagement</p>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        variants={itemVariants}
                                        className="w-full md:w-[40%] aspect-[4/5] relative"
                                    >
                                        {/* Mock 3D Blueprint/Isometric view */}
                                        <div className="absolute inset-0 rounded-[2.5rem] border border-white/20 overflow-hidden shadow-2xl">
                                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop')] bg-cover opacity-40 mix-blend-overlay" />

                                            {/* Glow overlay */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.2)_0%,transparent_70%)]" />

                                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                                                        <MapPin className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-bold text-slate-400 leading-tight">Inclinaison idéale</p>
                                                        <p className="text-lg font-bold">35° Sud-Ouest</p>
                                                    </div>
                                                </div>
                                                <p className="text-[10px] text-slate-500 leading-tight">
                                                    Cette orientation maximise la production lors du pic de consommation du soir.
                                                </p>
                                            </div>

                                            {/* Technical overlay grid */}
                                            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolarMapSimulator;
