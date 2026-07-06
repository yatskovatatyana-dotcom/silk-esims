import { Download, Layers, Store, TrendingDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyLess = () => {
  const { t } = useTranslation();
  const items = [
    { icon: Download, key: 'digital' },
    { icon: Layers, key: 'noSim' },
    { icon: Store, key: 'noRetail' },
    { icon: TrendingDown, key: 'pricing' },
  ] as const;

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('whyLess.title')}
          </h2>
          <p className="text-lg text-foreground/60">{t('whyLess.subtitle')}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="rounded-3xl bg-card border border-border/60 p-6 hover:border-primary/40 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/30 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{t(`whyLess.items.${key}.title`)}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
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
