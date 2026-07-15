import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload } from 'lucide-react';
import mockupV1 from '@/assets/mockup-v1.png.asset.json';
import mockupV2 from '@/assets/mockup-v2.png.asset.json';
import s01 from '@/assets/screens/01-splash.png.asset.json';
import s02 from '@/assets/screens/02-home.png';
import s03 from '@/assets/screens/03-all-countries.png';
import s04 from '@/assets/screens/04-plans.png';
import s05 from '@/assets/screens/05-checkout.png';
import s06 from '@/assets/screens/06-install.png';
import s07 from '@/assets/screens/07-my-esim.png.asset.json';
import s08 from '@/assets/screens/08-profile.png';
import s08b from '@/assets/screens/08b-profile-empty.png';
import s09 from '@/assets/screens/09-login.png';
import s10 from '@/assets/screens/10-code.png';
import s11 from '@/assets/screens/11-register.png';
import s12 from '@/assets/screens/12-support.png';
import s13 from '@/assets/screens/13-chat.png';

type Screen = {
  n: number;
  title: string;
  image?: string;
  note?: string;
};

const screens: Screen[] = [
  { n: 1, title: 'Загрузка / Сплэш', image: s01.url, note: 'Заставка при запуске. Кнопка «Начать», ссылка «Уже есть аккаунт? Войти».' },
  { n: 2, title: 'Главная', image: s02, note: 'Поиск страны, промо «Попробуйте бесплатно», популярные направления.' },
  { n: 3, title: 'Все страны', image: s03, note: 'Полный каталог с ценой «от…».' },
  { n: 4, title: 'Тарифы страны', image: s04, note: 'Пакеты 1/3/5/10/20 ГБ, бейдж «Популярно».' },
  { n: 5, title: 'Оформление / Оплата', image: s05, note: 'Итог заказа и способы оплаты: карта, СБП, крипто.' },
  { n: 6, title: 'Установка eSIM', image: s06, note: 'Пошаговая инструкция и вход в чат поддержки.' },
  { n: 7, title: 'Мой eSIM', image: s07, note: 'Активный пакет, прогресс трафика, «Добавить пакет».' },
  { n: 8, title: 'Профиль', image: s08, note: 'Email, история покупок, язык, удаление профиля.' },
  { n: 8.1, title: 'Профиль (пусто)', image: s08b, note: 'Состояние до входа: приглашение войти и подобрать страну.' },
  { n: 9, title: 'Вход', image: s09, note: 'Ввод email, ссылка на регистрацию.' },
  { n: 10, title: 'Код подтверждения', image: s10, note: '4-значный код на email, повторная отправка через 00:45.' },
  { n: 11, title: 'Регистрация', image: s11, note: 'Ввод email нового пользователя.' },
  { n: 12, title: 'Поддержка', image: s12, note: 'Чат с поддержкой и частые вопросы.' },
  { n: 13, title: 'Чат с поддержкой', image: s13, note: 'Онлайн-переписка с агентом.' },
];


export default function Mockups() {
  // Локальный превью-стор для загрузки изображений (только для просмотра в браузере).
  const [uploads, setUploads] = useState<Record<number, string>>({});

  const handleUpload = (n: number, file: File) => {
    const url = URL.createObjectURL(file);
    setUploads((prev) => ({ ...prev, [n]: url }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-white/80 backdrop-blur sticky top-0 z-30">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-foreground/50">Silk eSIM</div>
            <h1 className="text-xl font-bold">Экраны мобильного приложения</h1>
          </div>
          <Link to="/" className="text-sm font-semibold text-primary hover:underline">
            ← На сайт
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-10 space-y-10">
        <section className="rounded-2xl bg-white border border-border p-5 md:p-6">
          <h2 className="text-lg font-bold mb-1">Как работаем</h2>
          <p className="text-foreground/70 text-sm leading-relaxed">
            Ниже — пронумерованный список экранов. Согласуем по одному: пришли картинку нужного экрана,
            и я вставлю её в соответствующий шаг. Когда всё готово — выгрузим финальный набор для разработчика.
          </p>
          <details className="mt-4">
            <summary className="cursor-pointer text-sm font-semibold text-primary">
              Показать исходные листы с макетом
            </summary>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <img src={mockupV1.url} alt="Лист 1" className="rounded-xl border border-border w-full h-auto" />
              <img src={mockupV2.url} alt="Лист 2" className="rounded-xl border border-border w-full h-auto" />
            </div>
          </details>
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {screens.map((s) => {
            const img = s.image || uploads[s.n];
            return (
              <article
                key={s.n}
                className="rounded-2xl bg-white border border-border overflow-hidden shadow-soft flex flex-col"
              >
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                  <span className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-base font-extrabold">
                    {s.n}
                  </span>
                  <h3 className="font-bold text-base leading-tight">{s.title}</h3>
                </div>

                <div className="aspect-[9/16] bg-muted/50 flex items-center justify-center relative">
                  {img ? (
                    <img src={img} alt={s.title} className="w-full h-full object-contain" />
                  ) : (
                    <label className="flex flex-col items-center gap-2 text-foreground/50 text-sm cursor-pointer hover:text-foreground/80 transition-colors p-6 text-center">
                      <Upload className="w-6 h-6" />
                      <span>Загрузить изображение экрана</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleUpload(s.n, f);
                        }}
                      />
                    </label>
                  )}
                </div>

                {s.note && (
                  <div className="px-4 py-3 text-sm text-foreground/70 border-t border-border">
                    {s.note}
                  </div>
                )}
              </article>
            );
          })}
        </section>

        <section className="rounded-2xl bg-foreground text-background p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-bold mb-1">Дальше</h2>
          <p className="text-background/70 text-sm max-w-3xl">
            Пришли картинку первого экрана — «Загрузка / Сплэш». Дальше по порядку: главная, каталог стран и т.д.
            Когда все экраны на месте, соберу их в один архив для передачи разработчику.
          </p>
        </section>
      </main>
    </div>
  );
}
