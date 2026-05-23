"use client";

import { motion } from "framer-motion";
import {
  Wind,
  CarFront,
  Cpu,
  PaintBucket,
  Wrench,
  Siren,
  Fan,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Wind,
    title: "Air Compressor Services",
    description:
      "Installation, calibration, breakdown diagnosis and repair for screw, piston and rotary garage compressors.",
    tag: "Most Requested",
    accent: "from-secondary-cyan to-blue-500",
  },
  {
    icon: CarFront,
    title: "Car Lift Installation & Repair",
    description:
      "Two-post, four-post and scissor lifts — hydraulic checks, safety testing, and full maintenance.",
    accent: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "Electrical & Control Systems",
    description:
      "Troubleshooting workshop electrical panels, controls, sensors and machine wiring faults.",
    accent: "from-secondary-emerald to-teal-600",
  },
  {
    icon: PaintBucket,
    title: "Paint Booth Setup",
    description:
      "Spray booth installation, airflow tuning, filtration replacement, and certified safety checks.",
    accent: "from-accent-orange to-red-500",
  },
  {
    icon: Wrench,
    title: "Garage Equipment Maintenance",
    description:
      "Welders, spot pullers, washer pumps, vacuum machines and shop tools — repaired and tuned.",
    accent: "from-slate-600 to-slate-900",
  },
  {
    icon: Siren,
    title: "Emergency Repair Services",
    description:
      "Same-day onsite response to keep your workshop bays earning. Available across Sharjah & Ajman.",
    tag: "24/7",
    accent: "from-green-600 to-emerald-600",
  },
  {
    icon: PaintBucket,
    title: "Industrial Painting Booth Solutions",
    description:
      "Industrial paint booths, automotive booths, powder coating and dust collection systems.",
    accent: "from-indigo-500 to-blue-600",
  },
  {
    icon: Fan,
    title: "Exhaust & Ventilation Works",
    description:
      "Design support, fitting and maintenance of garage exhaust systems, hose reels and airflow balancing.",
    accent: "from-cyan-600 to-blue-700",
  },
  {
    icon: Truck,
    title: "Pre Station & Bus Booth Service",
    description:
      "Installation and preventive maintenance for pre-station and bus booth systems in high-volume facilities.",
    accent: "from-amber-500 to-orange-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-eyebrow">What We Do</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-primary-navy text-balance">
            End-to-end technical services for{" "}
            <span className="gradient-text-warm">auto workshops</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From compressor lines to paint booths, control panels to emergency call-outs —
            we keep your workshop equipment running at full output.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-card-hover transition-all duration-500 overflow-hidden"
            >
              {/* subtle hover bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-secondary-cyan/0 group-hover:bg-secondary-cyan/10 blur-3xl transition-all duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accent} flex items-center justify-center shadow-lg shadow-primary-navy/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  {service.tag && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent-orange/10 text-accent-orange border border-accent-orange/20">
                      {service.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-bold text-primary-navy group-hover:text-primary-dark transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{service.description}</p>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-cyan group-hover:gap-2.5 transition-all"
                >
                  Book this service
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <Link href="/contact" className="btn-primary">
            Tell us about your equipment
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
