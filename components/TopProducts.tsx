import Link from "next/link";
import { getTopProducts } from "@/lib/products";

export default function TopProducts() {
  const topProducts = getTopProducts(24);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Top Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Popular garage equipment categories inspired by industry-leading
            workshop supply portfolios in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="block rounded-2xl border border-gray-200 p-5 bg-neutral-light hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-primary-navy mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {product.shortDescription}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-secondary-emerald text-white font-semibold hover:bg-secondary-teal transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
