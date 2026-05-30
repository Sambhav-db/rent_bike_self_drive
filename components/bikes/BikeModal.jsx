"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Fuel,
  ShieldCheck,
  IndianRupee,
} from "lucide-react";

export default function BikeModal({
  bike,
  open,
  setOpen,
}) {
  if (!bike) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >

            <div className="bg-white w-full max-w-4xl rounded-[32px] overflow-hidden relative max-h-[90vh] overflow-y-auto">

              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 z-20 bg-white rounded-full p-2 shadow"
              >
                <X />
              </button>

              <div className="grid md:grid-cols-2">

                <div className="h-full">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 md:p-10">

                  <span className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm">
                    {bike.category}
                  </span>

                  <h2 className="text-3xl font-bold mt-5 mb-6">
                    {bike.name}
                  </h2>

                  <div className="space-y-5 text-gray-600 mb-8">

                    <div className="flex items-center gap-3">
                      <Fuel className="text-orange-500" />
                      Mileage: {bike.mileage}
                    </div>

                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-orange-500" />
                      ₹{bike.deposit} Refundable Deposit
                    </div>

                    <div className="flex items-center gap-3 font-semibold text-black">
                      <IndianRupee className="text-orange-500" />
                      ₹{bike.price}/day
                    </div>

                  </div>

                  <div className="bg-gray-50 rounded-3xl p-5 mb-8">
                    <h3 className="font-semibold mb-4">
                      Required Documents
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Aadhar Card</li>
                      <li>• Driving Licence</li>
                      <li>• Refundable Security Deposit</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">

                    <a
                      href="https://wa.me/919999999999"
                      className="primary-btn text-center flex-1"
                    >
                      Book On WhatsApp
                    </a>

                    <a
                      href="tel:+919999999999"
                      className="secondary-btn text-center flex-1"
                    >
                      Call Now
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}