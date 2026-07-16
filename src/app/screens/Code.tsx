import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { useStore } from '../store';

const Code = () => {
  const nav = useNavigate();
  const { pendingLoginEmail, setAuth } = useStore();
  const [digits, setDigits] = useState(['', '', '', '']);
  const [seconds, setSeconds] = useState(45);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!pendingLoginEmail) nav('/app/login', { replace: true });
  }, [pendingLoginEmail, nav]);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  useEffect(() => {
    if (digits.every((d) => d !== '')) {
      setAuth({ email: pendingLoginEmail });
      window.setTimeout(() => nav('/app/my-esim', { replace: true }), 200);
    }
  }, [digits, pendingLoginEmail, setAuth, nav]);

  const setDigit = (i: number, v: string) => {
    const c = v.replace(/\D/g, '').slice(-1);
    setDigits((prev) => {
      const next = [...prev];
      next[i] = c;
      return next;
    });
    if (c && i < 3) inputs.current[i + 1]?.focus();
  };

  const mmss = `00:${seconds.toString().padStart(2, '0')}`;

  return (
    <PhoneFrame hideTabBar>
      <GradientHeader title="Код подтверждения" back onBack={() => nav(-1)} />
      <div className="flex-1 flex flex-col bg-white">
        <div className="flex-1 px-6 pt-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="w-9 h-9 text-primary" strokeWidth={2.2} />
          </div>
          <div className="text-center mt-6 text-foreground/70">Мы отправили код на</div>
          <div className="text-center font-bold text-lg text-foreground mt-1">{pendingLoginEmail}</div>

          <div className="mt-8 flex justify-center gap-3">
            {digits.map((d, i) => (
              <input
                key={i}
                ref={(el) => (inputs.current[i] = el)}
                inputMode="numeric"
                maxLength={1}
                value={d}
                onChange={(e) => setDigit(i, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace' && !digits[i] && i > 0) inputs.current[i - 1]?.focus();
                }}
                className={`w-16 h-16 text-center text-3xl font-bold rounded-2xl border-2 focus:outline-none transition ${
                  d ? 'border-primary text-primary' : 'border-border text-foreground'
                } focus:border-primary`}
              />
            ))}
          </div>

          <div className="text-center mt-10 text-sm text-foreground/60">
            Отправить код повторно через {mmss}
          </div>
          <button
            onClick={() => nav('/app/login')}
            className="mt-4 mx-auto block text-primary font-bold"
          >
            Изменить email
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
};

export default Code;
