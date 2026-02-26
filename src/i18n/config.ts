import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "features": "Benefits",
        "pricing": "Plans",
        "howItWorks": "Get Started",
        "connectionGuide": "Connection",
        "promotions": "Deals"
      },
      "hero": {
        "badge": "VPN Alternative",
        "title": "Tired of VPN?",
        "brandName": "Silk eSIM",
        "subtitle": "internet on a whole new level",
        "description": "No blocks or throttling\nSecure and fast\nMobile internet as it should be",
        "ctaButton": "Choose Plan",
        "learnMore": "How It Works",
        "connectEsim": "Get eSIM",
        "personalAccount": "My Account",
        "stats": {
          "instantConnection": "Instant\nconnection",
          "dataSecurity": "Your data\nis secure",
          "speedStability": "Speed and\nconnection stability"
        }
      },
      "features": {
        "sellingPoint": "Silk eSIM — internet through a foreign carrier.\nYou're roaming, so local network restrictions don't apply to you.",
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
            "title": "You're Protected",
            "description": "No risk of data theft, activity tracking, or personal information leaks"
          },
          "noPhysical": {
            "title": "No Stress",
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
              "f1": "Telegram without limits",
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
              "f4": "YouTube without limits"
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
      "connectionGuide": {
        "title": "How to Connect",
        "subtitle": "Step-by-step guide from purchase to working internet",
        "buyTelegram": "Connect via Telegram",
        "compatibilityLink": "Check device list",
        "steps": {
          "compatibility": {
            "title": "Check eSIM compatibility",
            "description": "Make sure your phone supports eSIM. Most iPhones from XS and newer, Samsung Galaxy S20+ and newer, Google Pixel 3+ support eSIM."
          },
          "buy": {
            "title": "Buy eSIM right in this bot",
            "description": ""
          },
          "qr": {
            "title": "Get QR Code",
            "description": "After purchase, you'll receive a QR code in the bot and by email. Open it on another device so you can scan it with your phone. Or use manual configuration."
          },
          "install": {
            "title": "Install eSIM",
            "ios": {
              "title": "iPhone (iOS)",
              "step1": "Settings → Cellular → Add eSIM",
              "step2": "Select «Use QR Code»",
              "step3": "Scan the QR code from the bot",
              "step4": "Confirm installation and label the plan"
            },
            "android": {
              "title": "Android",
              "step1": "Settings → Network → SIM cards → Add eSIM",
              "step2": "Select «Scan QR Code»",
              "step3": "Scan the QR code from the bot",
              "step4": "Confirm and activate the profile"
            }
          },
          "enable": {
            "title": "Turn on mobile data and roaming on the installed eSIM",
            "description": "Make sure to disable mobile data on your main SIM and enable it on the eSIM + turn on data roaming."
          },
          "captcha": {
            "title": "Complete the captcha via the carrier's link",
            "description": "You'll receive an SMS in English from a Russian carrier about arriving in Russia and activating roaming. This means everything is set up correctly! Follow the link to complete the captcha to bypass the 24-hour cooling period."
          },
          "ready": {
            "title": "Internet is Ready!",
            "description": "Done! Enjoy fast internet without blocks"
          }
        }
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
      "nav": {
        "features": "Преимущества",
        "pricing": "Тарифы",
        "howItWorks": "Как начать",
        "connectionGuide": "Подключение",
        "promotions": "Акции"
      },
      "hero": {
        "badge": "Альтернатива VPN",
        "title": "Надоел VPN?",
        "brandName": "Silk eSIM",
        "subtitle": "интернет совсем иного уровня",
        "description": "Без блокировок и замедлений\nБезопасный и быстрый\nМобильный интернет каким он должен быть",
        "ctaButton": "Выбрать тариф",
        "learnMore": "Как это работает",
        "connectEsim": "Подключить eSIM",
        "personalAccount": "Личный кабинет",
        "stats": {
          "instantConnection": "Мгновенное\nподключение",
          "dataSecurity": "Безопасность ваших данных",
          "speedStability": "Скорость и стабильность соединения"
        }
      },
      "features": {
        "sellingPoint": "Silk eSIM — интернет через зарубежного оператора.\nВы в роуминге и для вас нет ограничений местных сетей.",
        "title": "Почему Silk eSIM лучше VPN",
        "subtitle": "VPN активно теряет актуальность",
        "items": {
          "instant": {
            "title": "Не блокируется",
            "description": "Работает через мобильную сеть зарубежного оператора, а не через VPN-протоколы, которые блокируют"
          },
          "savings": {
            "title": "Стабильная скорость",
            "description": "Никаких замедлений — полная скорость 4G/LTE для YouTube, Instagram, видео звонки и обмен файлами без помех"
          },
          "flexibility": {
            "title": "Ты под защитой",
            "description": "Нет риска кражи данных, отслеживания активности или утечки личной информации"
          },
          "noPhysical": {
            "title": "Без стресса",
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
        "title": "Как начать пользоваться",
        "subtitle": "",
        "steps": {
          "choose": {
            "title": "Выбери тариф под себя",
            "description": "Тарифные опции под любые жизненные сценарии"
          },
          "pay": {
            "title": "Оплати картой МИР",
            "description": "Безопасная мгновенная оплата"
          },
          "activate": {
            "title": "Активируй eSIM",
            "description": "Отсканируй QR-код, включи мобильный интернет Silk eSIM и вперёд"
          }
        }
      },
      "pricing": {
        "title": "Выбери тариф",
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
              "f1": "Telegram без ограничений",
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
              "f4": "YouTube без ограничений"
            },
            "price": "999 ₽"
          }
        },
        "button": "Купить",
        "inDevelopment": "Рады, что ты заинтересовался!",
        "comingSoon": "Сейчас сервис находится в разработке. В ближайшее время мы запустимся!"
      },
      "promotions": {
        "title": "Специальные предложения",
        "subtitle": "Акции и скидки для новых пользователей",
        "items": {
          "firstPurchase": {
            "title": "Скидка 15% на первую покупку",
            "description": "Используй промокод FIRST15 при первом заказе",
            "code": "FIRST15"
          },
          "longTrip": {
            "title": "Безлимит со скидкой 20%",
            "description": "При покупке тарифа на 90 дней",
            "code": "UNLIM20"
          },
          "referral": {
            "title": "Приведи друга",
            "description": "Получи 500₽ на счёт за каждого приглашённого друга",
            "code": "FRIEND500"
          }
        },
        "button": "Применить промокод"
      },
      "cta": {
        "title": "Готов забыть об ограничениях?",
        "subtitle": "Присоединяйся к тысячам пользователей,\nкоторые уже перешли с VPN на Silk eSIM",
        "button": "Подключить eSIM сейчас",
        "note": ""
      },
      "connectionGuide": {
        "title": "Схема подключения",
        "subtitle": "Пошаговая инструкция от покупки до работающего интернета",
        "buyTelegram": "Подключить через Telegram",
        "compatibilityLink": "Список устройств",
        "steps": {
          "compatibility": {
            "title": "Проверь совместимость устройства",
            "description": "Убедись, что твой телефон поддерживает eSIM. Поддерживаются: iPhone XS и новее, Samsung Galaxy S20+ и новее, Google Pixel 3+ и другие."
          },
          "buy": {
            "title": "Купи eSIM прямо в этом боте",
            "description": ""
          },
          "activate": {
            "title": "Активируй пакет",
            "description": "После оплаты в меню появится купленный пакет. Активируй его нажав кнопку Старт."
          },
          "qr": {
            "title": "Получи QR-код",
            "description": "После покупки в бот (кнопка Показать QR) и на почту придёт QR-код для установки eSIM. Открой его с другого устройства, чтобы можно было отсканировать телефоном. Либо используй ручную конфигурацию."
          },
          "install": {
            "title": "Установи eSIM",
            "ios": {
              "title": "iPhone (iOS)",
              "step1": "Настройки → Сотовая связь → Добавить eSIM",
              "step2": "Выбери «Использовать QR-код»",
              "step3": "Отсканируй QR-код из бота",
              "step4": "Подтверди установку и назови тарифный план"
            },
            "android": {
              "title": "Android",
              "step1": "Настройки → Сеть → SIM-карты → Добавить eSIM",
              "step2": "Выбери «Сканировать QR-код»",
              "step3": "Отсканируй QR-код из бота",
              "step4": "Подтверди и активируй профиль"
            }
          },
          "enable": {
            "title": "Зайди в настройки сети телефона",
            "warning1": "Отключи мобильные данные на основной SIM-карте.",
            "warning2": "Включи мобильные данные и роуминг на установленной eSIM."
          },
          "captcha": {
            "title": "Пройди каптчу по ссылке от оператора",
            "description": "Придет SMS на английском языке от российского оператора связи о прибытии в Россию и подключении роуминга. Значит все установилось корректно! По ссылке необходимо пройти каптчу для обхода 24-часового охлаждающего периода."
          },
          "ready": {
            "title": "Настройка прошла успешно!",
            "description": "Готово! Наслаждайся быстрым интернетом без блокировок"
          }
        }
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