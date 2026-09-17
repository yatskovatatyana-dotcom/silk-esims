import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, ChevronRight, X, Star } from 'lucide-react';
import heroBanner from '@/assets/hero-banner-wide.png';
import Flag from '@/components/Flag';
import { heroCountries, heroChipSlugs, type HeroCountry, type HeroPlan } from '@/data/heroCountries';

const gbNumber = (data: string) => parseInt(data, 10) || 0;
const priceNumber = (price: string) => Number(price.replace(/[^\d.,]/g, '').replace(/\s/g, '').replace(',', '.')) || 0;
const currencyOf = (price: string) => price.replace(/[\d\s.,]/g, '') || '';
const dataLabel = (data: string, lang: 'ru' | 'en') =>
  lang === 'ru' ? data.replace('GB', 'ГБ') : data.replace('ГБ', 'GB');
const perGbValue = (p: HeroPlan) => {
  const v = priceNumber(p.price) / (gbNumber(p.data) || 1);
  return `${currencyOf(p.price)}${v >= 10 ? Math.round(v) : v.toFixed(2)}`;
};
const perGbLabel = (p: HeroPlan, lang: 'ru' | 'en') =>
  `1 ${lang === 'ru' ? 'ГБ' : 'GB'} — ${perGbValue(p)}`;
const savingsPct = (p: HeroPlan, base: HeroPlan) => {
  const per = priceNumber(p.price) / (gbNumber(p.data) || 1);
  const basePer = priceNumber(base.price) / (gbNumber(base.data) || 1);
  if (!basePer) return 0;
  return Math.round((1 - per / basePer) * 100);
};

