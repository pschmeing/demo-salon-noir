import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Team", href: "#team" },
  { label: "Impressionen", href: "#impressionen" },
  { label: "Kontakt", href: "#kontakt" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-2xl tracking-wider text-foreground">
            <span className="text-gradient-gold">ATELIER</span>
            <span className="font-light ml-2">NOIR</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="gold"
              size="sm"
              onClick={() => window.open("https://zeeg.me", "_blank")}
            >
              Termin buchen
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-gold transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="gold"
                size="sm"
                onClick={() => window.open("https://zeeg.me", "_blank")}
                className="mt-2"
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
