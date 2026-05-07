import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться на главную
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Legal</h1>

        <Tabs defaultValue="privacy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="privacy">Политика конфиденциальности</TabsTrigger>
            <TabsTrigger value="terms">Пользовательское соглашение</TabsTrigger>
          </TabsList>

          <TabsContent value="privacy">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
                <p>
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных
                  пользователей сервиса Silk eSIM (далее — «Сервис»).
                </p>
                <p>
                  Silk eSIM предоставляет eSIM зарубежного оператора, который дает доступ в интернет, социальным сетям,
                  звонкам в мессенджерах и другим ресурсам без каких-либо ограничений.
                </p>
                <p>Используя наш Сервис, вы соглашаетесь с условиями данной Политики конфиденциальности.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Сбор информации</h2>
                <p>Мы собираем следующие типы информации:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Персональные данные: имя, адрес электронной почты, номер телефона</li>
                  <li>Данные об использовании сервиса: информация о подключениях, тарифах, платежах</li>
                  <li>Технические данные: IP-адрес, тип устройства, браузер, операционная система</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Использование информации</h2>
                <p>Собранная информация используется для:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставления и улучшения наших услуг</li>
                  <li>Обработки платежей и управления подписками</li>
                  <li>Связи с вами по вопросам обслуживания</li>
                  <li>Обеспечения безопасности и предотвращения мошенничества</li>
                  <li>Соблюдения законодательных требований</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Защита данных</h2>
                <p>
                  Мы применяем современные технические и организационные меры для защиты ваших персональных данных
                  от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Передача данных третьим лицам</h2>
                <p>Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Когда это необходимо для предоставления наших услуг (платежные системы, провайдеры)</li>
                  <li>По требованию законодательства или государственных органов</li>
                  <li>С вашего явного согласия</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ваши права</h2>
                <p>Вы имеете право:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получать информацию о собранных данных</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших персональных данных</li>
                  <li>Отозвать согласие на обработку данных</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Файлы cookie</h2>
                <p>
                  Наш Сервис использует файлы cookie для улучшения пользовательского опыта, анализа использования
                  и персонализации контента. Вы можете управлять настройками cookie в вашем браузере.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Изменения в политике</h2>
                <p>
                  Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности.
                  Обновленная версия будет опубликована на этой странице с указанием даты последнего обновления.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Контакты</h2>
                <p>По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:</p>
                <ul className="list-none space-y-2">
                  <li>Email: <a href="mailto:silk-esim@srsignal.com" className="text-primary hover:underline">silk-esim@srsignal.com</a></li>
                  <li>Telegram: <a href="https://t.me/Silk_eSIM_support_bot" className="text-primary hover:underline">@Silk_eSIM_support_bot</a></li>
                </ul>
              </section>

              <div className="pt-8 border-t border-border text-sm">
                <p>Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="terms">
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
                <p>
                  Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между
                  сервисом Silk eSIM (далее — «Сервис») и физическим или юридическим лицом (далее — «Пользователь»),
                  использующим Сервис.
                </p>
                <p>
                  Используя Сервис, Пользователь подтверждает, что ознакомился с условиями настоящего Соглашения
                  и принимает их в полном объёме. В случае несогласия с условиями использование Сервиса должно
                  быть прекращено.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Предмет соглашения</h2>
                <p>
                  Сервис предоставляет Пользователю возможность приобретения и активации eSIM зарубежного
                  оператора связи для доступа в интернет, мессенджеры и другие сетевые ресурсы.
                </p>
                <p>
                  Сервис не является оператором связи и выступает посредником между Пользователем и поставщиком
                  услуг связи.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Регистрация и учётная запись</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Пользователь обязуется предоставлять достоверные данные при регистрации.</li>
                  <li>Пользователь несёт ответственность за сохранность учётных данных.</li>
                  <li>Сервис вправе отказать в регистрации или заблокировать учётную запись при нарушении условий.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Права и обязанности сторон</h2>
                <p>Пользователь обязуется:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Использовать Сервис в соответствии с действующим законодательством.</li>
                  <li>Не использовать Сервис для совершения противоправных действий.</li>
                  <li>Своевременно оплачивать выбранные тарифы.</li>
                </ul>
                <p>Сервис обязуется:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставлять услуги в соответствии с выбранным тарифом.</li>
                  <li>Обеспечивать техническую поддержку Пользователей.</li>
                  <li>Защищать персональные данные согласно Политике конфиденциальности.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Оплата и возврат средств</h2>
                <p>
                  Оплата услуг производится через доступные на Сервисе способы безопасной оплаты. Возврат
                  средств возможен в случае невозможности активации eSIM по техническим причинам со стороны
                  Сервиса. После активации eSIM возврат средств не производится.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Ограничение ответственности</h2>
                <p>
                  Сервис не несёт ответственности за качество связи в конкретных географических точках,
                  действия операторов связи, а также за временные перебои в работе сторонних сервисов.
                </p>
                <p>
                  Пользователь использует Сервис на свой риск. Сервис не гарантирует доступность всех ресурсов
                  в любой момент времени.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Интеллектуальная собственность</h2>
                <p>
                  Все материалы Сервиса, включая дизайн, тексты, логотипы и программный код, являются
                  интеллектуальной собственностью Сервиса и охраняются законодательством об авторском праве.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Изменение условий</h2>
                <p>
                  Сервис вправе в одностороннем порядке изменять условия настоящего Соглашения. Актуальная
                  версия публикуется на этой странице. Продолжение использования Сервиса после изменений
                  означает согласие с новой редакцией.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Контактные данные</h2>
                <p>По всем вопросам, связанным с использованием Сервиса, обращайтесь:</p>
                <ul className="list-none space-y-2">
                  <li>
                    Email: <a href="mailto:silk-esim@srsignal.com" className="text-primary hover:underline">silk-esim@srsignal.com</a>
                  </li>
                  <li>
                    Telegram: <a href="https://t.me/Silk_eSIM_support_bot" className="text-primary hover:underline">@Silk_eSIM_support_bot</a>
                  </li>
                </ul>
              </section>

              <div className="pt-8 border-t border-border text-sm">
                <p>Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Legal;
