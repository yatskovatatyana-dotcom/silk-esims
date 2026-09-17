export type HeroPlan = { data: string; days: number; price: string };
export type HeroCountry = {
  slug: string;
  name: { en: string; ru: string };
  flag: string;
  popular?: boolean;
  plans: HeroPlan[];
};

const plans: HeroPlan[] = [
  { data: '1 ГБ', days: 7, price: '390 ₽' },
  { data: '5 ГБ', days: 14, price: '690 ₽' },
  { data: '10 ГБ', days: 14, price: '890 ₽' },
  { data: '20 ГБ', days: 30, price: '1290 ₽' },
  { data: '30 ГБ', days: 30, price: '1690 ₽' },
];

const standard = plans;
const asia = plans;
const usa = plans;
const europe = plans;
const global = plans;

export const heroCountries: HeroCountry[] = [
  { slug: 'turkey',   name: { en: 'Turkey',   ru: 'Турция' },  flag: '🇹🇷', popular: true, plans: standard },
  { slug: 'thailand', name: { en: 'Thailand', ru: 'Таиланд' }, flag: '🇹🇭', plans: asia },
  { slug: 'uae',      name: { en: 'UAE',      ru: 'ОАЭ' },     flag: '🇦🇪', plans: standard },
  { slug: 'europe',   name: { en: 'Europe',   ru: 'Европа' },  flag: '🇪🇺', plans: europe },
  { slug: 'usa',      name: { en: 'USA',      ru: 'США' },     flag: '🇺🇸', plans: usa },
  { slug: 'japan',    name: { en: 'Japan',    ru: 'Япония' },  flag: '🇯🇵', plans: asia },
  // extra searchable countries
  { slug: 'italy',       name: { en: 'Italy',       ru: 'Италия' },       flag: '🇮🇹', plans: europe },
  { slug: 'france',      name: { en: 'France',      ru: 'Франция' },      flag: '🇫🇷', plans: europe },
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

export const heroChipSlugs = ['turkey', 'thailand', 'uae', 'europe', 'usa', 'japan'];
