"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Cog, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Share the Issue",
    description:
      "Call or WhatsApp with the equipment type, the symptom and your workshop location.",
  },
  {
    icon: ClipboardCheck,
    title: "Onsite Inspection",
    description:
      "Our technician arrives, runs full diagnostics on mechanical, electrical and control faults.",
  },
  {
    icon: Cog,
    title: "Repair or Install",
    description:
      "We complete the install, repair or replacement with calibration and proper safety testing.",
  },
  {
    icon: ShieldCheck,
    title: "Handover & Support",
    description:
      "You receive a working system, handover notes and an optional preventive maintenance plan.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-eyebrow">How It Works</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-primary-navy text-balance">
            From your call to a working workshop —{" "}
            <span className="gradient-text-warm">in four steps</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ marginInline: "9%" }}
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-secondary-cyan/60 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="-mt-px h-px bg-gradient-to-r from-secondary-cyan to-accent-orange"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative group"
              >
                <div className="relative bg-white rounded-3xl p-7 border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-card-hover transition-all duration-500 text-center">
                  {/* step circle */}
                  <div className="relative mx-auto -mt-12 mb-5 w-24 h-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary-cyan to-secondary-teal blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-24 h-24 rounded-full bg-white border-4 border-secondary-cyan/30 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                      <step.icon className="w-10 h-10 text-primary-navy" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-accent-orange text-white font-bold flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-primary-navy">{step.title}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
