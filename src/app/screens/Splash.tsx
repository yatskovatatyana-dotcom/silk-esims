import { useNavigate } from 'react-router-dom';
import heroSplash from '@/assets/hero-splash-vertical.png.asset.json';

const Splash = () => {
  const nav = useNavigate();

  return (
    <div
      className="relative min-h-screen w-full text-white overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(240 75% 45%) 0%, hsl(260 70% 55%) 55%, hsl(275 65% 60%) 100%)' }}
    >
      <div className="absolute inset-0">
        <img src={heroSplash.url} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(240 75% 45% / 0.65) 0%, hsl(260 70% 55% / 0.35) 40%, hsl(240 75% 25% / 0.55) 100%)' }} />
      </div>
      <div className="relative flex flex-col min-h-screen px-8 pt-16 pb-10">
        <div className="pt-6">
          <h1 className="text-[36px] leading-[1.05] font-bold tracking-tight">
            Одна eSIM<br />на все поездки
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Мобильный интернет<br />в 180+ странах
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-3">
          <button
            onClick={() => nav('/app/countries')}
            className="w-full h-14 rounded-2xl bg-white text-[hsl(245_82%_52%)] font-bold text-[17px] hover:bg-white/95 transition shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]"
          >
            Смотреть все тарифы
          </button>
          <button
            onClick={() => nav('/app/login')}
            className="w-full h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/40 text-white font-bold text-[17px] hover:bg-white/25 transition"
          >
            Войти в аккаунт
          </button>
          <button
            onClick={() => nav('/app/home')}
            className="mt-1 text-white/80 text-sm font-medium hover:text-white transition"
          >
            Продолжить без входа →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Splash;
