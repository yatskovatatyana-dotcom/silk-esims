import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const REVIEW_KEYS = ['one', 'two', 'three'] as const;
const AVATARS: Record<(typeof REVIEW_KEYS)[number], string> = {
  one: 'https://i.pravatar.cc/128?img=47',
  two: 'https://i.pravatar.cc/128?img=13',
  three: 'https://i.pravatar.cc/128?img=32',
};

const scrollToPlans = () => {
  const el = document.getElementById('destinations');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.href = '/#destinations';
  }
};

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-stretch">
          {/* Left: CTA card */}
          <div className="lg:col-span-3 relative rounded-[2rem] overflow-hidden bg-foreground p-8 md:p-12 flex flex-col justify-center">
            <div aria-hidden className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/40 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary/40 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 leading-[1.15]">
                {t('cta.title')}
              </h2>
              <p className="text-base md:text-lg text-background/70 mb-8 max-w-lg">
                {t('cta.subtitle')}
              </p>
              <Button
                size="lg"
                onClick={scrollToPlans}
                className="rounded-full font-semibold px-8 h-12 bg-background text-foreground hover:bg-background/90"
              >
                {t('cta.button')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right: Testimonials */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {REVIEW_KEYS.map((k) => (
              <article
                key={k}
                className="flex-1 rounded-2xl bg-card border border-border/60 p-5 md:p-6 shadow-card"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={AVATARS[k]}
                    alt=""
                    className="w-11 h-11 rounded-full object-cover shrink-0"
                    loading="lazy"
                    width={44}
                    height={44}
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-foreground text-sm truncate">
                      {t(`cta.reviews.${k}.name`)}
                    </div>
                    <div className="text-xs text-foreground/50 truncate">
                      {t(`cta.reviews.${k}.role`)}
                    </div>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5 shrink-0" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  “{t(`cta.reviews.${k}.text`)}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
