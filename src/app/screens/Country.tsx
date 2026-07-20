import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Zap, Sparkles, ArrowDownRight, Wifi, Rocket, Calendar, Star, ChevronLeft } from 'lucide-react';
import { PhoneFrame, StatusBar } from '../shell';
import { getCountry, type Plan } from '../data';
import FlagCircle from '../FlagCircle';
import { useI18n, getCountryName, localizedDaysLabel, localizedDataUnit, localizedTier } from '../i18n';

const iconMap = {
  bolt: Zap,
  sparkles: Sparkles,
  'arrow-up-right': ArrowDownRight,
  wifi: Wifi,
  rocket: Rocket,
} as const;

const iconTint: Record<string, { bg: string; fg: string }> = {
  start:    { bg: 'bg-[hsl(160_55%_85%)]', fg: 'text-[hsl(165_55%_35%)]' },
  optimal:  { bg: 'bg-[hsl(245_70%_92%)]', fg: 'text-[hsl(245_70%_55%)]' },
  maximum:  { bg: 'bg-[hsl(20_85%_90%)]',  fg: 'text-[hsl(15_80%_60%)]' },
  super:    { bg: 'bg-[hsl(210_80%_92%)]', fg: 'text-[hsl(215_75%_58%)]' },
  ultra:    { bg: 'bg-[hsl(350_75%_92%)]', fg: 'text-[hsl(350_65%_60%)]' },
};

const PlanCard = ({ plan, onSelect }: { plan: Plan; onSelect: () => void }) => {
  const Icon = iconMap[plan.icon];
  const tint = iconTint[plan.id] ?? iconTint.start;
  const { t, lang } = useI18n();
  return (
    <div className="relative pt-3">
      {plan.badge === 'hit' && (
        <div className="absolute -top-0.5 left-4 z-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[12px] font-semibold bg-[hsl(245_70%_95%)] text-[hsl(245_70%_45%)]">
            <Star className="w-3 h-3" fill="currentColor" strokeWidth={0} />
            {t('country.badgeHit')}
          </span>
        </div>
      )}
      {plan.badge === 'best' && (
        <div className="absolute -top-0.5 left-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold text-white bg-gradient-to-r from-[hsl(268_75%_58%)] to-[hsl(280_70%_60%)]">
            {t('country.badgeBest')}
          </span>
        </div>
      )}
      <div className="bg-white rounded-2xl border border-border/60 shadow-[0_2px_10px_-6px_rgba(30,40,80,0.12)] p-3.5 flex items-center gap-3">
        <div className={`w-[60px] h-[60px] rounded-2xl ${tint.bg} flex items-center justify-center shrink-0`}>
          <Icon className={`w-7 h-7 ${tint.fg}`} strokeWidth={2.4} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[11px] font-semibold tracking-wider text-foreground/50 uppercase truncate">{localizedTier(plan.id, lang, t)}</div>
          <div className="flex items-baseline gap-2 mt-0.5 whitespace-nowrap">
            <div className="text-[22px] font-extrabold text-foreground leading-none">{localizedDataUnit(plan.data, lang)}</div>
            <div className="inline-flex items-center gap-1 text-[12px] text-foreground/60">
              <Calendar className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              <span>{localizedDaysLabel(plan.days, lang)}</span>
            </div>
          </div>
          <div className="text-[14px] font-semibold text-foreground/80 mt-1">{plan.priceLabel}</div>
        </div>
        <button
          onClick={onSelect}
          className="shrink-0 inline-flex items-center gap-1 rounded-full bg-[hsl(245_75%_58%)] text-white text-[13px] font-semibold pl-3.5 pr-2.5 py-2.5 hover:bg-[hsl(245_75%_52%)] active:scale-[0.98] transition"
        >
          {t('country.toCart')} <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Country = () => {
  const { slug = '' } = useParams();
  const nav = useNavigate();
  const country = getCountry(slug);
  const { t, lang } = useI18n();

  if (!country) {
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

  return (
    <PhoneFrame hideTabBar bg="bg-[hsl(220_25%_97%)]">
      <div className="bg-white border-b border-border/60">
        <StatusBar />
        <div className="relative h-14 flex items-center px-2">
          <button
            onClick={() => nav(-1)}
            aria-label={t('common.back')}
            className="inline-flex items-center gap-1 pl-2 pr-3 py-1.5 text-[hsl(245_75%_58%)] font-semibold text-[17px]"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.6} />
            {t('common.back')}
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <FlagCircle slug={country.slug} className="w-7 h-7" />
            <span className="text-[19px] font-bold text-foreground">{getCountryName(country.slug, country.name, lang)}</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pt-4 pb-8 space-y-4">
          {country.plans.map((p) => (
            <PlanCard key={p.id} plan={p} onSelect={() => nav(`/app/checkout/${country.slug}/${p.id}`)} />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Country;
