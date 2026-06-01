"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

import Container from "../common/Container";
import Button from "../common/Button";

import {
  Star,
  ShieldCheck,
  BadgeIndianRupee,
  ZapIcon,
} from "lucide-react";

const vehicleImages = [
  {
    type: "Bike",
    image:
      "/bikes/bike-hero.png",
  },
  {
    type: "Scooty",
    image:
      "/bikes/sc-hero.png",
  },
  {
    type: "Car",
    image:
      "/bikes/car-hero2.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % vehicleImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden pt-24 md:pt-28 pb-12">
        {/* Background Effects */}

        <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-orange-400/10 blur-[150px] rounded-full" />

        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 mb-6">
                Self Drive Rentals In Ujjain
              </span>

              <h1 className="text-[42px] md:text-[50px] font-bold leading-[1.05] tracking-[-0.03em] mb-6 text-gray-900">
                Rent Premium{" "}
                <span className="text-orange-500">
                  <Typewriter
                    words={["Bikes", "Scooties", "Cars"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={90}
                    deleteSpeed={60}
                    delaySpeed={1800}
                  />
                </span>
                <br />
                For Your Next Journey In{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Ujjain
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
                Book affordable self-drive bike, scooty and car rentals in
                Ujjain for Mahakal Darshan, Omkareshwar trips, local sightseeing,
                business travel and weekend adventures. Well-maintained vehicles,
                transparent pricing and quick booking process.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button>
                  Book On WhatsApp
                </Button>

                <Button variant="secondary">
                  Explore Fleet
                </Button>
              </div>
            </motion.div>

            {/* RIGHT IMAGE SLIDER */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-orange-400/20 blur-[120px] rounded-full" />

              <div className="relative h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={vehicleImages[current].image}
                    src={vehicleImages[current].image}
                    alt={vehicleImages[current].type}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.9,
                    }}
                    className="absolute inset-0 h-full w-full object-cover rounded-[36px] "
                  />
                </AnimatePresence>

                <div className="hidden absolute bottom-6 left-6 z-20 rounded-2xl bg-white/90 backdrop-blur px-5 py-3 shadow-lg">
                  <p className="text-sm text-gray-500">
                    Currently Showing
                  </p>

                  <h3 className="font-bold text-lg text-orange-500">
                    {vehicleImages[current].type}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>


      {/* THIN INFO STRIP */}
         <Container className="mt-12">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-4">
            <div className="flex flex-wrap justify-between gap-6">
              <div className="flex items-center gap-3">
                <Star
                  size={18}
                  className="text-orange-500"
                />
                <span className="font-medium text-gray-700">
                  5.0 Google Rating
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={18}
                  className="text-orange-500"
                />
                <span className="font-medium text-gray-700">
                  ₹1000 Refundable Deposit
                </span>
              </div>

              <div className="flex items-center gap-3">
                <BadgeIndianRupee
                  size={18}
                  className="text-orange-500"
                />
                <span className="font-medium text-gray-700">
                  Starting From ₹399 / Day
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ZapIcon size={18} className="text-orange-500" />
                <span className="font-medium text-gray-700">
                  Instant Booking Available
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </>
  );
}