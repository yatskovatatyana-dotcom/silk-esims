import { Home, Headphones, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useI18n } from './i18n';

/** Fake iPhone status bar with 9:41 and icons */
export const StatusBar = ({ dark = false }: { dark?: boolean }) => {
  const color = dark ? 'text-white' : 'text-foreground';
  return (
    <div className={`h-11 px-6 flex items-center justify-between text-[15px] font-semibold ${color} shrink-0`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* signal */}
        <svg viewBox="0 0 18 12" className="w-4 h-3" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.6" />
          <rect x="5" y="5" width="3" height="7" rx="0.6" />
          <rect x="10" y="2" width="3" height="10" rx="0.6" />
          <rect x="15" y="0" width="3" height="12" rx="0.6" />
        </svg>
        {/* wifi */}
        <svg viewBox="0 0 16 12" className="w-4 h-3" fill="currentColor">
          <path d="M8 12l2.5-3a3 3 0 00-5 0L8 12z" />
          <path d="M2 5.5a9 9 0 0112 0l-1.4 1.7a7 7 0 00-9.2 0L2 5.5z" />
        </svg>
        {/* battery */}
        <svg viewBox="0 0 26 12" className="w-6 h-3">
          <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" fill="none" stroke="currentColor" />
          <rect x="23.5" y="4" width="2" height="4" rx="0.5" fill="currentColor" />
          <rect x="2" y="2" width="19" height="8" rx="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

/** Gradient blue→violet header used on nearly every screen (2-13) */
export const GradientHeader = ({
  title,
  back,
  subtitle,
  onBack,
  extra,
  className = '',
}: {
  title?: ReactNode;
  subtitle?: ReactNode;
  back?: boolean;
  onBack?: () => void;
  extra?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-gradient-to-br from-[hsl(230_85%_45%)] via-[hsl(245_82%_52%)] to-[hsl(268_85%_58%)] text-white ${className}`}>
      <StatusBar dark />
      <div className="relative px-5 pb-5 pt-1">
        {back && (
          <button
            aria-label="Назад"
            onClick={onBack}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
        {title && (
          <h1 className="text-center text-[22px] font-bold tracking-tight leading-tight">
            {title}
          </h1>
        )}
        {subtitle && (
          <div className="text-center text-white/85 text-sm mt-1">{subtitle}</div>
        )}
        {extra}
      </div>
    </div>
  );
};

export const BottomTabBar = () => {
  const { pathname } = useLocation();
  const { t } = useI18n();
  const tabs = [
    { to: '/app/home', label: t('tab.home'), icon: Home, match: (p: string) => p === '/app/home' || p === '/app' || p.startsWith('/app/country') || p.startsWith('/app/countries') || p.startsWith('/app/checkout') },
    { to: '/app/support', label: t('tab.support'), icon: Headphones, match: (p: string) => p.startsWith('/app/support') || p.startsWith('/app/install') },
    { to: '/app/profile', label: t('tab.profile'), icon: User, match: (p: string) => p.startsWith('/app/profile') || p.startsWith('/app/my-esim') || p.startsWith('/app/login') || p.startsWith('/app/register') },
  ];
  return (
    <nav className="h-[72px] border-t border-border bg-white flex items-stretch shrink-0">
      {tabs.map((t) => {
        const active = t.match(pathname);
        const Icon = t.icon;
        return (
          <Link
            key={t.to}
            to={t.to}
            className={`flex-1 flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
              active ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            <Icon className="w-6 h-6" strokeWidth={active ? 2.4 : 1.8} fill={active ? 'currentColor' : 'none'} />
            <span>{t.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

/** The mobile "phone" viewport. On desktop we constrain width to ~420px and center. */
export const PhoneFrame = ({
  children,
  hideTabBar = false,
  bg = 'bg-white',
}: {
  children: ReactNode;
  hideTabBar?: boolean;
  bg?: string;
}) => {
  return (
    <div className="min-h-screen w-full bg-[hsl(220_25%_92%)] flex items-stretch justify-center">
      <div className={`w-full max-w-[430px] h-screen flex flex-col ${bg} shadow-[0_20px_60px_-20px_rgba(30,40,80,0.25)]`}>
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">{children}</div>
        {!hideTabBar && <BottomTabBar />}
      </div>
    </div>
  );
};