const Radio = ({ checked, onLight }: { checked: boolean; onLight?: boolean }) => (
  <div
    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
      checked
        ? onLight
          ? 'border-white bg-white'
          : 'border-secondary bg-secondary'
        : onLight
        ? 'border-white/70'
        : 'border-foreground/25'
    }`}
  >
    {checked && <div className={`h-2.5 w-2.5 rounded-full ${onLight ? 'bg-secondary' : 'bg-white'}`} />}
  </div>
);

type HeroProps = {
  variant?: 'current' | 'alternate';
};

const Hero = (_props: HeroProps) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';

  const [query, setQuery] = useState('');
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [showAll, setShowAll] = useState(false);
  const [allQuery, setAllQuery] = useState('');

  useEffect(() => {
    const openAll = () => setShowAll(true);
    window.addEventListener('silk:open-destinations', openAll);
    return () => window.removeEventListener('silk:open-destinations', openAll);
  }, []);

  const tariffUrl = `https://app.silk-esim.srsignal.com/app?lang=${lang}&utm_source=tanya_landing&utm_medium=referral&utm_content=tariff`;

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

  const allFiltered = useMemo(() => {
    const q = allQuery.trim().toLowerCase();
    if (!q) return heroCountries;
    return heroCountries
      .filter((c) => c.name.en.toLowerCase().includes(q) || c.name.ru.toLowerCase().includes(q));
  }, [allQuery]);

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
        onClick={() => setShowAll(true)}
        className="mt-[0.45em] w-full inline-flex items-center justify-center gap-[0.35em] h-[2.2em] rounded-full bg-secondary text-secondary-foreground font-semibold text-[0.82em] hover:bg-secondary/90 transition-colors"
      >
        {t('heroSearch.moreDestinations')}
        <ChevronRight className="w-[1.1em] h-[1.1em]" />
      </button>
    </div>
  );

  const searchField = (
    <div className="relative">
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
  );

  return (
    <section className="relative overflow-hidden bg-primary">
      {/* ---------- Mobile: unified artwork and compact destination panel ---------- */}
      <div className="md:hidden">
        <div className="relative h-[310px] min-[420px]:h-[330px] overflow-hidden">
          <img
            src={heroBanner}
            alt="Silk eSIM — One eSIM for every trip"
            className="absolute inset-0 block h-full w-full object-cover object-[68%_center]"
            width={1376}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/35 via-primary/5 to-transparent" />
          <div className="absolute inset-x-0 top-0 mx-auto max-w-xl px-4 pt-[88px]">
            <div className="w-[58%] max-w-[220px]">
              <h1 className="text-primary-foreground font-extrabold leading-[1.06] text-[30px] drop-shadow-[0_2px_10px_hsl(var(--foreground)/0.3)]">
                {t('heroNew.line1')}{' '}
                <span className="block text-primary-foreground/90">
                  {t('heroNew.line2a')} {t('heroNew.line2b')}
                </span>
              </h1>
              <p className="mt-2 text-primary-foreground/90 font-medium text-[12px] leading-snug drop-shadow-[0_1px_6px_hsl(var(--foreground)/0.35)]">
                {t('heroNew.subtitleA')} {t('heroNew.subtitleB')}
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-xl px-3 -mt-3 pb-4" style={{ fontSize: '14px' }}>
          <div className="mb-2">{searchField}</div>
          {tilesCard}
        </div>
      </div>

      {/* ---------- Desktop: headline and search over the artwork ---------- */}
      <div className="relative hidden md:block">
        <img
          src={heroBanner}
          alt="Silk eSIM — One eSIM for every trip"
          className="block h-auto w-full -mt-[130px]"
          width={1376}
          height={768}
        />

        <div className="absolute inset-0">
          <div
            className="container mx-auto max-w-7xl h-full px-6"
            style={{ fontSize: 'clamp(12px, 1.5vw, 24px)' }}
          >
            <div className="pt-[11em] w-[42%] max-w-[25em] flex flex-col h-full">
              <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-[2.6em] drop-shadow-[0_2px_12px_rgba(20,16,80,0.45)]">
                {t('heroNew.line1')}{' '}
                <span className="block text-[#e9b4ff]">
                  {t('heroNew.line2a')} {t('heroNew.line2b')}
                </span>
              </h1>
              <p className="mt-[0.5em] text-white/90 font-medium text-[0.95em] drop-shadow-[0_1px_8px_rgba(20,16,80,0.5)]">
                {t('heroNew.subtitleA')} {t('heroNew.subtitleB')}
              </p>

              <div className="mt-auto pt-[1.2em]">{searchField}</div>

              <div className="mt-[0.7em] pb-[1.5em]">{tilesCard}</div>
            </div>
          </div>
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

            {(() => {
              const top = active.plans[0];
              const short = active.plans[2];
              const feat = active.plans[3] ?? active.plans[active.plans.length - 1];
              const base = active.plans[0];
              const row = (p: typeof top, badge: string | null, medium: boolean) => {
                const isSel = selectedIdx === active.plans.indexOf(p);
                const pct = savingsPct(p, base);
                return (
                  <div className={`relative ${badge ? 'pt-3' : ''}`}>
                    {badge && (
                      <div className="absolute -top-0.5 left-4 z-10">
                        <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold tracking-wider text-secondary-foreground">
                          {badge}
                        </span>
                      </div>
                    )}
                    <button
                      onClick={() => setSelectedIdx(active.plans.indexOf(p))}
                      className={`w-full text-left flex items-center gap-3 rounded-2xl transition ${
                        medium ? 'px-4 py-4' : 'px-3 py-3'
                      } ${
                        isSel || badge
                          ? 'border-2 border-secondary bg-secondary/5'
                          : 'border border-border bg-card'
                      }`}
                    >
                      <Radio checked={isSel} />
                      <div className="min-w-0 flex-1">
                        <div className={`font-bold text-foreground ${medium ? 'text-[17px]' : 'text-[14px]'}`}>
                          {dataLabel(p.data, lang)} · {p.days} {t('heroSearch.daysShort')}
                        </div>
                        <div className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-foreground/55">
                          <span>{perGbLabel(p, lang)}</span>
                          {pct > 4 && (
                            <span className="rounded-md bg-[hsl(150_65%_95%)] px-1.5 py-0.5 leading-none text-[hsl(150_65%_32%)]">
                              {t('heroSearch.cheaperBy')} {pct}%
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`shrink-0 font-extrabold text-foreground ${medium ? 'text-[18px]' : 'text-[15px]'}`}>
                        {p.price}
                      </div>
                    </button>
                  </div>
                );
              };
              return (
                <div>
                  {top && row(top, null, false)}

                  <div className="mb-3 mt-5 pl-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-secondary to-primary px-3 py-1.5 text-[11px] font-bold tracking-wider text-secondary-foreground shadow-sm">
                      <Star className="h-3 w-3" fill="currentColor" strokeWidth={0} />
                      {t('heroSearch.bestValue')}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedIdx(active.plans.indexOf(feat))}
                    className="relative w-full overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-primary p-5 text-left text-secondary-foreground shadow-elegant transition active:scale-[0.995]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <Radio checked={selectedIdx === active.plans.indexOf(feat)} onLight />
                        <span className="text-[13px] font-bold uppercase tracking-wider text-secondary-foreground/90">
                          {t('heroSearch.maxTier')}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-bold tracking-wider">
                        <Star className="h-3 w-3" fill="currentColor" strokeWidth={0} />
                        {t('heroSearch.hitSale')}
                      </span>
                    </div>

                    <div className="mt-3 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[42px] font-extrabold leading-none tracking-tight">
                          {dataLabel(feat.data, lang)}
                        </div>
                        <div className="mt-2 text-[15px] font-medium text-secondary-foreground/90">
                          {feat.days} {t('heroSearch.daysShort')}
                        </div>
                      </div>
                      <div className="whitespace-nowrap pb-1 text-[26px] font-extrabold leading-none tracking-tight">
                        {feat.price}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-white/15 px-3 py-2.5">
                        <div className="text-[10px] font-semibold uppercase leading-none tracking-wider text-secondary-foreground/70">
                          {t('heroSearch.perGb')}
                        </div>
                        <div className="mt-1 text-[16px] font-extrabold leading-none">
                          {perGbValue(feat)}
                        </div>
                      </div>
                      <div className="rounded-xl bg-card px-3 py-2.5">
                        <div className="text-[10px] font-semibold uppercase leading-none tracking-wider text-secondary">
                          {t('heroSearch.cheaperBy')}
                        </div>
                        <div className="mt-1 text-[16px] font-extrabold leading-none text-secondary">
                          {savingsPct(feat, base)}%
                        </div>
                      </div>
                    </div>
                  </button>

                  <div className="mt-6">{short && row(short, t('heroSearch.shortTrips'), true)}</div>
                </div>
              );
            })()}

            {active.slug === 'europe' && (
              <div className="mt-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-foreground/50 mb-1">
                  {t('heroSearch.europeIncludes')}
                </div>
                <p className="text-[11px] leading-relaxed text-foreground/60">
                  {t('heroSearch.europeCountries')}
                </p>
              </div>
            )}

            <button
              onClick={() => (window.location.href = tariffUrl)}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-secondary to-primary text-[15px] font-bold text-secondary-foreground shadow-elegant transition active:scale-[0.99]"
            >
              {t('heroSearch.buyFor')} {(active.plans[selectedIdx] ?? active.plans[3] ?? active.plans[0]).price}
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Full destinations modal */}
      {showAll && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-center">
          <button
            aria-label="Close"
            onClick={() => setShowAll(false)}
            className="absolute inset-0 bg-black/50 animate-fade-in"
          />
          <div
            className="relative w-full md:w-[560px] md:max-w-[92vw] max-h-[85vh] md:max-h-[80vh] rounded-t-3xl md:rounded-3xl bg-background shadow-elegant px-5 md:px-6 pb-6 pt-3 md:pt-6 flex flex-col"
            style={{ animation: 'slide-up-sheet 0.28s cubic-bezier(0.32, 0.72, 0, 1)' }}
          >
            <div className="md:hidden mx-auto h-1.5 w-10 rounded-full bg-foreground/15 mb-4" />
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">
                {lang === 'ru' ? 'Все страны' : 'All destinations'}
              </h3>
              <button
                onClick={() => setShowAll(false)}
                aria-label="Close"
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground/70 hover:text-foreground shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative mb-3">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <input
                type="text"
                value={allQuery}
                onChange={(e) => setAllQuery(e.target.value)}
                placeholder={t('heroSearch.placeholder')}
                className="w-full h-11 pl-10 pr-4 rounded-full bg-muted text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-secondary/40"
              />
            </div>

            <div className="overflow-y-auto -mx-1 px-1 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                {allFiltered.map((c) => {
                  const flagKey = (c.slug === 'global' ? 'global' : c.slug) as Parameters<typeof Flag>[0]['country'];
                  return (
                    <button
                      key={c.slug}
                      onClick={() => {
                        setActiveSlug(c.slug);
                        setShowAll(false);
                        setAllQuery('');
                      }}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      <Flag country={flagKey} className="w-8 h-8 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-foreground text-sm truncate">{c.name[lang]}</div>
                        <div className="text-xs text-foreground/60">
                          {t('heroSearch.fromPrice')} {c.plans[0]?.price}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-foreground/40 shrink-0" />
                    </button>
                  );
                })}
                {allFiltered.length === 0 && (
                  <div className="col-span-full py-10 text-center text-foreground/60 text-sm">
                    {lang === 'ru' ? 'Ничего не найдено' : 'No destinations found'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
