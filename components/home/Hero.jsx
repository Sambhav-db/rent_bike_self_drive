"use client";

import { motion } from "framer-motion";

import Container from "../common/Container";
import Button from "../common/Button";
import SearchBox from "./SearchBox";

import { Star, ShieldCheck, BadgeIndianRupee } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden pt-14 md:pt-20 pb-10">
        <div className="orange-glow top-0 left-0" />

        <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-orange-500/10 blur-[140px] rounded-full" />
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-orange-500 font-semibold mb-4 text-sm md:text-base">
                Explore Ujjain With Freedom
              </p>

              <h1 className="text-[42px] md:text-7xl font-black leading-[1.1] mb-5 tracking-tight">
                Premium Bike, Scooty & Car Rentals In Ujjain
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
                Affordable self drive rentals for Mahakal Darshan, Omkareshwar
                trips, local rides and weekend travel.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button>Book On WhatsApp</Button>

                <Button variant="secondary">Explore Fleet</Button>
              </div>

              <SearchBox />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* <img
                src="/bikes/hero-bike.png"
                alt="Bike Rental Ujjain"
                className="w-full object-contain"
              /> */}
              <div className="relative flex justify-center">
                <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] bg-orange-400/20 blur-[100px] rounded-full" />

                <img
                  src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop"
                  alt="Bike Rental Ujjain"
                  className="relative z-10 w-full max-w-2xl rounded-[40px] object-cover shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-0">
        <Container>
          <div className="bg-white rounded-3xl border border-gray-100 card-shadow p-5 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <Star className="text-orange-500" />
              </div>

              <div>
                <h3 className="font-bold text-lg">5.0 Google Rating</h3>

                <p className="text-sm text-gray-500">Trusted by travelers</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <ShieldCheck className="text-orange-500" />
              </div>

              <div>
                <h3 className="font-bold text-lg">₹1000 Refundable</h3>

                <p className="text-sm text-gray-500">Security deposit</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <BadgeIndianRupee className="text-orange-500" />
              </div>

              <div>
                <h3 className="font-bold text-lg">Starting ₹399/day</h3>

                <p className="text-sm text-gray-500">Affordable rentals</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
