import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = ['install', 'choose', 'travel'] as const;

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/40 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-lg text-foreground/60">{t('howItWorks.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((key, i) => (
            <div key={key} className="relative text-center px-2">
              <div className="mx-auto mb-6 w-14 h-14 rounded-2xl bg-gradient-warm text-primary-foreground flex items-center justify-center text-xl font-bold shadow-soft">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t(`howItWorks.steps.${key}.title`)}
              </h3>
              <p className="text-foreground/60 max-w-xs mx-auto leading-relaxed">
                {t(`howItWorks.steps.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
