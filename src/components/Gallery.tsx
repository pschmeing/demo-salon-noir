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
    <section id="impressionen" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Unsere Arbeit
          </p>
          <h2 className="heading-section text-foreground">Impressionen</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.span} cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors duration-500 m-4" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Mehr Inspirationen auf{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              @ateliernoir
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
