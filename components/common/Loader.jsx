"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[999] flex items-center justify-center">

      <motion.img
        src="/logo/main-logo.png"
        alt="RentBike Ujjain"
        className="w-28"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      />

    </div>
  );
}