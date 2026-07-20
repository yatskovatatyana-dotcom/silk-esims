import { useNavigate } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { PhoneFrame, GradientHeader } from '../shell';
import { countries } from '../data';
import FlagCircle from '../FlagCircle';
import { useI18n, getCountryName } from '../i18n';

const AllCountries = () => {
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const { t, lang } = useI18n();

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return countries.filter((c) => {
      const n = getCountryName(c.slug, c.name, lang).toLowerCase();
      return !s || n.includes(s);
    });
  }, [q, lang]);

  return (
    <PhoneFrame>
      <GradientHeader title={t('common.allCountries')} back onBack={() => nav(-1)} />
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t('common.searchCountry')}
              className="w-full h-12 pl-12 pr-4 rounded-full bg-white border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
        <ul>
          {list.map((c) => (
            <li key={c.slug}>
              <button
                onClick={() => nav(`/app/country/${c.slug}`)}
                className="w-full flex items-center gap-4 px-5 py-3.5 border-b border-border/60 hover:bg-muted/50 transition text-left"
              >
                <FlagCircle slug={c.slug} className="w-14 h-14" />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[18px] text-foreground leading-tight">{getCountryName(c.slug, c.name, lang)}</div>
                  <div className="text-sm text-foreground/60 mt-0.5">
                    eSIM · {t('common.from')} <span className="text-primary font-bold">€{c.plans[0].price}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-foreground/40" />
              </button>
            </li>
          ))}
          {list.length === 0 && (
            <li className="px-5 py-10 text-center text-foreground/60">{t('common.notFound')}</li>
          )}
        </ul>
      </div>
    </PhoneFrame>
  );
};

export default AllCountries;
