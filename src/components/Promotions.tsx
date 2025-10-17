import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Percent, Users, Star } from "lucide-react";

const promotions = [
  {
    icon: Gift,
    title: "Приветственный бонус",
    description: "Скидка 20% на первую покупку",
    code: "WELCOME20",
    badge: "Новым клиентам",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Percent,
    title: "Длительные поездки",
    description: "При покупке тарифа на 30 дней — скидка 15%",
    code: "LONGTRIP15",
    badge: "Популярно",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Приведи друга",
    description: "Вы и ваш друг получите по 10% скидки",
    code: "FRIEND10",
    badge: "Для всех",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Star,
    title: "Глобальный пакет",
    description: "Специальная цена на тариф для 150+ стран",
    code: "GLOBAL25",
    badge: "Ограниченно",
    color: "from-orange-500 to-red-500",
  },
];

const Promotions = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Специальные предложения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Экономьте больше с нашими актуальными промо-акциями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className="p-6 relative overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-5 group-hover:opacity-10 transition-opacity`}
              />

              <Badge className="mb-4 bg-gradient-primary text-primary-foreground">
                {promo.badge}
              </Badge>

              <div className={`w-12 h-12 bg-gradient-to-br ${promo.color} rounded-lg flex items-center justify-center mb-4`}>
                <promo.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {promo.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {promo.description}
              </p>

              <div className="bg-secondary/50 rounded-lg p-3 mb-4 border border-border">
                <div className="text-xs text-muted-foreground mb-1">Промокод:</div>
                <div className="font-mono font-bold text-foreground text-lg">
                  {promo.code}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                Использовать
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Промокоды можно применить при оформлении заказа в Telegram боте
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
