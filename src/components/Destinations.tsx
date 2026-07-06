import { useMemo, useState } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { destinations, popularSlugs, type Destination } from '@/data/destinations';
import { Button } from '@/components/ui/button';

const Destinations = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Destination | null>(null);

  const lang = (i18n.language === 'ru' ? 'ru' : 'en') as 'ru' | 'en';

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return destinations
      .filter((d) => d.name.en.toLowerCase().includes(q) || d.name.ru.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  const popular = useMemo(
    () => popularSlugs.map((s) => destinations.find((d) => d.slug === s)!).filter(Boolean),
    []
  );

  const activeDestination = selected;

  return (
    <section id="destinations" className="py-24 md:py-32 bg-muted/40 scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('search.title')}
          </h2>
        </div>

        {/* Search input */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setSelected(null); }}
              placeholder={t('search.placeholder')}
              className="w-full h-16 pl-14 pr-14 rounded-2xl border border-border bg-card text-lg font-medium text-foreground placeholder:text-foreground/40 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            {query && (
              <button
                onClick={() => { setQuery(''); setSelected(null); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-foreground/50 hover:bg-muted transition-colors"
                aria-label="Clear"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Suggestions dropdown */}
          {query && filtered.length > 0 && !selected && (
            <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-card border border-border shadow-elegant overflow-hidden z-10 animate-fade-in">
              {filtered.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => { setSelected(d); setQuery(d.name[lang]); }}
                  className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-muted transition-colors text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">{d.flag}</span>
                    <span className="font-semibold text-foreground">{d.name[lang]}</span>
                  </span>
                  <span className="text-xs text-foreground/50">{d.region}</span>
                </button>
              ))}
            </div>
          )}

          {query && filtered.length === 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-card border border-border shadow-elegant p-6 text-center text-foreground/60 z-10">
              {t('search.empty')}
            </div>
          )}
        </div>

        {/* Popular chips */}
        {!activeDestination && (
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/50 uppercase tracking-wider mr-2">
              <Sparkles className="w-3.5 h-3.5" />
              {t('search.popular')}
            </span>
            {popular.map((d) => (
              <button
                key={d.slug}
                onClick={() => { setSelected(d); setQuery(d.name[lang]); }}
                className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:shadow-soft transition-all"
              >
                <span>{d.flag}</span>
                <span>{d.name[lang]}</span>
              </button>
            ))}
          </div>
        )}

        {/* Plans */}
        {activeDestination && (
          <div className="mt-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-3xl">{activeDestination.flag}</span>
              <div>
                <div className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">
                  {t('search.showing')}
                </div>
                <div className="text-2xl font-bold text-foreground">
                  {activeDestination.name[lang]}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {activeDestination.plans.map((plan, i) => {
                const highlight = plan.badge === 'popular';
                return (
                  <div
                    key={i}
                    className={`relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                      highlight
                        ? 'bg-foreground text-background shadow-elegant'
                        : 'bg-card border border-border hover:shadow-elegant'
                    }`}
                  >
                    {plan.badge && (
                      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        highlight ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'
                      }`}>
                        {plan.badge === 'popular' ? t('plans.popular') : t('plans.bestValue')}
                      </div>
                    )}
                    <div className={`text-4xl font-bold mb-1 ${highlight ? '' : 'text-foreground'}`}>
                      {plan.data}
                    </div>
                    <div className={`text-sm mb-6 ${highlight ? 'text-background/70' : 'text-foreground/60'}`}>
                      {plan.days} {t('plans.days')}
                    </div>
                    <div className={`text-3xl font-bold mb-6 ${highlight ? '' : 'text-foreground'}`}>
                      {plan.price}
                    </div>
                    <Button
                      onClick={() => navigate('/login')}
                      className={`w-full rounded-full font-semibold h-11 ${
                        highlight
                          ? 'bg-background text-foreground hover:bg-background/90'
                          : 'bg-foreground text-background hover:bg-foreground/90'
                      }`}
                    >
                      {t('plans.buy')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
