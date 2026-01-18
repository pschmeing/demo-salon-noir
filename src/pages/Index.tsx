import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onBookingClick={openBooking} />
      <Hero onBookingClick={openBooking} />
      <Services />
      <Team onBookingClick={openBooking} />
      <Gallery />
      <Contact onBookingClick={openBooking} />
      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
};

export default Index;
