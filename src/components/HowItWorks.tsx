import { useTranslation } from 'react-i18next';

type StepKey = 'choose' | 'install' | 'travel' | 'reuse';

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps: StepKey[] = ['choose', 'install', 'travel', 'reuse'];

  return (
    <section id="how-it-works" className="py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="relative rounded-[2.5rem] bg-foreground text-background px-4 sm:px-8 md:px-12 py-14 md:py-20 overflow-hidden">
          {/* Decorative squiggle */}
          <svg
            aria-hidden
            className="pointer-events-none absolute -right-8 top-8 hidden md:block text-secondary/20"
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
            <h2 className="text-3xl md:text-5xl font-bold text-background">
              {t('howItWorks.title')}
            </h2>
            <svg
              aria-hidden
              className="mx-auto mt-4 text-secondary"
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

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {steps.map((key, i) => (
              <div
                key={key}
                className="group flex flex-col rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 p-5 hover:bg-background/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-secondary font-bold text-2xl tracking-tight mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-semibold text-background leading-snug">
                  {t(`howItWorks.steps.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-background/70 leading-relaxed">
                  {t(`howItWorks.steps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
