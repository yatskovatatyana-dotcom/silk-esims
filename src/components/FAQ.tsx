import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const items = ['whatsapp', 'calls', 'start', 'hotspot', 'more', 'devices'] as const;

  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/40 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
          {t('faq.title')}
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((k) => (
            <AccordionItem
              key={k}
              value={k}
              className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-soft"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground py-5 hover:no-underline">
                {t(`faq.items.${k}.q`)}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 leading-relaxed pb-5">
                {t(`faq.items.${k}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
