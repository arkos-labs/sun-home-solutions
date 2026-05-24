import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "ACCUEIL" },
  { to: "/panneaux-solaires", label: "PANNEAUX SOLAIRES" },
  { to: "/realisations", label: "RÉALISATIONS" },
  { to: "/contact", label: "CONTACT" },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="SolarPro" className="h-16 lg:h-20 w-auto object-contain py-2" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <div key={link.to} className="flex items-center gap-6">
              <Link
                to={link.to}
                className={`text-sm font-bold tracking-widest transition-colors hover:text-[#FFD100] ${
                  location.pathname === link.to ? "text-[#0F172A]" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="text-gray-300 font-bold">•</span>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <Link to="/contact" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD100] text-[#0F172A] transition-transform group-hover:scale-110">
              <Phone className="h-5 w-5" />
            </div>
            <span className="text-sm font-bold tracking-widest text-[#0F172A]">DEVIS</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link to="/contact" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD100] text-[#0F172A]">
              <Phone className="h-4 w-4" />
            </div>
          </Link>
          <button onClick={() => setOpen(!open)} className="p-2 text-[#0F172A]">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full border-t border-gray-200 bg-white shadow-lg lg:hidden">
          <nav className="container mx-auto flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`py-4 text-center text-sm font-bold tracking-widest border-b border-gray-100 transition-colors ${
                  location.pathname === link.to ? "text-[#FFD100]" : "text-[#0F172A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex justify-center pt-4">
              <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD100] text-[#0F172A]">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold tracking-widest text-[#0F172A]">DEMANDER UN DEVIS</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
