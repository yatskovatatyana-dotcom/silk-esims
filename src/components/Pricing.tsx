import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Zap, Rocket, Package, Gift, Crown, Shield, ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handlePlanClick = () => {
    navigate('/login');
  };

  const plans = [
    {
      key: 'start',
      name: 'Стартовый',
      data: '1 ГБ',
      duration: '5 дней',
      price: '199 ₽',
      note: null as string | null,
      bonus: null as string | null,
      popular: null as string | null,
      badge: null as string | null,
      icon: Zap,
      accent: false,
      tone: {
        iconBg: 'bg-[hsl(180_70%_45%/0.15)] text-[hsl(180_70%_35%)]',
      },
    },
    {
      key: 'base',
      name: 'Базовый',
      data: '5 ГБ',
      duration: '2 недели',
      price: '599 ₽',
      note: null,
      bonus: null,
      popular: null,
      badge: null,
      icon: Package,
      accent: false,
      tone: {
        iconBg: 'bg-muted text-muted-foreground',
      },
    },
    {
      key: 'hit',
      name: '',
      data: '10 ГБ',
      duration: '1 месяц',
      price: '999 ₽',
      note: 'всего 99 ₽ за 1 ГБ',
      bonus: null,
      popular: null,
      badge: 'Экономия ~990 ₽',
      icon: Rocket,
      accent: false,
      tone: {
        iconBg: 'bg-primary/15 text-primary',
      },
    },
    {
      key: 'double',
      name: '',
      data: '20 ГБ',
      bonus: '+ 3 ГБ бесплатно',
      totalData: '23 ГБ',
      duration: '1 месяц',
      price: '1 990 ₽',
      note: null,
      popular: null,
      badge: '2× трафика за ту же цену',
      icon: Gift,
      accent: true,
      tone: {
        iconBg: 'bg-[hsl(280_70%_55%/0.15)] text-[hsl(280_70%_50%)]',
      },
    },
    {
      key: 'maxSave',
      name: '',
      data: '30 ГБ',
      bonus: '+ 5 ГБ бесплатно',
      totalData: '35 ГБ',
      duration: '1 месяц',
      price: '2 899 ₽',
      note: null,
      popular: null,
      badge: 'Максимальная выгода · Экономия ~4 000 ₽',
      icon: Crown,
      accent: false,
      tone: {
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

            return (
              <Card
                key={index}
                className={`relative p-3 flex items-center gap-3 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
                  plan.accent
                    ? "border-border hover:shadow-card before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[hsl(280_70%_55%)]"
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

                {plan.badge && plan.popular && (
                  <Badge variant="secondary" className="absolute -top-2.5 right-3 px-2 py-0.5 text-[10px] whitespace-nowrap">
                    {plan.badge}
                  </Badge>
                )}

                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${plan.tone.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  {plan.name && (
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide truncate">
                      {plan.name}
                    </h3>
                  )}
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xl font-extrabold text-foreground leading-none">
                      {plan.data}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                      <Calendar className="w-3 h-3 shrink-0" />
                      <span className="truncate">{plan.duration}</span>
                    </span>
                  </div>
                  {plan.bonus && (
                    <div className="text-[11px] font-semibold text-primary mt-0.5 leading-none">
                      {plan.bonus}
                    </div>
                  )}
                  <div className="text-xs font-bold text-muted-foreground mt-1 leading-none whitespace-nowrap">
                    {plan.price}
                    {plan.note && (
                      <span className="ml-2 font-normal text-muted-foreground/80">· {plan.note}</span>
                    )}
                  </div>
                </div>

                <div className="shrink-0">
                  <Button
                    className={`font-bold text-xs px-3 ${
                      plan.accent ? "shadow-elegant" : "bg-gradient-primary text-primary-foreground hover:scale-[1.02] shadow-md hover:shadow-lg"
                    }`}
                    size="sm"
                    variant={plan.accent ? "gradient" : "default"}
                    onClick={handlePlanClick}
                  >
                    {t('pricing.button')} {plan.totalData ?? plan.data}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

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
