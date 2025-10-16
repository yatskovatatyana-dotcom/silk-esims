import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-white rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам пользователей, которые уже выбрали удобство eSIM
          </p>
          
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => window.open('https://t.me/your_bot', '_blank')}
            className="shadow-lg hover:shadow-xl"
          >
            <Send className="mr-2" />
            Открыть Telegram бот
          </Button>
          
          <p className="mt-6 text-sm opacity-75">
            Активация занимает менее 1 минуты
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
