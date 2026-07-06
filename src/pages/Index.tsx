import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Problems />
      <HowItWorks />
      <WhyChoose />
      <Comparison />
      <FAQ />
      <CTA />
    </main>
    <Footer />
    <StickyMobileCTA />
  </div>
);

export default Index;
