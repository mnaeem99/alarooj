"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/areas" },
  { label: "Why Us", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Air Compressor Services",
  "Car Lift Installation & Repair",
  "Electrical & Control Systems",
  "Paint Booth Setup",
  "Garage Equipment Maintenance",
  "Emergency Repair Services",
];

const socialLinks = [
  // { icon: Facebook, href: "#", label: "Facebook" },
  // { icon: Instagram, href: "#", label: "Instagram" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-extrabold">AL AROOJ TECHNICAL TRADING F.Z.E</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Professional auto garage equipment installation, maintenance, and repair services in UAE.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-secondary-emerald rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-secondary-emerald transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-secondary-emerald transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-secondary-emerald transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary-emerald" />
                <a
                  href="tel:+971564861236"
                  className="text-gray-400 hover:text-secondary-emerald transition-colors"
                >
                  +971564861236
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary-emerald" />
                <a
                  href="mailto:Alaroojtradings@gmail.com"
                  className="text-gray-400 hover:text-secondary-emerald transition-colors"
                >
                  Alaroojtradings@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary-emerald mt-1" />
                <span className="text-gray-400">
                  Ajman, Sharjah
                  <br />
                  United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AL AROOJ TECHNICAL TRADING F.Z.E. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇦🇪</span>
              <span className="text-gray-400 text-sm">Proudly serving UAE auto workshops</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


