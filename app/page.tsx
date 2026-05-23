import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TopProducts from "@/components/TopProducts";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <TopProducts />
      <WhyChooseUs />
      <HowItWorks />
      <BeforeAfter />
      <Testimonials />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
