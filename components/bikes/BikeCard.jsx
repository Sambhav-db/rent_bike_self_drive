"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BikeModal from "./BikeModal";
import Image from "next/image";

export default function BikeCard({ bike }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-[30px] overflow-hidden border border-gray-100 card-shadow h-[510px] flex flex-col"
      >
        <div className="relative h-[240px] w-full overflow-hidden">
          <Image
            src={bike.image} 
            alt={bike.name}
            fill
            className="object-cover" 
          />

          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {bike.badge}
          </span>
        </div>

        <div className="flex-1 p-6 flex-col">
          <h3 className="text-xl font-bold mb-3">{bike.name}</h3>

          <div className="flex items-center justify-between mb-5">
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
              {bike.category}
            </span>

            <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs">
              {bike.fuelType}
            </span>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Mileage</span>
              <span className="font-medium">{bike.mileage}</span>
            </div>

            <div className="flex justify-between">
              <span>Deposit</span>
              <span className="font-medium">₹{bike.deposit}</span>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <div className="mb-5">
              <h4 className="text-3xl font-bold text-orange-500">
                ₹{bike.price}
                <span className="text-base text-gray-500 font-medium">
                  /day
                </span>
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/919644991724"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn text-center text-sm"
              >
                Book Now
              </a>

              <button
                onClick={() => setOpen(true)}
                className="secondary-btn text-sm"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <BikeModal bike={bike} open={open} setOpen={setOpen} />
    </>
  );
}
