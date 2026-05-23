"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  "/images/14cfcb10809799fae75b4dc6cbce5268.jpg",
  "/images/609a81daa62449ca3ad613de7135cc8a.jpg",
  "/images/bde7348e7b259f9afb045bf4fd0d3837.jpg",
  "/images/c5088f1cfa111d680c15ea45976ac067.jpg",
  "/images/4dd2d4de449fee6de11253f4ec807707.jpg",
  "/images/0c6a13da-5518-4ac5-8bd0-70bbcc858458.jpg",
  "/images/1a053db5f4ca7f43eed69a379dde404c.jpg",
  "/images/4e9b2a2d4c4aac018bfbfa053add18d2.jpg",
  "/images/5a64ee90d686607533a78f90f75a2d13.jpg",
  "/images/eef807656d6b97f0ef1128101453c925.jpg",
];

// Mason-like layout via row-spans
const layoutSpans = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
];

export default function BeforeAfter() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight")
        setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
      else if (e.key === "ArrowLeft")
        setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div className="container-tight relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="section-eyebrow">Field Work</span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-primary-navy text-balance">
            Real workshop installs &{" "}
            <span className="gradient-text-warm">on-site service</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A look at recent installations, repairs and before/after fixes from
            our UAE field service team.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-2xl group ${layoutSpans[index] ?? "row-span-1"}`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`AL AROOJ technical services — gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <span className="text-sm font-semibold">Workshop · Field Service</span>
                <span className="h-9 w-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center border border-white/20">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-secondary-cyan/30 border border-white/20 text-white flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-secondary-cyan/30 border border-white/20 text-white flex items-center justify-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-secondary-cyan/30 border border-white/20 text-white flex items-center justify-center"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
              >
                <Image
                  src={galleryImages[selectedImage]}
                  alt={`Gallery image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm tracking-wider">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
