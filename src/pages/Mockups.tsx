import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import mockupV1 from '@/assets/mockup-v1.png.asset.json';
import mockupV2 from '@/assets/mockup-v2.png.asset.json';

type Screen = {
  n: number;
  title: string;
  desc: string;
  transitions: string[];
};

const screens: Screen[] = [
  {
    n: 1,
    title: 'Онбординг / Стартовый экран',
    desc: 'Приветствие «Одна eSIM на все поездки». Иллюстрация, краткий оффер «Мобильный интернет в 180+ странах». Кнопка «Начать» и ссылка «Уже есть аккаунт? Войти».',
    transitions: ['«Начать» → экран 2 (Главная / поиск страны)', '«Войти» → экран 8 (Вход)'],
  },
  {
    n: 2,
    title: 'Главная — поиск направления',
    desc: 'Логотип Silk eSIM, поисковая строка «Куда вам нужен интернет?», промо-баннер «Попробуйте бесплатно», карточка «Уже есть аккаунт? Войти», список популярных направлений с ценами «от €…».',
    transitions: [
      'Поиск/тап по стране → экран 4 (Страна → тарифы)',
      '«Все страны» → экран 3 (Каталог стран)',
      '«Войти» → экран 8 (Вход)',
      'Таб «Поддержка» → экран 12 (Поддержка)',
      'Таб «Профиль» → экран 7 (Профиль)',
    ],
  },
  {
    n: 3,
    title: 'Все страны',
    desc: 'Полный каталог направлений с поиском и ценами «от…». Флаг, название, минимальная цена, шеврон.',
    transitions: ['Тап по стране → экран 4 (Тарифы страны)'],
  },
  {
    n: 4,
    title: 'Тарифы страны (Таиланд)',
    desc: 'Список пакетов: 1 ГБ / 3 ГБ / 5 ГБ (Популярно) / 10 ГБ / 20 ГБ. Цена, срок действия, бейдж «Популярно» на среднем. Нижняя подпись «Тарифы действуют в сетях лучших операторов».',
    transitions: ['Выбор тарифа → экран 5 (Оформление)'],
  },
  {
    n: 5,
    title: 'Оформление — способ оплаты',
    desc: 'Итог заказа (страна, объём, срок, цена). Выбор оплаты: Карта (Visa/Mastercard/Мир), СБП по QR-коду, Криптовалюта. Кнопка «Оплатить», плашка «Безопасная оплата».',
    transitions: ['«Оплатить» (успех) → экран 6 (Установка eSIM)'],
  },
  {
    n: 6,
    title: 'Установка eSIM',
    desc: 'Пошаговая инструкция: 1) Установите eSIM (QR-код и профиль), 2) Включите мобильные данные и роуминг, 3) Подключитесь к сети. Плашка «Нужна помощь? Чат с поддержкой».',
    transitions: [
      '«Чат с поддержкой» → экран 13 (Чат)',
      'После установки → экран 2 (Главная) с активным пакетом → экран 7a (Мой eSIM)',
    ],
  },
  {
    n: 7,
    title: 'Профиль',
    desc: 'Аватар, email, история покупок (страна, объём, дата, цена), настройка «Язык», кнопка «Удалить профиль».',
    transitions: ['«Язык» → выбор языка', '«Удалить профиль» → подтверждение'],
  },
  {
    n: 8,
    title: 'Вход',
    desc: 'Иллюстрация, поле Email, кнопка «Продолжить», ссылка «У меня нет аккаунта».',
    transitions: [
      '«Продолжить» → экран 9 (Код подтверждения)',
      '«У меня нет аккаунта» → экран 11 (Регистрация)',
    ],
  },
  {
    n: 9,
    title: 'Код подтверждения',
    desc: '4-значный код на email, таймер повторной отправки 00:45, ссылка «Изменить email», числовая клавиатура.',
    transitions: ['Ввод корректного кода → экран 2 (Главная, авторизован)', '«Изменить email» → экран 8'],
  },
  {
    n: 10,
    title: 'Мой eSIM (активный пакет)',
    desc: 'Активный пакет: страна, статус «Активен», прогресс «5 ГБ из 10 ГБ», срок действия. Кнопка «+ Добавить пакет», поиск стран, популярные направления.',
    transitions: ['«+ Добавить пакет» → экран 4 (Тарифы страны)'],
  },
  {
    n: 11,
    title: 'Регистрация',
    desc: 'Ввод email, кнопка «Продолжить», ссылка «Уже есть аккаунт? Войти».',
    transitions: ['«Продолжить» → экран 9 (Код подтверждения)', '«Войти» → экран 8'],
  },
  {
    n: 12,
    title: 'Поддержка',
    desc: 'Большая карточка «Чат с поддержкой — мы онлайн и готовы помочь». Список частых вопросов: установка eSIM, активация, отсутствие интернета, остаток трафика, использование в другой стране.',
    transitions: ['«Чат с поддержкой» → экран 13', 'Тап по вопросу → раскрытие ответа'],
  },
  {
    n: 13,
    title: 'Поддержка — чат',
    desc: 'Плашка «Онлайн — мы рядом и готовы помочь». Переписка пользователя и агента, поле ввода сообщения.',
    transitions: ['Отправка сообщения → ответ агента'],
  },
];

