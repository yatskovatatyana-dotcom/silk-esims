import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import silkLogo from '@/assets/silk-logo.png.asset.json';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nav = [
    { id: 'how-it-works', label: t('nav.howItWorks') },
    { id: 'faq', label: t('nav.faq') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5 group">
          <img src={silkLogo.url} alt="Silk eSIM" className="w-9 h-9 rounded-full" />
          <span className="text-lg font-bold tracking-tight text-foreground">Silk</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
            className="text-xs font-semibold text-foreground/60 hover:text-foreground transition-colors px-2 py-1 uppercase tracking-wider"
            aria-label="Toggle language"
          >
            {i18n.language === 'ru' ? 'EN' : 'RU'}
          </button>
          <Button
            size="sm"
            onClick={() => navigate('/login')}
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full font-semibold px-5"
          >
            {t('hero.getEsim')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
