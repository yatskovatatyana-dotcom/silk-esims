import { Button } from '@/components/ui/button';
import { ArrowRight, Plane } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import silkLogo from '@/assets/silk-logo.png.asset.json';

const destinationChips = [
  { flag: '🇮🇹', name: 'Barcelona' },
  { flag: '🇯🇵', name: 'Tokyo' },
  { flag: '🇺🇸', name: 'New York' },
  { flag: '🇹🇭', name: 'Bangkok' },
  { flag: '🇦🇪', name: 'Dubai' },
];

const Hero = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-hero">
      {/* Soft floating brand blobs */}
      <div aria-hidden className="absolute top-24 -left-20 w-72 h-72 rounded-full bg-secondary/40 blur-3xl animate-float-slow" />
      <div aria-hidden className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />

      <div className="container relative mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-semibold text-foreground/70 mb-8 shadow-soft">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {t('hero.badge')}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] whitespace-pre-line mb-8">
          {t('hero.title')}
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-4">
          {t('hero.subtitle')}
        </p>
        <p className="text-sm md:text-base text-foreground/50 max-w-xl mx-auto mb-10">
          {t('hero.supporting')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <Button
            size="lg"
            onClick={() => scrollTo('destinations')}
            className="rounded-full font-semibold px-8 h-12 bg-foreground text-background hover:bg-foreground/90 shadow-elegant"
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => scrollTo('how-it-works')}
            className="rounded-full font-semibold px-8 h-12 text-foreground hover:bg-foreground/5"
          >
            {t('hero.ctaSecondary')}
          </Button>
        </div>

        {/* Illustration: one Silk card traveling between destinations */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-card border border-border/60 shadow-elegant p-8 md:p-12">
            <div className="flex items-center justify-between gap-4">
              {destinationChips.map((d, i) => (
                <div key={d.name} className="flex flex-col items-center gap-2 flex-1 min-w-0">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-muted flex items-center justify-center text-2xl md:text-3xl shadow-soft"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {d.flag}
                  </div>
                  <span className="text-[10px] md:text-xs font-medium text-foreground/60 truncate max-w-full">
                    {d.name}
                  </span>
                </div>
              ))}
            </div>

            {/* The traveling eSIM card */}
            <div className="relative mt-8 h-24 md:h-28 flex items-center">
              <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="mx-auto">
                <div className="relative animate-float">
                  <div className="w-32 md:w-40 aspect-[8/5] rounded-2xl bg-gradient-warm shadow-elegant p-3 md:p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <img src={silkLogo.url} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded-full ring-2 ring-white/60" />
                      <Plane className="w-4 h-4 text-white/90" />
                    </div>
                    <div className="text-white">
                      <div className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">eSIM</div>
                      <div className="text-sm md:text-base font-bold">Silk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-foreground/60 font-medium">
              One eSIM · Multiple trips
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
