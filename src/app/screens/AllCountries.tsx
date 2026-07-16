import { useNavigate } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { PhoneFrame, GradientHeader } from '../shell';
import { countries } from '../data';
import FlagCircle from '../FlagCircle';

const AllCountries = () => {
  const nav = useNavigate();
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return countries.filter((c) => !s || c.name.toLowerCase().includes(s));
  }, [q]);

  return (
    <PhoneFrame>
      <GradientHeader title="Все страны" back onBack={() => nav(-1)} />
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Поиск страны"
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
                  <div className="font-bold text-[18px] text-foreground leading-tight">{c.name}</div>
                  <div className="text-sm text-foreground/60 mt-0.5">
                    eSIM · от <span className="text-primary font-bold">₽{c.from}</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-foreground/40" />
              </button>
            </li>
          ))}
          {list.length === 0 && (
            <li className="px-5 py-10 text-center text-foreground/60">Ничего не найдено</li>
          )}
        </ul>
      </div>
    </PhoneFrame>
  );
};

export default AllCountries;
