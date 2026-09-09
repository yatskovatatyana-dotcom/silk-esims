import { useTranslation } from 'react-i18next';
import heroWide from '@/assets/hero-wide-modern.png.asset.json';
import heroMobile from '@/assets/hero-mobile-clean.png.asset.json';
import alternateHero from '@/assets/illustration-heroes-matching-legs.webp';

type HeroProps = {
  variant?: 'current' | 'alternate';
};

const Hero = ({ variant = 'current' }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-foreground">
        {variant === 'alternate' ? (
          <img
            src={alternateHero}
            alt=""
            className="h-full w-full object-cover object-[64%_center] md:object-center"
            width={1536}
            height={1024}
          />
        ) : (
          <picture>
            <source media="(min-width: 768px)" srcSet={heroWide.url} />
            <img
              src={heroMobile.url}
              alt=""
              className="h-full w-full object-cover object-center"
              width={960}
              height={1920}
            />
          </picture>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
      </div>

      <div className="container relative mx-auto flex min-h-screen items-center max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="text-white font-bold text-5xl md:text-7xl leading-[0.95] tracking-tight">
            {t('heroNew.line1')}{' '}
            <br className="hidden md:block" />
            {t('heroNew.line2a')}{' '}
            <span className="text-secondary">{t('heroNew.line2b')}</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white/90 font-medium">
            {t('heroNew.subtitleA')}{' '}
            <span className="text-secondary font-semibold">{t('heroNew.subtitleB')}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;