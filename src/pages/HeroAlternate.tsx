import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroStrip from '@/components/HeroStrip';
import WhyLess from '@/components/WhyLess';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const HeroAlternate = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero variant="alternate" />
      <HeroStrip />
      <WhyLess />
      <HowItWorks />
      <CTA />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default HeroAlternate;