import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { useI18n, type TKey } from '../i18n';

const Support = () => {
  const nav = useNavigate();
  const { t } = useI18n();
  const faqKeys: TKey[] = ['support.faq.install', 'support.faq.works', 'support.faq.topup', 'support.faq.refund'];
  return (
    <PhoneFrame>
      <GradientHeader title={t('support.title')} back onBack={() => nav(-1)} />
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-4 space-y-5">
          <Link
            to="/app/support/chat"
            className="block rounded-2xl p-5 text-white bg-gradient-to-r from-[hsl(230_82%_50%)] to-[hsl(268_82%_58%)] shadow-[0_10px_30px_-10px_rgba(90,60,220,0.5)] relative"
          >
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(150_80%_55%)]" /> {t('support.online')}
            </span>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8" fill="currentColor" />
              </div>
              <div>
                <div className="text-xl font-bold">{t('support.chat')}</div>
              </div>
            </div>
          </Link>

          <div>
            <div className="text-2xl font-extrabold text-foreground mb-3">{t('support.faq')}</div>
            <div className="space-y-3">
              {faqKeys.map((k) => (
                <button
                  key={k}
                  className="w-full flex items-center gap-3 rounded-2xl border border-border p-5 text-left hover:bg-muted/40 transition"
                >
                  <span className="flex-1 font-bold text-foreground text-[15px]">{t(k)}</span>
                  <ChevronRight className="w-5 h-5 text-foreground/40" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Support;
