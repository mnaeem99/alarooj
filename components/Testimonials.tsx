"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Khalid R.",
    role: "Workshop Owner",
    location: "Sharjah Industrial Area",
    rating: 5,
    text: "They fixed our compressor line and restored workshop pressure quickly. Professional team and very practical support.",
  },
  {
    name: "Naveed A.",
    role: "Body Shop Manager",
    location: "Ajman",
    rating: 5,
    text: "Car lift installation was completed with proper testing and safety checks. Good communication and on-time delivery.",
  },
  {
    name: "Farhan M.",
    role: "Paint Booth Operator",
    location: "Sharjah",
    rating: 5,
    text: "Their team solved an electrical control issue in our paint booth that others could not. Highly recommended.",
  },
  {
    name: "Workshop Manager",
    role: "Service Manager",
    location: "Ajman Free Zone",
    rating: 5,
    text: "We use them for ongoing maintenance of welding and washing equipment. Reliable service every time.",
  },
  {
    name: "Imran S.",
    role: "Garage Owner",
    location: "Sharjah",
    rating: 5,
    text: "Emergency call support was excellent. They reduced our workshop downtime and got systems running the same day.",
  },
  {
    name: "Adeel K.",
    role: "Operations Lead",
    location: "Ajman",
    rating: 5,
    text: "Strong technical knowledge across compressors, lifts, and controls. A dependable partner for garage operations.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (isHover) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isHover]);

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + testimonials.length) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary-dark via-primary-navy to-primary-slate text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-secondary-cyan/20 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-accent-orange/15 blur-3xl animate-float" />

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="section-eyebrow">Client Voices</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-balance">
            Trusted by workshops across{" "}
            <span className="gradient-text">Sharjah & Ajman</span>
          </h2>
        </motion.div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="relative rounded-3xl glass-dark p-8 md:p-12 min-h-[280px]">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-secondary-cyan/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative pt-6"
              >
                <div className="flex items-center justify-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-amber fill-accent-amber" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-center text-white/95 leading-relaxed font-medium">
                  "{t.text}"
                </p>
                <div className="mt-8 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-cyan to-secondary-emerald flex items-center justify-center text-primary-dark font-bold text-xl shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <p className="mt-3 font-bold text-lg">{t.name}</p>
                  <p className="text-sm text-secondary-cyan">{t.role} · {t.location}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="h-11 w-11 rounded-full border border-white/20 hover:border-secondary-cyan hover:text-secondary-cyan transition flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? "w-10 bg-secondary-cyan" : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="h-11 w-11 rounded-full border border-white/20 hover:border-secondary-cyan hover:text-secondary-cyan transition flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
