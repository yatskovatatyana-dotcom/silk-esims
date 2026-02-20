import { Card } from "@/components/ui/card";
import { Zap, Gauge, ShieldAlert } from "lucide-react";
import { useTranslation } from 'react-i18next';

const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3c-1.5 3-3 5.5-3 8.5C9 14.5 10.5 17 12 17c1.5 0 3-2.5 3-5.5C15 8.5 13.5 6 12 3z" />
    <path d="M7.5 8C6 10 5 12.5 5.5 15c.5 2 2 3.5 4 4" />
    <path d="M16.5 8c1.5 2 2.5 4.5 2 7-.5 2-2 3.5-4 4" />
    <path d="M4 14c-1 1.5-1 3 0 4.5C5.5 20 8 20.5 10 20" />
    <path d="M20 14c1 1.5 1 3 0 4.5C18.5 20 16 20.5 14 20" />
  </svg>
);

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Zap,
      title: t('features.items.instant.title'),
      description: t('features.items.instant.description'),
    },
    {
      icon: Gauge,
      title: t('features.items.savings.title'),
      description: t('features.items.savings.description'),
    },
    {
      icon: ShieldAlert,
      title: t('features.items.flexibility.title'),
      description: t('features.items.flexibility.description'),
    },
    {
      icon: LotusIcon,
      title: t('features.items.noPhysical.title'),
      description: t('features.items.noPhysical.description'),
    },
  ];

  return (
    <section id="features" className="pt-8 pb-4 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="relative max-w-3xl mx-auto mb-12 mt-4 px-8 py-8 bg-primary rounded-2xl shadow-lg">
            <p className="text-xl md:text-2xl font-bold text-primary-foreground leading-relaxed">
              {t('features.sellingPoint')}
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t('features.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
