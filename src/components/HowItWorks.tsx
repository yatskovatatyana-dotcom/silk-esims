import { Card } from "@/components/ui/card";
import { MessageSquare, CreditCard, Smartphone } from "lucide-react";
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: MessageSquare,
      title: t('howItWorks.steps.choose.title'),
      description: t('howItWorks.steps.choose.description'),
      step: "01",
    },
    {
      icon: CreditCard,
      title: t('howItWorks.steps.pay.title'),
      description: t('howItWorks.steps.pay.description'),
      step: "02",
    },
    {
      icon: Smartphone,
      title: t('howItWorks.steps.activate.title'),
      description: t('howItWorks.steps.activate.description'),
      step: "03",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-8 text-center hover:shadow-card transition-all duration-300 bg-card border-border h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-primary">
                  {step.step}
                </div>
                
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
