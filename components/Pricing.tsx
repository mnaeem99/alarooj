"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Small Load",
    price: "AED 150",
    description: "Perfect for small items",
    features: [
      "1-2 items",
      "Small truck",
      "Same-day service",
      "Eco-friendly disposal",
    ],
    popular: false,
  },
  {
    name: "Medium Load",
    price: "AED 350",
    description: "Ideal for apartments & small offices",
    features: [
      "3-5 items",
      "Medium truck",
      "Same-day service",
      "Eco-friendly disposal",
      "Free estimate",
    ],
    popular: true,
  },
  {
    name: "Large Load",
    price: "AED 650",
    description: "For villas & large offices",
    features: [
      "6+ items",
      "Large truck",
      "Same-day service",
      "Eco-friendly disposal",
      "Free estimate",
      "Full cleanup included",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Get a free quote for accurate pricing based on your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift ${
                plan.popular
                  ? "border-2 border-secondary-emerald scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary-emerald to-secondary-teal text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-navy mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-secondary-emerald">
                    {plan.price}
                  </span>
                  <span className="text-gray-500"> starting</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-secondary-emerald flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="/contact"
                className={`block w-full text-center py-3 rounded-xl font-bold transition-colors ${
                  plan.popular
                    ? "bg-gradient-to-r from-secondary-emerald to-secondary-teal text-white hover:shadow-lg"
                    : "bg-neutral-light text-primary-navy hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Need a custom quote? Contact us for accurate pricing based on your specific needs.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-navy text-white rounded-xl font-bold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


