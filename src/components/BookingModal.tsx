import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { X, Calendar } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] md:max-w-[800px] h-[80vh] bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <DialogTitle className="font-display text-2xl text-foreground">
                Termin buchen
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 p-6 overflow-auto">
          {/* Placeholder for Zeeg embed - replace with actual embed code */}
          <div className="h-full min-h-[400px] bg-charcoal rounded-sm flex flex-col items-center justify-center text-center p-8">
            <Calendar className="w-16 h-16 text-gold mb-6" />
            <h3 className="font-display text-2xl text-foreground mb-3">
              Online Terminbuchung
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md">
              Wähle deinen Wunschtermin bequem online. 
              Du wirst zu unserem Buchungssystem weitergeleitet.
            </p>
            <Button
              variant="gold"
              size="lg"
              onClick={() => window.open("https://zeeg.me", "_blank")}
            >
              Zu Zeeg Buchung
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Oder ruf uns an: +49 30 123 456 789
            </p>
          </div>
          
          {/* When you have actual Zeeg embed, use this instead:
          <iframe
            src="https://zeeg.me/your-salon-id"
            className="w-full h-full min-h-[500px] border-0 rounded-sm"
            title="Terminbuchung"
          />
          */}
        </div>
      </DialogContent>
    </Dialog>
  );
};
