import { Scissors, Sparkles, Droplets, Crown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    category: "Schnitt & Styling",
    icon: Scissors,
    items: [
      { name: "Damenhaarschnitt", price: "ab 65€", duration: "60 Min." },
      { name: "Herrenhaarschnitt", price: "ab 45€", duration: "45 Min." },
      { name: "Kinderhaarschnitt", price: "ab 30€", duration: "30 Min." },
      { name: "Waschen & Föhnen", price: "ab 35€", duration: "45 Min." },
      { name: "Festtagsstyling", price: "ab 85€", duration: "90 Min." },
    ],
  },
  {
    category: "Coloration",
    icon: Sparkles,
    items: [
      { name: "Ansatzfarbe", price: "ab 55€", duration: "60 Min." },
      { name: "Komplettfarbe", price: "ab 85€", duration: "90 Min." },
      { name: "Balayage", price: "ab 150€", duration: "180 Min." },
      { name: "Highlights / Strähnen", price: "ab 95€", duration: "120 Min." },
      { name: "Glossing Treatment", price: "ab 45€", duration: "30 Min." },
    ],
  },
  {
    category: "Pflege & Wellness",
    icon: Droplets,
    items: [
      { name: "Intensive Haarkur", price: "ab 25€", duration: "20 Min." },
      { name: "Olaplex Treatment", price: "ab 45€", duration: "30 Min." },
      { name: "Kopfhautbehandlung", price: "ab 35€", duration: "30 Min." },
      { name: "Keratin Glättung", price: "ab 250€", duration: "180 Min." },
    ],
  },
  {
    category: "Premium Services",
    icon: Crown,
    items: [
      { name: "Braut-Paket komplett", price: "ab 350€", duration: "240 Min." },
      { name: "VIP Rundum-Verwöhnung", price: "ab 180€", duration: "150 Min." },
      { name: "Haarverlängerung", price: "auf Anfrage", duration: "" },
    ],
  },
];

export const Services = () => {
  return (
    <section id="leistungen" className="py-32 md:py-44 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-gold tracking-[0.4em] uppercase text-xs mb-6">
            Unsere Expertise
          </p>
          <h2 className="heading-section text-foreground">
            Leistungen & Preise
          </h2>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.category}
              delay={index * 0.1}
            >
              <div className="card-elegant group hover:border-gold/30 transition-all duration-500 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-5 mb-10 pb-6 border-b border-border">
                  <div className="w-14 h-14 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    {service.category}
                  </h3>
                </div>

                {/* Service Items */}
                <div className="space-y-5">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-4 border-b border-border/30 last:border-0"
                    >
                      <div>
                        <p className="text-foreground font-medium text-lg">{item.name}</p>
                        {item.duration && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.duration}
                          </p>
                        )}
                      </div>
                      <p className="text-gold font-display text-xl">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-20" delay={0.4}>
          <p className="text-muted-foreground text-sm">
            Alle Preise inklusive Beratung. Aufpreis bei überdurchschnittlicher Haarlänge möglich.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
