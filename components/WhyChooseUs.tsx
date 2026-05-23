"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Zap,
  Wrench,
  BadgeCheck,
  Shield,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Technical Response",
    description: "Same-day diagnostics and repair across Sharjah & Ajman so your bays don't sit idle.",
    accent: "from-amber-400 to-accent-orange",
  },
  {
    icon: Wrench,
    title: "Multi-Brand Equipment Expertise",
    description: "Compressors, lifts, paint booths, welders, control panels — multi-brand serviced.",
    accent: "from-secondary-cyan to-secondary-teal",
  },
  {
    icon: BadgeCheck,
    title: "UAE Licensed",
    description: "Licensed technical trading company with documented standards and accountability.",
    accent: "from-secondary-emerald to-teal-600",
  },
  {
    icon: Shield,
    title: "Safety-First Workmanship",
    description: "Every install and repair includes safety verification and load testing.",
    accent: "from-violet-500 to-purple-600",
  },
  {
    icon: MapPin,
    title: "Local UAE Coverage",
    description: "Focused service network across Sharjah, Ajman and nearby UAE industrial zones.",
    accent: "from-rose-500 to-accent-orange",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Hundreds of UAE workshops keep us on retainer for routine and emergency support.",
    accent: "from-yellow-500 to-amber-600",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Workshops Served" },
  { value: 10, suffix: "+", label: "Years of Field Work" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

const benefits = [
  "Preventive maintenance contracts",
  "Multi-brand garage equipment",
  "Electrical and control panel troubleshooting",
  "Spare parts sourcing support",
  "Same-day emergency response",
  "Clear pricing & transparent reports",
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, mv]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
  }, [rounded]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-neutral-light overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="section-eyebrow">Why AL AROOJ</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-primary-navy text-balance">
            The technical partner UAE workshops{" "}
            <span className="gradient-text">keep on speed dial</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A decade of hands-on workshop equipment work — installed, maintained, and rescued
            from breakdown across hundreds of UAE auto facilities.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="text-4xl md:text-5xl font-extrabold gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="group relative bg-white rounded-3xl p-7 border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-card-hover transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-secondary-cyan/0 group-hover:bg-secondary-cyan/10 blur-2xl transition-all" />
              <div className="relative">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.accent} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                >
                  <f.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-primary-navy">{f.title}</h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary-navy to-primary-slate text-white p-8 md:p-12"
        >
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-secondary-cyan/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent-orange/15 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-eyebrow">What You Get</span>
              <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">
                A complete equipment ops partner — not just a repair vendor.
              </h3>
              <p className="mt-4 text-white/80">
                From the day a machine arrives at your shop to the day it needs an
                emergency rescue, AL AROOJ stays involved.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-[15px] text-white/90">{b}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
