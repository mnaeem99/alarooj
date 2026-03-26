"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
      <FloatingButtons />
    </main>
  );
}

