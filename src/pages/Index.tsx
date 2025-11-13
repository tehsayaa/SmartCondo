import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductTabs from "@/components/ProductTabs";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="products">
        <ProductTabs />
      </section>
      <section id="trust">
        <TrustSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Index;
