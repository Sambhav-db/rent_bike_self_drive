"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Fuel, ShieldCheck, IndianRupee } from "lucide-react";

export default function BikeModal({ bike, open, setOpen }) {
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

              <div className="">
                <div className="relative h-[300px] md:h-[420px] overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* badge (TOP LEFT - FIXED) */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {bike.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-2">
                    <h2 className="text-3xl font-bold ">{bike.name}</h2>

                    <span className="bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {bike.category}
                    </span>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-black text-orange-500">
                      ₹{bike.price}
                    </span>

                    <span className="text-gray-500 ml-1">/day</span>
                  </div>

                  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Mileage</p>

                      <p className="font-semibold">{bike.mileage}</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Fuel Type</p>

                      <p className="font-semibold">{bike.fuelType}</p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Deposit</p>

                      <p className="font-semibold">₹{bike.deposit}</p>
                    </div>

                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Rental Price</p>

                      <p className="font-bold text-orange-500">
                        ₹{bike.price}/day
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mb-8">
                    <div className="bg-orange-50 border border-orange-100 rounded-3xl p-5 mb-6 w-full">
                    <h3 className="font-semibold text-orange-600 mb-4">
                      Required Documents
                    </h3>

                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>✓ Aadhar Card</li>
                      <li>✓ Driving Licence</li>
                      <li>✓ Refundable Security Deposit</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-3xl p-5 mb-8 w-full">
                    <h3 className="font-semibold mb-4">Rental Information</h3>

                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Fuel charges are extra.</li>
                      <li>• Vehicle must be returned on time.</li>
                      <li>• Deposit refunded after inspection.</li>
                    </ul>
                  </div>
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
