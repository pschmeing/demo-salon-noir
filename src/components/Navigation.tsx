import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Team", href: "#team" },
  { label: "Impressionen", href: "#impressionen" },
  { label: "Kontakt", href: "#kontakt" },
];

interface NavigationProps {
  onBookingClick: () => void;
}

export const Navigation = ({ onBookingClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-2xl tracking-wider text-foreground">
            <span className="text-gradient-gold">ATELIER</span>
            <span className="font-light ml-2">NOIR</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <Button variant="gold" size="sm" onClick={onBookingClick}>
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in">
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="gold"
                size="default"
                onClick={() => {
                  setIsOpen(false);
                  onBookingClick();
                }}
                className="mt-4"
              >
                Termin buchen
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
