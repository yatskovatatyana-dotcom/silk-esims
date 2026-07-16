import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { useStore } from '../store';

const Register = () => {
  const nav = useNavigate();
  const { setPendingLoginEmail } = useStore();
  const [email, setEmail] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setPendingLoginEmail(email.trim());
    nav('/app/login/code');
  };

  return (
    <PhoneFrame hideTabBar>
      <GradientHeader title="Регистрация" back onBack={() => nav(-1)} />
      <form onSubmit={submit} className="flex-1 flex flex-col bg-white">
        <div className="flex-1 px-6 pt-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <UserPlus className="w-10 h-10 text-primary" strokeWidth={2} />
          </div>
          <h2 className="mt-6 text-center text-[38px] font-extrabold text-foreground leading-tight">
            Создайте аккаунт
          </h2>
          <p className="mt-2 text-center text-foreground/60">
            Введите вашу почту, чтобы начать.
          </p>

          <div className="mt-10">
            <label className="block text-foreground font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите вашу почту"
              autoFocus
              className="w-full h-14 px-5 rounded-2xl border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="p-5 pb-8 space-y-4">
          <button
            type="submit"
            className="w-full h-14 rounded-full font-bold text-white bg-gradient-to-r from-[hsl(230_82%_50%)] to-[hsl(268_82%_58%)] hover:opacity-95 active:scale-[0.99] transition shadow-[0_10px_30px_-10px_rgba(90,60,220,0.5)]"
          >
            Продолжить
          </button>
          <div className="text-center text-sm text-foreground/60">
            Уже есть аккаунт?{' '}
            <Link to="/app/login" className="text-secondary font-bold">Войти</Link>
          </div>
        </div>
      </form>
    </PhoneFrame>
  );
};

export default Register;
