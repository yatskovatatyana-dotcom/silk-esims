export type Plan = {
  id: string;
  tier: string;
  data: string; // "1 GB"
  days: number;
  daysLabel: string; // "5 дней" / "1 месяц"
  price: number;
  priceLabel: string; // "399 ₽"
  badge?: 'hit' | 'best';
  icon: 'bolt' | 'sparkles' | 'arrow-up-right' | 'wifi' | 'rocket';
};

export type Country = {
  slug: string;
  name: string;
  from: number; // minimum price
  region: 'europe' | 'asia' | 'americas' | 'africa' | 'middle-east' | 'oceania';
  plans: Plan[];
};

// Фиксированные цены — как в макете 04-plans (Турция).
const makePlans = (_base: number): Plan[] => [
  { id: 'start',   tier: 'СТАРТОВЫЙ',    data: '1 GB',  days: 5,  daysLabel: '5 дней',  price: 399,  priceLabel: '399 ₽',                icon: 'bolt' },
  { id: 'optimal', tier: 'ОПТИМАЛЬНЫЙ',  data: '5 GB',  days: 14, daysLabel: '14 дней', price: 649,  priceLabel: '649 ₽',  badge: 'hit',  icon: 'sparkles' },
  { id: 'max',     tier: 'МАКСИМАЛЬНЫЙ', data: '10 GB', days: 30, daysLabel: '1 месяц', price: 799,  priceLabel: '799 ₽',                 icon: 'arrow-up-right' },
  { id: 'super',   tier: 'СУПЕР',        data: '20 GB', days: 30, daysLabel: '1 месяц', price: 1190, priceLabel: '1190 ₽', badge: 'hit',  icon: 'wifi' },
  { id: 'ultra',   tier: 'УЛЬТРА',       data: '30 GB', days: 30, daysLabel: '1 месяц', price: 1590, priceLabel: '1590 ₽', badge: 'best', icon: 'rocket' },
];

export const countries: Country[] = [
  { slug: 'turkey',    name: 'Турция',      from: 199, region: 'europe',      plans: makePlans(199) },
  { slug: 'thailand',  name: 'Таиланд',     from: 249, region: 'asia',        plans: makePlans(249) },
  { slug: 'uae',       name: 'ОАЭ',         from: 199, region: 'middle-east', plans: makePlans(199) },
  { slug: 'europe',    name: 'Европа',      from: 229, region: 'europe',      plans: makePlans(229) },
  { slug: 'usa',       name: 'США',         from: 349, region: 'americas',    plans: makePlans(349) },
  { slug: 'japan',     name: 'Япония',      from: 249, region: 'asia',        plans: makePlans(249) },
  { slug: 'egypt',     name: 'Египет',      from: 290, region: 'africa',      plans: makePlans(290) },
  { slug: 'georgia',   name: 'Грузия',      from: 190, region: 'europe',      plans: makePlans(190) },
  { slug: 'vietnam',   name: 'Вьетнам',     from: 290, region: 'asia',        plans: makePlans(290) },
  { slug: 'indonesia', name: 'Индонезия',   from: 249, region: 'asia',        plans: makePlans(249) },
  { slug: 'south-korea', name: 'Южная Корея', from: 279, region: 'asia',      plans: makePlans(279) },
  { slug: 'singapore', name: 'Сингапур',    from: 259, region: 'asia',        plans: makePlans(259) },
  { slug: 'italy',     name: 'Италия',      from: 229, region: 'europe',      plans: makePlans(229) },
  { slug: 'spain',     name: 'Испания',     from: 229, region: 'europe',      plans: makePlans(229) },
  { slug: 'france',    name: 'Франция',     from: 229, region: 'europe',      plans: makePlans(229) },
  { slug: 'germany',   name: 'Германия',    from: 229, region: 'europe',      plans: makePlans(229) },
  { slug: 'greece',    name: 'Греция',      from: 229, region: 'europe',      plans: makePlans(229) },
  { slug: 'uk',        name: 'Великобритания', from: 249, region: 'europe',   plans: makePlans(249) },
  { slug: 'canada',    name: 'Канада',      from: 349, region: 'americas',    plans: makePlans(349) },
  { slug: 'mexico',    name: 'Мексика',     from: 299, region: 'americas',    plans: makePlans(299) },
  { slug: 'brazil',    name: 'Бразилия',    from: 299, region: 'americas',    plans: makePlans(299) },
  { slug: 'morocco',   name: 'Марокко',     from: 290, region: 'africa',      plans: makePlans(290) },
  { slug: 'south-africa', name: 'ЮАР',      from: 320, region: 'africa',      plans: makePlans(320) },
  { slug: 'australia', name: 'Австралия',   from: 379, region: 'oceania',     plans: makePlans(379) },
];

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug);

export const homeCountries = ['turkey', 'egypt', 'uae', 'thailand', 'georgia', 'vietnam'];
export const popularCountries = ['thailand', 'europe', 'turkey', 'uae', 'usa'];
