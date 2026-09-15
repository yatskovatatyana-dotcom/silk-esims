import type { FC } from 'react';

type FlagProps = {
  country: string;
  className?: string;
};

const Flag: FC<FlagProps> = ({ country, className = 'w-6 h-6 md:w-7 md:h-7' }) => {
  const common = `rounded-full object-cover ring-1 ring-black/10 ${className}`;

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
          <rect width="36" height="36" fill="#CE1126" rx="18" />
          <rect y="12" width="36" height="12" fill="#fff" />
          <rect y="24" width="36" height="12" fill="#000" />
          <path d="M18 15.5l1 2h2l-1.6 1.3.6 2L18 19.6l-2 1.2.6-2L15 17.5h2z" fill="#C0932B" />
        </svg>
      );
    case 'georgia':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <rect x="15.5" width="5" height="36" fill="#FF0000" />
          <rect y="15.5" width="36" height="5" fill="#FF0000" />
        </svg>
      );
    case 'vietnam':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#DA251D" rx="18" />
          <path d="M18 10l1.9 5.7h6l-4.85 3.5 1.85 5.7L18 21.4l-4.9 3.5 1.85-5.7-4.85-3.5h6z" fill="#FF0" />
        </svg>
      );
    case 'indonesia':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="18" fill="#FF0000" rx="18" />
          <rect y="18" width="36" height="18" fill="#fff" />
        </svg>
      );
    case 'south-korea':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <circle cx="18" cy="18" r="6" fill="#CD2E3A" />
          <path d="M12 18a6 6 0 0112 0 3 3 0 01-6 0 3 3 0 00-6 0z" fill="#0047A0" />
        </svg>
      );
    case 'singapore':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="18" fill="#EF3340" rx="18" />
          <rect y="18" width="36" height="18" fill="#fff" />
          <circle cx="10" cy="9" r="4" fill="#fff" />
          <circle cx="11.5" cy="9" r="4" fill="#EF3340" />
        </svg>
      );
    case 'italy':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="12" height="36" fill="#008C45" />
          <rect x="12" width="12" height="36" fill="#fff" />
          <rect x="24" width="12" height="36" fill="#CD212A" />
          <clipPath id="fc-italy"><circle cx="18" cy="18" r="18" /></clipPath>
          <g clipPath="url(#fc-italy)">
            <rect width="12" height="36" fill="#008C45" />
            <rect x="12" width="12" height="36" fill="#fff" />
            <rect x="24" width="12" height="36" fill="#CD212A" />
          </g>
        </svg>
      );
    case 'spain':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#AA151B" rx="18" />
          <rect y="9" width="36" height="18" fill="#F1BF00" />
        </svg>
      );
    case 'france':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <clipPath id="fc-france"><circle cx="18" cy="18" r="18" /></clipPath>
          <g clipPath="url(#fc-france)">
            <rect width="12" height="36" fill="#0055A4" />
            <rect x="12" width="12" height="36" fill="#fff" />
            <rect x="24" width="12" height="36" fill="#EF4135" />
          </g>
        </svg>
      );
    case 'germany':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="12" fill="#000" />
          <rect y="12" width="36" height="12" fill="#DD0000" />
          <rect y="24" width="36" height="12" fill="#FFCE00" />
        </svg>
      );
    case 'greece':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#0D5EAF" rx="18" />
          {[1, 3].map((i) => (
            <rect key={i} y={i * 4} width="36" height="4" fill="#fff" />
          ))}
          <rect x="7" width="2" height="20" fill="#fff" />
          <rect y="9" width="16" height="2" fill="#fff" />
        </svg>
      );
    case 'portugal':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <clipPath id="fc-portugal"><circle cx="18" cy="18" r="18" /></clipPath>
          <g clipPath="url(#fc-portugal)">
            <rect width="14.4" height="36" fill="#046A38" />
            <rect x="14.4" width="21.6" height="36" fill="#DA291C" />
          </g>
          <circle cx="14.4" cy="18" r="4.5" fill="#FFE900" stroke="#000" strokeWidth="0.8" />
        </svg>
      );
    case 'uk':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#012169" rx="18" />
          <path d="M0 0l36 36M36 0L0 36" stroke="#fff" strokeWidth="6" />
          <path d="M0 0l36 36M36 0L0 36" stroke="#C8102E" strokeWidth="2" />
          <path d="M18 0v36M0 18h36" stroke="#fff" strokeWidth="8" />
          <path d="M18 0v36M0 18h36" stroke="#C8102E" strokeWidth="4" />
        </svg>
      );
    case 'canada':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#fff" rx="18" />
          <rect width="10" height="36" fill="#FF0000" />
          <rect x="26" width="10" height="36" fill="#FF0000" />
          <path d="M18 10l1 3 3-1-2 3 3 2-3 1 1 3-3-2-3 2 1-3-3-1 3-2-2-3 3 1z" fill="#FF0000" />
        </svg>
      );
    case 'mexico':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <clipPath id="fc-mexico"><circle cx="18" cy="18" r="18" /></clipPath>
          <g clipPath="url(#fc-mexico)">
            <rect width="12" height="36" fill="#006847" />
            <rect x="12" width="12" height="36" fill="#fff" />
            <rect x="24" width="12" height="36" fill="#CE1126" />
          </g>
        </svg>
      );
    case 'brazil':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#009C3B" rx="18" />
          <path d="M18 6l14 12-14 12L4 18z" fill="#FFDF00" />
          <circle cx="18" cy="18" r="6" fill="#002776" />
        </svg>
      );
    case 'morocco':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#C1272D" rx="18" />
          <path d="M18 12l1.9 5.7h5.9l-4.8 3.5 1.9 5.7L18 23.4l-4.9 3.5 1.9-5.7-4.8-3.5h5.9z" fill="none" stroke="#006233" strokeWidth="1" />
        </svg>
      );
    case 'south-africa':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#002395" rx="18" />
          <rect width="36" height="18" fill="#DE3831" />
          <path d="M0 0l18 18L0 36z" fill="#007749" />
          <path d="M0 4l14 14L0 32z" fill="#000" />
          <path d="M0 8l10 10L0 28z" fill="#FFB612" />
        </svg>
      );
    case 'australia':
      return (
        <svg viewBox="0 0 36 36" className={common} aria-hidden>
          <rect width="36" height="36" fill="#00008B" rx="18" />
          <path d="M0 0l18 18M18 0L0 18" stroke="#fff" strokeWidth="3" />
          <path d="M9 0v18M0 9h18" stroke="#fff" strokeWidth="4" />
          <path d="M9 0v18M0 9h18" stroke="#FF0000" strokeWidth="2" />
          <circle cx="27" cy="9" r="1.5" fill="#fff" />
          <circle cx="30" cy="20" r="1.2" fill="#fff" />
          <circle cx="24" cy="24" r="1.2" fill="#fff" />
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
