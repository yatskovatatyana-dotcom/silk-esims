import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { getCountry } from '../data';
import FlagCircle from '../FlagCircle';
import { useStore } from '../store';

type Method = 'card' | 'sbp' | 'crypto';

const Checkout = () => {
  const nav = useNavigate();
  const { slug = '', planId = '' } = useParams();
  const country = getCountry(slug);
  const plan = country?.plans.find((p) => p.id === planId);
  const { addOrder, auth } = useStore();
  const [method, setMethod] = useState<Method>('card');
  const [email, setEmail] = useState(auth?.email ?? '');

  if (!country || !plan) {
    return (
      <PhoneFrame hideTabBar>
        <GradientHeader title="Оформление" back onBack={() => nav(-1)} />
        <div className="flex-1 grid place-items-center text-foreground/60">Тариф не найден</div>
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

  const methods: { id: Method; label: string; icon: JSX.Element; bg: string }[] = [
    { id: 'card', label: 'Банковская карта', bg: 'bg-primary/10',
      icon: <CreditCard className="w-6 h-6 text-primary" strokeWidth={2.2} /> },
    { id: 'sbp', label: 'СБП', bg: 'bg-[hsl(150_60%_95%)]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6"><path d="M4 4l7 8-7 8V4z" fill="url(#g1)"/><path d="M20 4l-7 8 7 8V4z" fill="#0abab5"/><defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#c1e820"/><stop offset="1" stopColor="#0abab5"/></linearGradient></defs></svg>
      ) },
    { id: 'crypto', label: 'Криптовалюта', bg: 'bg-[hsl(40_95%_95%)]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6"><circle cx="12" cy="12" r="10" fill="#f7931a"/><text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="900" fill="#fff" fontFamily="serif">₿</text></svg>
      ) },
  ];

  return (
    <PhoneFrame hideTabBar>
      <GradientHeader title="Оформление" back onBack={() => nav(-1)} className="pb-8" />
      <div className="flex-1 overflow-y-auto bg-white">
        {/* Summary card */}
        <div className="mx-4 -mt-6 bg-white rounded-2xl border border-border shadow-[0_10px_30px_-14px_rgba(30,40,80,0.2)] p-4 flex items-center gap-4">
          <FlagCircle slug={country.slug} className="w-14 h-14" />
          <div className="flex-1 min-w-0">
            <div className="font-bold text-lg text-foreground">{country.name}</div>
            <div className="text-sm text-foreground/60 mt-0.5">{plan.data.replace('GB','ГБ')} · {plan.daysLabel}</div>
          </div>
          <div className="font-extrabold text-xl text-foreground">{plan.priceLabel}</div>
        </div>

        <div className="px-5 pt-8">
          <div className="text-foreground font-bold text-lg mb-3">Способ оплаты</div>
          <div className="space-y-3">
            {methods.map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`w-full flex items-center gap-3 rounded-2xl border p-3.5 text-left transition ${
                  method === m.id ? 'border-primary bg-primary/5' : 'border-border bg-white hover:bg-muted/40'
                }`}
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center ${m.bg}`}>
                  {m.icon}
                </div>
                <span className="flex-1 font-semibold text-foreground">{m.label}</span>
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  method === m.id ? 'border-primary' : 'border-foreground/30'
                }`}>
                  {method === m.id && <span className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6">
            <label className="block text-foreground font-bold text-base mb-2">Email для чека</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full h-12 px-4 rounded-2xl border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="p-5 pt-8">
          <button
            onClick={pay}
            className="w-full h-13 py-3.5 rounded-full font-bold text-white text-base bg-gradient-to-r from-[hsl(230_82%_50%)] to-[hsl(268_82%_58%)] hover:opacity-95 active:scale-[0.99] transition shadow-[0_10px_30px_-10px_rgba(90,60,220,0.5)]"
          >
            Оплатить {plan.priceLabel}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Checkout;
