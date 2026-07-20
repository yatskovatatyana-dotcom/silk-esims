import { useNavigate } from 'react-router-dom';
import splashMockup from '@/assets/screens/01-splash.png.asset.json';

const Splash = () => {
  const nav = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[hsl(245_70%_60%)]">
      <img
        src={splashMockup.url}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex flex-col min-h-screen px-8 pb-10 justify-end">
        <div className="flex flex-col gap-3">
          <button
            onClick={() => nav('/app/countries')}
            className="w-full h-14 rounded-2xl bg-[hsl(245_75%_55%)] text-white font-bold text-[17px] hover:bg-[hsl(245_75%_50%)] transition shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)]"
          >
            Начать
          </button>
          <button
            onClick={() => nav('/app/login')}
            className="w-full h-14 rounded-2xl bg-white text-[hsl(220_15%_25%)] font-semibold text-[15px] hover:bg-white/95 transition"
          >
            Уже есть аккаунт? <span className="text-[hsl(245_75%_55%)] font-bold">Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Splash;
