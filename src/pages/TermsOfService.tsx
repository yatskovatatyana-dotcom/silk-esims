import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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

        <h1 className="text-4xl font-bold text-foreground mb-8">Пользовательское соглашение</h1>

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
                Email поддержки:{" "}
                <a href="mailto:silk-esim@srsignal.com" className="text-primary hover:underline">
                  silk-esim@srsignal.com
                </a>
              </li>
            </ul>
          </section>

          <div className="pt-8 border-t border-border text-sm">
            <p>Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
