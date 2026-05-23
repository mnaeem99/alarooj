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
            const images = getProductImages(product.slug);
            const cover = images[0];
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
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-cyan/20 to-secondary-emerald/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 via-primary-dark/0 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-primary-navy">
                    Equipment
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-primary-navy group-hover:text-secondary-cyan transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-600 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-secondary-cyan group-hover:gap-2.5 transition-all">
                    View details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
