import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Globe2, Gift, ChevronRight } from 'lucide-react';
import heroArt from '@/assets/hero-banner-wide.png';
import { StatusBar } from '../shell';
import { useI18n, type TKey } from '../i18n';

export const WELCOME_KEY = 'silk-app-welcome-v1';

type Slide = {
  icon: typeof MapPin;
  title: TKey;
  body: TKey;
  /** how the shared artwork is framed for this slide */
  art: string;
  glow: string;
};

const slides: Slide[] = [
  {
    icon: MapPin,
    title: 'welcome.s1.title',
    body: 'welcome.s1.body',
    art: 'object-[94%_42%] scale-[1.02]',
    glow: 'from-[hsl(43_100%_62%)]/40',
  },
  {
    icon: Globe2,
    title: 'welcome.s2.title',
    body: 'welcome.s2.body',
    art: 'object-[74%_40%] scale-[1.3]',
    glow: 'from-[hsl(190_95%_60%)]/40',
  },
  {
    icon: Gift,
    title: 'welcome.s3.title',
    body: 'welcome.s3.body',
    art: 'object-[100%_46%] scale-[1.15]',
    glow: 'from-[hsl(18_95%_62%)]/40',
  },
];

const Welcome = () => {
  const nav = useNavigate();
  const { t, lang, toggleLang } = useI18n();
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const finish = () => {
    try { localStorage.setItem(WELCOME_KEY, '1'); } catch {}
    nav('/app/start');
  };

  const next = () => (index < slides.length - 1 ? setIndex(index + 1) : finish());
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const slide = slides[index];
  const Icon = slide.icon;
  const isLast = index === slides.length - 1;

  return (
    <div className="min-h-screen w-full bg-[hsl(220_25%_92%)] flex items-stretch justify-center">
      <div className="relative w-full max-w-[430px] h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[hsl(232_85%_44%)] via-[hsl(245_82%_50%)] to-[hsl(268_82%_58%)] text-white shadow-[0_20px_60px_-20px_rgba(30,40,80,0.25)]">
        <StatusBar dark />

        {/* Top row: skip + language */}
        <div className="relative z-20 flex items-center justify-between px-5 pt-1">
          <button
            onClick={finish}
            className="text-white/75 text-[13px] font-semibold hover:text-white transition"
          >
            {t('welcome.skip')}
          </button>
          <button
            onClick={toggleLang}
            className="h-8 px-3 rounded-full bg-white/15 backdrop-blur text-white text-[12px] font-bold hover:bg-white/25 transition"
          >
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>
        </div>

        {/* Artwork with heroes from the main banner */}
        <div
          className="relative flex-1 min-h-0"
          onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (dx < -45) next();
            if (dx > 45) prev();
            touchX.current = null;
          }}
        >
          <img
            key={index}
            src={heroArt}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out motion-reduce:transition-none ${slide.art}`}
          />
          <div className={`pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-gradient-to-br ${slide.glow} to-transparent blur-2xl animate-[soft-float_6s_ease-in-out_infinite] motion-reduce:animate-none`} />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[hsl(258_82%_50%)] to-transparent" />

          {/* dotted route + moving marker, echoing the banner style */}
          <svg
            viewBox="0 0 300 120"
            className="pointer-events-none absolute left-0 right-0 bottom-6 w-full h-24 opacity-70"
            fill="none"
          >
            <path
              d="M10 96 C70 96 90 30 150 30 S240 84 292 24"
              stroke="hsl(43 100% 68%)"
              strokeWidth="2"
              strokeDasharray="6 8"
              strokeLinecap="round"
              className="animate-[route-dash_3s_linear_infinite] motion-reduce:animate-none"
            />
          </svg>
        </div>

        {/* Copy card */}
        <div className="relative z-10 px-6 pb-8 pt-5">
          <div
            key={`copy-${index}`}
            className="animate-[welcome-rise_0.5s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/15 backdrop-blur ring-1 ring-white/25">
              <Icon className="w-6 h-6 text-[hsl(43_100%_68%)]" strokeWidth={2.2} />
            </div>
            <h1 className="mt-4 text-[27px] leading-[1.15] font-extrabold tracking-tight">
              {t(slide.title)}
            </h1>
            <p className="mt-2 text-white/80 text-[15px] leading-snug">
              {t(slide.body)}
            </p>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-[hsl(43_100%_66%)]' : 'w-2 bg-white/35'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="mt-5 w-full h-14 rounded-2xl bg-white text-[hsl(245_75%_46%)] font-bold text-[17px] inline-flex items-center justify-center gap-1.5 hover:bg-white/95 active:scale-[0.99] transition shadow-[0_12px_34px_-12px_rgba(10,10,60,0.55)]"
          >
            {isLast ? t('welcome.start') : t('welcome.next')}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
