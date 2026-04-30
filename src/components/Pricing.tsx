import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Sparkles, Zap, TrendingDown, Shield, ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePlanClick = () => {
    navigate('/login');
  };

  // Метаданные для каждого тарифа: иконка, расчёт цены за ГБ, бейдж выгоды
  const plans = [
    {
      key: 'start',
      popular: false,
      icon: Zap,
      gb: 1,
      priceNum: 199,
      badge: null as string | null,
      accent: false,
    },
    {
      key: 'optimal',
      popular: t('pricing.plans.optimal.popular'),
      icon: Sparkles,
      gb: 5,
      priceNum: 499,
      badge: null,
      accent: true,
    },
    {
      key: 'max',
      popular: false,
      icon: TrendingDown,
      gb: 10,
      priceNum: 999,
      badge: 'Лучшая цена за ГБ',
      accent: false,
    },
  ];

  return (
    <section id="pricing" className="pt-8 pb-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {t('pricing.title')}
          </h2>
          <p className="text-base text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <Shield className="w-4 h-4 text-primary" />
            Без подписок · Оплата разово · Активация по QR
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const pricePerGb = Math.round(plan.priceNum / plan.gb);

            return (
              <Card
                key={index}
                className={`relative p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.accent
                    ? "border-primary border-2 shadow-elegant bg-gradient-to-b from-primary/5 to-background"
                    : "border-border hover:border-primary/40 hover:shadow-card"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 shadow-lg uppercase tracking-wider text-xs">
                    ⭐ {plan.popular}
                  </Badge>
                )}

                {plan.badge && !plan.popular && (
                  <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs whitespace-nowrap">
                    {plan.badge}
                  </Badge>
                )}

                {/* Header: иконка + название */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    plan.accent ? "bg-gradient-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                </div>

                {/* Объём */}
                <div className={`rounded-xl p-3 mb-3 text-center ${
                  plan.accent ? "bg-primary/10" : "bg-muted/50"
                }`}>
                  <div className="text-3xl font-extrabold text-foreground leading-none">
                    {t(`pricing.plans.${plan.key}.data`)}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-1.5">
                    <Calendar className="w-3 h-3" />
                    {t(`pricing.plans.${plan.key}.duration`)}
                  </div>
                </div>

                {/* Цена */}
                <div className="mb-5 text-center flex-1 flex flex-col justify-center">
                  <div className="text-3xl font-bold text-primary leading-none">
                    {t(`pricing.plans.${plan.key}.price`)}
                  </div>
                </div>

                <Button
                  className={`w-full font-bold ${
                    plan.accent ? "shadow-elegant" : "bg-gradient-primary text-primary-foreground hover:scale-[1.02] shadow-md hover:shadow-lg"
                  }`}
                  size="lg"
                  variant={plan.accent ? "gradient" : "default"}
                  onClick={handlePlanClick}
                >
                  {t('pricing.button')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Доверительная плашка под тарифами */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Безопасный платёж</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Работает на iPhone и Android</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Поддержка 24/7</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
