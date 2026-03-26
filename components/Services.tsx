"use client";

import { motion } from "framer-motion";
import { 
  Wind, 
  CarFront, 
  Cpu, 
  PaintBucket, 
  Wrench, 
  Siren
} from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Air Compressor Services",
    description: "Installation, calibration, breakdown diagnosis and fixing for garage air compressor systems.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CarFront,
    title: "Car Lift Installation & Repair",
    description: "Professional setup, hydraulic checks, safety testing, and maintenance for all car lift types.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cpu,
    title: "Electrical & Control Systems",
    description: "Complete troubleshooting for workshop electrical panels, controls, and machine wiring faults.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: PaintBucket,
    title: "Paint Booth Setup",
    description: "Installation and service support for spray booth systems, airflow controls, and safety checks.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Wrench,
    title: "Garage Equipment Maintenance",
    description: "Repair and maintenance for welding machines, spot pullers, washer pumps, and vacuum machines.",
    color: "from-gray-600 to-gray-800",
  },
  {
    icon: Siren,
    title: "Emergency Repair Services",
    description: "Urgent technical support to reduce downtime and restore operations in busy auto workshops.",
    color: "from-green-600 to-emerald-600",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end technical support for garage equipment in Sharjah and Ajman
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary-navy mb-3 group-hover:text-secondary-emerald transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <motion.a
                  href="/contact"
                  className="inline-flex items-center text-secondary-emerald font-semibold group-hover:text-secondary-teal transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Book Service
                  <span className="ml-2">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


