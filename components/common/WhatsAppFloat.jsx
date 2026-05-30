"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl hover:scale-110 transition"
    >
      <MessageCircle color="white" size={30} />
    </a>
  );
}