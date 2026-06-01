import "./globals.css";
import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/pagination";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "RENT BIKE SELF DRIVE | Bike, Scooty & Self Drive Car Rental In Ujjain",
  
  description:
    "Affordable bike, scooty, and self-drive car rental service in Ujjain for Mahakal Darshan, Omkareshwar, and local travel.",

  keywords: [
    "bike rental in ujjain",
    "scooty on rent in ujjain",
    "self drive car rental ujjain",
    "bike on rent near mahakal",
    "mahakal bike rental",
  ],

  openGraph: {
    title: "RentBike Ujjain",
    description: "Premium bike and scooty rental service in Ujjain.",
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    ],
  },

  icons: {
    icon: "/rentbikeselfdrive.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    
    name: "RentBike Ujjain",
    image: "/logo/main-logo.png",
    
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ujjain",
      addressRegion: "Madhya Pradesh",
      addressCountry: "India",
    },
    
    telephone: "+91XXXXXXXXXX",
    priceRange: "₹399 - ₹2500",
    areaServed: ["Ujjain", "Mahakal", "Omkareshwar"],
  };

  return (
    <html lang="en">
      <body  className={`${inter.variable} ${montserrat.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </body>
    </html>
  );
}
