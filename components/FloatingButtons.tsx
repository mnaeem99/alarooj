"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Plus, X, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-40 h-11 w-11 rounded-full bg-white/90 text-primary-navy shadow-lg backdrop-blur border border-gray-200 hover:bg-white flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating action stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {open && (
            <>
              <motion.a
                key="wa"
                href="https://wa.me/971553250775"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-green-500 text-white font-semibold shadow-xl hover:bg-green-600"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </motion.a>
              <motion.a
                key="call"
                href="tel:+971564861236"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.22, delay: 0.04 }}
                className="flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-accent-orange text-white font-semibold shadow-xl hover:bg-accent-amber"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
            </>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.92 }}
          aria-label={open ? "Close contact menu" : "Open contact menu"}
          className={`relative h-14 w-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-colors ${
            open ? "bg-primary-navy" : "bg-secondary-cyan"
          }`}
        >
          <span className={`absolute inset-0 rounded-full ${open ? "" : "animate-pulse-glow"}`} />
          {open ? <X className="w-6 h-6 relative" /> : <Plus className="w-6 h-6 relative" />}
        </motion.button>
      </div>
    </>
  );
}
