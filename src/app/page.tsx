import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutGuide from "@/components/AboutGuide";
import Advantages from "@/components/Advantages";
import TourCards from "@/components/TourCards";
import CarTours from "@/components/CarTours";
import Pricing from "@/components/Pricing";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutGuide />
      <Advantages />
      <TourCards />
      <CarTours />
      <Pricing />
      <Contacts />
      <Footer />
      <FloatingChat />
    </main>
  );
}
