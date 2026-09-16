import type { FC } from 'react';
import * as Flags from 'country-flag-icons/react/3x2';
import { getFlagCode } from '@/lib/flagCodes';

type FlagProps = {
  country: string;
  className?: string;
};

/** Official country flags (ISO 3166-1) rendered inside a circle. */
const Flag: FC<FlagProps> = ({ country, className = 'w-6 h-6 md:w-7 md:h-7' }) => {
  const wrap = `rounded-full overflow-hidden shrink-0 ring-1 ring-black/10 flex items-center justify-center bg-muted ${className}`;
  const code = getFlagCode(country);
  const FlagSvg = code ? (Flags as Record<string, FC<{ className?: string }>>)[code] : undefined;

  if (!FlagSvg) {
    return (
      <span className={wrap} aria-hidden>
        <svg viewBox="0 0 36 36" className="w-full h-full block">
          <rect width="36" height="36" fill="#2E4EA7" />
          <circle cx="18" cy="18" r="12" fill="none" stroke="#4FC3F7" strokeWidth="2" />
          <ellipse cx="18" cy="18" rx="5" ry="12" fill="none" stroke="#4FC3F7" strokeWidth="2" />
          <path d="M6 18h24M18 6c3 4 3 20 0 24M18 6c-3 4-3 20 0 24" fill="none" stroke="#4FC3F7" strokeWidth="2" />
        </svg>
      </span>
    );
  }

  return (
    <span className={wrap} aria-hidden>
      <FlagSvg className="block h-full w-[150%] min-w-[150%] max-w-none shrink-0" />
    </span>
  );
};

export default Flag;
