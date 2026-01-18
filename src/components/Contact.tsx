import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";

interface ContactProps {
  onBookingClick: () => void;
}

export const Contact = ({ onBookingClick }: ContactProps) => {
  return (
    <section id="kontakt" className="py-32 md:py-44 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-gold tracking-[0.4em] uppercase text-xs mb-6">
            Wir freuen uns auf dich
          </p>
          <h2 className="heading-section text-foreground">Kontakt & Anfahrt</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-10">
              {/* Address */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Adresse</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lagerstraße 2<br />
                    46325 Borken
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Telefon</h3>
                  <a
                    href="tel:+4930123456789"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    +49 30 123 456 789
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">E-Mail</h3>
                  <a
                    href="mailto:hello@ateliernoir.de"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    hello@ateliernoir.de
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">Öffnungszeiten</h3>
                  <div className="text-muted-foreground space-y-1 leading-relaxed">
                    <p>Di – Fr: 10:00 – 20:00 Uhr</p>
                    <p>Sa: 09:00 – 18:00 Uhr</p>
                    <p>So & Mo: Geschlossen</p>
                  </div>
                </div>
              </div>

              {/* Social & CTA */}
              <div className="pt-6 space-y-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@ateliernoir</span>
                </a>

                <div>
                  <Button variant="gold" size="lg" onClick={onBookingClick}>
                    Online Termin buchen
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map Placeholder */}
          <ScrollReveal delay={0.25} direction="right">
            <div className="relative">
              <div className="aspect-square lg:aspect-auto lg:h-full min-h-[450px] bg-charcoal rounded-sm overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps?q=Lagerstra%C3%9Fe%202%2046325%20Borken&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Atelier Noir"
                />
                {/* Map overlay for branding */}
                <div className="absolute inset-0 pointer-events-none border border-gold/20 rounded-sm m-5" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
