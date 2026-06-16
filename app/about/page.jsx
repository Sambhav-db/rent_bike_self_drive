import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";import AboutHero from "./AboutHero";
import AboutStats from "./AboutStats";
import AboutMissionVision from "./AboutMIssionVission";   
import AboutCTASection from "./AboutCTASection";

export const metadata = {
  title:
    "About Rent Bike Self Drive Ujjain | Bike, Scooty & Car Rental Service",

  description:
    "Rent Bike Self Drive is a trusted bike, scooty and self-drive car rental service in Ujjain. Affordable rentals for Mahakal Darshan, Omkareshwar, Baglamukhi Temple and local sightseeing with pickup and drop facility.",

  keywords: [
    "bike rental ujjain",
    "scooty rental ujjain",
    "self drive car rental ujjain",
    "rent bike self drive ujjain",
    "mahakal bike rental",
    "bike on rent near mahakal",
    "scooty on rent in ujjain",
    "omkareshwar bike rental",
    "baglamukhi temple bike rental",
    "ujjain bike hire",
    "activa on rent ujjain",
    "car rental ujjain",
    "tourist bike rental ujjain",
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