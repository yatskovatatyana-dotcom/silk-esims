import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'ru' | 'en';

type Dict = Record<string, { ru: string; en: string }>;

const dict = {
  // Tabs
  'tab.home': { ru: 'Главная', en: 'Home' },
  'tab.support': { ru: 'Поддержка', en: 'Support' },
  'tab.profile': { ru: 'Профиль', en: 'Profile' },

  // Common
  'common.back': { ru: 'Назад', en: 'Back' },
  'common.allCountries': { ru: 'Все страны', en: 'All countries' },
  'common.popular': { ru: 'Популярные направления', en: 'Popular destinations' },
  'common.searchCountry': { ru: 'Поиск страны', en: 'Search country' },
  'common.days': { ru: 'дней', en: 'days' },
  'common.daysShort': { ru: 'дн.', en: 'd' },
  'common.from': { ru: 'от', en: 'from' },
  'common.notFound': { ru: 'Ничего не найдено', en: 'Nothing found' },
  'common.all': { ru: 'Все', en: 'All' },

  // Splash
  'splash.start': { ru: 'Начать', en: 'Get started' },
  'splash.haveAccount': { ru: 'Уже есть аккаунт?', en: 'Already have an account?' },
  'splash.login': { ru: 'Войти', en: 'Log in' },

  // Home
  'home.promoTitle': { ru: 'Первый пакет\nза наш счёт', en: 'First plan\non us' },
  'home.promoSub': { ru: '1 день — 1 Гб', en: '1 day — 1 GB' },
  'home.promoCta': { ru: 'Попробовать бесплатно', en: 'Try for free' },
  
  'home.haveAccount': { ru: 'Уже есть аккаунт?', en: 'Already have an account?' },
  'home.login': { ru: 'Войти', en: 'Log in' },
  'home.searchPlaceholder': { ru: 'В какую страну летите?', en: 'Where are you heading?' },

  // Promo
  'promo.title': { ru: '1 ГБ бесплатно', en: '1 GB free' },
  'promo.bannerTitle': { ru: 'Первый пакет за наш счёт', en: 'First plan on us' },
  'promo.bannerSub': { ru: 'Выберите страну — 1 ГБ на 1 день бесплатно', en: 'Pick a country — 1 GB for 1 day free' },

  // Country
  'country.notFound': { ru: 'Страна не найдена', en: 'Country not found' },
  'country.toCart': { ru: 'В корзину', en: 'Add to cart' },
  'country.badgeHit': { ru: 'хит', en: 'top pick' },
  'country.badgeBest': { ru: 'Лучшая цена за ГБ', en: 'Best price per GB' },
  'country.bestValue': { ru: 'ВЫГОДНЕЕ ВСЕГО', en: 'BEST VALUE' },
  'country.otherPlans': { ru: 'ДРУГИЕ ПАКЕТЫ', en: 'OTHER PLANS' },
  'country.hitSale': { ru: 'ХИТ ПРОДАЖ', en: 'BESTSELLER' },
  'country.shortTrips': { ru: 'ВЫБОР НА КОРОТКИЕ ПОЕЗДКИ', en: 'PICK FOR SHORT TRIPS' },
  'country.savings': { ru: 'экономия', en: 'save' },
  'country.giftBonusRu': { ru: 'Начислим {n} ГБ в подарок', en: 'Get {n} GB as a bonus' },
  'country.buy': { ru: 'Купить', en: 'Buy' },

  // Tiers
  'tier.start': { ru: 'СТАРТОВЫЙ', en: 'STARTER' },
  'tier.optimal': { ru: 'ОПТИМАЛЬНЫЙ', en: 'OPTIMAL' },
  'tier.max': { ru: 'МАКСИМАЛЬНЫЙ', en: 'MAXIMUM' },
  'tier.super': { ru: 'СУПЕР', en: 'SUPER' },
  'tier.ultra': { ru: 'УЛЬТРА', en: 'ULTRA' },

  // Days templates
  'days.5': { ru: '5 дней', en: '5 days' },
  'days.14': { ru: '14 дней', en: '14 days' },
  'days.30': { ru: '1 месяц', en: '1 month' },

  // Checkout
  'checkout.title': { ru: 'Оформление', en: 'Checkout' },
  'checkout.planNotFound': { ru: 'Тариф не найден', en: 'Plan not found' },
  'checkout.method': { ru: 'Способ оплаты', en: 'Payment method' },
  'checkout.sbp': { ru: 'СБП', en: 'SBP' },
  'checkout.crypto': { ru: 'Криптовалюта', en: 'Crypto' },
  'checkout.emailLabel': { ru: 'Email для чека', en: 'Email for receipt' },
  'checkout.pay': { ru: 'Оплатить', en: 'Pay' },

  // Install
  'install.title': { ru: 'Установка eSIM', en: 'Install eSIM' },
  'install.step1.title': { ru: 'Установите eSIM', en: 'Install the eSIM' },
  'install.step1.text': { ru: 'Отсканируйте QR-код и установите профиль на ваше устройство', en: 'Scan the QR code and install the profile on your device' },
  'install.step2.title': { ru: 'Включите eSIM', en: 'Enable the eSIM' },
  'install.step2.text': { ru: 'Включите мобильные данные и роуминг для eSIM', en: 'Turn on mobile data and roaming for the eSIM' },
  'install.step3.title': { ru: 'Подключитесь к сети', en: 'Connect to the network' },
  'install.step3.text': { ru: 'Дождитесь подключения к сети в стране назначения', en: 'Wait for the network to connect in your destination' },
  'install.order': { ru: 'Заказ', en: 'Order' },
  'install.needHelp': { ru: 'Нужна помощь? Чат с поддержкой', en: 'Need help? Chat with support' },

  // MyEsim
  'myesim.title': { ru: 'Мой eSIM', en: 'My eSIM' },
  'myesim.emptyTitle': { ru: 'У вас пока нет активных eSIM', en: 'You have no active eSIMs yet' },
  'myesim.emptyText': { ru: 'Выберите страну, чтобы начать', en: 'Pick a country to get started' },
  'myesim.active': { ru: 'Активен', en: 'Active' },
  'myesim.pending': { ru: 'Ожидает', en: 'Pending' },
  'myesim.validUntil': { ru: 'Действует до', en: 'Valid until' },
  'myesim.traffic': { ru: 'Трафик', en: 'Data' },
  'myesim.remaining': { ru: 'осталось 10 ГБ из', en: '10 GB left of' },
  'myesim.days': { ru: 'Дни', en: 'Days' },
  'myesim.daysOf': { ru: '20 из', en: '20 of' },
  'myesim.addPlan': { ru: 'Добавить пакет в', en: 'Add a plan in' },
  'myesim.addPlanSub': { ru: 'Пакет будет в очереди на активацию', en: 'The plan will queue for activation' },
  'myesim.pendingSub': { ru: 'Начнёт действовать при подключении к местной сети', en: 'Starts when connected to a local network' },
  'myesim.addCountry': { ru: 'Добавить страну', en: 'Add country' },

  // Support & Chat
  'support.title': { ru: 'Поддержка', en: 'Support' },
  'support.chat': { ru: 'Чат с поддержкой', en: 'Chat with support' },
  'support.online': { ru: 'Онлайн', en: 'Online' },
  'support.faq': { ru: 'Частые вопросы', en: 'FAQ' },
  'support.faq.install': { ru: 'Как установить eSIM?', en: 'How do I install an eSIM?' },
  'support.faq.works': { ru: 'Работает ли eSIM в моей стране?', en: 'Does the eSIM work in my country?' },
  'support.faq.topup': { ru: 'Как пополнить баланс?', en: 'How do I top up my balance?' },
  'support.faq.refund': { ru: 'Возврат средств', en: 'Refunds' },
  'chat.title': { ru: 'Чат с поддержкой', en: 'Support chat' },
  'chat.today': { ru: 'Сегодня', en: 'Today' },
  'chat.placeholder': { ru: 'Написать сообщение...', en: 'Type a message...' },
  'chat.send': { ru: 'Отправить', en: 'Send' },

  // Login / Code / Register
  'login.title': { ru: 'Вход', en: 'Log in' },
  'login.heading': { ru: 'С возвращением!', en: 'Welcome back!' },
  'login.sub': { ru: 'Введите вашу почту, чтобы войти в аккаунт', en: 'Enter your email to log into your account' },
  'login.email': { ru: 'Email', en: 'Email' },
  'login.emailPh': { ru: 'Введите вашу почту', en: 'Enter your email' },
  'login.continue': { ru: 'Продолжить', en: 'Continue' },
  'login.noAccount': { ru: 'У меня нет аккаунта', en: "I don't have an account" },
  'login.register': { ru: 'Регистрация', en: 'Sign up' },

  'code.title': { ru: 'Код подтверждения', en: 'Verification code' },
  'code.sentTo': { ru: 'Мы отправили код на', en: 'We sent a code to' },
  'code.resendIn': { ru: 'Отправить код повторно через', en: 'Resend code in' },
  'code.changeEmail': { ru: 'Изменить email', en: 'Change email' },

  'register.title': { ru: 'Регистрация', en: 'Sign up' },
  'register.heading': { ru: 'Создайте аккаунт', en: 'Create an account' },
  'register.sub': { ru: 'Введите вашу почту, чтобы начать.', en: 'Enter your email to get started.' },
  'register.haveAccount': { ru: 'Уже есть аккаунт?', en: 'Already have an account?' },
  'register.login': { ru: 'Войти', en: 'Log in' },

  // Profile
  'profile.title': { ru: 'Профиль', en: 'Profile' },
  'profile.haveAccount': { ru: 'Уже есть аккаунт?', en: 'Already have an account?' },
  'profile.loginToManage': { ru: 'Войдите, чтобы управлять покупками и eSIM', en: 'Log in to manage purchases and eSIMs' },
  'profile.login': { ru: 'Войти', en: 'Log in' },
  'profile.empty': { ru: 'Пока пусто', en: 'Nothing here yet' },
  'profile.emptyDesc': {
    ru: 'Здесь будут отображаться ваши покупки и активные пакеты после входа в аккаунт.',
    en: 'Your purchases and active plans will appear here after you log in.',
  },
  'profile.language': { ru: 'Язык приложения', en: 'App language' },
  'profile.langName': { ru: 'Русский', en: 'English' },
  'profile.history': { ru: 'История покупок', en: 'Purchase history' },
  'profile.noOrders': { ru: 'Покупок пока нет', en: 'No purchases yet' },
  'profile.thanks': { ru: 'Спасибо, что с нами!', en: 'Thanks for being with us!' },
  'profile.terms': { ru: 'Условия использования', en: 'Terms of use' },
  'profile.privacy': { ru: 'Политика конфиденциальности', en: 'Privacy policy' },
  'profile.delete': { ru: 'Удалить профиль', en: 'Delete profile' },
  'profile.language.short': { ru: 'Язык', en: 'Language' },
} satisfies Dict;

