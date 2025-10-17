import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "hero": {
        "badge": "Mobile Internet Worldwide",
        "title": "Travel Without Borders",
        "brandName": "Silk eSIM",
        "description": "Connect to mobile internet anywhere in the world without changing your SIM card. Affordable plans for travelers.",
        "ctaButton": "Open Telegram Bot",
        "learnMore": "Learn More"
      },
      "features": {
        "title": "Benefits of eSIM Abroad",
        "subtitle": "Forget about roaming problems and local SIM cards",
        "items": {
          "instant": {
            "title": "Instant Activation",
            "description": "Activate your eSIM right upon arrival without wasting time searching for local carriers"
          },
          "savings": {
            "title": "Save up to 90%",
            "description": "Pay significantly less than your home carrier's roaming rates"
          },
          "flexibility": {
            "title": "Flexible Plans",
            "description": "Choose plans for specific countries or regions for the period you need"
          },
          "noPhysical": {
            "title": "No Physical Card",
            "description": "No need to swap SIM cards, manage everything from your phone"
          },
          "multipleProfiles": {
            "title": "Multiple Profiles",
            "description": "Keep your home number and use eSIM for data simultaneously"
          },
          "support": {
            "title": "24/7 Support",
            "description": "Assistance anytime in English via Telegram"
          }
        }
      },
      "howItWorks": {
        "title": "How Does It Work?",
        "subtitle": "Just 3 simple steps to connect",
        "steps": {
          "choose": {
            "title": "Choose a Plan",
            "description": "Open the Telegram bot and select your country and plan"
          },
          "pay": {
            "title": "Pay with MIR Card",
            "description": "Secure payment with MIR card only"
          },
          "activate": {
            "title": "Activate eSIM",
            "description": "Receive a QR code and scan it in your phone settings"
          }
        }
      },
      "pricing": {
        "title": "Plans by Country",
        "subtitle": "Affordable prices for travelers",
        "regions": {
          "europe": {
            "name": "Europe",
            "popular": "Popular",
            "features": {
              "data": "10 GB data",
              "validity": "30 days",
              "speed": "4G/LTE speed",
              "countries": "Works in 30+ EU countries"
            },
            "price": "990 ₽"
          },
          "asia": {
            "name": "Asia",
            "features": {
              "data": "8 GB data",
              "validity": "30 days",
              "speed": "4G/LTE speed",
              "countries": "Thailand, Japan, Korea, etc."
            },
            "price": "790 ₽"
          },
          "usa": {
            "name": "USA",
            "features": {
              "data": "15 GB data",
              "validity": "30 days",
              "speed": "4G/LTE speed",
              "countries": "USA and Canada"
            },
            "price": "1190 ₽"
          },
          "global": {
            "name": "Global",
            "bestValue": "Best Value",
            "features": {
              "data": "20 GB data",
              "validity": "30 days",
              "speed": "4G/LTE speed",
              "countries": "Works in 120+ countries"
            },
            "price": "1990 ₽"
          }
        },
        "button": "Select Plan"
      },
      "promotions": {
        "title": "Special Offers",
        "subtitle": "Promotions and discounts for our customers",
        "items": {
          "firstPurchase": {
            "title": "15% Off First Purchase",
            "description": "Use promo code FIRST15 on your first order",
            "code": "FIRST15"
          },
          "longTrip": {
            "title": "20% Off Global Plan",
            "description": "When purchasing a 90-day plan",
            "code": "GLOBAL20"
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
        "title": "Ready to Travel Without Borders?",
        "subtitle": "Join thousands of travelers who save on roaming with Silk eSIM",
        "button": "Open Telegram Bot",
        "note": "Activation takes less than 1 minute"
      },
      "footer": {
        "brandName": "Silk eSIM",
        "description": "Modern way to connect mobile service without physical SIM cards",
        "quickLinks": {
          "title": "Quick Links",
          "features": "Features",
          "howItWorks": "How It Works",
          "faq": "FAQ",
          "privacy": "Privacy Policy"
        },
        "contacts": {
          "title": "Contacts",
          "telegram": "Telegram Support",
          "email": "support@esim.ru"
        },
        "copyright": "All rights reserved."
      }
    }
  },
  ru: {
    translation: {
      "hero": {
        "badge": "Мобильный интернет по всему миру",
        "title": "Путешествуйте без границ",
        "brandName": "Silk eSIM",
        "description": "Подключайтесь к мобильному интернету в любой точке мира без смены SIM-карты. Доступные тарифы для путешественников.",
        "ctaButton": "Открыть Telegram бот",
        "learnMore": "Узнать больше"
      },
      "features": {
        "title": "Преимущества eSIM за границей",
        "subtitle": "Забудьте о проблемах с роумингом и местными SIM-картами",
        "items": {
          "instant": {
            "title": "Мгновенная активация",
            "description": "Активируйте eSIM сразу по прилету, не тратя время на поиск местных операторов"
          },
          "savings": {
            "title": "Экономия до 90%",
            "description": "Платите в разы меньше, чем за роуминг вашего домашнего оператора"
          },
          "flexibility": {
            "title": "Гибкость тарифов",
            "description": "Выбирайте тарифы под конкретную страну или регион на нужный период"
          },
          "noPhysical": {
            "title": "Без физической карты",
            "description": "Не нужно менять SIM-карты, все управление через телефон"
          },
          "multipleProfiles": {
            "title": "Несколько профилей",
            "description": "Сохраняйте домашний номер и используйте eSIM для интернета одновременно"
          },
          "support": {
            "title": "Поддержка 24/7",
            "description": "Помощь в любое время суток на русском языке через Telegram"
          }
        }
      },
      "howItWorks": {
        "title": "Как это работает?",
        "subtitle": "Всего 3 простых шага до подключения",
        "steps": {
          "choose": {
            "title": "Выберите тариф",
            "description": "Откройте бот в Telegram и выберите страну и тариф"
          },
          "pay": {
            "title": "Оплатите картой МИР",
            "description": "Безопасная оплата только картой МИР"
          },
          "activate": {
            "title": "Активируйте eSIM",
            "description": "Получите QR-код и отсканируйте его в настройках телефона"
          }
        }
      },
      "pricing": {
        "title": "Тарифы по странам",
        "subtitle": "Выгодные цены для путешественников",
        "regions": {
          "europe": {
            "name": "Европа",
            "popular": "Популярно",
            "features": {
              "data": "10 ГБ данных",
              "validity": "30 дней",
              "speed": "4G/LTE скорость",
              "countries": "Работает в 30+ странах ЕС"
            },
            "price": "990 ₽"
          },
          "asia": {
            "name": "Азия",
            "features": {
              "data": "8 ГБ данных",
              "validity": "30 дней",
              "speed": "4G/LTE скорость",
              "countries": "Таиланд, Япония, Корея и др."
            },
            "price": "790 ₽"
          },
          "usa": {
            "name": "США",
            "features": {
              "data": "15 ГБ данных",
              "validity": "30 дней",
              "speed": "4G/LTE скорость",
              "countries": "США и Канада"
            },
            "price": "1190 ₽"
          },
          "global": {
            "name": "Глобальный",
            "bestValue": "Выгоднее всего",
            "features": {
              "data": "20 ГБ данных",
              "validity": "30 дней",
              "speed": "4G/LTE скорость",
              "countries": "Работает в 120+ странах"
            },
            "price": "1990 ₽"
          }
        },
        "button": "Выбрать тариф"
      },
      "promotions": {
        "title": "Специальные предложения",
        "subtitle": "Акции и скидки для наших клиентов",
        "items": {
          "firstPurchase": {
            "title": "Скидка 15% на первую покупку",
            "description": "Используйте промокод FIRST15 при первом заказе",
            "code": "FIRST15"
          },
          "longTrip": {
            "title": "Глобальный тариф со скидкой 20%",
            "description": "При покупке тарифа на 90 дней",
            "code": "GLOBAL20"
          },
          "referral": {
            "title": "Приведи друга",
            "description": "Получите 500₽ на счет за каждого приглашенного друга",
            "code": "FRIEND500"
          }
        },
        "button": "Применить промокод"
      },
      "cta": {
        "title": "Готовы путешествовать без границ?",
        "subtitle": "Присоединяйтесь к тысячам путешественников, которые экономят на роуминге с Silk eSIM",
        "button": "Открыть Telegram бот",
        "note": "Активация занимает менее 1 минуты"
      },
      "footer": {
        "brandName": "Silk eSIM",
        "description": "Современный способ подключения мобильной связи без физических SIM-карт",
        "quickLinks": {
          "title": "Быстрые ссылки",
          "features": "Преимущества",
          "howItWorks": "Как работает",
          "faq": "FAQ",
          "privacy": "Политика конфиденциальности"
        },
        "contacts": {
          "title": "Контакты",
          "telegram": "Поддержка в Telegram",
          "email": "support@esim.ru"
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
