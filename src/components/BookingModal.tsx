import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Calendar,
  ChevronRight,
  Phone,
  Mail,
  Scissors,
  Sparkles,
  Crown,
  MessageSquare,
  ArrowLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type BookingStep = "services" | "contact";

const SERVICES = [
  {
    id: "cut",
    title: "Schnitt & Styling",
    description: "Präzise Schnitte und exklusives Styling für Ihren individuellen Look.",
    icon: Scissors,
    tag: "Klassisch"
  },
  {
    id: "color",
    title: "Farbe & Balayage",
    description: "Brillante Farben und sanfte Übergänge durch moderne Techniken.",
    icon: Sparkles,
    tag: "Premium"
  },
  {
    id: "treatment",
    title: "Pflege-Rituale",
    description: "Tiefenwirksame Pflege für gesundes, glänzendes Haar.",
    icon: Crown,
    tag: "Exklusiv"
  }
];

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState<BookingStep>("services");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    setStep("contact");
  };

  const handleBack = () => {
    setStep("services");
    setSelectedService(null);
  };

  const closeAndReset = () => {
    onClose();
    setTimeout(() => {
      setStep("services");
      setSelectedService(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeAndReset}>
      <DialogContent className="sm:max-w-[700px] md:max-w-[900px] min-h-[500px] bg-card border-border p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-6 pb-4 border-b border-border flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-3">
            {step === "contact" && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                className="hover:bg-gold/10 hover:text-gold"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-gold" />
            </div>
            <div>
              <DialogTitle className="font-display text-2xl text-foreground">
                {step === "services" ? "Wähle dein Erlebnis" : "Terminanfrage"}
              </DialogTitle>
              {step === "contact" && selectedService && (
                <p className="text-sm text-gold">
                  {SERVICES.find(s => s.id === selectedService)?.title}
                </p>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {step === "services" ? (
            <div className="p-8 grid md:grid-cols-3 gap-6">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="group relative flex flex-col items-start p-6 text-left border border-border hover:border-gold/50 bg-charcoal/50 hover:bg-gold/5 transition-all duration-500 rounded-sm overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transform translate-x-1/4 -translate-y-1/4 transition-all duration-500 group-hover:scale-150">
                    <service.icon className="w-24 h-24 text-gold" />
                  </div>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4 border-b border-gold/30 pb-1">
                    {service.tag}
                  </span>

                  <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center text-xs font-medium text-gold gap-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    AUSWÄHLEN <ChevronRight className="w-3 h-3" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 flex flex-col items-center max-w-2xl mx-auto text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-8">
                <MessageSquare className="w-8 h-8 text-gold" />
              </div>

              <h3 className="font-display text-3xl text-foreground mb-4">
                Lass uns deinen Traumlook verwirklichen
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-12">
                Um dir die beste Beratung und den perfekten Termin zu garantieren, kontaktiere uns bitte direkt. Unser Team freut sich auf dich.
              </p>

              <div className="grid gap-6 w-full sm:grid-cols-2">
                <a
                  href="tel:+492862123456"
                  className="flex flex-col items-center gap-4 p-8 rounded-sm border border-gold/30 hover:border-gold hover:bg-gold/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Rufen Sie uns an</p>
                    <p className="text-lg font-medium text-foreground">+49 2862 123 456</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@ateliernoir.de"
                  className="flex flex-col items-center gap-4 p-8 rounded-sm border border-border hover:border-gold/30 hover:bg-gold/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-full bg-border/50 flex items-center justify-center text-foreground group-hover:text-gold group-hover:bg-gold/10 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Schreiben Sie uns</p>
                    <p className="text-lg font-medium text-foreground">hello@ateliernoir.de</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-border w-full">
                <p className="text-sm text-muted-foreground italic">
                  "Exzellenz ist unser Standard. Dein Stil unsere Leidenschaft."
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
