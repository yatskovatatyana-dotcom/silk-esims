import { Link, useNavigate } from 'react-router-dom';
import { Search, User, ArrowRight } from 'lucide-react';
import { PhoneFrame, StatusBar } from '../shell';
import { countries, homeCountries } from '../data';
import FlagCircle from '../FlagCircle';
import promoImg from '@/assets/promo-santorini.jpg';
import { useState } from 'react';
import { useI18n, getCountryName } from '../i18n';

const Home = () => {
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const { t, lang } = useI18n();

  const grid = homeCountries.map((s) => countries.find((c) => c.slug === s)!).filter(Boolean);
  const filtered = q.trim()
    ? countries.filter((c) => {
        const n = getCountryName(c.slug, c.name, lang).toLowerCase();
        return n.includes(q.toLowerCase());
      }).slice(0, 6)
    : [];

  return (
    <PhoneFrame>
      {/* Blue banner region */}
      <div className="relative text-white" style={{ background: 'linear-gradient(180deg, hsl(230 82% 42%) 0%, hsl(240 82% 50%) 100%)' }}>
        <StatusBar dark />
        <div className="text-center text-[19px] font-semibold pb-3 -mt-1">Silk eSIM</div>
        {/* Promo card */}
        <div className="mx-4 mb-5 rounded-2xl overflow-hidden relative bg-white/10 h-[160px]">
          <img src={promoImg} alt="" className="absolute inset-0 w-full h-full object-cover object-[75%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225_90%_20%)]/95 via-[hsl(225_85%_25%)]/70 to-transparent" />
          <div className="relative p-5 h-full flex flex-col justify-between">
            <div>
              <div className="text-[22px] font-bold leading-tight whitespace-pre-line text-foreground">{t('home.promoTitle')}</div>
              <div className="text-white text-sm mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">{t('home.promoSub')}</div>
            </div>
            <button
              onClick={() => nav('/app/country/turkey')}
              className="self-start bg-white text-primary font-semibold text-sm px-4 py-2 rounded-full hover:bg-white/95 transition"
            >
              {t('home.promoCta')}
            </button>
          </div>
        </div>
      </div>

      {/* Light area */}
      <div className="flex-1 overflow-y-auto rounded-t-3xl pt-4 px-4 pb-6" style={{ background: 'linear-gradient(180deg, hsl(220 45% 94%) 0%, hsl(0 0% 100%) 45%)' }}>
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
          {/* Search */}
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
                    <span className="ml-auto text-sm text-foreground/60">{t('common.from')} {c.from} ₽</span>
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

          {/* Country flag grid 3x2 */}
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
                  <div className="text-xs text-primary font-semibold mt-0.5">{t('common.from')} {c.from} ₽</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Home;
