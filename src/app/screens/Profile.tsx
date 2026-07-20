import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Globe, FileText, Shield, Trash2, User, ArrowRight, Clock, Search } from 'lucide-react';
import { PhoneFrame, GradientHeader, StatusBar } from '../shell';
import { useStore } from '../store';
import { useI18n } from '../i18n';
import FlagCircle from '../FlagCircle';
import { countries, popularCountries } from '../data';
import { useState } from 'react';

const ProfileEmpty = () => {
  const [q, setQ] = useState('');
  const { t, lang, setLang } = useI18n();
  const popular = popularCountries.map((s) => countries.find((c) => c.slug === s)!).filter(Boolean);

  return (
    <PhoneFrame>
      <div className="text-white pb-4" style={{ background: 'linear-gradient(180deg, hsl(235 85% 48%) 0%, hsl(265 80% 58%) 100%)' }}>
        <StatusBar dark />
        <div className="px-5 pt-2 pb-4">
          <h1 className="text-[28px] font-bold">{t('profile.title')}</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-white -mt-6 rounded-t-3xl">
        <div className="flex flex-col h-full p-4 justify-between">
          <Link
            to="/app/login"
            className="flex items-center gap-3 bg-white rounded-2xl border border-border shadow-[0_6px_20px_-10px_rgba(30,40,80,0.2)] px-4 py-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-primary" strokeWidth={2.2} fill="currentColor" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-foreground">{t('profile.haveAccount')}</div>
              <p className="text-xs text-foreground/60 leading-snug mt-0.5">{t('profile.loginToManage')}</p>
            </div>
            <div className="text-primary font-bold text-sm flex items-center gap-1">
              {t('profile.login')} <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <div className="text-center py-1">
            <svg viewBox="0 0 240 200" className="w-48 h-36 mx-auto block" aria-hidden>
              <defs>
                <linearGradient id="suitGrad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="hsl(230 80% 62%)" />
                  <stop offset="1" stopColor="hsl(230 75% 48%)" />
                </linearGradient>
              </defs>
              <ellipse cx="45" cy="70" rx="18" ry="6" fill="hsl(230 40% 92%)" />
              <ellipse cx="200" cy="60" rx="22" ry="7" fill="hsl(230 40% 92%)" />
              <path d="M0 165 L50 120 L90 160 L140 105 L200 165 Z" fill="hsl(230 40% 92%)" />
              <g fill="hsl(230 55% 82%)">
                <path d="M55 160 q-5 -30 10 -50 q5 25 -10 50 z" />
                <path d="M72 162 q-10 -25 5 -45 q8 22 -5 45 z" />
                <path d="M185 162 q10 -28 -6 -50 q-7 25 6 50 z" />
                <path d="M168 164 q6 -22 -8 -42 q-4 22 8 42 z" />
              </g>
              <ellipse cx="120" cy="180" rx="55" ry="5" fill="hsl(230 30% 80%)" opacity="0.35" />
              <rect x="102" y="52" width="36" height="8" rx="3" fill="hsl(230 65% 50%)" />
              <rect x="105" y="38" width="30" height="22" rx="6" fill="none" stroke="hsl(230 65% 50%)" strokeWidth="4" />
              <rect x="70" y="60" width="100" height="115" rx="10" fill="url(#suitGrad)" />
              <line x1="95" y1="60" x2="95" y2="175" stroke="hsl(230 85% 40%)" strokeWidth="2" opacity="0.55" />
              <line x1="145" y1="60" x2="145" y2="175" stroke="hsl(230 85% 40%)" strokeWidth="2" opacity="0.55" />
              <circle cx="120" cy="117" r="24" fill="none" stroke="#fff" strokeWidth="3" />
              <ellipse cx="120" cy="117" rx="10" ry="24" fill="none" stroke="#fff" strokeWidth="3" />
              <line x1="96" y1="117" x2="144" y2="117" stroke="#fff" strokeWidth="3" />
              <circle cx="88" cy="180" r="6" fill="hsl(230 65% 35%)" />
              <circle cx="152" cy="180" r="6" fill="hsl(230 65% 35%)" />
              <g stroke="hsl(230 70% 55%)" strokeWidth="2" strokeLinecap="round">
                <line x1="180" y1="55" x2="190" y2="55" />
                <line x1="185" y1="50" x2="185" y2="60" />
                <line x1="195" y1="42" x2="203" y2="42" />
              </g>
            </svg>
            <div className="mt-1 font-bold text-xl text-foreground">{t('profile.empty')}</div>
            <p className="text-sm text-foreground/60 mt-1 max-w-[280px] mx-auto">
              {t('profile.emptyDesc')}
            </p>
          </div>

          <div className="relative mt-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('common.searchCountry')}
              className="w-full h-12 pl-12 pr-4 rounded-full bg-muted text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="p-2">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="font-bold text-foreground">{t('common.popular')}</div>
              <Link to="/app/countries" className="text-primary text-sm font-bold flex items-center gap-1">
                {t('common.allCountries')} <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {popular.map((c) => (
                <Link key={c.slug} to={`/app/country/${c.slug}`} className="flex flex-col items-center gap-1 min-w-0">
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <FlagCircle slug={c.slug} className="w-12 h-12 !rounded-xl" />
                  </div>
                  <div className="text-[11px] font-semibold text-foreground truncate w-full text-center">{c.name}</div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center gap-3 p-2 bg-white">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <span className="flex-1 text-left font-semibold text-foreground">{t('profile.language')}</span>
            <div className="flex items-center rounded-full bg-muted p-1 gap-1">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-sm font-bold transition ${lang === 'en' ? 'bg-primary text-white' : 'text-foreground/60 hover:text-foreground'}`}
              >
                Eng
              </button>
              <button
                onClick={() => setLang('ru')}
                className={`px-3 py-1 rounded-full text-sm font-bold transition ${lang === 'ru' ? 'bg-primary text-white' : 'text-foreground/60 hover:text-foreground'}`}
              >
                Ru
              </button>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

const ProfileLoggedIn = () => {
  const nav = useNavigate();
  const { auth, orders, setAuth } = useStore();
  const { t, lang, setLang } = useI18n();
  const email = auth?.email ?? '—';

  return (
    <PhoneFrame>
      <GradientHeader title={t('profile.title')} className="pb-8" />
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-4 -mt-2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(230_85%_55%)] to-[hsl(265_85%_60%)] flex items-center justify-center shrink-0 shadow-[0_10px_30px_-10px_rgba(90,60,220,0.4)]">
              <User className="w-14 h-14 text-white" strokeWidth={2} fill="currentColor" />
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-2xl text-foreground truncate">{email}</div>
              <div className="text-sm text-foreground/60 mt-0.5">{t('profile.thanks')}</div>
            </div>
          </div>

          <details className="rounded-2xl bg-white border border-border p-4 group" open>
            <summary className="flex items-center gap-3 cursor-pointer list-none">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="flex-1 font-bold text-foreground">{t('profile.history')}</span>
              <ChevronDown className="w-5 h-5 text-foreground/40 group-open:rotate-180 transition" />
            </summary>
            <div className="mt-3 space-y-2 border-t border-border pt-3">
              {orders.length === 0 && (
                <div className="text-sm text-foreground/60 py-2 text-center">{t('profile.noOrders')}</div>
              )}
              {orders.map((o) => (
                <div key={o.id} className="flex items-center gap-3">
                  <FlagCircle slug={o.countrySlug} className="w-11 h-11" />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-foreground">{o.countryName}</div>
                    <div className="text-xs text-foreground/60">{o.planData} — {o.planDays} {t('common.days')}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{o.priceLabel}</div>
                    <div className="text-xs text-foreground/60">
                      {new Date(o.createdAt).toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>

          <div className="rounded-2xl bg-white border border-border overflow-hidden">
            <div className="w-full flex items-center gap-3 p-4">
              <Globe className="w-5 h-5 text-primary" />
              <span className="flex-1 text-left font-semibold text-foreground">{t('profile.language.short')}</span>
              <div className="flex items-center rounded-full bg-muted p-1 gap-1">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full text-sm font-bold transition ${lang === 'en' ? 'bg-primary text-white' : 'text-foreground/60 hover:text-foreground'}`}
                >
                  Eng
                </button>
                <button
                  onClick={() => setLang('ru')}
                  className={`px-3 py-1 rounded-full text-sm font-bold transition ${lang === 'ru' ? 'bg-primary text-white' : 'text-foreground/60 hover:text-foreground'}`}
                >
                  Ru
                </button>
              </div>
            </div>
            <div className="h-px bg-border" />
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/40 transition">
              <FileText className="w-5 h-5 text-primary" />
              <span className="flex-1 text-left font-semibold text-foreground">{t('profile.terms')}</span>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
            </button>
            <div className="h-px bg-border" />
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/40 transition">
              <Shield className="w-5 h-5 text-primary" />
              <span className="flex-1 text-left font-semibold text-foreground">{t('profile.privacy')}</span>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
            </button>
          </div>

          <button
            onClick={() => { setAuth(null); nav('/app/home'); }}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary/5 border border-primary/20 py-4 text-primary font-bold hover:bg-primary/10 transition"
          >
            <Trash2 className="w-5 h-5" /> {t('profile.delete')}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

const Profile = () => {
  const { auth } = useStore();
  return auth ? <ProfileLoggedIn /> : <ProfileEmpty />;
};

export default Profile;
