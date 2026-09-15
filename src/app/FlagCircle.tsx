import type { FC } from 'react';
import * as Flags from 'country-flag-icons/react/3x2';
import { getFlagCode } from '@/lib/flagCodes';

type Props = { slug: string; className?: string };

/** Official country flags (ISO 3166-1) in a circle. Fallback: initials badge. */
const FlagCircle: FC<Props> = ({ slug, className = 'w-14 h-14' }) => {
  const wrap = `rounded-full overflow-hidden shrink-0 ring-1 ring-black/10 flex items-center justify-center ${className}`;
  const code = getFlagCode(slug);
  const FlagSvg = code ? (Flags as Record<string, FC<{ className?: string }>>)[code] : undefined;

  if (!FlagSvg) {
    return (
      <div className={`${wrap} bg-gradient-to-br from-primary to-secondary`}>
        <span className="text-white font-bold text-xs">{slug.slice(0, 2).toUpperCase()}</span>
      </div>
    );
  }

  return (
    <div className={wrap} aria-hidden>
      <FlagSvg className="h-full w-[150%] max-w-none block" />
    </div>
  );
};

export default FlagCircle;
