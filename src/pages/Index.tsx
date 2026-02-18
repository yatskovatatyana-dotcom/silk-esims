import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import ConnectionGuide from "@/components/ConnectionGuide";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <HowItWorks />
      <CTA />
      <ConnectionGuide />
      <Footer />
    </div>
  );
};

export default Index;
