import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getTopProducts, getProductImages } from "@/lib/products";

export default function TopProducts() {
  const topProducts = getTopProducts(12);

  return (
    <section className="relative py-24 bg-neutral-light overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
      <div className="container-tight relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Equipment Catalog</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-primary-navy text-balance">
              Top garage &{" "}
              <span className="gradient-text">workshop equipment</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Popular categories we install, supply and service across UAE auto
              workshops — from spray booths to compressors and lifts.
            </p>
          </div>
          <Link href="/products" className="btn-secondary self-start md:self-end">
            View Full Catalog
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {topProducts.map((product) => {
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

                <h3 className="text-base font-bold text-primary-navy group-hover:text-secondary-cyan transition-colors line-clamp-1 mb-1.5">
                  {product.name}
                </h3>
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
  );
}
