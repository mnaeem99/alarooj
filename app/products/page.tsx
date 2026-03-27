import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { products } from "@/lib/products";

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
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete range of auto workshop and body shop equipment categories
              for service centers, industrial garages, and technical facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold text-primary-navy mb-3">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-secondary-emerald font-semibold hover:text-secondary-teal"
                >
                  Explore Product →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
