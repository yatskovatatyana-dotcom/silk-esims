import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronRight, X } from 'lucide-react';
import heroBanner from '@/assets/hero-banner-wide.png';
import Flag from '@/components/Flag';
import { heroCountries, heroChipSlugs, type HeroCountry } from '@/data/heroCountries';

type HeroProps = {
  variant?: 'current' | 'alternate';
};

const Hero = (_props: HeroProps) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';

  const [query, setQuery] = useState('');
  const [activeSlug, setActiveSlug] = useState<string>('');
  const tariffUrl = `https://app.silk-esim.ru/app?lang=${lang}&utm_source=tanya_landing&utm_medium=referral&utm_content=tariff`;

  const chips = useMemo(
    () => heroChipSlugs
      .filter((s) => s !== 'global')
      .map((s) => heroCountries.find((c) => c.slug === s)!)
      .filter(Boolean),
    []
  );

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [] as HeroCountry[];
    return heroCountries
      .filter((c) => c.name.en.toLowerCase().includes(q) || c.name.ru.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  const active = heroCountries.find((c) => c.slug === activeSlug) ?? heroCountries[0];

  const tilesCard = (
    <div className="rounded-[1em] bg-white shadow-elegant p-[0.55em]">
      <div className="grid grid-cols-2 gap-[0.35em]">
        {chips.map((c) => {
          const isActive = c.slug === activeSlug;
          const from = c.plans[0]?.price;
          const flagKey = (c.slug === 'global' ? 'global' : c.slug) as Parameters<typeof Flag>[0]['country'];
          return (
            <button
              key={c.slug}
              onClick={() => setActiveSlug(isActive ? '' : c.slug)}
              className={`flex items-center gap-[0.45em] rounded-[0.7em] border px-[0.55em] py-[0.38em] text-left transition-all hover:-translate-y-0.5 hover:shadow-soft ${
                isActive ? 'border-secondary bg-secondary/5' : 'border-border bg-card'
              }`}
            >
              <Flag country={flagKey} className="w-[1.6em] h-[1.6em] shrink-0" />
              <div className="min-w-0">
                <div className="text-[0.85em] font-bold text-foreground truncate leading-tight">
                  {c.name[lang]}
                </div>
                <div className="text-[0.68em] text-foreground/60 font-medium whitespace-nowrap">
                  {t('heroSearch.fromPrice')} {from}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => window.location.href = tariffUrl}
        className="mt-[0.45em] w-full inline-flex items-center justify-center gap-[0.35em] h-[2.2em] rounded-full bg-secondary text-secondary-foreground font-semibold text-[0.82em] hover:bg-secondary/90 transition-colors"
      >
        {t('heroSearch.moreDestinations')}
        <ChevronRight className="w-[1.1em] h-[1.1em]" />
      </button>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Hero artwork: clean banner, headline and search rendered on top */}
      <div className="relative">
        <img
          src={heroBanner}
          alt="Silk eSIM — One eSIM for every trip"
          className="block h-auto w-full md:-mt-[130px]"
          width={1508}
          height={848}
        />

        {/* Overlay: compact headline top-left, search field under it, next to the heroes */}
        <div className="absolute inset-0">
          <div
            className="container mx-auto max-w-7xl h-full px-4 md:px-6"
            style={{ fontSize: 'clamp(12px, 1.35vw, 20px)' }}
          >
            <div className="pt-[12%] sm:pt-[10%] md:pt-[13em] w-[68%] md:w-[42%] max-w-[25em]">
              <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-[2.6em] drop-shadow-[0_2px_12px_rgba(20,16,80,0.45)]">
                {t('heroNew.line1')}{' '}
                <span className="block text-[#e9b4ff]">
                  {t('heroNew.line2a')} {t('heroNew.line2b')}
                </span>
              </h1>
              <p className="mt-[0.5em] text-white/90 font-medium text-[0.95em] drop-shadow-[0_1px_8px_rgba(20,16,80,0.5)]">
                {t('heroNew.subtitleA')} {t('heroNew.subtitleB')}
              </p>

              {/* Search bar right under the headline */}
              <div className="relative mt-[0.8em]">
                <Search className="absolute left-[0.9em] top-1/2 -translate-y-1/2 w-[1.1em] h-[1.1em] text-foreground/40" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('heroSearch.placeholder')}
                  className="w-full h-[2.9em] pl-[2.6em] pr-[1em] rounded-full bg-white text-foreground text-[0.95em] font-medium placeholder:text-foreground/40 shadow-elegant focus:outline-none focus:ring-2 focus:ring-secondary/40"
                />
                {query && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white border border-border shadow-elegant overflow-hidden z-20">
                    {suggestions.map((s) => {
                      const flagKey = (s.slug === 'global' ? 'global' : s.slug) as Parameters<typeof Flag>[0]['country'];
                      return (
                        <button
                          key={s.slug}
                          onClick={() => { setActiveSlug(s.slug); setQuery(''); }}
                          className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted text-left transition-colors"
                        >
                          <Flag country={flagKey} className="w-6 h-6" />
                          <span className="font-semibold text-foreground">{s.name[lang]}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Compact country tiles card under the search — desktop, over the banner */}
              <div className="hidden md:block mt-[0.7em]">
                {tilesCard}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: card flows right below the banner */}
      <div className="md:hidden container relative mx-auto max-w-7xl px-4 pb-6" style={{ fontSize: '15px' }}>
        <div className="mt-4">
          {tilesCard}
        </div>
      </div>

      {/* Plans overlay — bottom sheet on mobile, centered modal on desktop */}
      {activeSlug && active && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center">
          {/* Backdrop */}
          <button
            aria-label="Close"
            onClick={() => setActiveSlug('')}
            className="absolute inset-0 bg-black/50 animate-fade-in"
          />
          {/* Sheet / modal */}
          <div
            className="relative w-full md:w-[440px] md:max-w-[92vw] rounded-t-3xl md:rounded-3xl bg-background shadow-elegant px-5 md:px-6 pb-8 md:pb-6 pt-3 md:pt-6"
            style={{ animation: 'slide-up-sheet 0.28s cubic-bezier(0.32, 0.72, 0, 1)' }}
          >
            <div className="md:hidden mx-auto h-1.5 w-10 rounded-full bg-foreground/15 mb-4" />
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <Flag country={(active.slug === 'global' ? 'global' : active.slug) as Parameters<typeof Flag>[0]['country']} className="w-9 h-9" />
                <div className="min-w-0">
                  <div className="text-lg font-bold text-foreground truncate">{active.name[lang]}</div>
                  <div className="text-xs text-foreground/60">
                    {t('heroSearch.fromPrice')} {active.plans[0]?.price}
                  </div>
                  <div className="text-sm font-medium text-foreground/80 mt-1.5">
                    {t('heroSearch.checkoutNote')}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveSlug('')}
                aria-label="Close"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:text-foreground shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              {[0, 1, 3].map((idx, i) => {
                const p = active.plans[idx];
                if (!p) return null;
                const isOptimal = i === 1;
                const isBest = i === 2;
                const badge = isOptimal
                  ? t('heroSearch.optimalBadge')
                  : isBest
                  ? t('heroSearch.bestBadge')
                  : null;
                return (
                  <div key={idx}>
                    <button
                      onClick={() => window.location.href = tariffUrl}
                      className={`w-full flex items-center justify-between gap-3 rounded-2xl bg-card px-4 py-3.5 transition-all active:scale-[0.98] hover:-translate-y-0.5 ${
                        isOptimal
                          ? 'border-2 border-secondary shadow-soft'
                          : 'border border-border'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="text-left">
                          <div className="text-xl font-extrabold text-foreground leading-tight">{p.data}</div>
                          <div className="text-[11px] text-foreground/60 mt-0.5">
                            {p.days} {t('heroSearch.daysShort')}
                          </div>
                        </div>
                        {badge && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[9px] font-bold tracking-wider whitespace-nowrap">
                            {badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <span className="text-lg font-extrabold text-foreground">{p.price}</span>
                        <ChevronRight className="w-4 h-4 text-foreground/40" />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
