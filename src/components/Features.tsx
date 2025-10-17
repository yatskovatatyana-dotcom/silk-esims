import { Card } from "@/components/ui/card";
import { Zap, DollarSign, Globe, Smartphone, Users, Headphones } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Zap,
      title: t('features.items.instant.title'),
      description: t('features.items.instant.description'),
    },
    {
      icon: DollarSign,
      title: t('features.items.savings.title'),
      description: t('features.items.savings.description'),
    },
    {
      icon: Globe,
      title: t('features.items.flexibility.title'),
      description: t('features.items.flexibility.description'),
    },
    {
      icon: Smartphone,
      title: t('features.items.noPhysical.title'),
      description: t('features.items.noPhysical.description'),
    },
    {
      icon: Users,
      title: t('features.items.multipleProfiles.title'),
      description: t('features.items.multipleProfiles.description'),
    },
    {
      icon: Headphones,
      title: t('features.items.support.title'),
      description: t('features.items.support.description'),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
