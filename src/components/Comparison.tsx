import { Check, Minus, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Comparison = () => {
  const { t } = useTranslation();

  const rows: Array<{ key: string; silk: 'yes'; roaming: 'yes' | 'no'; other: 'yes' | 'sometimes' | 'often' }> = [
    { key: 'install',     silk: 'yes', roaming: 'no',  other: 'sometimes' },
    { key: 'number',      silk: 'yes', roaming: 'yes', other: 'yes' },
    { key: 'transparent', silk: 'yes', roaming: 'no',  other: 'yes' },
    { key: 'affordable',  silk: 'yes', roaming: 'no',  other: 'often' },
    { key: 'instant',     silk: 'yes', roaming: 'no',  other: 'yes' },
  ];

  const Cell = ({ value }: { value: 'yes' | 'no' | 'sometimes' | 'often' }) => {
    if (value === 'yes')
      return (
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center"><Check className="w-3.5 h-3.5" /></span>
          {t('comparison.yes')}
        </span>
      );
    if (value === 'no')
      return (
        <span className="inline-flex items-center gap-1.5 text-sm text-foreground/50">
          <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center"><X className="w-3.5 h-3.5" /></span>
          {t('comparison.no')}
        </span>
      );
    if (value === 'sometimes')
      return (
        <span className="inline-flex items-center gap-1.5 text-sm text-foreground/70">
          <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center"><Minus className="w-3.5 h-3.5" /></span>
          {t('comparison.sometimes')}
        </span>
      );
    return (
      <span className="text-sm text-foreground/70">{t('comparison.often')}</span>
    );
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-lg text-foreground/60">{t('comparison.subtitle')}</p>
        </div>

        <div className="rounded-3xl border border-border overflow-hidden bg-card">
          <div className="hidden md:grid grid-cols-4 bg-muted/60 text-xs font-bold uppercase tracking-wider text-foreground/60">
            <div className="p-5">{t('comparison.headers.feature')}</div>
            <div className="p-5 bg-primary/10 text-primary">{t('comparison.headers.silk')}</div>
            <div className="p-5">{t('comparison.headers.roaming')}</div>
            <div className="p-5">{t('comparison.headers.otherEsim')}</div>
          </div>

          {rows.map((row, idx) => (
            <div
              key={row.key}
              className={`grid md:grid-cols-4 border-t border-border ${idx % 2 ? 'bg-muted/20' : ''}`}
            >
              <div className="p-5 font-semibold text-foreground">{t(`comparison.rows.${row.key}`)}</div>
              <div className="p-5 md:bg-primary/5"><Cell value={row.silk} /></div>
              <div className="p-5"><span className="md:hidden text-xs uppercase tracking-wider text-foreground/40 mr-2">{t('comparison.headers.roaming')}: </span><Cell value={row.roaming} /></div>
              <div className="p-5"><span className="md:hidden text-xs uppercase tracking-wider text-foreground/40 mr-2">{t('comparison.headers.otherEsim')}: </span><Cell value={row.other} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
