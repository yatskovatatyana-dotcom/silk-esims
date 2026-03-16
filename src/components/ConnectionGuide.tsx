import { Card } from "@/components/ui/card";
import { ShoppingCart, QrCode, Smartphone, ShieldCheck, Wifi, MonitorSmartphone, Play, AlertTriangle } from "lucide-react";
import { useTranslation } from 'react-i18next';

type Step = {
  icon: typeof ShoppingCart;
  titleKey: string;
  subtitleKey?: string;
  descKey?: string;
  hasPlatformTabs?: boolean;
  hasWarning?: boolean;
  hasLinks?: boolean;
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
    subtitleKey: 'connectionGuide.steps.install.subtitle',
    hasPlatformTabs: true,
  },
  {
    icon: AlertTriangle,
    titleKey: 'connectionGuide.steps.enable.title',
    hasWarning: true,
  },
  {
    icon: ShieldCheck,
    titleKey: 'connectionGuide.steps.captcha.title',
    descKey: 'connectionGuide.steps.captcha.description',
    hasLinks: true,
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

        <div className="max-w-3xl mx-auto space-y-3">
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

                    {step.subtitleKey && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {t(step.subtitleKey)}
                      </p>
                    )}

                    {step.descKey && (
                      <p className="text-muted-foreground text-sm">
                        {t(step.descKey)}
                      </p>
                    )}

                    {step.hasWarning && (
                      <div className="mt-3 space-y-2">
                        <div className="flex gap-2 items-start">
                          <span className="text-primary font-bold text-sm leading-5">1.</span>
                          <p className="text-foreground text-sm font-bold">
                            {t('connectionGuide.steps.enable.warning1')}
                          </p>
                        </div>
                        <div className="flex gap-2 items-start">
                          <span className="text-primary font-bold text-sm leading-5">2.</span>
                          <p className="text-foreground text-sm font-bold">
                            {t('connectionGuide.steps.enable.warning2')}
                          </p>
                        </div>
                      </div>
                    )}

                    {step.hasPlatformTabs && (
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* iOS */}
                        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                          <h4 className="font-semibold text-foreground text-sm mb-2">
                            {t('connectionGuide.steps.install.ios.title')}
                          </h4>
                          {[1, 2, 3, 4].map((stepNum) => (
                            <div key={stepNum} className="flex gap-2 items-start">
                              <span className="text-primary font-bold text-sm leading-5">{stepNum}.</span>
                              <p className="text-muted-foreground text-sm">
                                {t(`connectionGuide.steps.install.ios.step${stepNum}`)}
                              </p>
                            </div>
                          ))}
                        </div>
                        {/* Android */}
                        <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                          <h4 className="font-semibold text-foreground text-sm mb-2">
                            {t('connectionGuide.steps.install.android.title')}
                          </h4>
                          {[1, 2, 3, 4].map((stepNum) => (
                            <div key={stepNum} className="flex gap-2 items-start">
                              <span className="text-primary font-bold text-sm leading-5">{stepNum}.</span>
                              <p className="text-muted-foreground text-sm">
                                {t(`connectionGuide.steps.install.android.step${stepNum}`)}
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
