import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, User, ArrowRight } from 'lucide-react';
import { PhoneFrame, StatusBar } from '../shell';
import { countries, homeCountries } from '../data';
import FlagCircle from '../FlagCircle';
import alarmClock from '@/assets/discount-alarm.png';
import { useState } from 'react';
import { useI18n, getCountryName } from '../i18n';

type Variant = {
  id: string;
  label: string;
  bg: string;
  glow: string;
  chip: string;
  chipText: string;
  ctaBg: string;
  ctaText: string;
  title: string;
  sub: string;
};

/** Colour directions for the discount banner, tuned against the app's indigo shell. */
const variants: Variant[] = [
  {
    id: 'violet',
    label: 'Violet',
    bg: 'linear-gradient(135deg, hsl(258 84% 62%) 0%, hsl(276 78% 58%) 48%, hsl(320 80% 62%) 100%)',
    glow: 'hsl(288 82% 64% / 0.5)',
    chip: 'rgba(255,255,255,0.22)',
    chipText: '#ffffff',
    ctaBg: '#ffffff',
    ctaText: 'hsl(268 72% 46%)',
    title: '#ffffff',
    sub: 'rgba(255,255,255,0.86)',
  },
  {
    id: 'emerald',
    label: 'Emerald',
    bg: 'linear-gradient(135deg, hsl(168 62% 30%) 0%, hsl(158 68% 38%) 55%, hsl(150 62% 46%) 100%)',
    glow: 'hsl(158 70% 45% / 0.45)',
    chip: 'rgba(255,255,255,0.22)',
    chipText: '#ffffff',
    ctaBg: '#ffffff',
    ctaText: 'hsl(168 62% 26%)',
    title: '#ffffff',
    sub: 'rgba(255,255,255,0.82)',
  },
  {
    id: 'gold',
    label: 'Gold',
    bg: 'linear-gradient(135deg, hsl(43 96% 62%) 0%, hsl(36 96% 56%) 60%, hsl(28 92% 52%) 100%)',
    glow: 'hsl(36 96% 56% / 0.45)',
    chip: 'rgba(255,255,255,0.28)',
    chipText: '#ffffff',
    ctaBg: '#ffffff',
    ctaText: 'hsl(28 88% 42%)',
    title: '#ffffff',
    sub: 'rgba(255,255,255,0.9)',
  },
  {
    id: 'midnight',
    label: 'Midnight',
    bg: 'linear-gradient(135deg, hsl(240 45% 8%) 0%, hsl(248 55% 14%) 55%, hsl(258 62% 22%) 100%)',
    glow: 'hsl(262 82% 66% / 0.5)',
    chip: 'rgba(255,255,255,0.14)',
    chipText: 'rgba(255,255,255,0.92)',
    ctaBg: '#ffffff',
    ctaText: 'hsl(248 55% 16%)',
    title: '#ffffff',
    sub: 'rgba(255,255,255,0.72)',
  },
  {
    id: 'coral',
    label: 'Coral',
    bg: 'linear-gradient(135deg, hsl(8 92% 68%) 0%, hsl(354 88% 62%) 60%, hsl(342 82% 56%) 100%)',
    glow: 'hsl(354 88% 62% / 0.45)',
    chip: 'rgba(255,255,255,0.26)',
    chipText: '#ffffff',
    ctaBg: '#ffffff',
    ctaText: 'hsl(354 78% 48%)',
    title: '#ffffff',
    sub: 'rgba(255,255,255,0.88)',
  },
  {
    id: 'cyan',
    label: 'Cyan',
    bg: 'linear-gradient(135deg, hsl(215 60% 22%) 0%, hsl(200 78% 34%) 55%, hsl(190 88% 46%) 100%)',
    glow: 'hsl(192 90% 52% / 0.5)',
    chip: 'rgba(255,255,255,0.18)',
    chipText: '#ffffff',
    ctaBg: '#ffffff',
    ctaText: 'hsl(202 78% 30%)',
    title: '#ffffff',
    sub: 'rgba(255,255,255,0.8)',
  },
];

