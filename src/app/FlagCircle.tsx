import type { FC } from 'react';

type Props = { slug: string; className?: string };

// Simple flat-color SVG flags in a circle. Fallback: gradient with initials.
const FlagCircle: FC<Props> = ({ slug, className = 'w-14 h-14' }) => {
  const wrap = `rounded-full overflow-hidden shrink-0 ring-1 ring-black/5 ${className}`;
  const svg = (children: JSX.Element) => (
    <div className={wrap}>
      <svg viewBox="0 0 36 36" className="w-full h-full block" aria-hidden>{children}</svg>
    </div>
  );

  switch (slug) {
    case 'turkey':
      return svg(<>
        <rect width="36" height="36" fill="#E30917" />
        <circle cx="14.5" cy="18" r="6.2" fill="#fff" />
        <circle cx="16.2" cy="18" r="5" fill="#E30917" />
        <path d="M23.6 18l-4 1.3.55-4.2-2.55 3.35 3.9 1.55-2.35-3.5 4.45 1.5z" fill="#fff" transform="translate(0.5 0)" />
        <path d="M22 15.6l.55 1.7h1.8l-1.45 1.05.55 1.7-1.45-1.05-1.45 1.05.55-1.7-1.45-1.05h1.8z" fill="#fff" />
      </>);
    case 'thailand':
      return svg(<>
        <rect width="36" height="36" fill="#fff" />
        <rect y="0"  width="36" height="6" fill="#A51931" />
        <rect y="30" width="36" height="6" fill="#A51931" />
        <rect y="12" width="36" height="12" fill="#2D2A4A" />
      </>);
    case 'uae':
      return svg(<>
        <rect width="36" height="36" fill="#fff" />
        <rect x="9"  width="27" height="12" fill="#00732F" />
        <rect x="9" y="24" width="27" height="12" fill="#000" />
        <rect width="9" height="36" fill="#EF3340" />
      </>);
    case 'europe':
      return svg(<>
        <rect width="36" height="36" fill="#003399" />
        <g fill="#FFCC00">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 - 90) * (Math.PI / 180);
            return <circle key={i} cx={18 + 9 * Math.cos(a)} cy={18 + 9 * Math.sin(a)} r="1.4" />;
          })}
        </g>
      </>);
    case 'usa':
      return svg(<>
        <rect width="36" height="36" fill="#fff" />
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} y={i * 5.14} width="36" height="2.6" fill="#B22234" />
        ))}
        <rect width="15" height="18" fill="#3C3B6E" />
      </>);
    case 'japan':
      return svg(<>
        <rect width="36" height="36" fill="#fff" />
        <circle cx="18" cy="18" r="8" fill="#BC002D" />
      </>);
    case 'egypt':
      return svg(<>
        <rect width="36" height="36" fill="#CE1126" />
        <rect y="12" width="36" height="12" fill="#fff" />
        <rect y="24" width="36" height="12" fill="#000" />
        <path d="M18 15.5l1 2h2l-1.6 1.3.6 2L18 19.6l-2 1.2.6-2L15 17.5h2z" fill="#C0932B" />
      </>);
    case 'georgia':
      return svg(<>
        <rect width="36" height="36" fill="#fff" />
        <rect x="15.5" width="5" height="36" fill="#FF0000" />
        <rect y="15.5" width="36" height="5" fill="#FF0000" />
      </>);
    case 'vietnam':
      return svg(<>
        <rect width="36" height="36" fill="#DA251D" />
        <path d="M18 10l1.9 5.7h6l-4.85 3.5 1.85 5.7L18 21.4l-4.9 3.5 1.85-5.7-4.85-3.5h6z" fill="#FF0" />
      </>);
    case 'indonesia':
      return svg(<>
        <rect width="36" height="18" fill="#FF0000" />
        <rect y="18" width="36" height="18" fill="#fff" />
      </>);
    case 'south-korea':
      return svg(<>
        <rect width="36" height="36" fill="#fff" />
        <circle cx="18" cy="18" r="6" fill="#CD2E3A" />
        <path d="M12 18a6 6 0 0112 0 3 3 0 01-6 0 3 3 0 00-6 0z" fill="#0047A0" />
      </>);
    case 'singapore':
      return svg(<>
        <rect width="36" height="18" fill="#EF3340" />
        <rect y="18" width="36" height="18" fill="#fff" />
        <circle cx="10" cy="9" r="4" fill="#fff" />
        <circle cx="11.5" cy="9" r="4" fill="#EF3340" />
      </>);
    case 'italy':
      return svg(<>
        <rect width="12" height="36" fill="#008C45" />
        <rect x="12" width="12" height="36" fill="#fff" />
        <rect x="24" width="12" height="36" fill="#CD212A" />
      </>);
    case 'spain':
      return svg(<>
        <rect width="36" height="36" fill="#AA151B" />
        <rect y="9" width="36" height="18" fill="#F1BF00" />
      </>);
    case 'france':
      return svg(<>
        <rect width="12" height="36" fill="#0055A4" />
        <rect x="12" width="12" height="36" fill="#fff" />
        <rect x="24" width="12" height="36" fill="#EF4135" />
      </>);
    case 'germany':
      return svg(<>
        <rect width="36" height="12" fill="#000" />
        <rect y="12" width="36" height="12" fill="#DD0000" />
        <rect y="24" width="36" height="12" fill="#FFCE00" />
      </>);
    case 'greece':
      return svg(<>
        {[0,1,2,3,4,5,6,7,8].map(i => (
          <rect key={i} y={i * 4} width="36" height="4" fill={i%2===0?'#0D5EAF':'#fff'} />
        ))}
        <rect width="16" height="20" fill="#0D5EAF" />
        <rect x="7" width="2" height="20" fill="#fff" />
        <rect y="9" width="16" height="2" fill="#fff" />
      </>);
    case 'uk':
      return svg(<>
        <rect width="36" height="36" fill="#012169" />
        <path d="M0 0l36 36M36 0L0 36" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l36 36M36 0L0 36" stroke="#C8102E" strokeWidth="2" />
        <path d="M18 0v36M0 18h36" stroke="#fff" strokeWidth="8" />
        <path d="M18 0v36M0 18h36" stroke="#C8102E" strokeWidth="4" />
      </>);
    case 'canada':
      return svg(<>
        <rect width="36" height="36" fill="#fff" />
        <rect width="10" height="36" fill="#FF0000" />
        <rect x="26" width="10" height="36" fill="#FF0000" />
        <path d="M18 10l1 3 3-1-2 3 3 2-3 1 1 3-3-2-3 2 1-3-3-1 3-2-2-3 3 1z" fill="#FF0000" />
      </>);
    case 'mexico':
      return svg(<>
        <rect width="12" height="36" fill="#006847" />
        <rect x="12" width="12" height="36" fill="#fff" />
        <rect x="24" width="12" height="36" fill="#CE1126" />
      </>);
    case 'brazil':
      return svg(<>
        <rect width="36" height="36" fill="#009C3B" />
        <path d="M18 6l14 12-14 12L4 18z" fill="#FFDF00" />
        <circle cx="18" cy="18" r="6" fill="#002776" />
      </>);
    case 'morocco':
      return svg(<>
        <rect width="36" height="36" fill="#C1272D" />
        <path d="M18 12l1.9 5.7h5.9l-4.8 3.5 1.9 5.7L18 23.4l-4.9 3.5 1.9-5.7-4.8-3.5h5.9z" fill="none" stroke="#006233" strokeWidth="1" />
      </>);
    case 'south-africa':
      return svg(<>
        <rect width="36" height="36" fill="#002395" />
        <rect width="36" height="18" fill="#DE3831" />
        <path d="M0 0l18 18L0 36z" fill="#007749" />
        <path d="M0 4l14 14L0 32z" fill="#000" />
        <path d="M0 8l10 10L0 28z" fill="#FFB612" />
        <path d="M0 12l6 6L0 24z" fill="#000" />
      </>);
    case 'australia':
      return svg(<>
        <rect width="36" height="36" fill="#00008B" />
        <rect width="18" height="18" fill="#00008B" />
        <path d="M0 0l18 18M18 0L0 18" stroke="#fff" strokeWidth="3" />
        <path d="M9 0v18M0 9h18" stroke="#fff" strokeWidth="4" />
        <path d="M9 0v18M0 9h18" stroke="#FF0000" strokeWidth="2" />
        <circle cx="27" cy="9" r="1.5" fill="#fff" />
        <circle cx="30" cy="20" r="1.2" fill="#fff" />
        <circle cx="24" cy="24" r="1.2" fill="#fff" />
      </>);
    default:
      return (
        <div className={`${wrap} bg-gradient-to-br from-primary to-secondary flex items-center justify-center`}>
          <span className="text-white font-bold text-xs">{slug.slice(0, 2).toUpperCase()}</span>
        </div>
      );
  }
};

export default FlagCircle;
