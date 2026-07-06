import { Wallet, RefreshCcw, Wifi } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Problems = () => {
  const { t } = useTranslation();
  const items = [
    { icon: Wallet, key: 'roaming' },
    { icon: RefreshCcw, key: 'newSim' },
    { icon: Wifi, key: 'wifi' },
  ] as const;

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-2xl mb-16">
          {t('problems.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="group rounded-3xl bg-card border border-border/60 p-8 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center mb-6 shadow-soft">
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t(`problems.items.${key}.title`)}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {t(`problems.items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
