import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-xs font-medium transition-colors duration-200 px-2 py-1 rounded-full"
    >
      <Languages className="w-3.5 h-3.5" />
      {i18n.language === 'ru' ? 'EN' : 'RU'}
    </button>
  );
};

export default LanguageSwitcher;
