"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ open, setOpen }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "Bikes", href: "/bikes" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
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
            className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-white z-50 shadow-2xl p-6"
          >
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold">
                RentBike <span className="text-orange-500">Ujjain</span>
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
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="tel:+919999999999"
                className="secondary-btn text-center"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
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