"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import BikeCard from "../bikes/BikeCard";

import { bikes } from "@/data/bikes";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function FeaturedBikes() {
  const tabs = ["All", "Scooty", "Bike", "Car", "Premium"];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? bikes : bikes.filter((bike) => bike.category === active);

  const displayedBikes = filtered.slice(0, 6);

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
              className={`px-5 py-3 rounded-full whitespace-nowrap transition duration-300 ease-in-out text-sm font-medium ${
                active === tab ? "bg-orange-500 text-white" : "bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {displayedBikes.map((bike) => (
              <motion.div
                key={bike.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <BikeCard bike={bike} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length > 6 && (
          <div className="flex justify-center mt-12">
            <Link
              href="/bikes"
              className="inline-flex items-center gap-2 px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Vehicles
              <span><ChevronRight size={18} /></span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
