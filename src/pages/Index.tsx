import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyLess from '@/components/WhyLess';
import HowItWorks from '@/components/HowItWorks';

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
      <WhyLess />
      <HowItWorks />
      
      <Comparison />
      <FAQ />
      <CTA />
    </main>
    <Footer />
    <StickyMobileCTA />
  </div>
);

export default Index;
