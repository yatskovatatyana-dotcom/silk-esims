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

  // Метаданные для каждого тарифа: иконка, цветовая тема, бейдж выгоды
  const plans = [
    {
      key: 'start',
      popular: false,
      icon: Zap,
      gb: 1,
      priceNum: 199,
      badge: null as string | null,
      accent: false,
      tone: {
        ring: 'border-l-4 border-l-[hsl(180_70%_45%)]',
        chip: 'bg-[hsl(180_70%_45%/0.12)] text-[hsl(180_70%_32%)]',
        price: 'text-[hsl(180_70%_35%)]',
        iconBg: 'bg-[hsl(180_70%_45%/0.15)] text-[hsl(180_70%_35%)]',
      },
    },
    {
      key: 'optimal',
      popular: t('pricing.plans.optimal.popular'),
      icon: Sparkles,
      gb: 5,
      priceNum: 499,
      badge: null,
      accent: true,
      tone: {
        ring: '',
        chip: 'bg-primary/10 text-primary',
        price: 'text-primary',
        iconBg: 'bg-gradient-primary text-primary-foreground',
      },
    },
    {
      key: 'max',
      popular: false,
      icon: TrendingDown,
      gb: 10,
      priceNum: 999,
      badge: 'Лучшая цена за ГБ',
      accent: false,
      tone: {
        ring: 'border-l-4 border-l-[hsl(28_90%_55%)]',
        chip: 'bg-[hsl(28_90%_55%/0.12)] text-[hsl(28_90%_40%)]',
        price: 'text-[hsl(28_90%_45%)]',
        iconBg: 'bg-[hsl(28_90%_55%/0.15)] text-[hsl(28_90%_45%)]',
      },
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

        <div className="flex flex-col gap-3 max-w-md mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const pricePerGb = Math.round(plan.priceNum / plan.gb);

            return (
              <Card
                key={index}
                className={`relative p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 ${plan.tone.ring} ${
                  plan.accent
                    ? "border-primary border-2 shadow-elegant bg-gradient-to-r from-primary/5 to-background"
                    : "border-border hover:border-primary/40 hover:shadow-card"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2.5 left-3 bg-gradient-primary text-primary-foreground px-2 py-0.5 shadow-lg uppercase tracking-wider text-[10px] whitespace-nowrap">
                    ⭐ {plan.popular}
                  </Badge>
                )}

                {plan.badge && !plan.popular && (
                  <Badge variant="secondary" className="absolute -top-2.5 left-3 px-2 py-0.5 text-[10px] whitespace-nowrap">
                    {plan.badge}
                  </Badge>
                )}

                {/* Иконка */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${plan.tone.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Центр: название, объём, срок */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide truncate">
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xl font-extrabold text-foreground leading-none">
                      {t(`pricing.plans.${plan.key}.data`)}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Calendar className="w-3 h-3 shrink-0" />
                      <span className="truncate">{t(`pricing.plans.${plan.key}.duration`)}</span>
                    </span>
                  </div>
                </div>

                {/* Право: цена + кнопка */}
                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <div className="text-lg font-extrabold leading-none whitespace-nowrap text-primary">
                    {t(`pricing.plans.${plan.key}.price`)}
                  </div>
                  <Button
                    className={`font-bold text-xs px-3 ${
                      plan.accent ? "shadow-elegant" : "bg-gradient-primary text-primary-foreground hover:scale-[1.02] shadow-md hover:shadow-lg"
                    }`}
                    size="sm"
                    variant={plan.accent ? "gradient" : "default"}
                    onClick={handlePlanClick}
                  >
                    {t('pricing.button')}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
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
