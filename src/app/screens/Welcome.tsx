import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import welcomeOne from '@/assets/welcome-background-1.png';
import welcomeTwo from '@/assets/welcome-background-2.png';
import welcomePinkFinal from '@/assets/welcome-background-3-final.png';

export const WELCOME_KEY = 'silk-app-welcome-v1';

type Slide = {
  image: string;
  title?: string;
  body?: string;
  captionLines?: string[];
};

const slides: Slide[] = [
  { image: welcomeOne, title: 'Choose a country', body: 'where you need data — connect in just 1 minute' },
  { image: welcomeTwo, title: 'Top up your plans', body: 'worldwide without reinstalling your eSIM' },
  {
    image: welcomePinkFinal,
    captionLines: ['Crossing borders?', 'Stay connected anywhere', 'without the roaming fees'],
  },
];

const Welcome = () => {
  const navigate = useNavigate();
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

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-[max(3.1rem,env(safe-area-inset-top))] max-h-[700px]:pt-8">
          <div className="pointer-events-none relative flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-card before:absolute before:inset-[-4px] before:rounded-full before:border before:border-card/75">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Back"
              onClick={prev}
              className="pointer-events-auto h-10 w-10 rounded-full bg-card text-foreground shadow-none hover:bg-card/90"
            >
              <ChevronLeft className="h-7 w-7" strokeWidth={2.7} />
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            onClick={finish}
            className="h-10 px-0 text-[16px] font-bold text-foreground hover:bg-transparent hover:text-foreground/70"
          >
            Skip
          </Button>
        </div>

        <div
          key={`copy-${index}`}
          className={`absolute inset-x-4 z-10 text-center animate-[welcome-rise_0.5s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none ${slide.captionLines ? 'top-[58%] text-foreground' : 'top-[78%] text-foreground'}`}
        >
          {slide.title && (
            <h1 className="text-[22px] font-medium leading-[1.18] tracking-normal">
              {slide.title}
            </h1>
          )}
          {slide.body && (
            <p className="mx-auto mt-1.5 max-w-[290px] whitespace-pre-line text-[14px] font-medium leading-[1.35] text-foreground/85">
              {slide.body}
            </p>
          )}
          {slide.captionLines && (
            <div className="flex flex-col items-center gap-2 rounded-2xl bg-black/35 px-4 py-3 backdrop-blur-[2px]">
              <p className="w-full text-[20px] font-extrabold leading-[1.18] tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.85)]">
                {slide.captionLines[0]}
              </p>
              <p className="w-full text-[16px] font-extrabold leading-[1.22] tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.85)]">
                {slide.captionLines[1]}
              </p>
              <p className="w-full text-[16px] font-extrabold leading-[1.22] tracking-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.85)]">
                {slide.captionLines[2]}
              </p>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-10 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-card before:absolute before:inset-[-4px] before:rounded-full before:border before:border-card/75">
          <Button
            type="button"
            size="icon"
            aria-label={index === slides.length - 1 ? 'Get started' : 'Next'}
            onClick={next}
            className="pointer-events-auto h-[46px] w-[46px] rounded-full bg-card text-foreground shadow-none hover:bg-card/90"
          >
            <ChevronRight className="h-7 w-7" strokeWidth={2.7} />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Welcome;