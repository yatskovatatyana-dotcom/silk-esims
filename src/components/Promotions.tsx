import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Percent, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Promotions = () => {
  const { t } = useTranslation();

  const promotions = [
    {
      icon: Gift,
      title: t('promotions.items.firstPurchase.title'),
      description: t('promotions.items.firstPurchase.description'),
      code: t('promotions.items.firstPurchase.code'),
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Percent,
      title: t('promotions.items.longTrip.title'),
      description: t('promotions.items.longTrip.description'),
      code: t('promotions.items.longTrip.code'),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: t('promotions.items.referral.title'),
      description: t('promotions.items.referral.description'),
      code: t('promotions.items.referral.code'),
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="promotions" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('promotions.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('promotions.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className="p-6 relative overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border group h-full flex flex-col"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-5 group-hover:opacity-10 transition-opacity`}
              />

              <div className={`w-12 h-12 bg-gradient-to-br ${promo.color} rounded-lg flex items-center justify-center mb-4`}>
                <promo.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {promo.title}
              </h3>

              <p className="text-muted-foreground mb-4 flex-grow">
                {promo.description}
              </p>

              <div className="bg-secondary/50 rounded-lg p-3 mb-4 border border-border mt-auto">
                <div className="font-mono font-bold text-foreground text-lg text-center">
                  {promo.code}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('promotions.button')}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
