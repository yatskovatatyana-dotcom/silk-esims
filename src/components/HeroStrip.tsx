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
    <section className="pt-8 md:pt-10 pb-2">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-foreground shadow-elegant px-6 py-6 md:py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-start gap-3">
                <Icon className="w-6 h-6 text-secondary shrink-0" strokeWidth={1.75} />
                <div>
                  <div className="text-background font-semibold text-sm">
                    {t(`heroStrip.${key}.title`)}
                  </div>
                  <p className="text-background/60 text-xs mt-1 leading-relaxed">
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
