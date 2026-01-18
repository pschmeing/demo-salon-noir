import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Instagram, Award, Heart } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  image: string;
  quote: string;
  bio: string;
  experience: string;
  instagram?: string;
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
  onBooking: () => void;
}

export const TeamMemberModal = ({ member, isOpen, onClose, onBooking }: TeamMemberModalProps) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] bg-card border-border p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[3/4] md:aspect-auto">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20" />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col">
            <div className="mb-6">
              <p className="text-gold text-sm tracking-widest uppercase mb-2">
                {member.role}
              </p>
              <h2 className="font-display text-3xl text-foreground mb-4">
                {member.name}
              </h2>
              <p className="text-muted-foreground italic font-display text-lg mb-6">
                "{member.quote}"
              </p>
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium">Spezialisierung</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground font-medium">Erfahrung</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                {member.bio}
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-8">
              <Button variant="gold" size="lg" onClick={onBooking}>
                Termin bei {member.name.split(" ")[0]}
              </Button>
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Auf Instagram folgen
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
