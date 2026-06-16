"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ open, setOpen }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Bikes", href: "/bikes" },
    { name: "Explore", href: "/explore" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="
fixed
top-0
right-0
w-[90%]
max-w-sm
h-screen
bg-white/80
backdrop-blur-3xl
border-l
border-white/20
z-50
shadow-[0_0_60px_rgba(0,0,0,0.15)]
p-6
"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold">
                Rent Bike Self Drive <span className="text-orange-500"></span>
              </h2>

              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="
    flex items-center
    px-5 py-4
    rounded-2xl
    bg-white/50
    backdrop-blur
    hover:bg-orange-500
    hover:text-white
    transition-all
    font-medium
  "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <a href="tel:+919644991724" className="secondary-btn text-center">
                Call Now
              </a>

              <a
                href="https://wa.me/919644991724"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn text-center"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
