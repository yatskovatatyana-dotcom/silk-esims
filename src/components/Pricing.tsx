import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  const regions = [
    {
      name: t('pricing.regions.europe.name'),
      popular: t('pricing.regions.europe.popular'),
      features: [
        t('pricing.regions.europe.features.data'),
        t('pricing.regions.europe.features.validity'),
        t('pricing.regions.europe.features.speed'),
        t('pricing.regions.europe.features.countries'),
      ],
      price: t('pricing.regions.europe.price'),
    },
    {
      name: t('pricing.regions.asia.name'),
      popular: false,
      features: [
        t('pricing.regions.asia.features.data'),
        t('pricing.regions.asia.features.validity'),
        t('pricing.regions.asia.features.speed'),
        t('pricing.regions.asia.features.countries'),
      ],
      price: t('pricing.regions.asia.price'),
    },
    {
      name: t('pricing.regions.usa.name'),
      popular: false,
      features: [
        t('pricing.regions.usa.features.data'),
        t('pricing.regions.usa.features.validity'),
        t('pricing.regions.usa.features.speed'),
        t('pricing.regions.usa.features.countries'),
      ],
      price: t('pricing.regions.usa.price'),
    },
    {
      name: t('pricing.regions.global.name'),
      popular: t('pricing.regions.global.bestValue'),
      features: [
        t('pricing.regions.global.features.data'),
        t('pricing.regions.global.features.validity'),
        t('pricing.regions.global.features.speed'),
        t('pricing.regions.global.features.countries'),
      ],
      price: t('pricing.regions.global.price'),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {regions.map((region, index) => (
            <Card
              key={index}
              className={`p-6 relative hover:shadow-card transition-all duration-300 ${
                region.popular ? "border-primary border-2" : "border-border"
              }`}
            >
              {region.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground">
                  {region.popular}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {region.name}
                </h3>
                <div className="text-3xl font-bold text-primary mt-4">
                  {region.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {region.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={region.popular ? "default" : "outline"}
                onClick={() => window.open('https://t.me/your_bot', '_blank')}
              >
                {t('pricing.button')}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
