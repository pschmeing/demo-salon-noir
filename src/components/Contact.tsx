import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Wir freuen uns auf dich
          </p>
          <h2 className="heading-section text-foreground">Kontakt & Anfahrt</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Adresse</h3>
                <p className="text-muted-foreground">
                  Musterstraße 42<br />
                  10115 Berlin Mitte
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Telefon</h3>
                <a
                  href="tel:+4930123456789"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  +49 30 123 456 789
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">E-Mail</h3>
                <a
                  href="mailto:hello@ateliernoir.de"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  hello@ateliernoir.de
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg text-foreground mb-1">Öffnungszeiten</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Di – Fr: 10:00 – 20:00 Uhr</p>
                  <p>Sa: 09:00 – 18:00 Uhr</p>
                  <p>So & Mo: Geschlossen</p>
                </div>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="pt-4 space-y-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@ateliernoir</span>
              </a>

              <div>
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => window.open("https://zeeg.me", "_blank")}
                >
                  Online Termin buchen
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-charcoal rounded-sm overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.5!2d13.388!3d52.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzEyLjAiTiAxM8KwMjMnMTYuOCJF!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Atelier Noir"
              />
              {/* Map overlay for branding */}
              <div className="absolute inset-0 pointer-events-none border-2 border-gold/20 rounded-sm m-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
