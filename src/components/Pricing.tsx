import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const regions = [
  {
    name: "Европа",
    popular: true,
    countries: "40+ стран",
    plans: [
      { data: "1 GB", days: "7 дней", price: "€5" },
      { data: "3 GB", days: "15 дней", price: "€12" },
      { data: "5 GB", days: "30 дней", price: "€18" },
    ],
  },
  {
    name: "Азия",
    popular: false,
    countries: "25+ стран",
    plans: [
      { data: "1 GB", days: "7 дней", price: "€6" },
      { data: "3 GB", days: "15 дней", price: "€14" },
      { data: "5 GB", days: "30 дней", price: "€20" },
    ],
  },
  {
    name: "США и Канада",
    popular: false,
    countries: "2 страны",
    plans: [
      { data: "1 GB", days: "7 дней", price: "€7" },
      { data: "3 GB", days: "15 дней", price: "€16" },
      { data: "5 GB", days: "30 дней", price: "€24" },
    ],
  },
  {
    name: "Глобальный",
    popular: true,
    countries: "150+ стран",
    plans: [
      { data: "1 GB", days: "7 дней", price: "€10" },
      { data: "3 GB", days: "15 дней", price: "€24" },
      { data: "5 GB", days: "30 дней", price: "€35" },
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Тарифы для всего мира
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите регион и подходящий пакет данных для вашего путешествия
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {regions.map((region, index) => (
            <Card
              key={index}
              className={`p-6 relative hover:shadow-card transition-all duration-300 ${
                region.popular ? "border-primary border-2" : "border-border"
              }`}
            >
              {region.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                  Популярно
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {region.name}
                </h3>
                <p className="text-sm text-muted-foreground">{region.countries}</p>
              </div>

              <div className="space-y-4 mb-6">
                {region.plans.map((plan, planIndex) => (
                  <div
                    key={planIndex}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <div>
                      <div className="font-semibold text-foreground">{plan.data}</div>
                      <div className="text-xs text-muted-foreground">{plan.days}</div>
                    </div>
                    <div className="font-bold text-lg text-primary">{plan.price}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Мгновенная активация
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Поддержка 24/7
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  Без роуминга
                </li>
              </ul>

              <Button
                className="w-full"
                variant={region.popular ? "default" : "outline"}
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                Выбрать тариф
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            * Цены указаны в евро. Оплата принимается в рублях по текущему курсу
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
