import { ScrollReveal } from "./ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Styling Result", span: "col-span-2 row-span-2" },
  { src: gallery2, alt: "Salon Tools", span: "col-span-1 row-span-1" },
  { src: gallery3, alt: "Salon Interior", span: "col-span-1 row-span-1" },
  { src: gallery4, alt: "Hair Color Result", span: "col-span-2 row-span-1" },
];

export const Gallery = () => {
  return (
    <section id="impressionen" className="py-32 md:py-44 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-gold tracking-[0.4em] uppercase text-xs mb-6">
            Unsere Arbeit
          </p>
          <h2 className="heading-section text-foreground">Impressionen</h2>
        </ScrollReveal>

        {/* Gallery Grid */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[180px] md:auto-rows-[280px] max-w-6xl mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-sm ${image.span} cursor-pointer`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-colors duration-500 m-5 rounded-sm" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Instagram CTA */}
        <ScrollReveal className="text-center mt-16" delay={0.3}>
          <p className="text-muted-foreground">
            Mehr Inspirationen auf{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-4"
            >
              @ateliernoir
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
