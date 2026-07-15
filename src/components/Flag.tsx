import type { FC } from 'react';

type FlagProps = {
  country: 'turkey' | 'thailand' | 'uae' | 'europe' | 'usa' | 'japan' | 'egypt' | 'vietnam' | 'georgia' | 'global';
  className?: string;
};

const Flag: FC<FlagProps> = ({ country, className = 'w-6 h-6 md:w-7 md:h-7' }) => {
  const common = `rounded-full object-cover ${className}`;

  switch (country) {
    case 'turkey':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#E30917" rx="18" />
          <circle cx="15.5" cy="18" r="6" fill="none" stroke="#fff" strokeWidth="1.8" />
          <path d="M22.2 18l-5.4 1.8 2.1-4.9 4.2 3.1-4.2 3.1-2.1-4.9 5.4 1.8z" fill="#fff" />
        </svg>
      );
    case 'thailand':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <rect y="5" width="36" height="5" fill="#B7312C" />
          <rect y="26" width="36" height="5" fill="#B7312C" />
          <rect y="12" width="36" height="12" fill="#2E4EA7" />
        </svg>
      );
    case 'uae':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <rect x="10" width="26" height="12" fill="#00732F" />
          <rect x="10" y="12" width="26" height="12" fill="#fff" />
          <rect x="10" y="24" width="26" height="12" fill="#000" />
          <rect width="10" height="36" fill="#B7312C" rx="18" />
        </svg>
      );
    case 'europe':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#2E4EA7" rx="18" />
          <g fill="#FFCE00">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 - 90) * (Math.PI / 180);
              const x = 18 + 8 * Math.cos(angle);
              const y = 18 + 8 * Math.sin(angle);
              return <circle key={i} cx={x} cy={y} r="1.4" />;
            })}
          </g>
        </svg>
      );
    case 'usa':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          {[0, 2, 4, 6, 8, 10].map((i) => (
            <rect key={i} y={i * 3} width="36" height="3" fill="#B7312C" />
          ))}
          <rect width="15" height="18" fill="#2E4EA7" />
        </svg>
      );
    case 'japan':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <circle cx="18" cy="18" r="7" fill="#B7312C" />
        </svg>
      );
    case 'egypt':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <rect y="0" width="36" height="12" fill="#B7312C" />
          <rect y="12" width="36" height="12" fill="#fff" />
          <rect y="24" width="36" height="12" fill="#000" />
          <path d="M18 9l1.8 5.5h5.8l-4.7 3.4 1.8 5.5-4.7-3.4-4.7 3.4 1.8-5.5-4.7-3.4h5.8z" fill="#C09300" />
        </svg>
      );
    case 'vietnam':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#DA251D" rx="18" />
          <path d="M18 8l2.5 6.3h6.8l-5.5 4 2.1 6.4-5.9-4.3-5.9 4.3 2.1-6.4-5.5-4h6.8z" fill="#FFCE00" />
        </svg>
      );
    case 'georgia':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <rect x="16" y="0" width="4" height="36" fill="#B7312C" />
          <rect x="0" y="16" width="36" height="4" fill="#B7312C" />
          <rect x="17" y="3" width="2" height="5" fill="#B7312C" />
          <rect x="17" y="28" width="2" height="5" fill="#B7312C" />
          <rect x="3" y="17" width="5" height="2" fill="#B7312C" />
          <rect x="28" y="17" width="5" height="2" fill="#B7312C" />
          <circle cx="9" cy="9" r="2" fill="#C09300" />
          <circle cx="27" cy="9" r="2" fill="#C09300" />
          <circle cx="9" cy="27" r="2" fill="#C09300" />
          <circle cx="27" cy="27" r="2" fill="#C09300" />
        </svg>
      );
    case 'global':
    default:
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#2E4EA7" rx="18" />
          <circle cx="18" cy="18" r="12" fill="none" stroke="#4FC3F7" strokeWidth="2" />
          <ellipse cx="18" cy="18" rx="5" ry="12" fill="none" stroke="#4FC3F7" strokeWidth="2" />
          <path d="M6 18h24M18 6c3 4 3 20 0 24M18 6c-3 4-3 20 0 24" fill="none" stroke="#4FC3F7" strokeWidth="2" />
        </svg>
      );
  }
};

export default Flag;
