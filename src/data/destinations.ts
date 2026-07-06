export type Plan = { data: string; days: number; price: string; badge?: 'popular' | 'best' };
export type Destination = {
  slug: string;
  name: { en: string; ru: string };
  region: 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania' | 'Middle East';
  flag: string; // emoji flag
  plans: Plan[];
};

// Prices are illustrative and follow the PRD's example pricing shape.
const standardPlans: Plan[] = [
  { data: '1 GB', days: 7, price: '€1.99' },
  { data: '5 GB', days: 30, price: '€6.99', badge: 'popular' },
  { data: '10 GB', days: 30, price: '€11.99', badge: 'best' },
];

const asiaPlans: Plan[] = [
  { data: '1 GB', days: 7, price: '€2.49' },
  { data: '5 GB', days: 30, price: '€7.99', badge: 'popular' },
  { data: '10 GB', days: 30, price: '€13.49', badge: 'best' },
];

const usaPlans: Plan[] = [
  { data: '1 GB', days: 7, price: '€3.49' },
  { data: '5 GB', days: 30, price: '€9.99', badge: 'popular' },
  { data: '10 GB', days: 30, price: '€16.99', badge: 'best' },
];

export const destinations: Destination[] = [
  { slug: 'italy',     name: { en: 'Italy',     ru: 'Италия' },     region: 'Europe',      flag: '🇮🇹', plans: standardPlans },
  { slug: 'spain',     name: { en: 'Spain',     ru: 'Испания' },    region: 'Europe',      flag: '🇪🇸', plans: standardPlans },
  { slug: 'france',    name: { en: 'France',    ru: 'Франция' },    region: 'Europe',      flag: '🇫🇷', plans: standardPlans },
  { slug: 'portugal',  name: { en: 'Portugal',  ru: 'Португалия' }, region: 'Europe',      flag: '🇵🇹', plans: standardPlans },
  { slug: 'greece',    name: { en: 'Greece',    ru: 'Греция' },     region: 'Europe',      flag: '🇬🇷', plans: standardPlans },
  { slug: 'germany',   name: { en: 'Germany',   ru: 'Германия' },   region: 'Europe',      flag: '🇩🇪', plans: standardPlans },
  { slug: 'uk',        name: { en: 'United Kingdom', ru: 'Великобритания' }, region: 'Europe', flag: '🇬🇧', plans: standardPlans },
  { slug: 'turkey',    name: { en: 'Turkey',    ru: 'Турция' },     region: 'Europe',      flag: '🇹🇷', plans: standardPlans },
  { slug: 'japan',     name: { en: 'Japan',     ru: 'Япония' },     region: 'Asia',        flag: '🇯🇵', plans: asiaPlans },
  { slug: 'thailand',  name: { en: 'Thailand',  ru: 'Таиланд' },    region: 'Asia',        flag: '🇹🇭', plans: asiaPlans },
  { slug: 'vietnam',   name: { en: 'Vietnam',   ru: 'Вьетнам' },    region: 'Asia',        flag: '🇻🇳', plans: asiaPlans },
  { slug: 'indonesia', name: { en: 'Indonesia', ru: 'Индонезия' },  region: 'Asia',        flag: '🇮🇩', plans: asiaPlans },
  { slug: 'south-korea', name: { en: 'South Korea', ru: 'Южная Корея' }, region: 'Asia', flag: '🇰🇷', plans: asiaPlans },
  { slug: 'singapore', name: { en: 'Singapore', ru: 'Сингапур' },   region: 'Asia',        flag: '🇸🇬', plans: asiaPlans },
  { slug: 'uae',       name: { en: 'UAE',       ru: 'ОАЭ' },        region: 'Middle East', flag: '🇦🇪', plans: standardPlans },
  { slug: 'usa',       name: { en: 'United States', ru: 'США' },    region: 'Americas',    flag: '🇺🇸', plans: usaPlans },
  { slug: 'canada',    name: { en: 'Canada',    ru: 'Канада' },     region: 'Americas',    flag: '🇨🇦', plans: usaPlans },
  { slug: 'mexico',    name: { en: 'Mexico',    ru: 'Мексика' },    region: 'Americas',    flag: '🇲🇽', plans: standardPlans },
  { slug: 'brazil',    name: { en: 'Brazil',    ru: 'Бразилия' },   region: 'Americas',    flag: '🇧🇷', plans: standardPlans },
  { slug: 'egypt',     name: { en: 'Egypt',     ru: 'Египет' },     region: 'Africa',      flag: '🇪🇬', plans: standardPlans },
  { slug: 'morocco',   name: { en: 'Morocco',   ru: 'Марокко' },    region: 'Africa',      flag: '🇲🇦', plans: standardPlans },
  { slug: 'australia', name: { en: 'Australia', ru: 'Австралия' },  region: 'Oceania',     flag: '🇦🇺', plans: usaPlans },
];

export const popularSlugs = ['italy', 'japan', 'usa', 'thailand', 'spain', 'turkey'];
