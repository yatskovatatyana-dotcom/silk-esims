import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HeroStrip from '@/components/HeroStrip';
import WhyLess from '@/components/WhyLess';
import HowItWorks from '@/components/HowItWorks';


import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';


const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <HeroStrip />
      <WhyLess />
      <HowItWorks />
      
      <CTA />
      <FAQ />
    </main>
    <Footer />
    
  </div>
);

export default Index;
