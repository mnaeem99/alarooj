"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/971500000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Call Floating Button */}
      <motion.a
        href="tel:+971500000000"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-secondary-emerald hover:bg-secondary-teal rounded-full shadow-2xl flex items-center justify-center text-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </>
  );
}

