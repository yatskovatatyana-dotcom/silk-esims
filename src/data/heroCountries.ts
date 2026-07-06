export type HeroPlan = { data: string; days: number; price: string };
export type HeroCountry = {
  slug: string;
  name: { en: string; ru: string };
  flag: string;
  popular?: boolean;
  plans: HeroPlan[];
};

const standard: HeroPlan[] = [
  { data: '1 ГБ', days: 7, price: '₽199' },
  { data: '3 ГБ', days: 15, price: '₽499' },
  { data: '5 ГБ', days: 30, price: '₽799' },
  { data: '10 ГБ', days: 30, price: '₽1 299' },
  { data: '20 ГБ', days: 30, price: '₽1 899' },
];

const asia: HeroPlan[] = [
  { data: '1 ГБ', days: 7, price: '₽249' },
  { data: '3 ГБ', days: 15, price: '₽599' },
  { data: '5 ГБ', days: 30, price: '₽899' },
  { data: '10 ГБ', days: 30, price: '₽1 499' },
  { data: '20 ГБ', days: 30, price: '₽2 199' },
];

const usa: HeroPlan[] = [
  { data: '1 ГБ', days: 7, price: '₽349' },
  { data: '3 ГБ', days: 15, price: '₽699' },
  { data: '5 ГБ', days: 30, price: '₽1 099' },
  { data: '10 ГБ', days: 30, price: '₽1 799' },
  { data: '20 ГБ', days: 30, price: '₽2 699' },
];

const europe: HeroPlan[] = [
  { data: '1 ГБ', days: 7, price: '₽229' },
  { data: '3 ГБ', days: 15, price: '₽549' },
  { data: '5 ГБ', days: 30, price: '₽849' },
  { data: '10 ГБ', days: 30, price: '₽1 399' },
  { data: '20 ГБ', days: 30, price: '₽1 999' },
];

const global: HeroPlan[] = [
  { data: '1 ГБ', days: 7, price: '₽399' },
  { data: '3 ГБ', days: 15, price: '₽899' },
  { data: '5 ГБ', days: 30, price: '₽1 299' },
  { data: '10 ГБ', days: 30, price: '₽2 099' },
  { data: '20 ГБ', days: 30, price: '₽2 999' },
];

export const heroCountries: HeroCountry[] = [
  { slug: 'turkey',   name: { en: 'Turkey',   ru: 'Турция' },  flag: '🇹🇷', popular: true, plans: standard },
  { slug: 'thailand', name: { en: 'Thailand', ru: 'Таиланд' }, flag: '🇹🇭', plans: asia },
  { slug: 'uae',      name: { en: 'UAE',      ru: 'ОАЭ' },     flag: '🇦🇪', plans: standard },
  { slug: 'europe',   name: { en: 'Europe',   ru: 'Европа' },  flag: '🇪🇺', plans: europe },
  { slug: 'usa',      name: { en: 'USA',      ru: 'США' },     flag: '🇺🇸', plans: usa },
  { slug: 'japan',    name: { en: 'Japan',    ru: 'Япония' },  flag: '🇯🇵', plans: asia },
  { slug: 'global',   name: { en: 'All countries', ru: 'Все страны' }, flag: '🌍', plans: global },
  // extra searchable countries
  { slug: 'italy',       name: { en: 'Italy',       ru: 'Италия' },       flag: '🇮🇹', plans: europe },
  { slug: 'spain',       name: { en: 'Spain',       ru: 'Испания' },      flag: '🇪🇸', plans: europe },
  { slug: 'france',      name: { en: 'France',      ru: 'Франция' },      flag: '🇫🇷', plans: europe },
  { slug: 'germany',     name: { en: 'Germany',     ru: 'Германия' },     flag: '🇩🇪', plans: europe },
  { slug: 'greece',      name: { en: 'Greece',      ru: 'Греция' },       flag: '🇬🇷', plans: europe },
  { slug: 'portugal',    name: { en: 'Portugal',    ru: 'Португалия' },   flag: '🇵🇹', plans: europe },
  { slug: 'uk',          name: { en: 'United Kingdom', ru: 'Великобритания' }, flag: '🇬🇧', plans: europe },
  { slug: 'vietnam',     name: { en: 'Vietnam',     ru: 'Вьетнам' },      flag: '🇻🇳', plans: asia },
  { slug: 'indonesia',   name: { en: 'Indonesia',   ru: 'Индонезия' },    flag: '🇮🇩', plans: asia },
  { slug: 'south-korea', name: { en: 'South Korea', ru: 'Южная Корея' }, flag: '🇰🇷', plans: asia },
  { slug: 'singapore',   name: { en: 'Singapore',   ru: 'Сингапур' },     flag: '🇸🇬', plans: asia },
  { slug: 'canada',      name: { en: 'Canada',      ru: 'Канада' },       flag: '🇨🇦', plans: usa },
  { slug: 'mexico',      name: { en: 'Mexico',      ru: 'Мексика' },      flag: '🇲🇽', plans: standard },
  { slug: 'brazil',      name: { en: 'Brazil',      ru: 'Бразилия' },     flag: '🇧🇷', plans: standard },
  { slug: 'egypt',       name: { en: 'Egypt',       ru: 'Египет' },       flag: '🇪🇬', plans: standard },
  { slug: 'morocco',     name: { en: 'Morocco',     ru: 'Марокко' },      flag: '🇲🇦', plans: standard },
  { slug: 'australia',   name: { en: 'Australia',   ru: 'Австралия' },    flag: '🇦🇺', plans: usa },
];

export const heroChipSlugs = ['turkey', 'thailand', 'uae', 'europe', 'usa', 'japan', 'global'];
