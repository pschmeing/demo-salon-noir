import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Calendar } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const bookingUrl = "https://zeeg.me/your-salon-id";

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
          <div className="h-full min-h-[500px] bg-charcoal rounded-sm overflow-hidden">
            <iframe
              src={bookingUrl}
              className="w-full h-full border-0"
              title="Terminbuchung"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Oder ruf uns an: +49 30 123 456 789
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
