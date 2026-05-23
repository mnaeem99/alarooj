import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <BeforeAfter />
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
