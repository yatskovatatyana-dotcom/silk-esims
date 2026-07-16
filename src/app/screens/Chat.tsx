import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paperclip, Send } from 'lucide-react';
import { PhoneFrame, GradientHeader } from '../shell';
import { useStore } from '../store';

const Chat = () => {
  const nav = useNavigate();
  const { chat, sendChat } = useStore();
  const [text, setText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [chat]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    sendChat(text);
    setText('');
  };

  const today = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

  return (
    <PhoneFrame hideTabBar>
      <GradientHeader title="Чат с поддержкой" back onBack={() => nav(-1)} />
      <div ref={scrollRef} className="flex-1 overflow-y-auto bg-white px-4 py-4 flex flex-col gap-2">
        <div className="text-center text-xs text-foreground/50 my-2">Сегодня, {today}</div>
        {chat.map((m) => (
          <div key={m.id} className={`max-w-[80%] ${m.from === 'user' ? 'self-end' : 'self-start'}`}>
            <div
              className={`px-4 py-2.5 rounded-2xl text-[15px] leading-snug ${
                m.from === 'user'
                  ? 'bg-gradient-to-br from-[hsl(230_82%_55%)] to-[hsl(268_82%_60%)] text-white rounded-br-md'
                  : 'bg-muted text-foreground rounded-bl-md'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={submit} className="p-3 border-t border-border bg-white flex items-center gap-2 shrink-0">
        <div className="flex-1 flex items-center gap-2 h-12 bg-muted rounded-full pl-3 pr-2">
          <Paperclip className="w-5 h-5 text-foreground/40 shrink-0" />
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Написать сообщение..."
            className="flex-1 bg-transparent text-foreground placeholder:text-foreground/40 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(230_82%_55%)] to-[hsl(268_82%_60%)] text-white flex items-center justify-center shrink-0 hover:opacity-95 active:scale-[0.97] transition"
          aria-label="Отправить"
        >
          <Send className="w-5 h-5" fill="currentColor" />
        </button>
      </form>
    </PhoneFrame>
  );
};

export default Chat;
