import { useTranslation } from 'react-i18next';
import { ShoppingCart, SmartphoneNfc, ToggleRight } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    { key: 'install', icon: ShoppingCart },
    { key: 'choose', icon: SmartphoneNfc },
    { key: 'travel', icon: ToggleRight },
  ] as const;

  return (
    <section id="how-it-works" className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative rounded-[2.5rem] bg-secondary/15 px-4 sm:px-8 md:px-12 py-14 md:py-20 overflow-hidden">
          {/* Decorative squiggle */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-8 top-8 hidden md:block text-primary/10"
            width="260"
            height="260"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M20 100 C 40 40, 80 40, 100 100 S 160 160, 180 100"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M30 150 C 60 120, 120 180, 170 130"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <div className="relative text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              {t('howItWorks.title')}
            </h2>
            <svg
              aria-hidden
              className="mx-auto mt-4 text-foreground/70"
              width="70"
              height="14"
              viewBox="0 0 70 14"
              fill="none"
            >
              <path
                d="M2 8 C 12 2, 22 12, 34 7 S 58 2, 68 8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative grid md:grid-cols-3 gap-5 md:gap-6">
            {steps.map(({ key, icon: Icon }, i) => (
              <div
                key={key}
                className="group flex items-start gap-4 md:gap-5 rounded-2xl bg-white p-6 md:p-7 shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col items-center shrink-0">
                  <span className="text-primary font-bold text-sm md:text-base tracking-tight">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <div className="mt-2 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-foreground" strokeWidth={1.75} />
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-base md:text-lg font-semibold text-foreground leading-snug">
                    {t(`howItWorks.steps.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] text-foreground/70 leading-relaxed">
                    {t(`howItWorks.steps.${key}.description`)}
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

export default HowItWorks;
