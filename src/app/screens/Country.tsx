import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Zap, Sparkles, ArrowUpRight, Wifi, Rocket, Calendar, Star } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { getCountry, type Plan } from '../data';

const iconMap = {
  bolt: Zap,
  sparkles: Sparkles,
  'arrow-up-right': ArrowUpRight,
  wifi: Wifi,
  rocket: Rocket,
} as const;

const PlanCard = ({ plan, onSelect }: { plan: Plan; onSelect: () => void }) => {
  const Icon = iconMap[plan.icon];
  return (
    <div className="relative">
      {plan.badge && (
        <div className="absolute -top-2.5 left-4 z-10">
          {plan.badge === 'hit' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-white text-[11px] font-bold bg-gradient-to-r from-primary to-secondary shadow-soft">
              <Star className="w-3 h-3" fill="currentColor" /> ХИТ
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-white text-[11px] font-bold bg-gradient-to-r from-primary to-secondary shadow-soft">
              Лучшая цена за ГБ
            </span>
          )}
        </div>
      )}
      <div className="bg-white rounded-2xl border border-border shadow-[0_4px_16px_-10px_rgba(30,40,80,0.15)] p-3.5">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-[hsl(245_82%_96%)] flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7 text-primary" strokeWidth={2.2} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold tracking-[0.08em] text-foreground/50 uppercase truncate">
              {plan.tier}
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-[24px] font-extrabold text-foreground leading-none">{plan.data}</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1.5 text-[13px] text-foreground/60">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">{plan.daysLabel}</span>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-[20px] font-extrabold text-foreground leading-none whitespace-nowrap">
              {plan.priceLabel}
            </div>
          </div>
        </div>
        <button
          onClick={onSelect}
          className="mt-3 w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground text-[14px] font-semibold h-11 hover:opacity-95 active:scale-[0.99] transition"
        >
          В корзину <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Country = () => {
  const { slug = '' } = useParams();
  const nav = useNavigate();
  const country = getCountry(slug);

  if (!country) {
    return (
      <PhoneFrame>
        <GradientHeader title="Страна не найдена" back onBack={() => nav(-1)} />
        <div className="flex-1 grid place-items-center text-foreground/60">—</div>
      </PhoneFrame>
    );
  }

  return (
    <PhoneFrame hideTabBar>
      <GradientHeader
        title={country.name}
        subtitle="Выберите пакет"
        back
        onBack={() => nav(-1)}
        className="pb-4"
      />
      <div className="flex-1 overflow-y-auto bg-[hsl(220_25%_97%)]">
        <div className="p-4 space-y-4 pt-6 pb-8">
          {country.plans.map((p) => (
            <PlanCard key={p.id} plan={p} onSelect={() => nav(`/app/checkout/${country.slug}/${p.id}`)} />
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Country;
