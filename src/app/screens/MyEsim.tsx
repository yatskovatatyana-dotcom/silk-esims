import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Check, Clock, Plus, RefreshCw } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { useStore } from '../store';
import { countries, popularCountries } from '../data';
import FlagCircle from '../FlagCircle';
import { useI18n, getCountryName } from '../i18n';

const MyEsim = () => {
  const nav = useNavigate();
  const { orders } = useStore();
  const { t, lang } = useI18n();

  const active = orders[0];
  const pending = orders[1];
  const popular = popularCountries.map((s) => countries.find((c) => c.slug === s)!).filter(Boolean);

  return (
    <PhoneFrame>
      <GradientHeader title={t('myesim.title')} className="pb-6" />
      <div className="flex-1 overflow-y-auto bg-white -mt-2 rounded-t-3xl">
        <div className="p-4 space-y-4">
          {!active && (
            <div className="rounded-2xl border border-border p-6 text-center bg-muted/40">
              <div className="text-foreground font-bold">{t('myesim.emptyTitle')}</div>
              <p className="text-sm text-foreground/60 mt-1">{t('myesim.emptyText')}</p>
              <Link
                to="/app/countries"
                className="inline-flex items-center gap-1 mt-4 text-primary font-bold text-sm"
              >
                {t('common.allCountries')} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {active && (
            <div className="rounded-2xl bg-white border border-border p-4 shadow-[0_4px_16px_-10px_rgba(30,40,80,0.15)]">
              <button className="w-full flex items-center gap-3 text-left">
                <FlagCircle slug={active.countrySlug} className="w-14 h-14" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-xl text-foreground leading-tight">{getCountryName(active.countrySlug, active.countryName, lang)}</div>
                  <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-[hsl(150_60%_92%)] text-[hsl(150_60%_28%)]">
                    <Check className="w-3 h-3" strokeWidth={3} /> {t('myesim.active')}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-foreground/40" />
              </button>

              <div className="mt-4 text-sm text-foreground/60">
                {t('myesim.validUntil')} {new Date(active.createdAt + active.planDays * 86400000).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', { day: 'numeric', month: 'long' })}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-sm text-foreground/60">{t('myesim.traffic')}</div>
                  <RefreshCw className="w-4 h-4 text-foreground/40" />
                </div>
                <div className="font-bold text-foreground">{t('myesim.remaining')} {active.planData}</div>
                <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-[hsl(150_65%_45%)]" style={{ width: '50%' }} />
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-foreground/60 mb-1.5">{t('myesim.days')}</div>
                <div className="font-bold text-foreground">{t('myesim.daysOf')} {active.planDays} {t('common.daysShort')}</div>
                <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-[hsl(40_95%_55%)]" style={{ width: `${Math.min(100, (20/active.planDays)*100)}%` }} />
                </div>
              </div>

              <button
                onClick={() => nav(`/app/country/${active.countrySlug}`)}
                className="mt-5 w-full flex items-center gap-3 rounded-2xl bg-muted/50 border border-border p-3.5 text-left hover:bg-muted transition"
              >
                <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-primary" strokeWidth={2.4} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-foreground text-sm">{t('myesim.addPlan')} {getCountryName(active.countrySlug, active.countryName, lang)}</div>
                  <div className="text-xs text-foreground/60">{t('myesim.addPlanSub')}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-foreground/40" />
              </button>
            </div>
          )}

          {pending && (
            <div className="rounded-2xl bg-white border border-border p-4">
              <div className="flex items-center gap-3">
                <FlagCircle slug={pending.countrySlug} className="w-14 h-14" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-xl text-foreground leading-tight">{getCountryName(pending.countrySlug, pending.countryName, lang)}</div>
                  <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-primary/10 text-primary">
                    <Clock className="w-3 h-3" /> {t('myesim.pending')}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-foreground/40" />
              </div>
              <div className="mt-3 font-bold text-foreground">{pending.planData} · {pending.planDays} {t('common.daysShort')}</div>
              <div className="text-sm text-foreground/60">{t('myesim.pendingSub')}</div>
            </div>
          )}

          <Link
            to="/app/countries"
            className="w-full flex items-center justify-center gap-2 rounded-2xl border border-border p-3.5 text-primary font-bold hover:bg-primary/5 transition"
          >
            <Plus className="w-5 h-5" strokeWidth={2.4} /> {t('myesim.addCountry')}
          </Link>

          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-foreground text-lg">{t('common.popular')}</div>
              <Link to="/app/countries" className="text-primary text-sm font-bold">{t('common.all')}</Link>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {popular.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => nav(`/app/country/${c.slug}`)}
                  className="flex flex-col items-center gap-2 shrink-0 w-16"
                >
                  <FlagCircle slug={c.slug} className="w-14 h-14" />
                  <div className="text-xs font-semibold text-foreground truncate w-full text-center">{getCountryName(c.slug, c.name, lang)}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default MyEsim;
