import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Smartphone, Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import heroIllustration from '@/assets/hero-illustration.png';

const Hero = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t('features.title'), id: 'features' },
    { label: t('pricing.title'), id: 'pricing' },
    { label: t('howItWorks.title'), id: 'how-it-works' },
    { label: t('promotions.title'), id: 'promotions' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-secondary">
      
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5">
            <span className="text-sm font-semibold text-white">Silk eSIM</span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute right-4 top-[72px] w-56 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-3 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left text-white/90 hover:text-white hover:bg-white/10 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-white/15 mt-2 pt-2 px-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-2">
              <Button 
                variant="secondary" 
                size="default"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-xl font-bold rounded-full px-6"
                onClick={() => scrollTo('pricing')}
              >
                {t('hero.ctaButton')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              {t('hero.title')}
              <span className="block mt-4 text-3xl md:text-4xl font-medium opacity-90">
                {t('hero.brandName')} — мобильный интернет по-взрослому
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow whitespace-pre-line">
              {t('hero.description')}
            </p>

            {/* Mobile illustration */}
            <div className="lg:hidden flex justify-center pt-4">
              <img 
                src={heroIllustration} 
                alt="People using mobile internet" 
                className="w-full max-w-sm object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Illustration - desktop only */}
          <div className="hidden lg:flex flex-1 justify-center lg:justify-end items-center animate-fade-in relative">
            <div className="relative w-full max-w-xl">
              <img 
                src={heroIllustration} 
                alt="People using mobile internet" 
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-10 h-10 text-white mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">{t('hero.stats.time')}</div>
            <div className="text-sm text-white/80 mt-2 font-medium">{t('hero.stats.timeLabel')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <Shield className="w-10 h-10 text-white mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">{t('hero.stats.access')}</div>
            <div className="text-sm text-white/80 mt-2 font-medium">{t('hero.stats.accessLabel')}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <Smartphone className="w-10 h-10 text-white mx-auto mb-3" />
            <div className="text-4xl font-bold text-white">{t('hero.stats.uptime')}</div>
            <div className="text-sm text-white/80 mt-2 font-medium">{t('hero.stats.uptimeLabel')}</div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
