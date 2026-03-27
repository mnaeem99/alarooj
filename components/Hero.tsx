"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Clock, Wrench } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const trustBadges = [
    { icon: CheckCircle, text: "UAE Licensed Technical Team" },
    { icon: Wrench, text: "Garage Equipment Specialists" },
    { icon: Clock, text: "Fast Response in Sharjah & Ajman" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-28 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-navy via-primary-navy to-secondary-teal"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-secondary-emerald/20 text-secondary-emerald rounded-full text-sm font-semibold mb-4">
              UAE Auto Workshop Technical Services
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Professional Auto Garage Equipment{" "}
            <span className="gradient-text bg-gradient-to-r from-secondary-emerald to-accent-gold bg-clip-text text-transparent">
              Maintenance in UAE
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Installation, Repair, Electrical Troubleshooting and Emergency Support for Auto Garages
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-secondary-emerald to-secondary-teal text-white rounded-xl font-bold text-lg shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 212, 170, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Get a Quote</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-teal to-secondary-emerald opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.a>

            <motion.a
              href="tel:+971500000000"
              className="group px-8 py-4 bg-white text-primary-navy rounded-xl font-bold text-lg shadow-2xl flex items-center space-x-2"
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
              className="group px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg shadow-2xl flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-white/90"
                whileHover={{ scale: 1.1 }}
              >
                <badge.icon className="w-5 h-5 text-secondary-emerald" />
                <span className="text-sm sm:text-base font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
            variants={itemVariants}
            className="mb-6"
          >
          </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div> */}
    </section>
  );
}

