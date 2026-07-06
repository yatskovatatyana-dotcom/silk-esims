import { useTranslation } from 'react-i18next';
import { Globe, Smartphone, Zap, ShieldCheck } from 'lucide-react';

const HeroStrip = () => {
  const { t } = useTranslation();
  const items = [
    { icon: Globe,       key: 'countries' },
    { icon: Smartphone,  key: 'forever' },
    { icon: Zap,         key: 'instant' },
    { icon: ShieldCheck, key: 'noFees' },
  ] as const;

  return (
    <section className="pt-16 md:pt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-card border border-border/60 shadow-card px-6 py-7 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {items.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.9} />
                </div>
                <div>
                  <div className="text-foreground font-semibold text-sm">
                    {t(`heroStrip.${key}.title`)}
                  </div>
                  <p className="text-foreground/60 text-xs mt-1 leading-relaxed">
                    {t(`heroStrip.${key}.body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStrip;
