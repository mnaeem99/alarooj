"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock4, ShieldCheck } from "lucide-react";

const inputCls =
  "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:border-secondary-cyan focus:bg-white focus:ring-4 focus:ring-secondary-cyan/15 text-[15px]";

const SERVICE_OPTIONS = [
  "Air Compressor Services",
  "Car Lift Installation & Repair",
  "Electrical & Control Systems",
  "Paint Booth Setup",
  "Garage Equipment Maintenance",
  "Emergency Repair Services",
  "Other",
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
    const message = `New Quote Request:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.serviceType}
Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/971553250775?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-neutral-light overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-secondary-cyan/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-orange/10 blur-3xl" />

      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-primary-navy">
            Request a Free Site Visit & Quote
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your workshop equipment. We respond fast across Sharjah & Ajman.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-primary-navy/5 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name *">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Phone Number *">
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="+971 50 XXX XXXX"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Email">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputCls}
                    placeholder="your@email.com"
                  />
                </Field>
                <Field label="Service Type *">
                  <select
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell us about your workshop equipment..."
                />
              </Field>

              <button type="submit" className="btn-primary w-full">
                <Send className="w-5 h-5" />
                Send Request via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center pt-1">
                Your request opens WhatsApp pre-filled — fastest way to reach our team.
              </p>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactCard
              href="tel:+971564861236"
              icon={Phone}
              label="Call us"
              value="+971 56 486 1236"
              accent="from-accent-orange to-accent-amber"
            />
            <ContactCard
              href="https://wa.me/971553250775"
              external
              icon={MessageCircle}
              label="WhatsApp"
              value="+971 55 325 0775"
              accent="from-green-500 to-emerald-600"
            />
            <ContactCard
              href="mailto:Alaroojtradings@gmail.com"
              icon={Mail}
              label="Email"
              value="Alaroojtradings@gmail.com"
              accent="from-secondary-cyan to-secondary-teal"
            />
            <ContactCard
              icon={MapPin}
              label="Service Areas"
              value="Ajman, Sharjah & UAE"
              accent="from-primary-navy to-primary-slate"
            />

            <div className="rounded-2xl bg-primary-navy text-white p-5 flex gap-4 items-start">
              <Clock4 className="w-5 h-5 text-secondary-cyan mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold">Working Hours</p>
                <p className="text-sm text-white/80">
                  Mon – Sun · 8:00 AM – 8:00 PM<br />
                  Emergency support 24/7
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 px-2">
              <ShieldCheck className="w-4 h-4 text-secondary-emerald" />
              UAE licensed technical trading company
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-primary-navy mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function ContactCard({
  href,
  external,
  icon: Icon,
  label,
  value,
  accent,
}: {
  href?: string;
  external?: boolean;
  icon: any;
  label: string;
  value: string;
  accent: string;
}) {
  const inner = (
    <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-lg transition-all">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{label}</p>
        <p className="text-base font-bold text-primary-navy">{value}</p>
      </div>
    </div>
  );

  if (!href) return inner;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <a href={href}>{inner}</a>
  );
}
