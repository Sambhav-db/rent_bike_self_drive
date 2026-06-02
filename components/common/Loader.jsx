"use client";

import Lottie from "react-lottie";
import animationData from "@/public/loader/loading.json";
import { motion } from "framer-motion";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/90 backdrop-blur-md"
    >
      <div className="flex flex-col items-center">
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          isClickToPauseDisabled
        /> 
      </div>
    </motion.div>
  );
}