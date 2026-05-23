import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <WhyChooseUs />
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
