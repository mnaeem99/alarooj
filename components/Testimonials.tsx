"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Khalid R.",
    location: "Sharjah Industrial Area",
    rating: 5,
    text: "They fixed our compressor line and restored workshop pressure quickly. Professional team and very practical support.",
    image: null,
  },
  {
    name: "Naveed A.",
    location: "Ajman",
    rating: 5,
    text: "Car lift installation was completed with proper testing and safety checks. Good communication and on-time delivery.",
    image: null,
  },
  {
    name: "Farhan M.",
    location: "Sharjah",
    rating: 5,
    text: "Their team solved an electrical control issue in our paint booth that others could not. Highly recommended.",
    image: null,
  },
  {
    name: "Workshop Manager",
    location: "Ajman Free Zone",
    rating: 5,
    text: "We use them for ongoing maintenance of welding and washing equipment. Reliable service every time.",
    image: null,
  },
  {
    name: "Imran S.",
    location: "Sharjah",
    rating: 5,
    text: "Emergency call support was excellent. They reduced our workshop downtime and got systems running the same day.",
    image: null,
  },
  {
    name: "Adeel K.",
    location: "Ajman",
    rating: 5,
    text: "Strong technical knowledge across compressors, lifts, and controls. A dependable partner for garage operations.",
    image: null,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Feedback from garage owners and workshop teams in Sharjah and Ajman
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-emerald-500 mb-4 opacity-50" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover bg-gray-200"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-blue-900 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-blue-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
