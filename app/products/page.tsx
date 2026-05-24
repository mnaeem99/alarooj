import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { products, getProductImages } from "@/lib/products";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Products",
  description:
    "Explore our automotive workshop equipment range including paint booths, compressors, lifts, filters, tools, and body shop solutions.",
  path: "/products",
  keywords: [
    "garage products uae",
    "automotive workshop equipment",
    "paint booth products",
    "car lift and compressor products",
  ],
});

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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {products.map((product) => {
              const cover = getProductImages(product.slug)[0];
              return (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group relative bg-white rounded-3xl p-5 border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-card-hover transition-all duration-500 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-secondary-cyan/10 text-secondary-cyan border border-secondary-cyan/20">
                      Equipment
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-secondary-cyan group-hover:rotate-12 transition-all" />
                  </div>

                  <div className="relative mx-auto w-full max-w-[180px] aspect-square rounded-2xl bg-gradient-to-br from-slate-50 via-white to-secondary-cyan/10 border border-gray-100 overflow-hidden mb-5 grid-bg">
                    {cover ? (
                      <Image
                        src={cover}
                        alt={product.name}
                        fill
                        sizes="180px"
                        className="object-contain p-5 group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary-cyan/15 to-secondary-emerald/15" />
                    )}
                  </div>

                  <h2 className="text-base font-bold text-primary-navy group-hover:text-secondary-cyan transition-colors line-clamp-2 mb-1.5">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">
                    {product.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary-cyan group-hover:gap-2.5 transition-all">
                    Explore product
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
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
