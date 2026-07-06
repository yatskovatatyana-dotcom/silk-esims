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
      <div className="container mx-auto max-w-5xl px-4">
        {/* Reviews — Instagram-story-style circles with compact text below */}
        <div className="mb-10 md:mb-14">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {REVIEW_KEYS.map((k) => (
              <article key={k} className="flex flex-col items-center text-center">
                {/* Gradient story ring */}
                <div
                  className="p-[3px] rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 210deg, #f58529, #dd2a7b, #8134af, #515bd4, #f58529)',
                  }}
                >
                  <div className="p-[2px] rounded-full bg-background">
                    <img
                      src={AVATARS[k]}
                      alt=""
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover block"
                      loading="lazy"
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className="mt-3 font-semibold text-foreground text-sm">
                  {t(`cta.reviews.${k}.name`)}
                </div>
                <div className="mt-1 flex items-center gap-0.5" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mt-2 text-xs md:text-sm text-foreground/70 leading-snug max-w-[16ch] md:max-w-[22ch]">
                  “{t(`cta.reviews.${k}.text`)}”
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CTA card */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-foreground p-10 md:p-16 text-center">
          <div aria-hidden className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-secondary/40 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-background mb-8 max-w-2xl mx-auto leading-[1.15]">
              {t('cta.title')}
            </h2>
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
      </div>
    </section>
  );
};

export default CTA;
