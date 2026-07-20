import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PhoneFrame, GradientHeader } from '../shell';
import { getCountry } from '../data';
import FlagCircle from '../FlagCircle';
import { useStore } from '../store';
import { useI18n, getCountryName, localizedDaysLabel, localizedDataUnit } from '../i18n';

type Method = 'sbp' | 'crypto';

const Checkout = () => {
  const nav = useNavigate();
  const { slug = '', planId = '' } = useParams();
  const country = getCountry(slug);
  const plan = country?.plans.find((p) => p.id === planId);
  const { addOrder, auth } = useStore();
  const { t, lang } = useI18n();
  const [method, setMethod] = useState<Method | null>(null);
  const [email, setEmail] = useState(auth?.email ?? '');

  if (!country || !plan) {
    return (
      <PhoneFrame hideTabBar>
        <GradientHeader title={t('checkout.title')} back onBack={() => nav(-1)} />
        <div className="flex-1 grid place-items-center text-foreground/60">{t('checkout.planNotFound')}</div>
      </PhoneFrame>
    );
  }

  const pay = () => {
    const order = addOrder({
      countrySlug: country.slug,
      countryName: country.name,
      planData: plan.data.replace('GB', 'ГБ'),
      planDays: plan.days,
      price: plan.price,
      priceLabel: plan.priceLabel,
    });
    nav(`/app/install/${order.id}`, { replace: true });
  };

  const methods: { id: Method; label: string; icon: JSX.Element }[] = [
    { id: 'sbp', label: t('checkout.sbp'),
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7">
          <defs>
            <linearGradient id="sbpg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#1BB53C"/>
              <stop offset="0.5" stopColor="#5BC5B5"/>
              <stop offset="1" stopColor="#2E7CE2"/>
            </linearGradient>
          </defs>
          <path d="M4 4l8 8-8 8V4z" fill="url(#sbpg)"/>
          <path d="M20 4l-8 8 8 8V4z" fill="#E62A6C" opacity="0.85"/>
        </svg>
      ) },
    { id: 'crypto', label: t('checkout.crypto'),
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7"><circle cx="12" cy="12" r="10" fill="#F7931A"/><text x="12" y="16.5" textAnchor="middle" fontSize="14" fontWeight="900" fill="#fff" fontFamily="Arial">₿</text></svg>
      ) },
  ];

  return (
    <PhoneFrame hideTabBar>
      <GradientHeader title={t('checkout.title')} back onBack={() => nav(-1)} className="pb-16" />
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="mx-4 -mt-10 relative z-10 bg-white rounded-2xl border border-border shadow-[0_10px_30px_-14px_rgba(30,40,80,0.25)] p-4 flex items-center gap-4">
          <FlagCircle slug={country.slug} className="w-14 h-14" />
          <div className="flex-1 min-w-0">
            <div className="font-extrabold text-xl text-foreground leading-tight">{getCountryName(country.slug, country.name, lang)}</div>
            <div className="text-sm text-foreground/60 mt-1">{localizedDataUnit(plan.data, lang)} · {localizedDaysLabel(plan.days, lang)}</div>
          </div>
          <div className="font-extrabold text-2xl text-foreground">{plan.priceLabel}</div>
        </div>

        <div className="px-5 pt-8">
          <div className="text-foreground font-extrabold text-lg mb-3">{t('checkout.method')}</div>
          <div className="space-y-3">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`w-full flex items-center gap-3 rounded-2xl border p-3.5 text-left transition ${
                  method === m.id ? 'border-primary bg-primary/5' : 'border-border bg-white hover:bg-muted/40'
                }`}
              >
                <div className="w-11 h-11 rounded-full bg-muted flex items-center justify-center">
                  {m.icon}
                </div>
                <span className="flex-1 font-semibold text-foreground">{m.label}</span>
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  method === m.id ? 'border-primary' : 'border-foreground/25'
                }`}>
                  {method === m.id && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <label className="block text-foreground font-extrabold text-base mb-2">{t('checkout.emailLabel')}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full h-13 py-3.5 px-4 rounded-2xl border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="p-5 pt-8">
          <button
            onClick={pay}
            className="w-full py-4 rounded-2xl font-bold text-white text-lg bg-gradient-to-r from-[hsl(230_82%_50%)] to-[hsl(268_82%_58%)] hover:opacity-95 active:scale-[0.99] transition shadow-[0_10px_30px_-10px_rgba(90,60,220,0.5)]"
          >
            {t('checkout.pay')} {plan.priceLabel}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Checkout;
