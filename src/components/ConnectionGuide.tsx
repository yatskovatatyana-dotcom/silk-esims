import { Card } from "@/components/ui/card";
import {
  MonitorSmartphone,
  ShoppingCart,
  QrCode,
  ScanLine,
  CheckCircle2,
  Smartphone,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { useTranslation } from "react-i18next";

type Toggle = { label: string; on: boolean };

type SubItem = {
  text: string;
  bold?: boolean;
  toggles?: Toggle[];
};

type Step = {
  icon: typeof MonitorSmartphone;
  title: string;
  subtitle?: string;
  items?: (string | SubItem)[];
  note?: string;
  noteType?: "info" | "warning";
  hasCompatibilityPaths?: boolean;
  hasRfLinks?: boolean;
  hasSupportLink?: boolean;
};

const ConnectionGuide = () => {
  const { t } = useTranslation();

  const steps: Step[] = [
    {
      icon: MonitorSmartphone,
      title: "Проверьте поддержку eSIM",
      hasCompatibilityPaths: true,
    },
    {
      icon: ShoppingCart,
      title: "Купите пакет",
      items: [
        "@silk_esim или app.silk-esim.ru",
        "Выберите страну и пакет, оплатите",
      ],
    },
    {
      icon: QrCode,
      title: "Получите, отсканируйте QR и подтвердите установку",
      items: [
        "Нажмите «Активировать eSIM» — придёт QR (также на email)",
        "Откройте QR на другом экране и наведите камеру телефона",
        "Или вручную: Настройки → Сотовые → Добавить eSIM",
        "Подтвердите и дождитесь загрузки профиля (1–2 мин)",
      ],
      note: "Нужен интернет (Wi-Fi). Дайте eSIM понятное имя — чтобы не путать с основной.",
      noteType: "info",
    },
    {
      icon: Smartphone,
      title: "Включите eSIM как основную",
      items: [
        { text: "Основная SIM — выключите мобильные данные", bold: true },
        {
          text: "eSIM:",
          bold: true,
          toggles: [
            { label: "Включите мобильные данные", on: true },
            { label: "Включите роуминг данных", on: true },
          ],
        },
        "Выключите Wi-Fi и VPN",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Верификация (только РФ)",
      items: [
        "Придёт SMS от Билайн или Tele2",
        "Перейдите по ссылке и пройдите авторизацию",
      ],
      hasRfLinks: true,
    },
    {
      icon: Wifi,
      title: "Проверьте подключение",
      items: [
        "Откройте любой сайт",
        "Не работает — вкл/выкл авиарежим, тип сети LTE/4G",
      ],
      note: "eSIM устанавливается всего 1 раз\nДалее просто докупайте пакеты на РФ или для путешествий в другие страны",
      noteType: "info",
      hasSupportLink: true,
    },
  ];

  return (
    <section id="connection-guide" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-6">
          <div className="pl-16 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-2">
              <a
                href="https://app.silk-esim.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                Silk eSIM
              </a>
              <span className="text-border">|</span>
              <a
                href="https://app.silk-esim.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-colors"
              >
                app.silk-esim.ru
              </a>
              <span className="text-border">|</span>
              <span>
                Telegram{" "}
                <a
                  href="https://t.me/silk_esim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @silk_esim
                </a>
              </span>
              <span className="text-border">|</span>
              <span>
                Поддержка{" "}
                <a
                  href="https://t.me/Silk_eSIM_support_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @Silk_eSIM_support
                </a>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t("connectionGuide.title")}
            </h2>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full min-h-[40px] bg-border mt-2" />
                )}
              </div>

              <Card className="flex-1 p-5 bg-card border-border">
                <div className="flex items-start gap-3">
                  <step.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>

                    {step.subtitle && (
                      <p className="text-sm text-muted-foreground mb-2">{step.subtitle}</p>
                    )}

                    {step.hasCompatibilityPaths && (
                      <div className="text-sm space-y-1 mt-1">
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">iOS: </span>
                          {t("connectionGuide.steps.compatibility.iosPath")}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-semibold text-foreground">Android: </span>
                          {t("connectionGuide.steps.compatibility.androidPath")}
                        </p>
                        <p className="text-green-500 font-medium mt-1">
                          {t("connectionGuide.steps.compatibility.descSuffix")}
                        </p>
                      </div>
                    )}

                    {step.items && (
                      <ol className="mt-2 space-y-2">
                        {step.items.map((item, i) => {
                          const isObj = typeof item === "object";
                          const text = isObj ? item.text : item;
                          return (
                            <li key={i} className={`flex gap-3 ${isObj && item.toggles ? "items-start" : "items-center"}`}>
                              <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0`}>
                                {i + 1}
                              </span>
                              <div className="flex-1">
                                <p
                                  className={`text-sm text-muted-foreground whitespace-pre-line ${
                                    isObj && item.bold ? "font-medium text-foreground" : ""
                                  }`}
                                >
                                  {text}
                                </p>
                                {isObj && item.toggles && (
                                  <ul className="mt-2 space-y-1.5">
                                    {item.toggles.map((tg, ti) => (
                                      <li key={ti} className="flex items-center justify-between gap-3 text-sm text-foreground bg-muted/40 rounded-md px-3 py-1.5">
                                        <span>{tg.label}</span>
                                        <span
                                          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                                            tg.on ? "bg-[hsl(142,71%,45%)]" : "bg-muted-foreground/40"
                                          }`}
                                          aria-hidden
                                        >
                                          <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                                              tg.on ? "translate-x-[18px]" : "translate-x-0.5"
                                            }`}
                                          />
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                    )}

                    {step.hasRfLinks && (
                      <div className="mt-3 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                        <p className="mb-1">
                          Прямые ссылки на авторизацию, если SMS не пришла:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <a
                            href="https://balance.beeline.ru/guest/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                          >
                            balance.beeline.ru/guest/
                          </a>
                          <span>или</span>
                          <a
                            href="https://t2.ru/dostup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                          >
                            t2.ru/dostup
                          </a>
                        </div>
                        <p className="mt-2 text-xs italic">*Снятие 24-часового охлаждающего периода</p>
                      </div>
                    )}

                    {step.note && (
                      <div
                        className={`mt-3 rounded-lg p-3 text-sm whitespace-pre-line ${
                          step.noteType === "warning"
                            ? "bg-destructive/10 text-destructive border border-destructive/20"
                            : "bg-primary/5 text-primary border border-primary/20"
                        }`}
                      >
                        {step.note}
                      </div>
                    )}

                    {step.hasSupportLink && (
                      <p className="mt-3 text-sm text-muted-foreground">
                        При проблемах — напишите в поддержку{" "}
                        <a
                          href="https://t.me/Silk_eSIM_support_bot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          @Silk_eSIM_support_bot
                        </a>
                      </p>
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
