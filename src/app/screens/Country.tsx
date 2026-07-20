import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, ChevronLeft, Gift, Star, Check } from 'lucide-react';
import { PhoneFrame, StatusBar } from '../shell';
import { getCountry, type Plan } from '../data';
import FlagCircle from '../FlagCircle';
import { useI18n, getCountryName, localizedDaysLabel, localizedDataUnit } from '../i18n';

const PURPLE = 'hsl(248 78% 60%)';
const PURPLE_DARK = 'hsl(250 70% 52%)';
const PURPLE_SOFT = 'hsl(248 90% 97%)';

const gbNumber = (data: string) => parseInt(data, 10) || 0;
const bonusFor = (data: string) => {
  const gb = gbNumber(data);
  if (gb >= 20) return 2;
  if (gb >= 10) return 1;
  return 0;
};
const savingsPct = (plan: Plan, base: Plan) => {
  const perGb = plan.price / gbNumber(plan.data);
  const basePerGb = base.price / gbNumber(base.data);
  return Math.round((1 - perGb / basePerGb) * 100);
};

const Radio = ({ checked, purple }: { checked: boolean; purple?: boolean }) => (
  <div
    className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center transition ${
      checked
        ? purple
          ? 'bg-white border-white'
          : 'bg-[hsl(248_78%_60%)] border-[hsl(248_78%_60%)]'
        : purple
        ? 'border-white/70'
        : 'border-foreground/25'
    }`}
  >
    {checked && (
      <div className={`w-2.5 h-2.5 rounded-full ${purple ? 'bg-[hsl(248_78%_60%)]' : 'bg-white'}`} />
    )}
  </div>
);

const Country = () => {
  const { slug = '' } = useParams();
  const nav = useNavigate();
  const country = getCountry(slug);
  const { t, lang } = useI18n();

  const featured = useMemo(() => {
    if (!country) return null;
    return (
      country.plans.find((p) => p.id === 'super') ??
      country.plans[country.plans.length - 1]
    );
  }, [country]);

  const others = useMemo(
    () => (country && featured ? country.plans.filter((p) => p.id !== featured.id) : []),
    [country, featured]
  );

  const shortTripsId = useMemo(
    () => (others.find((p) => p.id === 'max') ?? others[0])?.id,
    [others]
  );

  const [selectedId, setSelectedId] = useState<string>('super');

  if (!country || !featured) {
    return (
      <PhoneFrame>
        <div className="bg-white">
          <StatusBar />
          <div className="px-4 pb-4 pt-1 text-foreground">{t('country.notFound')}</div>
        </div>
        <div className="flex-1 grid place-items-center text-foreground/60">—</div>
      </PhoneFrame>
    );
  }

  const selected = country.plans.find((p) => p.id === selectedId) ?? featured;
  const base = country.plans[0];
  const featSavings = savingsPct(featured, base);
  const featBonus = bonusFor(featured.data);

  const giftText = (n: number) =>
    (lang === 'ru' ? `Начислим ${n} ГБ в подарок` : `Get ${n} GB as a bonus`);

  return (
    <PhoneFrame hideTabBar bg="bg-white">
      <div className="bg-white border-b border-border/60">
        <StatusBar />
        <div className="relative h-14 flex items-center px-2">
          <button
            onClick={() => nav(-1)}
            aria-label={t('common.back')}
            className="inline-flex items-center gap-1 pl-2 pr-3 py-1.5 text-[hsl(248_78%_60%)] font-semibold text-[17px]"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.6} />
            {t('common.back')}
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <FlagCircle slug={country.slug} className="w-7 h-7" />
            <span className="text-[19px] font-bold text-foreground">
              {getCountryName(country.slug, country.name, lang)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className="px-4 pt-4 pb-32">
          {/* Featured */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-foreground/40 mb-2 pl-1">
            {t('country.bestValue')}
          </div>
          <button
            onClick={() => setSelectedId(featured.id)}
            className="w-full text-left rounded-3xl p-5 text-white relative overflow-hidden shadow-[0_16px_40px_-16px_hsl(248_78%_60%/0.55)] active:scale-[0.995] transition"
            style={{ background: `linear-gradient(155deg, ${PURPLE} 0%, ${PURPLE_DARK} 100%)` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Radio checked={selectedId === featured.id} purple />
                <span className="text-[13px] font-bold tracking-wider uppercase text-white/90">
                  {lang === 'ru' ? 'СУПЕР' : 'SUPER'}
                </span>
              </div>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider bg-white/20 text-white backdrop-blur-sm">
                <Star className="w-3 h-3" fill="currentColor" strokeWidth={0} />
                {t('country.hitSale')}
              </span>
            </div>

            <div className="mt-3">
              <div className="text-[44px] font-extrabold leading-none tracking-tight">
                {localizedDataUnit(featured.data, lang)}
              </div>
              <div className="mt-2 text-[15px] text-white/90 font-medium">
                {localizedDaysLabel(featured.days, lang)} · {featured.priceLabel}
              </div>
            </div>

            {featBonus > 0 && (
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-[13px] font-semibold">
                <Gift className="w-3.5 h-3.5" strokeWidth={2.4} />
                {giftText(featBonus)}
              </div>
            )}

            {/* Savings bar */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-white/25 overflow-hidden">
                <div
                  className="h-full rounded-full bg-white"
                  style={{ width: `${Math.max(0, Math.min(100, featSavings))}%` }}
                />
              </div>
              <div className="text-[13px] font-bold text-white whitespace-nowrap">
                {t('country.savings')} {featSavings}%
              </div>
            </div>

            {/* Streaming icons */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-[11px] font-semibold text-white/70">{t('country.worksWith')}</span>
              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.42.12-.779-.18-.899-.54-.12-.42.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.48.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.438 15 10.078 18.72 12.38c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.258 8.82 8.06 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.43a11.252 11.252 0 0 0-3.43-2.18c-1.18-.38-2.37-.59-3.57-.62h-.13c-.15 0-.36.02-.47.04-.36.04-.73.1-1.09.17a12.38 12.38 0 0 0-3.66 1.35 12.64 12.64 0 0 0-4.95 4.95A12.38 12.38 0 0 0 3.5 8.31c-.07.36-.13.73-.17 1.09-.02.11-.04.32-.04.47v.13c.03 1.2.24 2.39.62 3.57.317 1.31 1.062 2.31 2.18 3.43a11.252 11.252 0 0 0 3.43 2.18c1.18.38 2.37.59 3.57.62h.13c.15 0 .36-.02.47-.04.36-.04.73-.1 1.09-.17a12.38 12.38 0 0 0 3.66-1.35 12.64 12.64 0 0 0 4.95-4.95 12.38 12.38 0 0 0 1.35-3.66c.07-.36.13-.73.17-1.09.02-.11.04-.32.04-.47v-.13zM9.84 16.5V7.08l7.8 4.71-7.8 4.71z"/>
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.8-.1 3.74.143 5.327.566h.003c0 0-1.847 2.146-1.847 2.146a6.62 6.62 0 0 0-3.58-.522c-3.676.4-6.376 3.704-6.376 7.41v.018c0 3.706 2.7 7.01 6.376 7.41a6.62 6.62 0 0 0 3.58-.522s1.847 2.146 1.847 2.146h-.003A9.88 9.88 0 0 1 12.525 24c-6.466 0-11.72-5.253-11.72-11.72S6.059.02 12.525.02zm8.352 4.326a9.89 9.89 0 0 1 2.643 6.674c0 2.54-.957 4.86-2.525 6.614h-.003s-1.847-2.146-1.847-2.146a6.62 6.62 0 0 0 1.98-4.468v-.018a6.62 6.62 0 0 0-1.98-4.468s1.847-2.146 1.847-2.146h.003l-.118.084z"/>
                </svg>
              </div>
            </div>
          </button>

          {/* Others */}
          <div className="text-[11px] font-bold tracking-[0.14em] text-foreground/40 mt-6 mb-2 pl-1">
            {t('country.otherPlans')}
          </div>
          <div className="space-y-2">
            {others.map((p) => {
              const isSelected = selectedId === p.id;
              const isHighlighted = p.id === shortTripsId;
              const showBonus = (isHighlighted || isSelected) && bonusFor(p.data) > 0;
              const isMax = p.id === 'max';
              return (
                <div key={p.id} className={`relative ${isMax ? 'pt-3.5' : 'pt-2.5'}`}>
                  {isHighlighted && (
                    <div className={`absolute -top-0.5 z-10 ${isMax ? 'left-4' : 'left-3'}`}>
                      <span
                        className={`inline-flex items-center rounded-full font-bold tracking-wider text-white ${
                          isMax ? 'px-2.5 py-1 text-[10px]' : 'px-2 py-0.5 text-[9px]'
                        }`}
                        style={{ background: PURPLE }}
                      >
                        {t('country.shortTrips')}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedId(p.id)}
                    className={`w-full text-left rounded-xl flex items-center transition ${
                      isHighlighted
                        ? 'bg-[hsl(248_90%_97%)] border-2 border-[hsl(248_78%_60%)]'
                        : isSelected
                        ? 'bg-[hsl(248_90%_97%)] border-2 border-[hsl(248_78%_60%)]'
                        : 'bg-white border border-border/70'
                    } ${
                      isMax
                        ? 'px-5 py-5 gap-4 rounded-2xl'
                        : 'px-3 py-2.5 gap-2.5'
                    }`}
                  >
                    <Radio checked={isSelected} />
                    <div className="flex-1 min-w-0">
                      <div className={`font-bold text-foreground ${isMax ? 'text-[18px]' : 'text-[14px]'}`}>
                        {localizedDataUnit(p.data, lang)} · {localizedDaysLabel(p.days, lang)}
                      </div>
                      {showBonus && (
                        <div className={`mt-1 inline-flex items-center gap-1 font-semibold text-[hsl(150_65%_38%)] ${isMax ? 'text-[13px]' : 'text-[11px]'}`}>
                          <Gift className={`${isMax ? 'w-4 h-4' : 'w-3 h-3'}`} strokeWidth={2.4} />
                          {giftText(bonusFor(p.data))}
                        </div>
                      )}
                    </div>
                    <div className={`font-extrabold text-foreground shrink-0 ${isMax ? 'text-[19px]' : 'text-[15px]'}`}>
                      {p.priceLabel}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Sticky buy bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 pt-3 bg-gradient-to-t from-white via-white to-transparent">
        <button
          onClick={() => nav(`/app/checkout/${country.slug}/${selected.id}`)}
          className="w-full h-12 rounded-2xl text-white font-bold text-[15px] inline-flex items-center justify-center gap-2 shadow-[0_10px_28px_-10px_hsl(248_78%_60%/0.7)] active:scale-[0.99] transition"
          style={{ background: `linear-gradient(135deg, ${PURPLE} 0%, ${PURPLE_DARK} 100%)` }}
        >
          <span>{t('country.buy')} {selected.priceLabel}</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2.4} />
        </button>
      </div>
    </PhoneFrame>
  );
};

export default Country;
