import { Card } from "@/components/ui/card";
import { Zap, Shield, Globe, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Мгновенная активация",
    description: "Получите eSIM зарубежного оператора и начните пользоваться связью без ограничений за считанные минуты",
  },
  {
    icon: Shield,
    title: "Без ограничений",
    description: "Полный доступ к интернету, соцсетям, звонкам в мессенджерах и другим ресурсам",
  },
  {
    icon: Globe,
    title: "Зарубежный оператор",
    description: "eSIM международного оператора для стабильной связи и свободного доступа ко всем ресурсам",
  },
  {
    icon: Clock,
    title: "Поддержка 24/7",
    description: "Наша команда всегда готова помочь вам в Telegram чате в любое время",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            eSIM зарубежного оператора для полной свободы в сети
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
