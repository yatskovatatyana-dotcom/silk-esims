import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingCart, QrCode, Smartphone, Signal, Globe, ShieldCheck, Wifi } from "lucide-react";
import { useTranslation } from 'react-i18next';

const steps = [
  {
    icon: ShoppingCart,
    titleKey: 'connectionGuide.steps.buy.title',
    descKey: 'connectionGuide.steps.buy.description',
    hasButtons: true,
  },
  {
    icon: QrCode,
    titleKey: 'connectionGuide.steps.qr.title',
    descKey: 'connectionGuide.steps.qr.description',
  },
  {
    icon: Smartphone,
    titleKey: 'connectionGuide.steps.install.title',
    descKey: 'connectionGuide.steps.install.description',
  },
  {
    icon: Signal,
    titleKey: 'connectionGuide.steps.enable.title',
    descKey: 'connectionGuide.steps.enable.description',
  },
  {
    icon: ShieldCheck,
    titleKey: 'connectionGuide.steps.captcha.title',
    descKey: 'connectionGuide.steps.captcha.description',
  },
  {
    icon: Wifi,
    titleKey: 'connectionGuide.steps.ready.title',
    descKey: 'connectionGuide.steps.ready.description',
  },
];

const ConnectionGuide = () => {
  const { t } = useTranslation();

  return (
    <section id="connection-guide" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('connectionGuide.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('connectionGuide.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              {/* Step number + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full min-h-[40px] bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <Card className="flex-1 p-5 bg-card border-border">
                <div className="flex items-start gap-3">
                  <step.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(step.descKey)}
                    </p>
                    {step.hasButtons && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        <Button variant="default" size="sm" className="gap-2" asChild>
                          <a href="#pricing">
                            <ShoppingCart className="w-4 h-4" />
                            {t('connectionGuide.buyOnSite')}
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href="https://t.me/silkesim_bot" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-4 h-4" />
                            {t('connectionGuide.buyTelegram')}
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionGuide;
