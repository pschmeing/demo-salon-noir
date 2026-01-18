import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { TeamMemberModal } from "./TeamMemberModal";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const team = [
  {
    name: "Sophie Müller",
    role: "Inhaberin & Creative Director",
    specialty: "Balayage, Brautstyling, Creative Cuts",
    image: team1,
    quote: "Jedes Haar erzählt eine Geschichte – ich helfe dir, deine zu schreiben.",
    bio: "Mit über 15 Jahren Erfahrung in der Branche hat Sophie ihr Handwerk bei renommierten Salons in Paris und London perfektioniert. Ihre Vision von zeitloser Eleganz prägt die DNA von Atelier Noir.",
    experience: "15+ Jahre | Ausbildung in Paris & London",
    instagram: "https://instagram.com/sophiemueller",
  },
  {
    name: "Marco Weber",
    role: "Senior Stylist",
    specialty: "Herrenschnitte, Barber Art, Fade Cuts",
    image: team2,
    quote: "Präzision und Kreativität sind keine Gegensätze.",
    bio: "Marco verbindet klassische Barber-Techniken mit modernem Styling. Seine Expertise für maskuline Looks und präzise Schnitte macht ihn zum gefragten Experten für den modernen Gentleman.",
    experience: "10+ Jahre | Barber-Meister",
    instagram: "https://instagram.com/marcoweber",
  },
  {
    name: "Lina Chen",
    role: "Color Specialist",
    specialty: "Farbkorrekturen, Vivid Colors, Glossing",
    image: team3,
    quote: "Farbe ist meine Sprache – lass mich deine Palette entdecken.",
    bio: "Als zertifizierte Coloristin mit Spezialisierung auf komplexe Farbkorrekturen und kreative Techniken bringt Lina jede Haarfarbe zum Strahlen. Ihre Arbeit wurde mehrfach in Fachmagazinen veröffentlicht.",
    experience: "8+ Jahre | L'Oréal Colorist Zertifikat",
    instagram: "https://instagram.com/linachen",
  },
  {
    name: "Jasmin Keller",
    role: "Stylist & Texture Artist",
    specialty: "Curls, Naturlocken, Soft Layers",
    image: team4,
    quote: "Struktur bringt Leben in jeden Look.",
    bio: "Jasmin ist spezialisiert auf moderne Texturtechniken und natürliche Locken. Ihr Fokus liegt auf Pflege, Form und Bewegung für Looks, die auch zu Hause funktionieren.",
    experience: "6+ Jahre | Texture & Curl Specialist",
    instagram: "https://instagram.com/jasminkeller",
  },
];

interface TeamProps {
  onBookingClick: () => void;
}

export const Team = ({ onBookingClick }: TeamProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });

  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openMemberModal = (member: typeof team[0]) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <section id="team" className="py-32 md:py-44 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-gold tracking-[0.4em] uppercase text-xs mb-6">
            Die Künstler
          </p>
          <h2 className="heading-section text-foreground">Unser Team</h2>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 md:gap-10">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0"
                  >
                    <div
                      className="group cursor-pointer"
                      onClick={() => openMemberModal(member)}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden mb-8 rounded-sm">
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                          />
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                        
                        {/* Click indicator */}
                        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-foreground text-sm tracking-widest uppercase">
                            Mehr erfahren →
                          </p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="space-y-2 text-center md:text-left">
                        <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-gold transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-gold text-sm tracking-wider uppercase">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={scrollPrev}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Team Member Modal */}
      <TeamMemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBooking={() => {
          setIsModalOpen(false);
          onBookingClick();
        }}
      />
    </section>
  );
};
