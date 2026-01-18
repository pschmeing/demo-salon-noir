import { Button } from "./ui/button";
import heroImage from "@/assets/hero-salon.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in-up">
            Premium Hair Studio
          </p>
          
          <h1 className="heading-display text-foreground mb-6 animate-fade-in-up animation-delay-200">
            Wo Kunst auf
            <span className="block text-gradient-gold italic">Handwerk</span>
            trifft
          </h1>
          
          <p className="text-body text-muted-foreground mb-10 max-w-md animate-fade-in-up animation-delay-400">
            Erlebe exklusive Haarpflege in einer Atmosphäre, die Eleganz und 
            Kreativität vereint. Unser Team kreiert Looks, die deine 
            Persönlichkeit unterstreichen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Button
              variant="gold"
              size="xl"
              onClick={() => window.open("https://zeeg.me", "_blank")}
            >
              Jetzt Termin buchen
            </Button>
            <Button
              variant="elegant"
              size="xl"
              onClick={() => {
                document.querySelector("#leistungen")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Unsere Leistungen
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  );
};
