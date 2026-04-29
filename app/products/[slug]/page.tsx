import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getProductBySlug, getProductImages, products } from "@/lib/products";

type ProductPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} Product`,
    description: product.shortDescription,
    keywords: [...product.keywords, product.name, "auto workshop products uae"],
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const productImages = getProductImages(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/products"
              className="text-secondary-emerald font-semibold hover:text-secondary-teal"
            >
              ← Back to Products
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mb-8">
            {product.shortDescription}
          </p>

          {productImages.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary-navy mb-4">
                Product Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {productImages.map((imageSrc, index) => (
                  <div
                    key={`${imageSrc}-${index}`}
                    className="group rounded-xl overflow-hidden border border-indigo-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-indigo-50 to-slate-100 p-3">
                      <Image
                        src={imageSrc}
                        alt={`${product.name} image ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1536px) 18vw, 160px"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-amber-300 to-yellow-300 px-3 py-2 border-t border-amber-200">
                      <p className="text-xs sm:text-sm font-semibold text-slate-800 text-center truncate">
                        {product.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            <div className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 bg-neutral-light">
              <h2 className="text-2xl font-bold text-primary-navy mb-3">
                Product Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">{product.detailedDescription}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-primary-navy mb-3">
                Service Details
              </h2>
              <ul className="space-y-2 text-gray-700">
                {product.serviceDetails.map((detail) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>
          </div>

          {product.models.length > 0 && (
            <div className="rounded-2xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-primary-navy mb-4">
                Popular Models
              </h2>
              <div className="flex flex-wrap gap-3">
                {product.models.map((model) => (
                  <span
                    key={model}
                    className="px-4 py-2 rounded-full bg-secondary-emerald/10 text-secondary-teal font-semibold"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
