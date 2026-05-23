import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, MessageCircle, CheckCircle2, ArrowUpRight, Wrench } from "lucide-react";
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

export default function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const productImages = getProductImages(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative pt-28 pb-16 bg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-secondary-cyan/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent-orange/15 blur-3xl" />

        <div className="container-tight relative">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/70 hover:text-secondary-cyan transition mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-eyebrow">Workshop Equipment</span>
              <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance">
                {product.name}
              </h1>
              <p className="mt-5 text-lg text-white/80 leading-relaxed">
                {product.shortDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+971564861236" className="btn-primary">
                  <Phone className="w-5 h-5" /> Call for Pricing
                </a>
                <a
                  href={`https://wa.me/971553250775?text=${encodeURIComponent(`Hi, I'd like a quote for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" /> Request Quote
                </a>
              </div>
            </div>

            {productImages.length > 0 && (
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-dark p-4">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white/95">
                    <Image
                      src={productImages[0]}
                      alt={`${product.name} hero`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-4"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent-orange flex items-center justify-center text-white shadow-2xl">
                  <Wrench className="w-10 h-10" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {productImages.length > 1 && (
        <section className="relative py-20 bg-neutral-light overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
          <div className="container-tight relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-eyebrow">Product Gallery</span>
              <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-primary-navy">
                Models &amp; configurations available
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
              {productImages.map((imageSrc, index) => (
                <div
                  key={`${imageSrc}-${index}`}
                  className="group relative rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-secondary-cyan/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100">
                    <Image
                      src={imageSrc}
                      alt={`${product.name} variant ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1536px) 18vw, 200px"
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-primary-navy text-white px-3 py-2.5 text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider truncate">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview + service details */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container-tight relative">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl bg-neutral-light border border-gray-100 p-8">
              <span className="section-eyebrow">Overview</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-primary-navy">
                About {product.name}
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px]">
                {product.detailedDescription}
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-primary-dark via-primary-navy to-primary-slate text-white p-7 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-secondary-cyan/20 blur-2xl" />
              <span className="section-eyebrow">What's Included</span>
              <h3 className="mt-4 text-xl font-bold">Service Details</h3>
              <ul className="mt-4 space-y-2.5">
                {product.serviceDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-sm text-white/85">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-secondary-cyan flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.models.length > 0 && (
            <div className="mt-8 rounded-3xl bg-white border border-gray-100 p-8">
              <span className="section-eyebrow">Popular Models</span>
              <h3 className="mt-4 text-2xl font-bold text-primary-navy">Available models &amp; variants</h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {product.models.map((model) => (
                  <span
                    key={model}
                    className="px-4 py-2 rounded-full bg-secondary-cyan/10 text-primary-navy font-semibold border border-secondary-cyan/20 hover:bg-secondary-cyan/15 transition"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="relative py-20 bg-neutral-light overflow-hidden">
          <div className="absolute inset-0 dot-bg opacity-50 pointer-events-none" />
          <div className="container-tight relative">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <span className="section-eyebrow">Explore More</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-primary-navy">
                  Related equipment
                </h2>
              </div>
              <Link href="/products" className="btn-secondary hidden md:inline-flex">
                Full Catalog
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => {
                const cover = getProductImages(rp.slug)[0];
                return (
                  <Link
                    key={rp.id}
                    href={`/products/${rp.slug}`}
                    className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-secondary-cyan/40 hover:shadow-card-hover transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      {cover ? (
                        <Image
                          src={cover}
                          alt={rp.name}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary-cyan/15 to-secondary-emerald/15" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/65 via-primary-dark/0 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-primary-navy group-hover:text-secondary-cyan transition-colors line-clamp-1">
                        {rp.name}
                      </h3>
                      <p className="mt-1.5 text-sm text-gray-600 line-clamp-2">
                        {rp.shortDescription}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 bg-white">
        <div className="container-tight">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-dark via-primary-navy to-primary-slate text-white p-8 md:p-14">
            <div className="absolute inset-0 grid-bg opacity-25" />
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent-orange/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary-cyan/20 blur-3xl" />

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="section-eyebrow">Ready to Order?</span>
                <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">
                  Get a quote for {product.name} today
                </h3>
                <p className="mt-3 text-white/80">
                  Talk to our technical team about pricing, installation timeline,
                  and on-site delivery anywhere in the UAE.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="tel:+971564861236" className="btn-primary">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a
                  href={`https://wa.me/971553250775?text=${encodeURIComponent(`Hi, I'd like a quote for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
