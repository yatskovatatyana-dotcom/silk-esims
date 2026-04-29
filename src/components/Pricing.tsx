import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Sparkles, Zap, TrendingDown, Shield } from "lucide-react";
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const features = [
              t(`pricing.plans.${plan.key}.features.f1`),
              t(`pricing.plans.${plan.key}.features.f2`),
              t(`pricing.plans.${plan.key}.features.f3`),
              t(`pricing.plans.${plan.key}.features.f4`),
            ];
            const pricePerGb = Math.round(plan.priceNum / plan.gb);

            return (
              <Card
                key={index}
                className={`relative p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.accent
                    ? "border-primary border-2 shadow-elegant md:scale-[1.03] bg-gradient-to-b from-primary/5 to-background"
                    : "border-border hover:border-primary/40 hover:shadow-card"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 shadow-lg uppercase tracking-wider text-xs">
                    ⭐ {plan.popular}
                  </Badge>
                )}

                {plan.badge && !plan.popular && (
                  <Badge variant="secondary" className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs">
                    {plan.badge}
                  </Badge>
                )}

                {/* Header: иконка + название */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    plan.accent ? "bg-gradient-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                </div>

                {/* Большой блок объёма — главный визуальный якорь */}
                <div className={`rounded-xl p-4 mb-4 text-center ${
                  plan.accent ? "bg-primary/10" : "bg-muted/50"
                }`}>
                  <div className="text-4xl font-extrabold text-foreground leading-none">
                    {t(`pricing.plans.${plan.key}.data`)}
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground mt-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {t(`pricing.plans.${plan.key}.duration`)}
                  </div>
                </div>

                {/* Цена + цена за ГБ */}
                <div className="mb-5 text-center">
                  <div className="text-4xl font-bold text-primary leading-none">
                    {t(`pricing.plans.${plan.key}.price`)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1.5">
                    ≈ {pricePerGb} ₽ за ГБ
                  </div>
                </div>

                {/* Фичи */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                        plan.accent ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"
                      }`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  size="lg"
                  variant={plan.accent ? "gradient" : "default"}
                  onClick={handlePlanClick}
                >
                  {t('pricing.button')}
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
