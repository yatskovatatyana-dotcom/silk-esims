import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'ru' | 'en';

type Dict = Record<string, { ru: string; en: string }>;

const dict: Dict = {
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

  // Splash
  'splash.start': { ru: 'Начать', en: 'Get started' },
  'splash.haveAccount': { ru: 'Уже есть аккаунт?', en: 'Already have an account?' },
  'splash.login': { ru: 'Войти', en: 'Log in' },

  // Profile
  'profile.title': { ru: 'Профиль', en: 'Profile' },
  'profile.haveAccount': { ru: 'Уже есть аккаунт?', en: 'Already have an account?' },
  'profile.loginToManage': { ru: 'Войдите, чтобы управлять покупками и eSIM', en: 'Log in to manage your purchases and eSIMs' },
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
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: keyof typeof dict) => string;
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
  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);

  return <I18nCtx.Provider value={{ lang, setLang, toggleLang, t }}>{children}</I18nCtx.Provider>;
};

export const useI18n = () => {
  const v = useContext(I18nCtx);
  if (!v) throw new Error('useI18n outside provider');
  return v;
};
