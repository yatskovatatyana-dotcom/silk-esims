import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';

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
    { id: 'how-it-works', label: t('navNew.howItWorks') },
    { id: 'faq',          label: t('navNew.support') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20">
        <a href="/" className="flex items-center gap-2">
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-foreground' : 'text-white'}`}>
            Silk eSIM
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className={`text-sm font-medium transition-colors ${
                scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
              scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'
            }`}
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {i18n.language === 'ru' ? 'EN' : 'RU'}
          </button>
          <a
            href={`https://app.silk-esim.ru/app?lang=${i18n.language === 'ru' ? 'ru' : 'en'}&utm_source=tanya_landing&utm_medium=referral&utm_content=login`}
            className={`hidden sm:inline-flex items-center h-10 md:h-11 px-4 md:px-5 rounded-full border font-semibold text-sm transition-colors ${
              scrolled
                ? 'border-border text-foreground hover:bg-muted'
                : 'border-white/40 text-white hover:bg-white/10'
            }`}
          >
            {t('navNew.signIn')}
          </a>
          <button
            onClick={() => scrollTo('destinations')}
            className="inline-flex items-center h-10 md:h-11 px-4 md:px-5 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/90 transition-colors"
          >
            {t('navNew.buy')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
