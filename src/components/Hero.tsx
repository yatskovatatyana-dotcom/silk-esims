import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Gauge, Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import heroIllustration from '@/assets/hero-illustration.png';

const Hero = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.features', 'Преимущества'), id: 'features' },
    { label: t('nav.pricing', 'Тарифы'), id: 'pricing' },
    { label: t('nav.howItWorks', 'Как начать'), id: 'how-it-works' },
    { label: t('nav.connectionGuide', 'Подключение'), id: 'connection-guide' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-secondary">
      {/* Overlay to close menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
      )}
      
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5">
            <span className="text-sm font-semibold text-white">Silk eSIM</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-4 text-sm font-bold shadow-md"
              onClick={() => scrollTo('pricing')}
            >
              Подключить eSIM
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-full px-4 text-sm font-medium"
              onClick={() => {}}
            >
              Личный кабинет
            </Button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white/80 hover:text-white transition-colors p-2"
              aria-label="Menu"
            >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute right-4 top-[60px] w-56 bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-3 space-y-1 animate-fade-in">
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
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12">
          {/* Left: Text content */}
          <div className="text-center lg:text-left lg:max-w-xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              {t('hero.title')}
              <span className="block mt-3 text-2xl md:text-3xl font-medium opacity-90">
                {t('hero.brandName')}
                <br className="hidden lg:block" />
                <span className="lg:hidden"> — </span>
                интернет совсем иного уровня
              </span>
            </h1>

            <div className="flex justify-center lg:justify-start">
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
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium drop-shadow whitespace-pre-line">
              {t('hero.description')}
            </p>

            {/* Mobile illustration */}
            <div className="lg:hidden flex justify-center -mt-2">
              <img 
                src={heroIllustration} 
                alt="People using mobile internet"
                fetchPriority="high"
                className="w-full max-w-sm object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Illustration - desktop only */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-xl">
              <img 
                src={heroIllustration} 
                alt="People using mobile internet" 
                className="w-full object-contain drop-shadow-2xl"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="pt-6 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center hover:bg-white/20 transition-all duration-300">
            <Zap className="w-6 h-6 text-white mx-auto mb-1" />
            <div className="text-xs md:text-sm text-white font-semibold leading-tight">Мгновенное<br />подключение</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center hover:bg-white/20 transition-all duration-300">
            <Shield className="w-6 h-6 text-white mx-auto mb-1" />
            <div className="text-xs md:text-sm text-white font-semibold leading-tight">Безопасность ваших данных</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 text-center hover:bg-white/20 transition-all duration-300">
            <Gauge className="w-6 h-6 text-white mx-auto mb-1" />
            <div className="text-xs md:text-sm text-white font-semibold leading-tight">Скорость и стабильность соединения</div>
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
