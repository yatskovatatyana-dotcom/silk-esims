import { useRef, useState } from 'react';
import { ExternalLink, Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const variants = [
  { label: 'Вариант 1', path: '/' },
  { label: 'Вариант 2', path: '/hero-2' },
];

const devices = {
  mobile: { label: 'Мобильный', width: 393, height: 852, scale: 0.45, radius: 28 },
  desktop: { label: 'Десктоп', width: 1440, height: 900, scale: 0.28, radius: 12 },
} as const;

type DeviceKey = keyof typeof devices;

const HeroCompare = () => {
  const frames = useRef<Array<HTMLIFrameElement | null>>([]);
  const syncing = useRef(false);
  const [device, setDevice] = useState<DeviceKey>('desktop');
  const config = devices[device];

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
      <div className="mx-auto max-w-[980px]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">Сравнение главных экранов</h1>
            <p className="mt-1 text-sm text-muted-foreground">Прокрутка экранов синхронизирована</p>
          </div>
          <div className="flex gap-1 rounded-full border border-border bg-background p-1">
            {(Object.keys(devices) as DeviceKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setDevice(key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  device === key ? 'bg-primary text-primary-foreground' : 'text-foreground/70 hover:bg-muted'
                }`}
              >
                {key === 'desktop' ? <Monitor className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
                {devices[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
              <div
                className="overflow-hidden border border-border bg-background shadow-elegant"
                style={{
                  width: config.width * config.scale,
                  height: config.height * config.scale,
                  borderRadius: config.radius,
                  maxWidth: '100%',
                }}
              >
                <iframe
                  key={`${variant.path}-${device}`}
                  ref={(element) => { frames.current[index] = element; }}
                  src={variant.path}
                  title={`${variant.label} — ${config.label}`}
                  onLoad={() => connectScroll(index)}
                  className="border-0"
                  style={{
                    width: config.width,
                    height: config.height,
                    transform: `scale(${config.scale})`,
                    transformOrigin: 'top left',
                  }}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HeroCompare;
