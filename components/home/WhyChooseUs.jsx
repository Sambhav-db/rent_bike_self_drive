import {
  Bike,
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
} from "lucide-react";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function WhyChooseUs() {
  const items = [
    {
      icon: Bike,
      title: "Premium Vehicles",
    },

    {
      icon: ShieldCheck,
      title: "Safe & Trusted",
    },

    {
      icon: Clock3,
      title: "Quick Delivery",
    },

    {
      icon: BadgeIndianRupee,
      title: "Affordable Pricing",
    },
  ];

  return (
    <section>

      <Container>

        <SectionHeading
          subtitle="Why Choose Us"
          title="Why Travelers Prefer RentBike Ujjain"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-[30px] p-8 card-shadow border border-gray-100"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-5">
                  <Icon className="text-orange-500" />
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}
