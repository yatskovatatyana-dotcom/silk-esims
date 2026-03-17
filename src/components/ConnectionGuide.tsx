import { Card } from "@/components/ui/card";
import { ShoppingCart, QrCode, ScanQrCode, ShieldCheck, Wifi, MonitorSmartphone, Play, Settings } from "lucide-react";
import { useTranslation } from 'react-i18next';

type Step = {
  icon: typeof ShoppingCart;
  titleKey: string;
  subtitleKey?: string;
  descKey?: string;
  hasPlatformTabs?: boolean;
  hasWarning?: boolean;
  hasLinks?: boolean;
  hasBotLink?: boolean;
  hasCompatibilityPaths?: boolean;
  hasStartButton?: boolean;
};

const steps: Step[] = [
  {
    icon: MonitorSmartphone,
    titleKey: 'connectionGuide.steps.compatibility.title',
    hasCompatibilityPaths: true,
  },
  {
    icon: QrCode,
    titleKey: 'connectionGuide.steps.qr.title',
    descKey: 'connectionGuide.steps.qr.description',
  },
  {
    icon: ScanQrCode,
    titleKey: 'connectionGuide.steps.install.title',
    subtitleKey: 'connectionGuide.steps.install.subtitle',
    hasPlatformTabs: true,
  },
  {
    icon: Settings,
    titleKey: 'connectionGuide.steps.enable.title',
    subtitleKey: 'connectionGuide.steps.enable.subtitle',
    hasWarning: true,
  },
  {
    icon: Play,
    titleKey: 'connectionGuide.steps.activate.title',
    descKey: 'connectionGuide.steps.activate.description',
    hasStartButton: true,
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
        <div className="text-center mb-4">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-2">
            <a href="https://app.silk-esim.ru/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">
              Silk eSIM
            </a>
            <span className="text-border">|</span>
            <a href="https://app.silk-esim.ru/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors">
              app.silk-esim.ru
            </a>
            <span className="text-border">|</span>
            <span>Telegram <a href="https://t.me/silk_esim" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@silk_esim</a></span>
            <span className="text-border">|</span>
            <span>Поддержка <a href="https://t.me/Silk_eSIM_support_bot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@Silk_eSIM_support</a></span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t('connectionGuide.title')}
          </h2>
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
                    <h3 className="text-lg font-semibold text-foreground mb-1 whitespace-pre-line">
                      {t(step.titleKey)}
                      {step.hasBotLink && (
                        <>
                          {' '}
                          <a href="https://t.me/silk_esim" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                            {t('connectionGuide.steps.buy.botLink')}
                          </a>
                        </>
                      )}
                    </h3>

                    {step.subtitleKey && (
                      <p className="text-sm text-muted-foreground mb-1">
                        {t(step.subtitleKey)}
                      </p>
                    )}

                    {step.hasCompatibilityPaths && (
                      <div className="text-sm space-y-1 mt-1">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">iOS: </span>
                          {t('connectionGuide.steps.compatibility.iosPath')}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Android: </span>
                          {t('connectionGuide.steps.compatibility.androidPath')}
                        </p>
                        <p className="text-green-500 font-medium mt-1">
                          {t('connectionGuide.steps.compatibility.descSuffix')}
                        </p>
                      </div>
                    )}

                    {step.descKey && !step.hasStartButton && (
                      <p className="text-muted-foreground text-sm whitespace-pre-line">
                        {t(step.descKey)}
                      </p>
                    )}

                    {step.hasStartButton && (
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-muted-foreground text-sm">
                          {step.descKey && t(step.descKey)}
                        </p>
                        <span className="px-5 py-1.5 bg-red-500 text-white text-sm font-semibold rounded-full shadow-md whitespace-nowrap shrink-0">
                          Start
                        </span>
                      </div>
                    )}

                    {step.hasLinks && (
                      <div className="mt-2 text-sm text-muted-foreground">
                        <p>{t('connectionGuide.steps.captcha.links')}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <a href="https://balance.beeline.ru/guest/" target="_blank" rel="noopener noreferrer" className="text-primary underline">balance.beeline.ru/guest/</a>
                          <span>или</span>
                          <a href="https://t2.ru/dostup" target="_blank" rel="noopener noreferrer" className="text-primary underline">t2.ru/dostup</a>
                        </div>
                      </div>
                    )}

                    {step.hasWarning && (
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* SIM card - data OFF */}
                        <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                          <p className="text-sm font-semibold text-foreground">{t('connectionGuide.steps.enable.sim_label')}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{t('connectionGuide.steps.enable.sim_data')}</span>
                            <div className="inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-red-500/80 pl-0.5">
                              <span className="block h-5 w-5 rounded-full bg-white shadow-lg" />
                            </div>
                          </div>
                        </div>
                        {/* eSIM - data ON, roaming ON */}
                        <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                          <p className="text-sm font-semibold text-foreground">{t('connectionGuide.steps.enable.esim_label')}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{t('connectionGuide.steps.enable.esim_data')}</span>
                            <div className="inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-green-500">
                              <span className="block h-5 w-5 rounded-full bg-white shadow-lg translate-x-5" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{t('connectionGuide.steps.enable.esim_roaming')}</span>
                            <div className="inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-green-500">
                              <span className="block h-5 w-5 rounded-full bg-white shadow-lg translate-x-5" />
                            </div>
                          </div>
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
                          {[1, 2, 3].map((stepNum) => (
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
                          {[1, 2, 3].map((stepNum) => (
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
