import { Card } from "@/components/ui/card";
import { Zap, Shield, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "150+ стран мира",
    description: "Путешествуйте по всему миру с одной eSIM. Европа, Азия, Америка, Африка — мы работаем везде",
  },
  {
    icon: Zap,
    title: "Без роуминга",
    description: "Забудьте о дорогих роуминговых тарифах. Используйте местные тарифы по всему миру",
  },
  {
    icon: Shield,
    title: "Мгновенная активация",
    description: "Купите eSIM в Telegram и активируйте её за минуту. Не нужно искать местные SIM-карты в аэропорту",
  },
  {
    icon: Clock,
    title: "Гибкие тарифы",
    description: "Выбирайте тарифы от 1 дня до месяца. Оплачивайте только то время, которое вам нужно",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Преимущества eSIM за границей
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Путешествуйте по миру без границ и переплат за роуминг
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
