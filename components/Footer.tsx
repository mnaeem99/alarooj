import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ListedOnline from "@/components/ListedOnline";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Service Areas", href: "/areas" },
  { label: "About", href: "/why-us" },
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
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-secondary-cyan/10 blur-3xl" />
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-orange/10 blur-3xl" />

      {/* CTA strip */}
      <div className="relative container-tight pt-16 pb-10">
        <div className="rounded-3xl bg-gradient-to-br from-primary-navy to-primary-slate p-8 md:p-12 border border-white/10 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="text-center md:text-left max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Need workshop equipment service?
            </h3>
            <p className="mt-2 text-white/75">
              We respond fast across Sharjah & Ajman. Call or WhatsApp now.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+971564861236" className="btn-primary">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/971553250775"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="relative container-tight pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/arooj_logo.jpeg"
                alt="AL AROOJ logo"
                width={44}
                height={44}
                className="w-11 h-11 rounded-xl object-cover ring-1 ring-white/10"
              />
              <div>
                <p className="text-base font-extrabold tracking-wide">AL AROOJ TECHNICAL</p>
                <p className="text-[10px] font-semibold text-secondary-cyan/90 tracking-[0.18em] uppercase">
                  Trading F.Z.E
                </p>
              </div>
            </Link>
            <p className="text-white/65 leading-relaxed text-sm">
              Professional auto garage equipment installation, maintenance and emergency repair
              services across the UAE.
            </p>
            <div className="flex gap-2 mt-5">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="h-10 w-10 rounded-xl bg-white/5 hover:bg-secondary-cyan/20 border border-white/10 hover:border-secondary-cyan/40 flex items-center justify-center transition"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary-cyan mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary-cyan mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white text-sm transition"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary-cyan mb-4">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="tel:+971564861236"
                  className="flex items-start gap-3 text-white/80 hover:text-white"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-secondary-cyan flex-shrink-0" />
                  <span>+971 56 486 1236</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971553250775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 text-secondary-cyan flex-shrink-0" />
                  <span>+971 55 325 0775 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Alaroojtradings@gmail.com"
                  className="flex items-start gap-3 text-white/80 hover:text-white break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-secondary-cyan flex-shrink-0" />
                  <span>Alaroojtradings@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary-cyan flex-shrink-0" />
                <span>Ajman, Sharjah<br />United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <ListedOnline />
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-tight py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/55">
          <p>© {new Date().getFullYear()} AL AROOJ TECHNICAL TRADING F.Z.E · All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span aria-hidden>🇦🇪</span>
            <span>Proudly serving UAE auto workshops</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
