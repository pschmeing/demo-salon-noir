import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";
import heroImage from "@/assets/hero-salon.jpg";

interface HeroProps {
  onBookingClick: () => void;
}

export const Hero = ({ onBookingClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Hair Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-gold tracking-[0.4em] uppercase text-xs mb-8">
              Friseursalon in Burlo
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.15}>
            <h1 className="heading-display text-foreground mb-8 leading-[1.1]">
              Wo Kunst auf
              <span className="block text-gradient-gold italic mt-2">Handwerk</span>
              trifft
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground mb-14 max-w-lg leading-relaxed">
              Erlebe exklusive Haarpflege in einer Atmosphäre, die Eleganz und 
              Kreativität vereint. Unser Team kreiert Looks, die deine 
              Persönlichkeit unterstreichen.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button variant="gold" size="xl" onClick={onBookingClick}>
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
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gold to-transparent" />
      </div>
    </section>
  );
};
