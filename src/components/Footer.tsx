import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import silkLogo from '@/assets/silk-logo.png.asset.json';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={silkLogo.url} alt="Silk eSIM" className="w-9 h-9 rounded-full" />
              <span className="text-lg font-bold text-foreground">Silk</span>
            </div>
            <p className="text-foreground/60 max-w-sm">{t('footer.tagline')}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50 mb-4">
              {t('footer.nav')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">{t('nav.howItWorks')}</a></li>
              <li><a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">{t('nav.faq')}</a></li>
              <li><a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">{t('nav.howItWorks')}</a></li>
              <li><a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50 mb-4">
              {t('footer.support')}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:silk-esim@srsignal.com" className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> silk-esim@srsignal.com
                </a>
              </li>
              <li><Link to="/legal" className="text-foreground/70 hover:text-primary transition-colors">{t('footer.legal')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-foreground/50">
          © {new Date().getFullYear()} Silk eSIM. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
