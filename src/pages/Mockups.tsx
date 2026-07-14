import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload } from 'lucide-react';
import mockupV1 from '@/assets/mockup-v1.png.asset.json';
import mockupV2 from '@/assets/mockup-v2.png.asset.json';

type Screen = {
  n: number;
  title: string;
  image?: string; // asset url or empty
  note?: string;
};

// Порядок экранов приложения. Изображения будем добавлять по одному по мере согласования.
const screens: Screen[] = [
  { n: 1,  title: 'Загрузка / Сплэш', note: 'Логотип Silk eSIM при запуске приложения.' },
  { n: 2,  title: 'Главная', note: 'Поиск страны, промо, популярные направления.' },
  { n: 3,  title: 'Все страны', note: 'Каталог направлений с ценой «от…».' },
  { n: 4,  title: 'Тарифы страны', note: 'Список пакетов, бейдж «Популярно».' },
  { n: 5,  title: 'Оформление / Оплата', note: 'Итог заказа и способ оплаты.' },
  { n: 6,  title: 'Установка eSIM', note: 'Пошаговая инструкция установки.' },
  { n: 7,  title: 'Мой eSIM', note: 'Активный пакет и остаток трафика.' },
  { n: 8,  title: 'Профиль', note: 'Аккаунт, история покупок, настройки.' },
  { n: 9,  title: 'Вход', note: 'Ввод email.' },
  { n: 10, title: 'Код подтверждения', note: '4-значный код на email.' },
  { n: 11, title: 'Регистрация', note: 'Создание аккаунта.' },
  { n: 12, title: 'Поддержка', note: 'Частые вопросы и вход в чат.' },
  { n: 13, title: 'Чат с поддержкой', note: 'Онлайн-переписка с агентом.' },
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

        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
