import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { ControlsSection } from "@/components/controls-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FaqSection } from "@/components/faq-section";
import { CoverageSection } from "@/components/coverage-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <ControlsSection />
        <TestimonialsSection />
        <FaqSection />
        <CoverageSection />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
