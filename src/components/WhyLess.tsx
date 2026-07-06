import { useTranslation } from 'react-i18next';

const WhyLess = () => {
  const { t } = useTranslation();
  const keys = ['marketing', 'lean', 'direct', 'automation', 'clean'] as const;

  return (
    <section className="py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('whyLess.title')}
          </h2>
          <p className="text-lg text-foreground/60">{t('whyLess.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {keys.map((key, i) => (
            <div key={key} className="relative">
              <span className="block text-secondary font-bold text-sm tracking-widest mb-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-bold text-foreground leading-snug mb-3">
                {t(`whyLess.items.${key}.title`)}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {t(`whyLess.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLess;
