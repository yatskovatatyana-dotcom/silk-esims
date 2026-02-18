import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handlePlanClick = () => {
    toast({
      title: t('pricing.inDevelopment'),
      description: t('pricing.comingSoon'),
    });
  };

  const plans = [
    {
      key: 'start',
      popular: false,
    },
    {
      key: 'optimal',
      popular: t('pricing.plans.optimal.popular'),
    },
    {
      key: 'advanced',
      popular: false,
    },
    {
      key: 'unlimited',
      popular: t('pricing.plans.unlimited.bestValue'),
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const features = [
              t(`pricing.plans.${plan.key}.features.data`),
              t(`pricing.plans.${plan.key}.features.validity`),
              t(`pricing.plans.${plan.key}.features.speed`),
              t(`pricing.plans.${plan.key}.features.access`),
            ];

            return (
              <Card
                key={index}
                className={`p-6 relative hover:shadow-card transition-all duration-300 ${
                  plan.popular ? "border-primary border-2" : "border-border"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                    {plan.popular}
                  </Badge>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                  <div className="text-3xl font-bold text-primary mt-4">
                    {t(`pricing.plans.${plan.key}.price`)}
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={handlePlanClick}
                >
                  {t('pricing.button')}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;