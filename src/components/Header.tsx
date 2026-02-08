import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";

const navLinks = [
  { to: "/", label: "Accueil", isHome: true },
  { to: "/panneaux-solaires", label: "Panneaux solaires" },
  { to: "/realisations", label: "Nos réalisations" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-transparent py-2"
        }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="SolarFlow Energy" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                link.isHome
                  ? "flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-accent/50 hover:border-primary/20"
                  : `px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.to ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`
              }
            >
              {link.isHome && <Home className="h-4 w-4" />}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <Button
            asChild
            className="rounded-full bg-black px-6 py-5 text-sm font-medium text-white shadow-lg shadow-black/10 transition-all hover:bg-gray-800 hover:scale-105"
          >
            <Link to="/contact">Devis gratuit</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-black text-white hover:bg-gray-800"
          >
            <Link to="/contact">Devis</Link>
          </Button>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full border-t border-border bg-background shadow-lg lg:hidden">
          <nav className="container mx-auto flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent ${location.pathname === link.to ? "bg-accent text-foreground" : "text-muted-foreground"
                  }`}
              >
                {link.isHome && <Home className="h-4 w-4" />}
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <Button asChild className="w-full rounded-full bg-black text-white hover:bg-gray-800">
                <Link to="/contact" onClick={() => setOpen(false)}>Demander un devis</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
