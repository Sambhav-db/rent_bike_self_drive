"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function WhatsAppFloat() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 left-5 z-50 w-16 h-16 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
      >
        {/* <MessageCircle color="white" size={30} /> */}
        <img
          src="/logo/whatsapp.webp"
          alt="WhatsApp"
          className="w-16 h-16 object-contain"
        />
      </motion.a>

      {showTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-5 bottom-5 z-50 w-14 h-14 rounded-full bg-black/80 text-white flex items-center justify-center shadow-2xl"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </>
  );
}
