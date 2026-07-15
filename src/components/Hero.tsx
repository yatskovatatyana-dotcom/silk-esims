import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Tag, Plane, Smartphone, X } from 'lucide-react';
import heroBeach from '@/assets/hero-splash.png.asset.json';
import { heroCountries, heroChipSlugs, type HeroCountry } from '@/data/heroCountries';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';

  const [query, setQuery] = useState('');
  const [activeSlug, setActiveSlug] = useState<string>('');
  const tariffUrl = `https://app.silk-esim.ru/app?lang=${lang}&utm_source=tanya_landing&utm_medium=referral&utm_content=tariff`;

  const chips = useMemo(
    () => heroChipSlugs.map((s) => heroCountries.find((c) => c.slug === s)!).filter(Boolean),
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

  const features = [
    { icon: Tag,        title: t('heroFeatures.cheaper.title'), body: t('heroFeatures.cheaper.body') },
    { icon: Plane,      title: t('heroFeatures.arrive.title'),  body: t('heroFeatures.arrive.body') },
    { icon: Smartphone, title: t('heroFeatures.keep.title'),    body: t('heroFeatures.keep.body') },
  ];


  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28 pb-8">
      {/* Full-bleed background image */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={heroBeach.url}
          alt=""
          className="w-full h-full object-cover object-[center_75%]"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black/60" />
      </div>

      <div className="container relative mx-auto max-w-7xl">
        {/* Headline + features */}
        <div className="max-w-2xl">
          <h1 className="text-white font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight">
            {t('heroNew.line1')}{' '}
            <br className="hidden md:block" />
            {t('heroNew.line2a')}{' '}
            <span className="text-secondary">{t('heroNew.line2b')}</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 font-medium">
            {t('heroNew.subtitleA')}{' '}
            <span className="text-secondary font-semibold">{t('heroNew.subtitleB')}</span>
          </p>

          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl">
            {features.map((f) => (
              <div key={f.title}>
                <f.icon className="w-6 h-6 md:w-8 md:h-8 text-secondary" strokeWidth={1.75} />
                <div className="mt-2 md:mt-3 text-white font-semibold text-xs md:text-base leading-snug">
                  {f.title}
                </div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed hidden md:block">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Search + chips + plans card */}
        <div id="destinations" className="mt-12 rounded-3xl bg-white shadow-elegant overflow-hidden">
          {/* Search bar */}
          <div className="p-4 md:p-6 flex items-center gap-3 border-b border-border/60">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('heroSearch.placeholder')}
                className="w-full h-12 md:h-14 pl-12 pr-4 rounded-full bg-muted/60 text-foreground text-base md:text-lg font-medium placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {query && suggestions.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white border border-border shadow-elegant overflow-hidden z-20">
                  {suggestions.map((s) => (
                    <button
                      key={s.slug}
                      onClick={() => { setActiveSlug(s.slug); setQuery(''); }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted text-left transition-colors"
                    >
                      <span className="text-xl">{s.flag}</span>
                      <span className="font-semibold text-foreground">{s.name[lang]}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => window.location.href = tariffUrl}
              className="hidden sm:inline-flex items-center h-12 md:h-14 px-5 md:px-7 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm md:text-base hover:bg-secondary/90 transition-colors whitespace-nowrap"
            >
              {t('heroSearch.cta')}
            </button>
          </div>

          {/* Country tile grid — mobile & desktop */}
          <div className="px-4 md:px-6 pt-4 pb-5">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3">
              {chips.slice(0, 6).map((c) => {
                const isActive = c.slug === activeSlug;
                const from = c.plans[0]?.price;
                return (
                  <button
                    key={c.slug}
                    onClick={() => setActiveSlug(isActive ? '' : c.slug)}
                    className={`flex items-center gap-3 p-3 md:p-4 rounded-2xl border transition-all text-left hover:border-foreground/30 ${
                      isActive
                        ? 'border-secondary bg-secondary/10'
                        : 'border-border bg-white'
                    }`}
                  >
                    <span className="text-2xl md:text-3xl leading-none">{c.flag}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm md:text-base font-bold text-foreground truncate">
                        {c.name[lang]}
                      </div>
                      <div className="text-[11px] md:text-xs text-foreground/60 font-medium mt-0.5">
                        {t('heroSearch.fromPrice')} {from}
                      </div>
                    </div>
                  </button>
                );
              })}
              <button
                onClick={() => window.location.href = tariffUrl}
                className="col-span-2 md:col-span-3 flex items-center justify-center gap-2 p-3 md:p-4 rounded-2xl border border-border bg-white text-sm md:text-base font-semibold text-foreground/80 hover:border-foreground/30 transition-colors"
              >
                <span className="text-base md:text-lg">🌍</span>
                {t('heroSearch.moreDestinations')}
                <ChevronRight className="w-4 h-4 text-foreground/40" />
              </button>
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
                    <span className="text-3xl leading-none">{active.flag}</span>
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
        </div>
      </div>

    </section>
  );
};

export default Hero;
