"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import BikeCard from "@/components/bikes/BikeCard";

import { bikes } from "@/data/bikes";

export default function BikesPage() {
  const tabs = ["All", "Scooty", "Bike", "Premium", "Car"];

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? bikes
      : bikes.filter((bike) => bike.category === active);

  return (
    <>
      <Header />

      <section className="pt-24 md:pt-64">

        <Container>

          <SectionHeading
            subtitle="Our Fleet"
            title="Explore Our Rental Vehicles"
          />

          <div className="flex gap-3 overflow-x-auto pb-5 mb-10 scrollbar-hide">

            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-5 py-3 rounded-full whitespace-nowrap transition duration-300 ease-in-out text-sm font-medium ${
                  active === tab
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.map((bike) => (
                <motion.div
                  key={bike.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <BikeCard key={bike.id} bike={bike} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </Container>

      </section>

      <Footer />
    </>
  );
}