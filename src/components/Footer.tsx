import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">{t('footer.brandName')}</h3>
            <p className="text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.features')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.quickLinks.faq')}
                </a>
              </li>
              <li>
                <Link to="/legal" className="text-muted-foreground hover:text-primary transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.contacts.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>{t('footer.contacts.support')}</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:silk-esim@srsignal.com" className="hover:text-primary transition-colors">
                  {t('footer.contacts.email')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} {t('footer.brandName')}. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
