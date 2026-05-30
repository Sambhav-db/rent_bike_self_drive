"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  Fuel,
  ShieldCheck,
  IndianRupee,
} from "lucide-react";

import BikeModal from "./BikeModal";

export default function BikeCard({ bike }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-[30px] overflow-hidden border border-gray-100 card-shadow"
      >

        <div className="overflow-hidden">
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-[220px] object-cover hover:scale-110 transition duration-700"
          />
        </div>

        <div className="p-5">

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold">
              {bike.name}
            </h3>

            <span className="text-xs bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
              {bike.category}
            </span>
          </div>

          <div className="space-y-3 text-sm text-gray-600 mb-5">

            <div className="flex items-center gap-2">
              <Fuel size={16} className="text-orange-500" />
              {bike.mileage}
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-orange-500" />
              ₹{bike.deposit} Deposit
            </div>

            <div className="flex items-center gap-2 font-semibold text-black">
              <IndianRupee size={16} className="text-orange-500" />
              ₹{bike.price}/day
            </div>

          </div>

          <div className="flex gap-3">

            <a
              href="https://wa.me/919999999999"
              className="primary-btn flex-1 text-center text-sm"
            >
              WhatsApp
            </a>

            <button
              onClick={() => setOpen(true)}
              className="secondary-btn flex-1 text-sm"
            >
              View
            </button>

          </div>

        </div>

      </motion.div>

      <BikeModal
        bike={bike}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}