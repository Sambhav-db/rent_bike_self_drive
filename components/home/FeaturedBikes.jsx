"use client";

import { useState } from "react";

import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import BikeCard from "../bikes/BikeCard";

import { bikes } from "@/data/bikes";

export default function FeaturedBikes() {
  const tabs = ["All", "Scooty", "Bike", "Premium", "Car"];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? bikes
      : bikes.filter((bike) => bike.category === active);

  return (
    <section>

      <Container>

        <SectionHeading
          subtitle="Our Fleet"
          title="Choose Your Perfect Ride In Ujjain"
        />

        <div className="flex gap-3 overflow-x-auto pb-4 mb-10 scrollbar-hide">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-3 rounded-full whitespace-nowrap transition text-sm font-medium ${
                active === tab
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {filtered.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}