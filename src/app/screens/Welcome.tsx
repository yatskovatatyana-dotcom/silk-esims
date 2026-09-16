import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import welcomeOne from '@/assets/welcome-background-1.png';
import welcomeTwo from '@/assets/welcome-background-2.png';
import welcomeThree from '@/assets/welcome-background-3.png';
import { useI18n, type TKey } from '../i18n';

export const WELCOME_KEY = 'silk-app-welcome-v1';

type Slide = {
  image: string;
  title: TKey;
  body: TKey;
};

const slides: Slide[] = [
  { image: welcomeOne, title: 'welcome.s1.title', body: 'welcome.s1.body' },
  { image: welcomeTwo, title: 'welcome.s2.title', body: 'welcome.s2.body' },
  { image: welcomeThree, title: 'welcome.s3.title', body: 'welcome.s3.body' },
];

const Welcome = () => {
  const navigate = useNavigate();
  const { t, lang, toggleLang } = useI18n();
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  const finish = useCallback(() => {
    try { localStorage.setItem(WELCOME_KEY, '1'); } catch {}
    navigate('/app/start');
  }, [navigate]);

  const next = useCallback(() => {
    if (index < slides.length - 1) setIndex((current) => current + 1);
    else finish();
  }, [finish, index]);

  const prev = useCallback(() => {
    if (index > 0) setIndex((current) => current - 1);
    else navigate('/app/start');
  }, [index, navigate]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const slide = slides[index];

  return (
    <main className="min-h-screen w-full bg-muted flex items-stretch justify-center">
      <section
        className="relative h-[100dvh] w-full max-w-[430px] overflow-hidden bg-background text-foreground shadow-elegant touch-pan-y"
        aria-label={`${index + 1} / ${slides.length}`}
        onTouchStart={(event) => { touchX.current = event.touches[0]?.clientX ?? null; }}
        onTouchEnd={(event) => {
          if (touchX.current === null) return;
          const endX = event.changedTouches[0]?.clientX;
          if (endX === undefined) return;
          const distance = endX - touchX.current;
          if (distance < -45) next();
          if (distance > 45) prev();
          touchX.current = null;
        }}
      >
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover animate-[welcome-reveal_0.7s_ease-out_both] motion-reduce:animate-none"
        />

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-[max(3.1rem,env(safe-area-inset-top))] max-h-[700px]:pt-6">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={t('common.back')}
            onClick={prev}
            className="h-14 w-14 rounded-full border-[7px] border-card/45 bg-card text-foreground shadow-[0_0_0_2px_hsl(var(--card))] hover:bg-card/90 max-h-[700px]:h-12 max-h-[700px]:w-12 max-h-[700px]:border-[6px]"
          >
            <ChevronLeft className="h-7 w-7" strokeWidth={2.5} />
          </Button>

          <div className="flex items-center gap-4">
            <Button
              type="button"
              variant="ghost"
              onClick={toggleLang}
              className="h-10 px-1 text-[13px] font-bold text-foreground/70 hover:bg-transparent hover:text-foreground"
              aria-label={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={finish}
              className="h-10 px-0 text-[19px] font-bold text-foreground hover:bg-transparent hover:text-foreground/70"
            >
              {t('welcome.skip')}
            </Button>
          </div>
        </div>

        <div
          key={`copy-${index}-${lang}`}
          className="absolute inset-x-5 top-[69.5%] z-10 text-center text-foreground animate-[welcome-rise_0.5s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none max-h-[700px]:top-[68%]"
        >
          <h1 className="text-[28px] font-medium leading-[1.18] tracking-normal max-h-[700px]:text-[23px]">
            {t(slide.title)}
          </h1>
          <p className="mx-auto mt-1.5 max-w-[290px] whitespace-pre-line text-[18px] font-medium leading-[1.35] text-foreground/85 max-h-[700px]:mt-1 max-h-[700px]:text-[15px]">
            {t(slide.body)}
          </p>
        </div>

        <Button
          type="button"
          size="icon"
          aria-label={index === slides.length - 1 ? t('welcome.start') : t('welcome.next')}
          onClick={next}
          className="absolute bottom-[max(4.7rem,env(safe-area-inset-bottom))] left-1/2 z-10 h-16 w-16 -translate-x-1/2 rounded-full border-[8px] border-card/50 bg-card text-foreground shadow-[0_0_0_2px_hsl(var(--card))] hover:bg-card/90 max-h-[700px]:bottom-8 max-h-[700px]:h-14 max-h-[700px]:w-14 max-h-[700px]:border-[7px]"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={2.6} />
        </Button>
      </section>
    </main>
  );
};

export default Welcome;