import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Globe, FileText, Shield, Trash2, User, ArrowRight, Clock, Search } from 'lucide-react';
import { PhoneFrame, GradientHeader, StatusBar } from '../shell';
import { useStore } from '../store';
import FlagCircle from '../FlagCircle';
import { countries, popularCountries } from '../data';
import { useState } from 'react';

const ProfileEmpty = () => {
  const [q, setQ] = useState('');
  const popular = popularCountries.map((s) => countries.find((c) => c.slug === s)!).filter(Boolean);

  return (
    <PhoneFrame>
      <div className="text-white pb-4" style={{ background: 'linear-gradient(180deg, hsl(235 85% 48%) 0%, hsl(265 80% 58%) 100%)' }}>
        <StatusBar dark />
        <div className="px-5 pt-2 pb-4">
          <h1 className="text-[28px] font-bold">Профиль</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-white -mt-6 rounded-t-3xl">
        <div className="p-4 space-y-4">
          <Link
            to="/app/login"
            className="flex items-center gap-3 bg-white rounded-2xl border border-border shadow-[0_6px_20px_-10px_rgba(30,40,80,0.2)] px-4 py-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-primary" strokeWidth={2.2} fill="currentColor" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-foreground">Уже есть аккаунт?</div>
              <p className="text-xs text-foreground/60 leading-snug mt-0.5">Войдите, чтобы управлять покупками и eSIM</p>
            </div>
            <div className="text-primary font-bold text-sm flex items-center gap-1">
              Войти <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <div className="text-center py-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-primary/5 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-20 h-20 text-primary">
                <rect x="18" y="20" width="28" height="30" rx="3" fill="currentColor" opacity="0.9"/>
                <rect x="26" y="14" width="12" height="8" rx="2" fill="currentColor"/>
                <circle cx="32" cy="35" r="7" fill="#fff"/>
                <path d="M32 30 v10 M27 35 h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mt-4 font-bold text-xl text-foreground">Пока пусто</div>
            <p className="text-sm text-foreground/60 mt-1.5 max-w-[280px] mx-auto">
              Здесь будут отображаться ваши eSIM, покупки и активные пакеты после входа в аккаунт.
            </p>
          </div>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Поиск страны"
              className="w-full h-12 pl-12 pr-4 rounded-full bg-muted text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <div className="rounded-2xl border border-border bg-white p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="font-bold text-foreground">Популярные направления</div>
              <Link to="/app/countries" className="text-primary text-sm font-bold flex items-center gap-1">
                Все страны <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {popular.map((c) => (
                <Link key={c.slug} to={`/app/country/${c.slug}`} className="flex flex-col items-center gap-1.5 shrink-0 w-16">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden">
                    <FlagCircle slug={c.slug} className="w-14 h-14 !rounded-2xl" />
                  </div>
                  <div className="text-[11px] font-semibold text-foreground truncate w-full text-center">{c.name}</div>
                </Link>
              ))}
            </div>
          </div>

          <button className="w-full flex items-center gap-3 rounded-2xl border border-border p-3.5 bg-white">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <span className="flex-1 text-left font-semibold text-foreground">Язык приложения</span>
            <span className="text-foreground/60 text-sm">Русский</span>
            <ChevronDown className="w-4 h-4 text-foreground/40" />
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

const ProfileLoggedIn = () => {
  const nav = useNavigate();
  const { auth, orders, setAuth } = useStore();
  const email = auth?.email ?? '—';

  return (
    <PhoneFrame>
      <GradientHeader title="Профиль" className="pb-8" />
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-4 -mt-2">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <User className="w-12 h-12 text-primary" strokeWidth={2} fill="currentColor" />
            </div>
            <div className="min-w-0">
              <div className="font-bold text-xl text-foreground truncate">{email}</div>
              <div className="text-sm text-foreground/60 mt-0.5">Спасибо, что с нами!</div>
            </div>
          </div>

          <details className="rounded-2xl bg-white border border-border p-4 group" open>
            <summary className="flex items-center gap-3 cursor-pointer list-none">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="flex-1 font-bold text-foreground">История покупок</span>
              <ChevronDown className="w-5 h-5 text-foreground/40 group-open:rotate-180 transition" />
            </summary>
            <div className="mt-3 space-y-2 border-t border-border pt-3">
              {orders.length === 0 && (
                <div className="text-sm text-foreground/60 py-2 text-center">Покупок пока нет</div>
              )}
              {orders.map((o) => (
                <div key={o.id} className="flex items-center gap-3">
                  <FlagCircle slug={o.countrySlug} className="w-11 h-11" />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-foreground">{o.countryName}</div>
                    <div className="text-xs text-foreground/60">{o.planData} — {o.planDays} дней</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-foreground">{o.priceLabel}</div>
                    <div className="text-xs text-foreground/60">
                      {new Date(o.createdAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>

          <div className="rounded-2xl bg-white border border-border overflow-hidden">
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/40 transition">
              <Globe className="w-5 h-5 text-primary" />
              <span className="flex-1 text-left font-semibold text-foreground">Язык</span>
              <span className="text-foreground/60 text-sm">Русский</span>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
            </button>
            <div className="h-px bg-border" />
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/40 transition">
              <FileText className="w-5 h-5 text-primary" />
              <span className="flex-1 text-left font-semibold text-foreground">Условия использования</span>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
            </button>
            <div className="h-px bg-border" />
            <button className="w-full flex items-center gap-3 p-4 hover:bg-muted/40 transition">
              <Shield className="w-5 h-5 text-primary" />
              <span className="flex-1 text-left font-semibold text-foreground">Политика конфиденциальности</span>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
            </button>
          </div>

          <button
            onClick={() => { setAuth(null); nav('/app/home'); }}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-primary/5 border border-primary/20 py-4 text-primary font-bold hover:bg-primary/10 transition"
          >
            <Trash2 className="w-5 h-5" /> Удалить профиль
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
