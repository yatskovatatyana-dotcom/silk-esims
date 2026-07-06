import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        destinations: 'Destinations',
        howItWorks: 'How it works',
        faq: 'FAQ',
      },
      navNew: {
        destinations: 'Destinations',
        howItWorks: 'How it works',
        coverage: 'Coverage',
        about: 'About',
        support: 'Support',
        signIn: 'Sign in',
        install: 'Install eSIM',
        buy: 'Buy eSIM',
      },
      heroNew: {
        line1: 'One eSIM',
        line2a: 'for',
        line2b: 'every trip',
        subtitleA: 'Affordable data in',
        subtitleB: '180+ countries',
      },
      heroFeatures: {
        cheaper: { title: 'Cheaper than other providers', body: 'Save up to 50% compared with roaming and other eSIMs.' },
        arrive:  { title: 'Arrive already connected',       body: 'Internet works instantly — no hunting for Wi-Fi or local SIM cards.' },
        keep:    { title: 'Keep your number',               body: 'Call and receive SMS on your usual number, as always.' },
      },
      heroSearch: {
        placeholder: 'Where are you going?',
        cta: 'Find plans',
        popularBadge: 'Popular',
        allPlans: 'All plans in',
        daysShort: 'days',
        optimalBadge: 'OPTIMAL',
        bestBadge: 'BEST VALUE',
        optimalNote: 'Best for 2 weeks',
        checkoutNote: 'Complete purchase in your account',
        fromPrice: 'from',
        moreDestinations: 'More destinations',
      },
      heroStrip: {
        countries: { title: '180+ countries', body: 'Travel across 180+ countries and regions worldwide.' },
        forever:   { title: 'One eSIM forever', body: 'Install once and reuse on any future trip.' },
        instant:   { title: 'Instant activation', body: 'Buy and connect in a couple of minutes.' },
        noFees:    { title: 'No hidden fees',    body: 'Transparent pricing — no roaming surprises.' },
      },
      hero: {
        badge: 'One eSIM · Every trip',
        title: 'One eSIM\nEvery trip',
        subtitle: 'Install once. Buy affordable data whenever you travel.',
        supporting: 'Lower prices than many leading travel eSIM providers.',
        ctaPrimary: 'Browse destinations',
        ctaSecondary: 'How it works',
        getEsim: 'Get eSIM',
      },
      problems: {
        title: 'Travel without worrying about...',
        items: {
          roaming: {
            title: 'Expensive roaming',
            description: 'Save compared with roaming and many travel eSIM offers.',
          },
          newSim: {
            title: 'Buying a new SIM every trip',
            description: 'Install Silk once and keep using the same eSIM anywhere.',
          },
          wifi: {
            title: 'Searching for Wi-Fi after landing',
            description: 'Have your data plan ready before your plane touches down.',
          },
        },
      },
      search: {
        title: 'Where are you travelling?',
        placeholder: 'Search a country or region',
        empty: 'No destination found. Try another name.',
        popular: 'Popular right now',
        showing: 'Showing plans for',
        clear: 'Clear',
        results: 'results',
      },
      plans: {
        buy: 'Get plan',
        popular: 'Most popular',
        bestValue: 'Best value',
        days: 'days',
        perGb: 'per GB',
      },
      whyLess: {
        title: 'Why our prices are lower',
        subtitle: 'A leaner model — savings passed on to you.',
        items: {
          marketing: { title: 'Low marketing spend', description: 'We don\'t burn budget on expensive ads — so you save money.' },
          lean: { title: 'Lean digital service', description: 'A minimal product without bloated features or development overhead.' },
          direct: { title: 'Direct carrier deals', description: 'We work directly with local operators — no middlemen in between.' },
          automation: { title: 'Optimized operations', description: 'Smart tech and automation keep our running costs down.' },
          clean: { title: 'Clean service, no extras', description: 'You pay for internet only — nothing you don\'t need.' },
        },
      },
      howItWorks: {
        title: 'Get connected in just 4 steps',
        subtitle: 'Four steps. That\'s it.',
        steps: {
          choose: { title: 'Choose a country & buy a plan', description: 'Pick your destination and the data plan that fits your trip.' },
          install: { title: 'Install your eSIM', description: 'A one-time setup on your phone in under a minute.' },
          travel: { title: 'Travel connected', description: 'Land, unlock your phone, browse. Nothing else to do.' },
          reuse: { title: 'Top up for the next trip', description: 'Buy more plans for future trips — no need to reinstall the eSIM.' },
        },
      },
      whyChoose: {
        title: 'Why travellers choose Silk',
        items: {
          oneEsim: 'One eSIM forever',
          lowerPrices: 'Lower prices',
          keepNumber: 'Keep your number',
          instant: 'Instant delivery',
          coverage: '200+ destinations',
          hotspot: 'Hotspot supported',
          fiveG: '5G where available',
          support: '24/7 support',
        },
      },
      comparison: {
        title: 'How Silk compares',
        subtitle: 'A clearer choice for how travelers actually move.',
        headers: { feature: 'Feature', silk: 'Silk', roaming: 'Typical roaming', otherEsim: 'Typical travel eSIM' },
        rows: {
          install: 'Install once',
          number: 'Keep your number',
          transparent: 'Transparent pricing',
          affordable: 'Affordable travel data',
          instant: 'Instant activation',
        },
        yes: 'Yes', no: 'No', sometimes: 'Sometimes', often: 'Often higher',
      },
      faq: {
        title: 'Frequently asked',
        items: {
          whatsapp: { q: 'Can I keep WhatsApp?', a: 'Yes. Your main SIM stays active, so WhatsApp, iMessage and other apps tied to your number keep working as usual.' },
          calls: { q: 'Can I receive calls?', a: 'Your primary line still receives calls and texts. Silk provides data — perfect for VoIP, hotspot and everything internet-based.' },
          start: { q: 'When does my plan start?', a: 'Your plan activates the first time your phone connects to a supported network at your destination.' },
          hotspot: { q: 'Can I use hotspot?', a: 'Yes. Hotspot is supported on all Silk plans and eligible devices.' },
          more: { q: 'Can I buy more data later?', a: 'Absolutely. Top up anytime from the Silk app — no need to re-install anything.' },
          devices: { q: 'Which phones support eSIM?', a: 'iPhone XS and newer, Google Pixel 3 and newer, most flagship Samsung, and many others. We check compatibility before you buy.' },
        },
      },
      cta: {
        title: 'One install. Every trip from now on.',
        subtitle: 'Join travelers who never think about SIM cards anymore.',
        button: 'Get Silk eSIM',
      },
      footer: {
        tagline: 'One eSIM. Every trip.',
        nav: 'Explore',
        support: 'Support',
        legal: 'Legal',
        contact: 'Contact',
        copyright: 'All rights reserved.',
      },
      beta: {
        title: 'We\'re launching soon',
        description: 'Silk eSIM is in private beta. Leave your email and we\'ll ping you the moment plans go on sale.',
      },
      login: {
        back: 'Back to home',
        titleLogin: 'Sign in', titleRegister: 'Create account',
        subtitleLogin: 'Access your Silk account', subtitleRegister: 'Join Silk in a minute',
        name: 'Name', namePlaceholder: 'Your name',
        email: 'Email', emailPlaceholder: 'you@email.com',
        password: 'Password',
        loginButton: 'Sign in', registerButton: 'Sign up',
        switchToRegister: 'No account? Create one', switchToLogin: 'Already have an account? Sign in',
        devNotice: 'Accounts are launching with the public release.',
        inDevelopment: 'We\'re launching soon!',
        comingSoon: 'Silk eSIM is in private beta. Public launch is coming very soon.',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        destinations: 'Страны',
        howItWorks: 'Как это работает',
        faq: 'Вопросы',
      },
      navNew: {
        destinations: 'Направления',
        howItWorks: 'Как это работает',
        coverage: 'Покрытие',
        about: 'О нас',
        support: 'Поддержка',
        signIn: 'Войти',
        install: 'Установить eSIM',
        buy: 'Купить eSIM',
      },
      heroNew: {
        line1: 'Одна eSIM',
        line2a: 'на',
        line2b: 'Все поездки',
        subtitleA: 'Доступный интернет в',
        subtitleB: '180+ странах',
      },
      heroFeatures: {
        cheaper: { title: 'Дешевле других провайдеров', body: 'Экономьте до 50% по сравнению с роумингом и другими eSIM.' },
        arrive:  { title: 'Прилетай с уже подключенным интернетом', body: 'Интернет работает сразу, без поиска Wi-Fi и покупки местных сим-карт.' },
        keep:    { title: 'Сохрани свой номер', body: 'Звони и получай SMS на свой привычный номер, как обычно.' },
      },
      heroSearch: {
        placeholder: 'Куда вы едете?',
        cta: 'Найти тарифы',
        popularBadge: 'Популярно',
        allPlans: 'Все тарифы в',
        daysShort: 'дней',
        optimalBadge: 'ОПТИМАЛЬНО',
        bestBadge: 'САМЫЙ ВЫГОДНЫЙ',
        optimalNote: 'Оптимально на 2 недели',
        checkoutNote: 'Оформи в личном кабинете',
        fromPrice: 'от',
        moreDestinations: 'Больше стран',
      },
      heroStrip: {
        countries: { title: '180+ стран', body: 'Путешествуйте в 180+ странах и регионах мира.' },
        forever:   { title: 'Одна eSIM навсегда', body: 'Установите один раз и используйте в любых поездках.' },
        instant:   { title: 'Мгновенное подключение', body: 'Покупайте и подключайтесь за пару минут.' },
        noFees:    { title: 'Без скрытых платежей', body: 'Прозрачные тарифы без роуминга и сюрпризов.' },
      },
      hero: {
        badge: 'Одна eSIM · Каждая поездка',
        title: 'Одна eSIM\nВсе поездки',
        subtitle: 'Установи один раз. Покупай выгодный трафик в любой поездке.',
        supporting: 'Цены ниже, чем у большинства известных travel-eSIM.',
        ctaPrimary: 'Посмотреть страны',
        ctaSecondary: 'Как это работает',
        getEsim: 'Получить eSIM',
      },
      problems: {
        title: 'Путешествуй, не думая про...',
        items: {
          roaming: {
            title: 'Дорогой роуминг',
            description: 'Экономь по сравнению с роумингом и многими travel-eSIM.',
          },
          newSim: {
            title: 'Новую SIM в каждой стране',
            description: 'Установи Silk один раз и пользуйся той же eSIM везде.',
          },
          wifi: {
            title: 'Поиск Wi-Fi после посадки',
            description: 'Пусть тариф уже работает, когда самолёт коснётся земли.',
          },
        },
      },
      search: {
        title: 'Куда летишь?',
        placeholder: 'Введи страну или регион',
        empty: 'Такой страны не нашлось. Попробуй другое название.',
        popular: 'Популярные сейчас',
        showing: 'Тарифы для',
        clear: 'Сбросить',
        results: 'результатов',
      },
      plans: {
        buy: 'Взять тариф',
        popular: 'Популярный',
        bestValue: 'Лучшая цена',
        days: 'дней',
        perGb: 'за 1 ГБ',
      },
      whyLess: {
        title: 'Почему у нас дешевле?',
        subtitle: 'Экономная модель — выгода уходит путешественникам.',
        items: {
          digital: { title: 'Цифровая доставка', description: 'Всё приходит мгновенно на почту — никакой логистики.' },
          noSim: { title: 'Без пластиковой SIM', description: 'Одна многоразовая eSIM вместо ящика с карточками.' },
          noRetail: { title: 'Без розничных точек', description: 'Нет киосков в аэропортах, аренды и посредников.' },
          pricing: { title: 'Честная цена за ГБ', description: 'Оптовые ставки и адекватная маржа — без наценки.' },
        },
      },
      howItWorks: {
        title: 'Подключись всего за 4 шага',
        subtitle: 'Четыре шага. И всё.',
        steps: {
          choose: { title: 'Выбери страну и купи пакет', description: 'Выбери направление и тариф под свою поездку.' },
          install: { title: 'Установи eSIM', description: 'Разовая настройка на телефоне занимает меньше минуты.' },
          travel: { title: 'Путешествуй на связи', description: 'Приземлился, разблокировал телефон — интернет уже работает.' },
          reuse: { title: 'Докупай пакеты', description: 'Покупай новые пакеты для следующих поездок без повторной установки eSIM.' },
        },
      },
      whyChoose: {
        title: 'Почему путешественники выбирают Silk',
        items: {
          oneEsim: 'Одна eSIM навсегда',
          lowerPrices: 'Цены ниже',
          keepNumber: 'Свой номер остаётся',
          instant: 'Мгновенная доставка',
          coverage: '200+ направлений',
          hotspot: 'Раздача Wi-Fi',
          fiveG: '5G где доступно',
          support: 'Поддержка 24/7',
        },
      },
      comparison: {
        title: 'Silk в сравнении',
        subtitle: 'Осознанный выбор для того, как реально путешествуют.',
        headers: { feature: 'Что', silk: 'Silk', roaming: 'Обычный роуминг', otherEsim: 'Обычная travel-eSIM' },
        rows: {
          install: 'Установка один раз',
          number: 'Свой номер сохраняется',
          transparent: 'Прозрачные цены',
          affordable: 'Доступный трафик',
          instant: 'Мгновенная активация',
        },
        yes: 'Да', no: 'Нет', sometimes: 'Иногда', often: 'Часто дороже',
      },
      faq: {
        title: 'Частые вопросы',
        items: {
          whatsapp: { q: 'WhatsApp продолжит работать?', a: 'Да. Основная SIM остаётся активной — WhatsApp, iMessage и другие приложения, привязанные к номеру, работают как обычно.' },
          calls: { q: 'Смогу ли принимать звонки?', a: 'Основной номер продолжает принимать звонки и SMS. Silk даёт интернет — идеально для VoIP, раздачи и всего онлайн.' },
          start: { q: 'Когда начнётся тариф?', a: 'Тариф активируется, когда телефон впервые подключится к поддерживаемой сети в стране назначения.' },
          hotspot: { q: 'Можно раздавать интернет?', a: 'Да, раздача поддерживается на всех тарифах Silk и совместимых устройствах.' },
          more: { q: 'Можно докупить трафик потом?', a: 'Конечно. Пополнение в один клик из приложения — переустанавливать ничего не нужно.' },
          devices: { q: 'Какие телефоны поддерживают eSIM?', a: 'iPhone XS и новее, Google Pixel 3 и новее, большинство флагманов Samsung и многие другие. Совместимость проверяется до покупки.' },
        },
      },
      cta: {
        title: 'Одна установка. И все поездки — на связи.',
        subtitle: 'Присоединяйся к тем, кто больше не думает о SIM-картах.',
        button: 'Получить Silk eSIM',
      },
      footer: {
        tagline: 'Одна eSIM. Все поездки.',
        nav: 'Разделы',
        support: 'Поддержка',
        legal: 'Юридическое',
        contact: 'Контакты',
        copyright: 'Все права защищены.',
      },
      beta: {
        title: 'Мы запускаемся совсем скоро',
        description: 'Silk eSIM в закрытой бете. Оставь email — напишем, как только тарифы будут в продаже.',
      },
      login: {
        back: 'На главную',
        titleLogin: 'Вход', titleRegister: 'Регистрация',
        subtitleLogin: 'Войди в аккаунт Silk', subtitleRegister: 'Создай аккаунт за минуту',
        name: 'Имя', namePlaceholder: 'Твоё имя',
        email: 'Email', emailPlaceholder: 'ты@email.com',
        password: 'Пароль',
        loginButton: 'Войти', registerButton: 'Зарегистрироваться',
        switchToRegister: 'Нет аккаунта? Создай', switchToLogin: 'Уже есть аккаунт? Войди',
        devNotice: 'Аккаунты откроются вместе с публичным запуском.',
        inDevelopment: 'Мы запускаемся совсем скоро!',
        comingSoon: 'Silk eSIM в закрытой бете. Публичный запуск совсем скоро.',
      },
    },
  },
};

const stored = typeof window !== 'undefined' ? window.localStorage.getItem('silk-lang') : null;
const browser = typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en';
const initialLang = stored === 'ru' || stored === 'en' ? stored : browser;

i18n.use(initReactI18next).init({
  resources,
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (lng) => {
    window.localStorage.setItem('silk-lang', lng);
    document.documentElement.lang = lng;
  });
  document.documentElement.lang = initialLang;
}

export default i18n;
