import { Infinity as InfIcon, Plane, PhoneCall, Ban } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Problems = () => {
  const { t } = useTranslation();
  const items = [
    { icon: InfIcon, key: 'once' },
    { icon: Plane, key: 'ready' },
    { icon: Ban, key: 'noRoaming' },
    { icon: PhoneCall, key: 'keepNumber' },
  ] as const;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center max-w-3xl mx-auto mb-14 leading-tight">
          {t('problems.title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="group rounded-3xl bg-card border border-border/60 p-7 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-warm flex items-center justify-center mb-5 shadow-soft">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                {t(`problems.items.${key}.title`)}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
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
