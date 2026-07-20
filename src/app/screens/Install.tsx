import { useNavigate, useParams, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { useStore } from '../store';
import { useI18n } from '../i18n';

const Install = () => {
  const nav = useNavigate();
  const { orderId } = useParams();
  const { orders } = useStore();
  const order = orders.find((o) => o.id === orderId);
  const { t } = useI18n();

  const steps = [
    { n: 1, title: t('install.step1.title'), text: t('install.step1.text') },
    { n: 2, title: t('install.step2.title'), text: t('install.step2.text') },
    { n: 3, title: t('install.step3.title'), text: t('install.step3.text') },
  ];

  return (
    <PhoneFrame>
      <GradientHeader title={t('install.title')} back onBack={() => nav('/app/my-esim', { replace: true })} />
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-4 space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-white rounded-2xl border border-border p-4 flex gap-4 items-start shadow-[0_4px_16px_-10px_rgba(30,40,80,0.15)]">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(235_85%_55%)] to-[hsl(268_85%_60%)] flex items-center justify-center text-white text-2xl font-extrabold shrink-0">
                {s.n}
              </div>
              <div className="flex-1 pt-1">
                <div className="text-lg font-extrabold text-foreground leading-tight">{s.title}</div>
                <p className="text-sm text-foreground/70 mt-1.5 leading-snug">{s.text}</p>
              </div>
            </div>
          ))}

          {order && (
            <div className="text-xs text-center text-foreground/50 py-1">
              {t('install.order')} #{order.id.slice(-6)} · {order.countryName} · {order.planData}
            </div>
          )}

          <Link
            to="/app/support/chat"
            className="mt-2 w-full flex items-center gap-3 rounded-2xl p-4 text-white bg-gradient-to-r from-[hsl(230_82%_50%)] to-[hsl(268_82%_58%)] shadow-[0_10px_30px_-10px_rgba(90,60,220,0.5)]"
          >
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" fill="currentColor" />
            </div>
            <span className="flex-1 font-bold whitespace-nowrap">{t('install.needHelp')}</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Install;
