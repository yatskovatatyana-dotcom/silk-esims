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
      hero: {
        badge: 'Install once · Travel forever',
        title: 'One eSIM.\nEvery trip.',
        subtitle: 'Set up Silk once. Land anywhere with internet already on — no Wi-Fi hunting, no roaming, no swapping SIMs. Your number stays active.',
        getEsim: 'Get eSIM',
      },
      problems: {
        title: 'Everything travel data should be.',
        items: {
          once: {
            title: 'Install once. Forever.',
            description: 'A single eSIM setup on your phone — reuse it in every country you visit, for years.',
          },
          ready: {
            title: 'Arrive online',
            description: 'Land, unlock your phone, you\'re connected. No SIM shops, no airport Wi-Fi queues.',
          },
          noRoaming: {
            title: 'No roaming, no SIM piles',
            description: 'One clean tariff per trip — no shock bills, no drawer full of plastic cards.',
          },
          keepNumber: {
            title: 'Keep your number',
            description: 'Your primary line stays active. Calls, SMS, WhatsApp, iMessage — untouched.',
          },
        },
      },
      search: {
        title: 'Where are you travelling?',
        placeholder: 'Search a country or region',
        empty: 'No destination found. Try another name.',
        popular: 'Popular',
        showing: 'Plans for',
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
        title: 'Why are our prices lower?',
        subtitle: 'A leaner model — passed on to travelers.',
        items: {
          digital: { title: 'Digital delivery', description: 'Everything arrives instantly in your inbox — no shipping, no waiting.' },
          noSim: { title: 'No physical SIM', description: 'One reusable eSIM replaces a drawer full of plastic cards.' },
          noRetail: { title: 'No retail stores', description: 'No airport kiosks, no rent, no middlemen taking a cut.' },
          pricing: { title: 'Competitive data pricing', description: 'We negotiate wholesale rates and keep margins honest.' },
        },
      },
      howItWorks: {
        title: 'How it works',
        subtitle: 'Three steps. That\'s it.',
        steps: {
          install: { title: 'Install Silk once', description: 'A one-time setup on your phone in under a minute.' },
          choose: { title: 'Choose your destination', description: 'Pick a plan for wherever you\'re headed next.' },
          travel: { title: 'Travel connected', description: 'Land, unlock your phone, browse. Nothing else to do.' },
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
      hero: {
        badge: 'Установи один раз · Путешествуй всю жизнь',
        title: 'Одна eSIM.\nВсе поездки.',
        subtitle: 'Настрой Silk один раз. Прилетай в любую страну — интернет уже работает. Никакого поиска Wi-Fi, никакого роуминга, никаких новых SIM. Твой номер остаётся активным.',
        getEsim: 'Получить eSIM',
      },
      problems: {
        title: 'Мобильный интернет в путешествии — как надо.',
        items: {
          once: {
            title: 'Установка один раз. Навсегда.',
            description: 'Одна eSIM на телефоне — используешь её во всех странах, годами.',
          },
          ready: {
            title: 'Прилетел — уже онлайн',
            description: 'Приземлился, разблокировал телефон, есть интернет. Без SIM-салонов и очередей за Wi-Fi.',
          },
          noRoaming: {
            title: 'Без роуминга и стопки SIM',
            description: 'Один понятный тариф на поездку — без счётов-шоков и ящика пластиковых карт.',
          },
          keepNumber: {
            title: 'Свой номер остаётся',
            description: 'Основная линия активна: звонки, SMS, WhatsApp, iMessage — как обычно.',
          },
        },
      },
      search: {
        title: 'Куда летишь?',
        placeholder: 'Введи страну или регион',
        empty: 'Такой страны не нашлось. Попробуй другое название.',
        popular: 'Популярные',
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
        title: 'Как это работает',
        subtitle: 'Три шага. И всё.',
        steps: {
          install: { title: 'Установи Silk один раз', description: 'Настройка на телефоне занимает меньше минуты.' },
          choose: { title: 'Выбери страну', description: 'Возьми тариф для той страны, куда летишь.' },
          travel: { title: 'Путешествуй на связи', description: 'Приземлился, разблокировал телефон, работает интернет.' },
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

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
