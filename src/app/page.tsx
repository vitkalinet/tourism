import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TourCards from "@/components/TourCards";
import BookingForm from "@/components/BookingForm";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <TourCards />
      <AboutSection />
      <BookingForm />
      <Footer />
    </main>
  );
}