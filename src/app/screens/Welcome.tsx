import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import welcomeOne from '@/assets/welcome-background-1.png';
import welcomeTwo from '@/assets/welcome-background-2.png';
import welcomePinkBase from '@/assets/welcome-background-3-heroes-sharpened-local.png';
import welcomeBluePlanet from '@/assets/welcome-saturn-blue-clean.png';
import welcomeYellowPlanet from '@/assets/welcome-saturn-yellow-clean.png';
import welcomeEarth from '@/assets/welcome-earth-clean.png';

export const WELCOME_KEY = 'silk-app-welcome-v1';

type Slide = {
  image: string;
  title: string;
  body: string;
  animatedPlanets?: boolean;
};

const slides: Slide[] = [
  { image: welcomeOne, title: 'Choose a country', body: 'where you need data — connect in just 1 minute' },
  { image: welcomeTwo, title: 'Top up your plans', body: 'worldwide without reinstalling your eSIM' },
  { image: welcomePinkBase, title: 'Choose a country', body: 'where you need data — connect in just 1 minute', animatedPlanets: true },
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

        {slide.animatedPlanets && (
          <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden="true">
            <img src={welcomeBluePlanet} alt="" className="welcome-planet welcome-planet-blue absolute inset-0 h-full w-full object-cover" />
            <img src={welcomeYellowPlanet} alt="" className="welcome-planet welcome-planet-yellow absolute inset-0 h-full w-full object-cover" />
            <img src={welcomeEarth} alt="" className="welcome-planet welcome-planet-earth absolute inset-0 h-full w-full object-cover" />
          </div>
        )}

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
          className="absolute inset-x-5 top-[77%] z-10 text-center text-foreground animate-[welcome-rise_0.5s_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none"
        >
          <h1 className="text-[22px] font-medium leading-[1.18] tracking-normal">
            {slide.title}
          </h1>
          <p className="mx-auto mt-1.5 max-w-[290px] whitespace-pre-line text-[14px] font-medium leading-[1.35] text-foreground/85">
            {slide.body}
          </p>
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