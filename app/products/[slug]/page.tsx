import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getProductBySlug, products } from "@/lib/products";

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
