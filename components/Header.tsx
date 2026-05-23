"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/why-us" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-dark/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-gradient-to-b from-primary-dark/70 to-transparent backdrop-blur-md"
      }`}
    >
      <nav className="container-tight">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-secondary-cyan/30 blur-md opacity-0 group-hover:opacity-100 transition" />
              <Image
                src="/images/arooj_logo.jpeg"
                alt="AL AROOJ TECHNICAL TRADING F.Z.E logo"
                width={44}
                height={44}
                className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl object-cover ring-1 ring-white/10"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm md:text-base font-extrabold text-white tracking-wide">
                AL AROOJ TECHNICAL
              </p>
              <p className="text-[10px] md:text-xs font-semibold text-secondary-cyan/90 tracking-[0.18em] uppercase">
                Trading F.Z.E
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-secondary-cyan"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-secondary-cyan"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+971564861236"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent-orange hover:bg-accent-amber text-white font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-accent-orange/30"
            >
              <Phone className="w-4 h-4" />
              Call Now
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-primary-dark/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container-tight py-5 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-secondary-cyan/10 text-secondary-cyan"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+971564861236"
                className="mt-3 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-accent-orange text-white font-bold"
              >
                <Phone className="w-5 h-5" />
                Call +971 56 486 1236
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
