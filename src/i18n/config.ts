import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "hero": {
        "badge": "VPN Alternative",
        "title": "Tired of VPN?",
        "brandName": "Silk eSIM",
        "description": "Без блокировок и замедлений\nБезопасный и быстрый\nМобильный интернет как раньше",
        "ctaButton": "Choose Plan",
        "learnMore": "How It Works",
        "stats": {
          "time": "1 min",
          "timeLabel": "Instant activation",
          "access": "100%",
          "accessLabel": "No blocks",
          "uptime": "24/7",
          "uptimeLabel": "Stable connection"
        }
      },
      "features": {
        "title": "Why Silk eSIM Is Better Than VPN",
        "subtitle": "A reliable alternative to VPN that gets worse every day",
        "items": {
          "instant": {
            "title": "Can't Be Blocked",
            "description": "Works via a foreign mobile carrier network, not through VPN protocols that get blocked"
          },
          "savings": {
            "title": "Full Speed",
            "description": "No throttling — full 4G/LTE speed for YouTube, Instagram and everything else"
          },
          "flexibility": {
            "title": "All Services Available",
            "description": "Instagram, YouTube, Twitter and any websites without restrictions"
          },
          "noPhysical": {
            "title": "Easier Than VPN",
            "description": "No apps to install, no settings to change, no searching for working servers"
          },
          "multipleProfiles": {
            "title": "Always Works",
            "description": "Doesn't depend on VPN protocol blocks — stable 24/7 connection"
          },
          "support": {
            "title": "24/7 Support",
            "description": "Help anytime in Russian and English"
          }
        }
      },
      "howItWorks": {
        "title": "How Does It Work?",
        "subtitle": "Just 3 simple steps to connect",
        "steps": {
          "choose": {
            "title": "Choose a Plan",
            "description": "Pick the right data volume for you"
          },
          "pay": {
            "title": "Pay with MIR Card",
            "description": "Secure payment with MIR card only"
          },
          "activate": {
            "title": "Activate eSIM",
            "description": "Scan the QR code — internet without blocks is already working"
          }
        }
      },
      "pricing": {
        "title": "Choose Plan",
        "subtitle": "Access to all blocked services",
        "countries": {
          "russia": "Russia",
          "turkey": "Turkey",
          "uae": "UAE",
          "egypt": "Egypt"
        },
        "plans": {
          "start": {
            "name": "Starter",
            "data": "1 GB",
            "duration": "5 days",
            "features": {
              "f1": "YouTube without limits",
              "f2": "Instagram & social media",
              "f3": "WhatsApp calls",
              "f4": "Instant activation"
            },
            "price": "199 ₽"
          },
          "optimal": {
            "name": "Optimal",
            "popular": "Hit",
            "data": "5 GB",
            "duration": "2 weeks",
            "features": {
              "f1": "Everything from Starter",
              "f2": "Stable connection",
              "f3": "High speed",
              "f4": "24/7 support"
            },
            "price": "499 ₽"
          },
          "max": {
            "name": "Maximum",
            "data": "10 GB",
            "duration": "1 month",
            "features": {
              "f1": "Maximum data volume",
              "f2": "Best price per GB",
              "f3": "Priority support",
              "f4": "No restrictions"
            },
            "price": "999 ₽"
          }
        },
        "button": "Buy",
        "inDevelopment": "We're glad you're interested!",
        "comingSoon": "Our service is currently in development. We'll be launching very soon!"
      },
      "promotions": {
        "title": "Special Offers",
        "subtitle": "Promotions and discounts for new users",
        "items": {
          "firstPurchase": {
            "title": "15% Off First Purchase",
            "description": "Use promo code FIRST15 on your first order",
            "code": "FIRST15"
          },
          "longTrip": {
            "title": "20% Off Unlimited Plan",
            "description": "When purchasing a 90-day plan",
            "code": "UNLIM20"
          },
          "referral": {
            "title": "Refer a Friend",
            "description": "Get 500₽ credited for each friend you invite",
            "code": "FRIEND500"
          }
        },
        "button": "Apply Promo Code"
      },
      "cta": {
        "title": "Ready to Forget About Blocks?",
        "subtitle": "Join thousands of users who switched from VPN to Silk eSIM",
        "button": "Get eSIM Now",
        "note": "Activation takes less than 1 minute"
      },
      "footer": {
        "brandName": "Silk eSIM",
        "description": "Stable mobile internet without blocks and throttling. A VPN alternative powered by a foreign carrier.",
        "quickLinks": {
          "title": "Quick Links",
          "features": "Why Us",
          "howItWorks": "How It Works",
          "faq": "FAQ",
          "privacy": "Privacy Policy"
        },
        "contacts": {
          "title": "Contacts",
          "support": "Online Support",
          "email": "silk-esim@srsignal.com"
        },
        "legalEntity": {
          "company": "SILK ROAD SIGNAL LLC",
          "address": "APT. 2/1, 1ST SARMEN STR., KENTRON, 0009, YEREVAN, ARMENIA"
        },
        "copyright": "All rights reserved."
      }
    }
  },
  ru: {
    translation: {
      "hero": {
        "badge": "Альтернатива VPN",
        "title": "Надоел VPN?",
        "brandName": "Silk eSIM",
        "description": "Без блокировок и замедлений\nБезопасный и быстрый\nМобильный интернет как раньше",
        "ctaButton": "Выбрать тариф",
        "learnMore": "Как это работает",
        "stats": {
          "time": "1 мин",
          "timeLabel": "Мгновенное подключение",
          "access": "100%",
          "accessLabel": "Без блокировок",
          "uptime": "24/7",
          "uptimeLabel": "Стабильное соединение"
        }
      },
      "features": {
        "title": "Почему Silk eSIM лучше VPN",
        "subtitle": "Надёжная альтернатива VPN, который с каждым днём работает всё хуже",
        "items": {
          "instant": {
            "title": "Не блокируется",
            "description": "Работает через мобильную сеть зарубежного оператора, а не через VPN-протоколы, которые блокируют"
          },
          "savings": {
            "title": "Стабильная скорость",
            "description": "Никаких замедлений — полная скорость 4G/LTE для YouTube, Instagram и всего остального"
          },
          "flexibility": {
            "title": "Все сервисы доступны",
            "description": "Instagram, YouTube, Twitter и любые сайты без ограничений"
          },
          "noPhysical": {
            "title": "Проще чем VPN",
            "description": "Не нужно устанавливать приложения, менять настройки, искать рабочие серверы"
          },
          "multipleProfiles": {
            "title": "Работает всегда",
            "description": "Не зависит от блокировок VPN-протоколов — стабильное соединение 24/7"
          },
          "support": {
            "title": "Поддержка 24/7",
            "description": "Помощь в любое время суток на русском языке"
          }
        }
      },
      "howItWorks": {
        "title": "Как это работает?",
        "subtitle": "Всего 3 простых шага до подключения",
        "steps": {
          "choose": {
            "title": "Выберите тариф",
            "description": "Выберите подходящий объём трафика"
          },
          "pay": {
            "title": "Оплатите картой МИР",
            "description": "Безопасная оплата только картой МИР"
          },
          "activate": {
            "title": "Активируйте eSIM",
            "description": "Отсканируйте QR-код — интернет без блокировок уже работает"
          }
        }
      },
      "pricing": {
        "title": "Выберите тариф",
        "subtitle": "Доступ ко всем заблокированным сервисам",
        "countries": {
          "russia": "Россия",
          "turkey": "Турция",
          "uae": "ОАЭ",
          "egypt": "Египет"
        },
        "plans": {
          "start": {
            "name": "Стартовый",
            "data": "1 GB",
            "duration": "5 дней",
            "features": {
              "f1": "YouTube без ограничений",
              "f2": "Instagram и соцсети",
              "f3": "WhatsApp звонки",
              "f4": "Мгновенная активация"
            },
            "price": "199 ₽"
          },
          "optimal": {
            "name": "Оптимальный",
            "popular": "хит",
            "data": "5 GB",
            "duration": "2 недели",
            "features": {
              "f1": "Всё из Стартового",
              "f2": "Стабильное соединение",
              "f3": "Высокая скорость",
              "f4": "Поддержка 24/7"
            },
            "price": "499 ₽"
          },
          "max": {
            "name": "Максимальный",
            "data": "10 GB",
            "duration": "1 месяц",
            "features": {
              "f1": "Максимальный объём",
              "f2": "Лучшая цена за GB",
              "f3": "Приоритетная поддержка",
              "f4": "Всё без ограничений"
            },
            "price": "999 ₽"
          }
        },
        "button": "Купить",
        "inDevelopment": "Рады, что вы заинтересовались!",
        "comingSoon": "Сейчас сервис находится в разработке. В ближайшее время мы запустимся!"
      },
      "promotions": {
        "title": "Специальные предложения",
        "subtitle": "Акции и скидки для новых пользователей",
        "items": {
          "firstPurchase": {
            "title": "Скидка 15% на первую покупку",
            "description": "Используйте промокод FIRST15 при первом заказе",
            "code": "FIRST15"
          },
          "longTrip": {
            "title": "Безлимит со скидкой 20%",
            "description": "При покупке тарифа на 90 дней",
            "code": "UNLIM20"
          },
          "referral": {
            "title": "Приведи друга",
            "description": "Получите 500₽ на счёт за каждого приглашённого друга",
            "code": "FRIEND500"
          }
        },
        "button": "Применить промокод"
      },
      "cta": {
        "title": "Готовы забыть о блокировках?",
        "subtitle": "Присоединяйтесь к тысячам пользователей, которые уже перешли с VPN на Silk eSIM",
        "button": "Подключить eSIM сейчас",
        "note": "Активация занимает менее 1 минуты"
      },
      "footer": {
        "brandName": "Silk eSIM",
        "description": "Стабильный мобильный интернет без блокировок и замедлений. Альтернатива VPN на базе зарубежного оператора.",
        "quickLinks": {
          "title": "Быстрые ссылки",
          "features": "Почему мы",
          "howItWorks": "Как работает",
          "faq": "FAQ",
          "privacy": "Политика конфиденциальности"
        },
        "contacts": {
          "title": "Контакты",
          "support": "Онлайн поддержка",
          "email": "silk-esim@srsignal.com"
        },
        "legalEntity": {
          "company": "SILK ROAD SIGNAL LLC",
          "address": "APT. 2/1, 1ST SARMEN STR., KENTRON, 0009, YEREVAN, ARMENIA"
        },
        "copyright": "Все права защищены."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;