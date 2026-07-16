import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroSplash from '@/assets/hero-splash-vertical.png.asset.json';

const Splash = () => {
  const nav = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => nav('/app/home', { replace: true }), 1500);
    return () => clearTimeout(t);
  }, [nav]);

  return (
    <div
      className="relative min-h-screen w-full text-white overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(240 75% 45%) 0%, hsl(260 70% 55%) 55%, hsl(275 65% 60%) 100%)' }}
    >
      <div className="absolute inset-0">
        <img src={heroSplash.url} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, hsl(240 75% 45% / 0.65) 0%, hsl(260 70% 55% / 0.35) 40%, transparent 65%)' }} />
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
        <div className="mt-auto flex flex-col items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
          <div className="text-white/70 text-sm tracking-wide">Silk eSIM</div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
