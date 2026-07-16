import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Order = {
  id: string;
  countrySlug: string;
  countryName: string;
  planData: string; // "5 ГБ"
  planDays: number;
  price: number;
  priceLabel: string;
  createdAt: number;
  status: 'active' | 'pending' | 'expired';
  usedGb: number;
  usedDays: number;
};

export type ChatMessage = {
  id: string;
  from: 'user' | 'agent';
  text: string;
  ts: number;
};

type AuthState = { email: string } | null;

type Store = {
  auth: AuthState;
  setAuth: (a: AuthState) => void;
  orders: Order[];
  addOrder: (o: Omit<Order, 'id' | 'createdAt' | 'status' | 'usedGb' | 'usedDays'>) => Order;
  pendingLoginEmail: string;
  setPendingLoginEmail: (e: string) => void;
  chat: ChatMessage[];
  sendChat: (text: string) => void;
  resetChat: () => void;
};

const StoreCtx = createContext<Store | null>(null);

const KEY = 'silk-app-store-v1';

type Persisted = { auth: AuthState; orders: Order[] };

const initialAgentGreeting: ChatMessage = {
  id: 'greet',
  from: 'agent',
  text: 'Здравствуйте! Как я могу помочь?',
  ts: Date.now(),
};

export const AppStoreProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuthState] = useState<AuthState>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [pendingLoginEmail, setPendingLoginEmail] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([initialAgentGreeting]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const p = JSON.parse(raw) as Persisted;
        if (p.auth) setAuthState(p.auth);
        if (Array.isArray(p.orders)) setOrders(p.orders);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ auth, orders }));
    } catch {}
  }, [auth, orders]);

  const addOrder: Store['addOrder'] = (o) => {
    const order: Order = {
      ...o,
      id: `ord_${Math.random().toString(36).slice(2, 9)}`,
      createdAt: Date.now(),
      status: 'active',
      usedGb: 0,
      usedDays: 0,
    };
    setOrders((prev) => [order, ...prev]);
    return order;
  };

  const sendChat: Store['sendChat'] = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const user: ChatMessage = { id: `u_${Date.now()}`, from: 'user', text: trimmed, ts: Date.now() };
    setChat((prev) => [...prev, user]);
    // Scripted agent reply
    const replies = [
      'Отправьте, пожалуйста, скриншот QR-кода. Я подскажу шаги установки.',
      'Понял вас. Уточните модель устройства?',
      'Спасибо! Проверяю у оператора, ответ придёт в течение минуты.',
      'Готово. Попробуйте перезагрузить телефон и снова включить eSIM.',
    ];
    const next = replies[Math.min(chat.filter((m) => m.from === 'agent').length - 1, replies.length - 1)]
      ?? 'Мы получили ваше сообщение и скоро ответим.';
    window.setTimeout(() => {
      setChat((prev) => [...prev, { id: `a_${Date.now()}`, from: 'agent', text: next, ts: Date.now() }]);
    }, 900);
  };

  const resetChat = () => setChat([initialAgentGreeting]);

  const value: Store = {
    auth,
    setAuth: setAuthState,
    orders,
    addOrder,
    pendingLoginEmail,
    setPendingLoginEmail,
    chat,
    sendChat,
    resetChat,
  };

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
};

export const useStore = () => {
  const v = useContext(StoreCtx);
  if (!v) throw new Error('useStore outside provider');
  return v;
};
