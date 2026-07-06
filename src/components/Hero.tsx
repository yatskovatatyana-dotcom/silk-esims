import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, Wifi, Tag, Plane, Smartphone, Globe, Zap, ShieldCheck } from 'lucide-react';
import heroBeach from '@/assets/hero-beach.jpg';
import { heroCountries, heroChipSlugs, type HeroCountry } from '@/data/heroCountries';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';

  const [query, setQuery] = useState('');
  const [activeSlug, setActiveSlug] = useState<string>('turkey');

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

  const stripFeatures = [
    { icon: Globe,       title: t('heroStrip.countries.title'), body: t('heroStrip.countries.body') },
    { icon: Smartphone,  title: t('heroStrip.forever.title'),   body: t('heroStrip.forever.body') },
    { icon: Zap,         title: t('heroStrip.instant.title'),   body: t('heroStrip.instant.body') },
    { icon: ShieldCheck, title: t('heroStrip.noFees.title'),    body: t('heroStrip.noFees.body') },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28 pb-8">
      {/* Full-bleed background image */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={heroBeach}
          alt=""
          className="w-full h-full object-cover"
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

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {features.map((f) => (
              <div key={f.title}>
                <f.icon className="w-8 h-8 text-secondary" strokeWidth={1.75} />
                <div className="mt-3 text-white font-semibold text-base leading-snug">
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
              onClick={() => navigate('/login')}
              className="hidden sm:inline-flex items-center h-12 md:h-14 px-5 md:px-7 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm md:text-base hover:bg-secondary/90 transition-colors whitespace-nowrap"
            >
              {t('heroSearch.cta')}
            </button>
          </div>

          {/* Country chips */}
          <div className="px-4 md:px-6 pt-4 pb-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {chips.map((c) => {
              const isActive = c.slug === activeSlug;
              return (
                <button
                  key={c.slug}
                  onClick={() => setActiveSlug(c.slug)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all ${
                    isActive
                      ? 'bg-secondary/15 border-secondary text-foreground'
                      : 'bg-white border-border text-foreground/70 hover:border-foreground/30'
                  }`}
                >
                  <span className="text-base">{c.flag}</span>
                  {c.name[lang]}
                </button>
              );
            })}
          </div>

          {/* Selected country + plans */}
          <div className="p-4 md:p-6 pt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{active.flag}</span>
                <span className="text-lg font-bold text-foreground">{active.name[lang]}</span>
                {active.popular && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-semibold">
                    {t('heroSearch.popularBadge')}
                  </span>
                )}
              </div>
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {t('heroSearch.allPlans')} {active.name[lang]}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
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
                  <button
                    key={idx}
                    onClick={() => navigate('/login')}
                    className={`relative text-center rounded-2xl bg-white p-6 md:p-7 transition-all hover:-translate-y-0.5 ${
                      isOptimal
                        ? 'border-2 border-secondary shadow-elegant'
                        : 'border border-border hover:border-foreground/20'
                    }`}
                  >
                    {badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-bold tracking-wider whitespace-nowrap">
                        {badge}
                      </span>
                    )}
                    <div className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                      {p.data}
                    </div>
                    <div className="mt-2 text-sm text-foreground/60">
                      {p.days} {t('heroSearch.daysShort')}
                    </div>
                    {isOptimal && (
                      <div className="mt-1 text-xs text-foreground/50">
                        {t('heroSearch.optimalNote')}
                      </div>
                    )}
                    <div className="mt-6 flex items-center justify-center gap-2">
                      <span className="text-2xl md:text-3xl font-extrabold text-foreground">
                        {p.price}
                      </span>
                      <ChevronRight className="w-5 h-5 text-foreground/40" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom dark feature strip */}
        <div className="mt-4 rounded-3xl bg-foreground/95 backdrop-blur px-6 py-6 md:py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stripFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <f.icon className="w-6 h-6 text-secondary shrink-0" strokeWidth={1.75} />
                <div>
                  <div className="text-background font-semibold text-sm">{f.title}</div>
                  <p className="text-background/60 text-xs mt-1 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
