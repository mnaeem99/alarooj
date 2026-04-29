"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

const locations = [
  "Sharjah",
  "Ajman",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp integration
    const message = `New Quote Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.serviceType}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/971553250775?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-navy to-secondary-teal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Contact us for technical support in Sharjah & Ajman
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-emerald"
                  placeholder="Your name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-emerald"
                    placeholder="+971 50 XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-emerald"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-secondary-emerald"
                >
                  <option value="" className="text-gray-900">Select a service</option>
                  <option value="Compressor" className="text-gray-900">Air Compressor Services</option>
                  <option value="Car Lift" className="text-gray-900">Car Lift Installation & Repair</option>
                  <option value="Electrical" className="text-gray-900">Electrical & Control Systems</option>
                  <option value="Paint Booth" className="text-gray-900">Paint Booth Setup</option>
                  <option value="Maintenance" className="text-gray-900">Garage Equipment Maintenance</option>
                  <option value="Emergency" className="text-gray-900">Emergency Repair Services</option>
                  <option value="Other" className="text-gray-900">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary-emerald resize-none"
                  placeholder="Tell us about your workshop equipment requirement..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-secondary-emerald to-secondary-teal text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Quote Request</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+971564861236"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-secondary-emerald rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Phone</p>
                    <p className="text-lg font-bold">+971564861236</p>
                  </div>
                </a>

                <a
                  href="mailto:Alaroojtradings@gmail.com"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-secondary-emerald rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="text-lg font-bold">Alaroojtradings@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/971553250775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">WhatsApp</p>
                    <p className="text-lg font-bold">+971553250775</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-12 h-12 bg-secondary-emerald rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70 mb-2">Location</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Ajman, Sharjah, UAE</span>
                      {locations.map((location, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/971553250775"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


