import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, QrCode, Smartphone, Signal, ShieldCheck, Wifi, MonitorSmartphone, Apple, TabletSmartphone, Play } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

type Step = {
  icon: typeof ShoppingCart;
  titleKey: string;
  descKey?: string;
  hasTelegramButton?: boolean;
  hasCompatibilityLink?: boolean;
  hasPlatformTabs?: boolean;
};

const steps: Step[] = [
  {
    icon: MonitorSmartphone,
    titleKey: 'connectionGuide.steps.compatibility.title',
    descKey: 'connectionGuide.steps.compatibility.description',
  },
  {
    icon: ShoppingCart,
    titleKey: 'connectionGuide.steps.buy.title',
    descKey: 'connectionGuide.steps.buy.description',
  },
  {
    icon: Play,
    titleKey: 'connectionGuide.steps.activate.title',
    descKey: 'connectionGuide.steps.activate.description',
  },
  {
    icon: QrCode,
    titleKey: 'connectionGuide.steps.qr.title',
    descKey: 'connectionGuide.steps.qr.description',
  },
  {
    icon: Smartphone,
    titleKey: 'connectionGuide.steps.install.title',
    hasPlatformTabs: true,
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
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

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

                    {step.descKey && (
                      <p className="text-muted-foreground text-sm">
                        {t(step.descKey)}
                      </p>
                    )}

                    {step.hasCompatibilityLink && (
                      <div className="mt-3">
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                          <a href="https://www.apple.com/iphone/cellular/" target="_blank" rel="noopener noreferrer">
                            <TabletSmartphone className="w-4 h-4" />
                            {t('connectionGuide.compatibilityLink')}
                          </a>
                        </Button>
                      </div>
                    )}

                    {step.hasTelegramButton && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        <Button size="sm" className="gap-2 bg-secondary text-secondary-foreground hover:bg-white hover:text-secondary border border-secondary" asChild>
                          <a href="https://t.me/silkesim_bot" target="_blank" rel="noopener noreferrer">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                            {t('connectionGuide.buyTelegram')}
                          </a>
                        </Button>
                      </div>
                    )}

                    {step.hasPlatformTabs && (
                      <div className="mt-3 space-y-3">
                        {/* Platform tabs */}
                        <div className="flex gap-2">
                          <Button
                            variant={platform === 'ios' ? 'default' : 'outline'}
                            size="sm"
                            className="gap-2"
                            onClick={() => setPlatform('ios')}
                          >
                            <Apple className="w-4 h-4" />
                            {t('connectionGuide.steps.install.ios.title')}
                          </Button>
                          <Button
                            variant={platform === 'android' ? 'default' : 'outline'}
                            size="sm"
                            className="gap-2"
                            onClick={() => setPlatform('android')}
                          >
                            <Smartphone className="w-4 h-4" />
                            {t('connectionGuide.steps.install.android.title')}
                          </Button>
                        </div>

                        {/* Steps list */}
                        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                          {[1, 2, 3, 4].map((stepNum) => (
                            <div key={stepNum} className="flex gap-2 items-start">
                              <span className="text-primary font-bold text-sm mt-0.5">{stepNum}.</span>
                              <p className="text-muted-foreground text-sm">
                                {t(`connectionGuide.steps.install.${platform}.step${stepNum}`)}
                              </p>
                            </div>
                          ))}
                        </div>
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
