import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { products, getProductImages } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our automotive workshop equipment range including paint booths, compressors, lifts, filters, tools, and body shop solutions.",
  keywords: [
    "garage products uae",
    "automotive workshop equipment",
    "paint booth products",
    "car lift and compressor products",
  ],
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-secondary-cyan/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-orange/15 blur-3xl" />
        <div className="container-tight relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-eyebrow">Equipment Catalog</span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
              Auto workshop equipment{" "}
              <span className="gradient-text">we install &amp; service.</span>
            </h1>
            <p className="mt-5 text-xl text-white/80">
              Complete catalog of garage and body shop equipment — paint booths, lifts,
              compressors, tools and more. Supplied, installed and maintained across UAE.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="tel:+971564861236" className="btn-primary">
                <Phone className="w-5 h-5" /> Call for Pricing
              </a>
              <a
                href="https://wa.me/971553250775"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" /> Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="relative py-20 bg-neutral-light overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
        <div className="container-tight relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const cover = getProductImages(product.slug)[0];
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-card-hover transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary-cyan/15 to-secondary-emerald/15" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/65 via-primary-dark/0 to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary-navy">
                      Equipment
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-primary-navy group-hover:text-secondary-cyan transition-colors line-clamp-2">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {product.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-cyan group-hover:gap-2.5 transition-all">
                      Explore product
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
