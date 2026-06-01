import {
  Bike,
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
  ArrowRight,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Link from "next/link";

export default function WhyChooseUs() {
  const items = [
    {
      icon: Bike,
      title: "Premium Vehicles",
      description:
        "Well-maintained bikes, scooties and cars for every journey.",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Trusted",
      description: "Verified vehicles with reliable service and support.",
    },
    {
      icon: Clock3,
      title: "Quick Delivery",
      description:
        "Get your ride delivered quickly at your preferred location.",
    },
    {
      icon: BadgeIndianRupee,
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges.",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          subtitle="Why Choose Us"
          title="Why Travelers Prefer RentBike Ujjain"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]"
              >
                <span className="absolute top-5 right-5 text-5xl font-black text-orange-50">
                  0{i + 1}
                </span>
                {/* Top Gradient */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-400 to-orange-600" />

                {/* Background Glow */}
                <div className="absolute -right-10 -top-10 w-28 h-28 bg-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-200 mb-6">
                    <Icon
                      size={30}
                      className="text-white transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
