"use client";

import { motion } from "framer-motion";
import { Phone, Wrench, Cog, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "1. Share Your Requirement",
    description: "Call or WhatsApp us with your garage issue, machine type, and location in Sharjah or Ajman.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "2. Onsite Technical Inspection",
    description: "Our technicians assess equipment condition and identify mechanical, electrical, or control faults.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cog,
    title: "3. Repair or Installation",
    description: "We complete installation, maintenance, or repair with proper testing and safety checks.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: CheckCircle,
    title: "4. Handover & Ongoing Support",
    description: "You receive a working system, clear guidance, and options for preventive maintenance.",
    color: "from-orange-500 to-red-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A smooth process from initial call to reliable workshop operation
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-secondary-emerald via-secondary-teal to-secondary-emerald" style={{ margin: '0 10%' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-secondary-emerald to-secondary-teal rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 mt-4`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-primary-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}








