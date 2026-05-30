"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  center = true,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
    </motion.div>
  );
}