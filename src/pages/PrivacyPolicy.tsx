import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
        
        <h1 className="text-4xl font-bold text-foreground mb-8">Политика конфиденциальности</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сервиса Freedom (далее — «Сервис»).
            </p>
            <p>
              Используя наш Сервис, вы соглашаетесь с условиями данной Политики конфиденциальности.
            </p>
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
            <p>
              Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев:
            </p>
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
            <p>
              По вопросам, связанным с обработкой персональных данных, вы можете обратиться к нам:
            </p>
            <ul className="list-none space-y-2">
              <li>Email: <a href="mailto:support@esim.ru" className="text-primary hover:underline">support@esim.ru</a></li>
              <li>Telegram: <a href="https://t.me/your_support" className="text-primary hover:underline">@your_support</a></li>
            </ul>
          </section>

          <div className="pt-8 border-t border-border text-sm">
            <p>Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
