import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-foreground p-10 md:p-20 text-center">
          {/* decorative blobs */}
          <div aria-hidden className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary/40 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-background mb-5 max-w-2xl mx-auto leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/login')}
              className="rounded-full font-semibold px-8 h-12 bg-background text-foreground hover:bg-background/90"
            >
              {t('cta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
