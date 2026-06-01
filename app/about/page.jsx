import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutMissionVision from "./AboutMIssionVission";   
import AboutCTASection from "./AboutCTASection";

export const metadata = {
  title:
    "About RentBike Ujjain | Bike & Scooty Rental Service In Ujjain",

  description:
    "Learn about RentBike Ujjain, a trusted provider of bike, scooty and self-drive vehicle rentals for Mahakal Darshan, Omkareshwar trips and local sightseeing.",

  keywords: [
    "Bike Rental Ujjain",
    "Scooty Rental Ujjain",
    "Mahakal Bike Rental",
    "Self Drive Bike Ujjain",
    "Omkareshwar Bike Rental",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-24 md:pt-28">
        <AboutHero />
        <AboutStats />
        <AboutMissionVision />  
        <AboutCTASection />
      </main>

      <Footer />
    </>
  );
}