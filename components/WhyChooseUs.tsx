"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Wrench, 
  BadgeCheck, 
  Shield, 
  MapPin,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Technical Response",
    description: "Quick onsite diagnostics and repairs to keep your workshop productive.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Wrench,
    title: "Specialized Garage Expertise",
    description: "Hands-on experience with compressors, lifts, paint booths, and workshop machines.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: BadgeCheck,
    title: "UAE Licensed Credibility",
    description: "Professional standards and reliable service delivery for commercial auto workshops.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Professional Team",
    description: "Skilled technicians who handle mechanical and electrical workshop issues safely.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Serving Sharjah & Ajman",
    description: "Focused local support for auto garages and industrial service facilities.",
    color: "from-red-400 to-orange-500",
  },
];

const benefits = [
  "UAE licensed technical trading company",
  "Experienced with multi-brand garage equipment",
  "Preventive and corrective maintenance support",
  "Electrical and control panel troubleshooting",
  "Emergency repair response for workshops",
  "Clear communication and dependable service",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            About AL AROOJ TECHNICAL TRADING F.Z.E
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted technical trading and maintenance partner for UAE auto workshop equipment
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-light rounded-2xl p-8 hover-lift group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-navy to-secondary-teal rounded-3xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            What You Get With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary-emerald flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


