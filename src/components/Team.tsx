import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const team = [
  {
    name: "Sophie Müller",
    role: "Inhaberin & Creative Director",
    specialty: "Balayage, Brautstyling",
    image: team1,
    quote: "Jedes Haar erzählt eine Geschichte – ich helfe dir, deine zu schreiben.",
  },
  {
    name: "Marco Weber",
    role: "Senior Stylist",
    specialty: "Herrenschnitte, Barber Art",
    image: team2,
    quote: "Präzision und Kreativität sind keine Gegensätze.",
  },
  {
    name: "Lina Chen",
    role: "Color Specialist",
    specialty: "Farbkorrekturen, Vivid Colors",
    image: team3,
    quote: "Farbe ist meine Sprache – lass mich deine Palette entdecken.",
  },
];

export const Team = () => {
  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">
            Die Künstler
          </p>
          <h2 className="heading-section text-foreground">Unser Team</h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-foreground text-sm italic font-display">
                    "{member.quote}"
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gold text-sm tracking-wide uppercase">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  Spezialisiert auf: {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
