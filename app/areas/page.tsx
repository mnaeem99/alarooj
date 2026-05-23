"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const serviceAreas = [
  { city: "Sharjah", places: [
    "Industrial Area 1 – 18, Sharjah",
    "Al Sajaa Industrial Area",
    "Al Nahda, Sharjah",
    "Muwaileh",
    "Al Majaz",
    "Al Khan",
  ]},
  { city: "Ajman", places: [
    "Ajman Free Zone",
    "Al Jurf Industrial Area",
    "Al Nuaimiya",
    "Al Rashidiya",
    "Al Mowaihat",
    "Ajman Industrial 1 & 2",
  ]},
  { city: "Nearby UAE", places: [
    "Dubai industrial zones (on request)",
    "Umm Al Quwain workshops (on request)",
    "Ras Al Khaimah (on request)",
  ]},
];

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-secondary-cyan/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-orange/15 blur-3xl" />

        <div className="container-tight relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="section-eyebrow">Service Coverage</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
              UAE workshop coverage —{" "}
              <span className="gradient-text">Sharjah, Ajman & beyond.</span>
            </h1>
            <p className="mt-5 text-xl text-white/80">
              Fast-response technical support for auto workshop equipment across the UAE
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="tel:+971564861236" className="btn-primary">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <a
                href="https://wa.me/971553250775"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas */}
      <section className="relative py-24 bg-neutral-light overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
        <div className="container-tight relative">
          <div className="grid lg:grid-cols-3 gap-6">
            {serviceAreas.map((zone, i) => (
              <motion.div
                key={zone.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-card-hover transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary-cyan to-secondary-teal flex items-center justify-center text-white shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-navy">{zone.city}</h2>
                </div>
                <ul className="space-y-2.5">
                  {zone.places.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary-cyan flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary-navy to-primary-slate p-8 md:p-12 text-white"
          >
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-orange/20 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold">
                  Workshop in another UAE city?
                </h3>
                <p className="mt-3 text-white/85">
                  We cover most industrial clusters across the UAE on request.
                  Tell us your location and equipment type — we'll confirm same-day.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="tel:+971564861236" className="btn-primary">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href="/contact" className="btn-ghost">
                  Get Quote <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
