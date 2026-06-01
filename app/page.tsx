import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedBikes from "@/components/home/FeaturedBikes";
import AboutSection from "@/components/home/AboutSection";
import PopularRoutes from "@/components/home/PopularRoutes";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reviews from "@/components/home/Reviews";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import WhatsAppFloat from "@/components/common/WhatsAppFloat";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedBikes />
      <AboutSection />
      <PopularRoutes />
      <WhyChooseUs />
      <Reviews />
      <CTA />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}