export type TKey = keyof typeof dict;

// Country names (EN)
const countryNameEn: Record<string, string> = {
  turkey: 'Turkey',
  thailand: 'Thailand',
  uae: 'UAE',
  europe: 'Europe',
  usa: 'USA',
  japan: 'Japan',
  egypt: 'Egypt',
  georgia: 'Georgia',
  vietnam: 'Vietnam',
  indonesia: 'Indonesia',
  'south-korea': 'South Korea',
  singapore: 'Singapore',
  italy: 'Italy',
  spain: 'Spain',
  france: 'France',
  germany: 'Germany',
  greece: 'Greece',
  uk: 'United Kingdom',
  canada: 'Canada',
  mexico: 'Mexico',
  brazil: 'Brazil',
  morocco: 'Morocco',
  'south-africa': 'South Africa',
  australia: 'Australia',
};

export const getCountryName = (slug: string, ruName: string, lang: Lang) =>
  lang === 'en' ? (countryNameEn[slug] ?? ruName) : ruName;

// Localized helpers for plan fields
export const localizedDaysLabel = (days: number, lang: Lang) => {
  if (lang === 'ru') {
    if (days === 30) return '1 месяц';
    return `${days} дней`;
  }
  if (days === 30) return '1 month';
  return `${days} days`;
};

export const localizedDataUnit = (data: string, lang: Lang) =>
  lang === 'ru' ? data.replace('GB', 'ГБ') : data;

export const localizedTier = (tierId: string, lang: Lang, t: (k: TKey) => string) => {
  const map: Record<string, TKey> = {
    start: 'tier.start',
    optimal: 'tier.optimal',
    max: 'tier.max',
    super: 'tier.super',
    ultra: 'tier.ultra',
  };
  const k = map[tierId];
  return k ? t(k) : tierId;
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: TKey) => string;
};

const I18nCtx = createContext<Ctx | null>(null);
const KEY = 'silk-app-lang';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('ru');

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v === 'en' || v === 'ru') setLangState(v);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(KEY, l); } catch {}
  };
  const toggleLang = () => setLang(lang === 'ru' ? 'en' : 'ru');
  const t = (key: TKey) => dict[key]?.[lang] ?? String(key);

  return <I18nCtx.Provider value={{ lang, setLang, toggleLang, t }}>{children}</I18nCtx.Provider>;
};

export const useI18n = () => {
  const v = useContext(I18nCtx);
  if (!v) throw new Error('useI18n outside provider');
  return v;
};
