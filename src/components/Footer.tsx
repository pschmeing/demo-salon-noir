export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-xl tracking-wider text-foreground">
            <span className="text-gradient-gold">ATELIER</span>
            <span className="font-light ml-2">NOIR</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors">
              Impressum
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-gold transition-colors">
              Datenschutz
            </a>
            <span className="text-border">|</span>
            <a href="#" className="hover:text-gold transition-colors">
              AGB
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Atelier Noir. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
