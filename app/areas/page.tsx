"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const serviceAreas = [
  "Sharjah Industrial Areas",
  "Industrial Area 1 - 18, Sharjah",
  "Al Sajaa Industrial Area, Sharjah",
  "Al Nahda, Sharjah",
  "Muwaileh, Sharjah",
  "Al Majaz, Sharjah",
  "Al Khan, Sharjah",
  "Ajman Free Zone",
  "Al Jurf Industrial Area, Ajman",
  "Al Nuaimiya, Ajman",
  "Al Rashidiya, Ajman",
  "Al Mowaihat, Ajman",
  "Ajman Industrial 1 & 2",
  "Nearby UAE workshop clusters on request",
];

export default function AreasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-navy to-secondary-teal text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Service Coverage in Sharjah & Ajman
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Fast-response technical support for auto workshop equipment
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="tel:+971500000000"
                className="flex items-center space-x-2 px-8 py-4 bg-secondary-emerald hover:bg-secondary-teal text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
              <motion.a
                href="https://wa.me/971500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas Grid */}
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
              Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We support garages, service centers, and workshop facilities in:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover-lift group"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary-emerald to-secondary-teal rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-navy group-hover:text-secondary-emerald transition-colors">
                      {area}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-primary-navy to-secondary-teal rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Need Garage Equipment Support in Your Area?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us for installation, maintenance, and emergency repair support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="tel:+971500000000"
                  className="flex items-center space-x-2 px-8 py-4 bg-secondary-emerald hover:bg-secondary-teal text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </motion.a>
                <motion.a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Us</span>
                </motion.a>
                <motion.a
                  href="mailto:info@alaroojtechnical.ae"
                  className="flex items-center space-x-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-xl font-bold text-lg shadow-2xl transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Email: info@alaroojtechnical.ae</span>
                </motion.a>
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

