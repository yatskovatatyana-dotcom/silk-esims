import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const StickyMobileCTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <Button
        onClick={() => navigate('/login')}
        className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold shadow-elegant"
      >
        {t('hero.getEsim')}
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
