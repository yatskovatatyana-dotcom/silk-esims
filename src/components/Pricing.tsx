import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePlanClick = () => {
    navigate('/login');
  };


  const plans = [
    { key: 'start', popular: false },
    { key: 'optimal', popular: t('pricing.plans.optimal.popular') },
    { key: 'max', popular: false },
  ];

  return (
    <section id="pricing" className="pt-8 pb-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            {t('pricing.title')}
          </h2>
        </div>


        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const features = [
              t(`pricing.plans.${plan.key}.features.f1`),
              t(`pricing.plans.${plan.key}.features.f2`),
              t(`pricing.plans.${plan.key}.features.f3`),
              t(`pricing.plans.${plan.key}.features.f4`),
            ];

            return (
              <Card
                key={index}
                className={`p-6 relative hover:shadow-card transition-all duration-300 ${
                  plan.popular ? "border-primary border-2" : "border-border"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
                    {plan.popular}
                  </Badge>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                  <div className="text-xl font-bold text-primary">
                    {t(`pricing.plans.${plan.key}.data`)}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {t(`pricing.plans.${plan.key}.duration`)}
                  </div>
                </div>

                <div className="text-3xl font-bold text-primary mb-4">
                  {t(`pricing.plans.${plan.key}.price`)}
                </div>

                <ul className="space-y-2.5 mb-6">
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