export default function Mockups() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur sticky top-0 z-30">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-foreground/50">Silk eSIM</div>
            <h1 className="text-xl font-bold">Макет мобильного приложения</h1>
          </div>
          <Link
            to="/"
            className="text-sm font-semibold text-primary hover:underline"
          >
            ← На сайт
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-10 space-y-16">
        {/* Reference boards */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Референс дизайна</h2>
          <p className="text-foreground/70 mb-6 max-w-3xl">
            Два варианта общего вида экранов. Ниже пошагово разобраны все экраны и переходы между ними.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl overflow-hidden border border-border bg-white shadow-soft">
              <img src={mockupV1.url} alt="Вариант 1 макета" className="w-full h-auto" />
              <figcaption className="p-3 text-sm text-foreground/70">Вариант 1</figcaption>
            </figure>
            <figure className="rounded-2xl overflow-hidden border border-border bg-white shadow-soft">
              <img src={mockupV2.url} alt="Вариант 2 макета" className="w-full h-auto" />
              <figcaption className="p-3 text-sm text-foreground/70">Вариант 2</figcaption>
            </figure>
          </div>
        </section>

        {/* Flow overview */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Основной путь пользователя</h2>
          <div className="rounded-2xl bg-white border border-border p-5 md:p-6">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm md:text-base font-semibold">
              {[
                'Онбординг',
                'Главная / поиск',
                'Каталог стран',
                'Тарифы страны',
                'Оформление',
                'Установка eSIM',
                'Мой eSIM',
              ].map((step, i, arr) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/15 text-foreground border border-secondary/40">
                    {i + 1}. {step}
                  </span>
                  {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-foreground/40" />}
                </li>
              ))}
            </ol>
            <div className="mt-4 text-sm text-foreground/70">
              Параллельные ветки: <span className="font-semibold">Вход / Регистрация → Код</span>,{' '}
              <span className="font-semibold">Поддержка → Чат</span>,{' '}
              <span className="font-semibold">Профиль</span>.
            </div>
          </div>
        </section>

        {/* Screens */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Экраны и переходы</h2>
          <div className="space-y-4">
            {screens.map((s, idx) => (
              <div key={s.n}>
                <article className="rounded-2xl bg-white border border-border p-5 md:p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-extrabold">
                      {s.n}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 text-foreground/75 leading-relaxed">{s.desc}</p>
                      <div className="mt-4">
                        <div className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
                          Переходы
                        </div>
                        <ul className="space-y-1.5">
                          {s.transitions.map((t) => (
                            <li key={t} className="flex items-start gap-2 text-sm">
                              <ArrowRight className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
                {idx < screens.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-foreground text-background p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Комментарии по макету</h2>
          <p className="text-background/70 max-w-3xl">
            Этот экран — рабочая площадка для согласования. Оставляй правки: какие экраны добавить/убрать,
            какие переходы поменять, где нужны отдельные состояния (ошибка оплаты, пустой профиль, истёкший пакет и т.д.).
          </p>
        </section>
      </main>
    </div>
  );
}
