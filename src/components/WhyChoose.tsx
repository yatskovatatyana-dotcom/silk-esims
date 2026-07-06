import { Infinity as InfIcon, TrendingDown, PhoneCall, Zap, Globe, Wifi, Signal, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const items = [
  { icon: InfIcon, key: 'oneEsim' },
  { icon: TrendingDown, key: 'lowerPrices' },
  { icon: PhoneCall, key: 'keepNumber' },
  { icon: Zap, key: 'instant' },
  { icon: Globe, key: 'coverage' },
  { icon: Wifi, key: 'hotspot' },
  { icon: Signal, key: 'fiveG' },
  { icon: Headphones, key: 'support' },
] as const;

const WhyChoose = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-14 text-center max-w-2xl mx-auto">
          {t('whyChoose.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="rounded-2xl bg-card border border-border/60 p-5 flex flex-col gap-3 hover:border-primary/40 hover:shadow-soft transition-all"
            >
              <Icon className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground text-sm md:text-base leading-snug">
                {t(`whyChoose.items.${key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
