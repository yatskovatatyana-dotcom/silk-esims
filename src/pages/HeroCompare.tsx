import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const variants = [
  { label: 'Вариант 1', path: '/' },
  { label: 'Вариант 2', path: '/hero-2' },
];

const HeroCompare = () => {
  const frames = useRef<Array<HTMLIFrameElement | null>>([]);
  const syncing = useRef(false);

  const connectScroll = (index: number) => {
    const source = frames.current[index];
    const sourceWindow = source?.contentWindow;
    if (!sourceWindow) return;

    sourceWindow.addEventListener('scroll', () => {
      if (syncing.current) return;
      syncing.current = true;
      const ratio = sourceWindow.scrollY / Math.max(1, sourceWindow.document.documentElement.scrollHeight - sourceWindow.innerHeight);
      frames.current.forEach((frame, frameIndex) => {
        if (frameIndex === index || !frame?.contentWindow) return;
        const targetWindow = frame.contentWindow;
        const targetRange = Math.max(0, targetWindow.document.documentElement.scrollHeight - targetWindow.innerHeight);
        targetWindow.scrollTo({ top: ratio * targetRange });
      });
      window.setTimeout(() => { syncing.current = false; }, 30);
    }, { passive: true });
  };

  return (
    <main className="min-h-screen bg-muted px-4 py-5 md:px-8 md:py-7">
      <div className="mx-auto max-w-[880px]">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Сравнение главных экранов</h1>
            <p className="mt-1 text-sm text-muted-foreground">Прокрутка экранов синхронизирована</p>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="grid min-w-[810px] grid-cols-2 gap-6">
            {variants.map((variant, index) => (
              <section key={variant.path} className="min-w-0">
                <div className="mb-2 flex h-10 items-center justify-between gap-3">
                  <h2 className="font-semibold text-foreground">{variant.label}</h2>
                  <Button variant="ghost" size="icon" asChild title={`Открыть ${variant.label.toLowerCase()}`}>
                    <a href={variant.path} aria-label={`Открыть ${variant.label.toLowerCase()}`}>
                      <ExternalLink />
                    </a>
                  </Button>
                </div>
                <div className="h-[852px] overflow-hidden rounded-[28px] border border-border bg-background shadow-elegant">
                  <iframe
                    ref={(element) => { frames.current[index] = element; }}
                    src={variant.path}
                    title={variant.label}
                    onLoad={() => connectScroll(index)}
                    className="h-full w-full border-0"
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroCompare;