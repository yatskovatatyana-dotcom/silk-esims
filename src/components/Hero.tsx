import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-secondary">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-6">
            <Smartphone className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold text-white">Будущее связи уже здесь</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight drop-shadow-lg">
            eSIM для России
            <span className="block mt-4 text-5xl md:text-7xl">
              Быстро и удобно
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow">
            Подключайте мобильную связь за минуту прямо в Telegram. Без физических SIM-карт, без очередей.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="secondary" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-2xl font-bold"
              onClick={() => window.open('https://t.me/your_bot', '_blank')}
            >
              Открыть в Telegram
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm font-semibold shadow-lg"
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-10 h-10 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white">1 мин</div>
              <div className="text-sm text-white/80 mt-2 font-medium">Мгновенная активация</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Shield className="w-10 h-10 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80 mt-2 font-medium">Полностью онлайн</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Smartphone className="w-10 h-10 text-white mx-auto mb-3" />
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80 mt-2 font-medium">Круглосуточная поддержка</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;
