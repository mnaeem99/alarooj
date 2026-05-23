"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock4, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/14cfcb10809799fae75b4dc6cbce5268.jpg",
    eyebrow: "Auto Workshop Equipment Experts",
    title: "Keep Your Garage Running.",
    highlight: "Without Downtime.",
    description:
      "Installation, repair and electrical troubleshooting for car lifts, compressors, paint booths and the full workshop line — across Sharjah and Ajman.",
  },
  {
    image: "/images/609a81daa62449ca3ad613de7135cc8a.jpg",
    eyebrow: "Paint Booth & Spray Systems",
    title: "Paint Booth Setup &",
    highlight: "Precision Servicing.",
    description:
      "Industrial paint booths, pre-station booths, exhaust extraction and dust collection — engineered for body shops and high-volume facilities.",
  },
  {
    image: "/images/bde7348e7b259f9afb045bf4fd0d3837.jpg",
    eyebrow: "Lifts, Compressors & Controls",
    title: "Heavy Equipment.",
    highlight: "Handled Right.",
    description:
      "Two-post lifts, in-ground lifts, screw compressors, welding rigs and control panels — installed, tuned and maintained by a certified UAE team.",
  },
  {
    image: "/images/4dd2d4de449fee6de11253f4ec807707.jpg",
    eyebrow: "Emergency Response",
    title: "Same-Day Workshop",
    highlight: "Recovery.",
    description:
      "Down equipment costs you bay time. Call us and a technician is dispatched the same day across Sharjah, Ajman and nearby industrial zones.",
  },
];

const stats = [
  { value: "10+", label: "Years Field Experience" },
  { value: "500+", label: "Workshops Served" },
  { value: "24/7", label: "Emergency Support" },
  { value: "4.9★", label: "Client Satisfaction" },
];

const trustBadges = [
  { icon: ShieldCheck, text: "UAE Licensed Technical Team" },
  { icon: Wrench, text: "Multi-Brand Equipment Specialists" },
  { icon: Clock4, text: "Fast Response in Sharjah & Ajman" },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + slides.length) % slides.length);

  const current = slides[active];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-24 md:pt-28 flex items-center overflow-hidden bg-primary-dark text-white"
    >
      {/* Slider background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.image}
              alt={current.title}
              fill
              priority={active === 0}
              sizes="100vw"
              className="object-cover animate-kenburns"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-transparent to-primary-dark" />
        <div className="absolute inset-0 grid-bg opacity-40 mask-fade-b" />
      </div>

      {/* Floating accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-secondary-cyan/20 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-accent-orange/20 blur-[120px] animate-float" />

      <div className="container-tight relative z-10 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <span className="section-eyebrow mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary-cyan animate-pulse" />
                  {current.eyebrow}
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-balance">
                  {current.title}{" "}
                  <span className="gradient-text">{current.highlight}</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/contact" className="btn-primary group">
                Request a Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+971564861236" className="btn-ghost">
                <Phone className="w-5 h-5" />
                Call +971 56 486 1236
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustBadges.map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/75">
                  <badge.icon className="w-4 h-4 text-secondary-cyan" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-dark rounded-3xl p-7 md:p-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-secondary-cyan/20 blur-3xl" />
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary-cyan/90">
                Trusted Workshop Partner
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Built for the busiest auto workshops in the UAE.
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    className="rounded-2xl bg-white/5 border border-white/10 p-4"
                  >
                    <div className="text-3xl font-extrabold gradient-text">{s.value}</div>
                    <div className="mt-1 text-xs text-white/70 leading-snug">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://wa.me/971553250775"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-whatsapp w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with a Technician
              </a>
            </div>
          </motion.div>
        </div>

        {/* Slider controls */}
        <div className="mt-12 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-12 bg-secondary-cyan" : "w-6 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="h-11 w-11 rounded-full border border-white/20 hover:border-secondary-cyan hover:text-secondary-cyan transition flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
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
