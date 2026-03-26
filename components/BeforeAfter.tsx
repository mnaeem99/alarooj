"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// List of images from public/images folder
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
"/images/eef807656d6b97f0ef1128101453c925.jpg"
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

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! + 1) % galleryImages.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Projects & Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real workshop images, installation work, and before/after fixes from field service visits
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-60 text-white hover:text-secondary-emerald transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary-emerald transition-colors z-60"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary-emerald transition-colors z-60"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
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

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