const DiscountHome = () => {
  const nav = useNavigate();
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState('');
  const { t, lang } = useI18n();

  const active = variants.find((v) => v.id === params.get('v')) ?? variants[0];

  const copy = {
    urgency: lang === 'ru' ? 'Спешите! Ограниченное предложение' : 'Hurry! Limited time offer',
    titlePre: lang === 'ru' ? 'Скидка до' : 'Save up to',
    sub: lang === 'ru' ? 'Путешествуйте больше\nплатите меньше' : 'Travel more\npay less',
    cta: lang === 'ru' ? 'Выбрать пакет' : 'Choose a plan',
  };

  const grid = homeCountries.map((s) => countries.find((c) => c.slug === s)!).filter(Boolean);
  const filtered = q.trim()
    ? countries
        .filter((c) => getCountryName(c.slug, c.name, lang).toLowerCase().includes(q.toLowerCase()))
        .slice(0, 6)
    : [];

  return (
    <PhoneFrame>
      {/* Blue banner region */}
      <div className="relative text-white" style={{ background: 'linear-gradient(180deg, hsl(230 82% 42%) 0%, hsl(240 82% 50%) 100%)' }}>
        <StatusBar dark />
        <div className="text-center text-[19px] font-semibold pb-3 -mt-1">Silk eSIM</div>

        {/* Discount banner */}
        <div
          className="mx-4 mb-5 rounded-2xl overflow-hidden relative h-[196px]"
          style={{ background: active.bg, boxShadow: `0 14px 34px -14px ${active.glow}` }}
        >
          {/* soft radial glow behind the clock */}
          <div
            className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[62%] aspect-square rounded-full"
            style={{ background: `radial-gradient(circle, ${active.glow} 0%, transparent 68%)` }}
          />
          <img
            src={alarmClock}
            alt=""
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-[150px] h-[150px] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.28)]"
          />

          <div className="relative h-full flex flex-col justify-between p-4 max-w-[68%]">
            <div>
              <span
                className="inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold leading-none"
                style={{ background: active.chip, color: active.chipText }}
              >
                {copy.urgency}
              </span>
              <div className="mt-2 flex items-baseline gap-1.5" style={{ color: active.title }}>
                <span className="text-[17px] font-semibold tracking-tight">{copy.titlePre}</span>
                <span className="text-[34px] font-extrabold leading-none tracking-tight">35</span>
                <span className="text-[19px] font-bold">%</span>
              </div>
              <p
                className="text-[12px] font-medium mt-1.5 whitespace-pre-line leading-[1.25]"
                style={{ color: active.sub }}
              >
                {copy.sub}
              </p>
            </div>
            <button
              onClick={() => nav('/app/countries')}
              className="self-start font-semibold text-[13px] px-4 py-2.5 rounded-full hover:brightness-105 active:scale-[0.98] transition inline-flex items-center gap-1.5 whitespace-nowrap shadow-[0_6px_16px_-6px_rgba(0,0,0,0.45)]"
              style={{ background: active.ctaBg, color: active.ctaText }}
            >
              {copy.cta} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Light area */}
      <div
        className="flex-1 overflow-y-auto rounded-t-3xl pt-4 px-4 pb-6"
        style={{ background: 'linear-gradient(180deg, hsl(220 45% 94%) 0%, hsl(0 0% 100%) 45%)' }}
      >
        {/* Colour variant switcher */}
        <div className="flex items-center gap-2 mb-4 overflow-x-auto no-scrollbar">
          {variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setParams({ v: v.id })}
              className={`shrink-0 flex items-center gap-2 rounded-full border pl-1.5 pr-3 py-1.5 text-[12px] font-semibold transition ${
                v.id === active.id ? 'border-primary text-primary bg-white' : 'border-border text-foreground/60 bg-white/70'
              }`}
            >
              <span className="w-5 h-5 rounded-full border border-black/5" style={{ background: v.bg }} />
              {v.label}
            </button>
          ))}
        </div>

        {/* Login row */}
        <Link
          to="/app/login"
          className="flex items-center gap-3 bg-white rounded-2xl border border-border shadow-[0_4px_16px_-8px_rgba(30,40,80,0.15)] px-4 py-3 mb-4"
        >
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
            <User className="w-6 h-6" strokeWidth={2.2} fill="currentColor" />
          </div>
          <div className="flex-1 text-foreground font-medium">{t('home.haveAccount')}</div>
          <div className="text-primary font-bold text-sm flex items-center gap-1">
            {t('home.login')} <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        {/* Search + countries card */}
        <div className="rounded-3xl bg-white border border-border shadow-[0_4px_16px_-8px_rgba(30,40,80,0.12)] p-4">
          <div className="relative mb-3">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('home.searchPlaceholder')}
              className="w-full h-12 pl-5 pr-12 rounded-full bg-muted text-foreground text-[15px] placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            {filtered.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white border border-border shadow-elegant z-10 overflow-hidden">
                {filtered.map((c) => (
                  <button
                    key={c.slug}
                    onClick={() => nav(`/app/country/${c.slug}`)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted text-left"
                  >
                    <FlagCircle slug={c.slug} className="w-8 h-8" />
                    <span className="font-semibold text-foreground">{getCountryName(c.slug, c.name, lang)}</span>
                    <span className="ml-auto text-sm text-foreground/60">€{c.plans[0].price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end mb-4">
            <Link to="/app/countries" className="inline-flex items-center gap-1 text-primary text-sm font-bold">
              {t('common.allCountries')} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-5">
            {grid.map((c) => (
              <button
                key={c.slug}
                onClick={() => nav(`/app/country/${c.slug}`)}
                className="flex flex-col items-center gap-2 group"
              >
                <FlagCircle slug={c.slug} className="w-[72px] h-[72px] group-hover:scale-105 transition" />
                <div className="text-center">
                  <div className="font-bold text-foreground text-[15px]">{getCountryName(c.slug, c.name, lang)}</div>
                  <div className="text-xs text-primary font-semibold mt-0.5">€{c.plans[0].price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default DiscountHome;
