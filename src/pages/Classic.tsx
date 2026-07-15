import { Link } from 'react-router-dom';
import { Menu, Zap, Shield, Gauge, ArrowRight } from 'lucide-react';

/**
 * Архивная версия главной — синий градиент, крупный заголовок,
 * иллюстрация путешественников. Без упоминаний России.
 */
export default function Classic() {
  return (
    <div className="min-h-screen relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, hsl(220 75% 45%) 0%, hsl(255 70% 55%) 100%)' }}>
      {/* dotted pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Header */}
      <header className="relative z-10">
        <div className="container mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="px-5 py-2 rounded-full bg-white/15 backdrop-blur border border-white/20 text-white font-bold">
            Silk eSIM
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-full bg-white/90 text-[hsl(255_70%_45%)] font-semibold hover:bg-white transition"
            >
              Подключить eSIM
            </Link>
            <Link
              to="/login"
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/20 transition"
            >
              Личный кабинет
            </Link>
            <button className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 container mx-auto max-w-7xl px-6 pt-16 md:pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              Мобильный интернет<br />совсем иного уровня
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white/85 font-medium max-w-lg">
              Silk eSIM —<br />одна eSIM на все поездки
            </p>

            <div className="mt-8">
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[hsl(255_70%_45%)] font-bold text-lg shadow-xl hover:-translate-y-0.5 transition"
              >
                Выбрать тариф
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <ul className="mt-10 space-y-3 text-lg md:text-xl text-white/90 font-medium">
              <li>Стабильный доступ к любимым сервисам</li>
              <li>Безопасный и быстрый</li>
              <li>Мобильный интернет каким он должен быть</li>
            </ul>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="text-[16rem] md:text-[20rem] leading-none select-none opacity-95">
              🧳
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Zap, title: 'Мгновенное подключение' },
            { icon: Shield, title: 'Безопасность ваших данных' },
            { icon: Gauge, title: 'Скорость и стабильность соединения' },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 text-center"
            >
              <Icon className="w-7 h-7 mx-auto mb-4" strokeWidth={1.75} />
              <div className="text-white/95 font-medium">{title}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-white/60 text-sm">
          <Link to="/" className="underline hover:text-white">← Вернуться к текущей версии сайта</Link>
        </div>
      </main>
    </div>
  );
}
