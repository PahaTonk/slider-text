'use strict';
const listItems = (function() {
    // массив для заполнения популярной функциональности
    // каждый эл-нт массива отдельный li
    // title - заголовок(строка), description - описани(строка), CSSClass - класс элемента(массив строк)
    /* шаблон элемента массива
        {
            title : '',
            description : '',
            CSSClass : [],
        },
    */
    const listItemsText = [
        {
            title: 'SMS-уведомления',
            description: 'Добавляет возможность смс-оповещения о новых заявках из формы обратной связи.',
            CSSClass: []
        },
        {
            title: 'Индивидуальные функции',
            description: 'Разработка специального функционала под требования заказчика. Например, различные калькуляторы, модули, эффекты и т.д. и т.п.',
            CSSClass: []
        },
        {
            title: 'Проектирование, дизайн, юзабилити',
            description: 'Проектирование интерфейса будущего сайта. Продумывание юзабилити. Совокупность графических элементов, шрифтов, цветов, индивидуальных тематических иконок, реализованных на сайте.',
            CSSClass: []
        },
        {
            title: 'Система управления сайтом (CMS) ',
            description: 'CMS — система управления контентом, используемая для самостоятельного процесса создания, редактирования и управления контентом (фотографии, страницы, товары, категории, новости и т.д.).',
            CSSClass: []
        },
        {
            title: 'Блог, новостная лента',
            description: 'Позволяет выводить новостную ленту в различных блоках сайта.',
            CSSClass: []
        },
        {
            title: 'Статистика посещений',
            description: 'Подключение к сайту Google Analytic или Yandex Metrika на выбор для просмотра полной информации о посещения магазина, источников перехода и т.д.',
            CSSClass: []
        },
        {
            title: 'Карта проезда',
            description: 'Подключение интерактивной масштабируемой карты Google или Яндекс для отображения проезда к офису.',
            CSSClass: []
        },    {
                title: 'Видео на любой странице сайта',
            description: 'Позволяет добавлять видеоинформацию в любом месте на сайте.',
            CSSClass: []
        },
        {
            title: 'Ротатор слайдов',
            description: 'Позволяет продемонстрировать акции, новости, возможности путём смены картинок с различными эффектами.',
            CSSClass: []
        },
        {
            title: 'Морфологический поиск по сайту',
            description: 'Позволяет производить поиск на сайте любой информации в различных категориях.',
            CSSClass: []
        },
        {
            title: 'Кнопки \"Поделиться в соц. сети\"',
            description: 'Позволяет клиентам поделиться ссылкой на ваш магазин, используя свои аккаунты в социальных сетях. Обычно размещается на каждом товаре или информационной странице (новости, услуги).',
            CSSClass: []
        },
        {
            title: 'Кнопка подняться вверх',
            description: 'Позволяет в любой момент серфинга по сайту быстро вернутся к началу страницы.',
            CSSClass: []
        },
        {
            title: 'Форма обратной связи ',
            description: 'Позволяет вашим клиентам отправить сообщения с сайта, к примеру, для уточнения дополнительной информации об услугах.',
            CSSClass: []
        },
        {
            title: 'Создание карты сайта (sitemap)',
            description: 'Создание карты сайта для более быстрой работы с поисковыми машинами Google, Яндекс.',
            CSSClass: []
        },
        {
            title: 'Установка SEO-модуля',
            description: 'Позволяет вписывать требуемые значения и параметры по которым сайт индексируется и воспринимается поисковыми системами.',
            CSSClass: []
        },
        {
            title: 'ЧПУ - человеко подобные ссылки',
            description: 'Ссылки сайта создаются более удобными и понятными человеку.',
            CSSClass: []
        },
        {
            title: 'Оптимизация сайта ',
            description: 'Оптимизация кода сайта под поисковые системы, правильное написание тегов, description и т.д.',
            CSSClass: []
        },
        {
            title: 'Бесплатное обучение работе с сайтом',
            description: 'При заказе сайта, Вы получаете бесплатное обучение с административной панелью и модулями сайта.',
            CSSClass: []
        },
        {
            title: 'Инструкция по администрированию сайта в электронном виде',
            description: 'При заказе сайта, Вы получаете инструкцию по руководству.',
            CSSClass: []
        },
        {
            title: 'Телефонная консультация по администрированию сайта',
            description: 'При заказе сайта Вы получаете бесплатное консультирование по телефону.',
            CSSClass: []
        },
        {
            title: 'Установка на хостинге ',
            description: 'Размещения файлов сайта на сервере или хостинге, подключение базы данных, создание резервной копии.',
            CSSClass: []
        },
        {
            title: 'Информеры различных сторонних сервисов',
            description: 'Позволяет разместить на сайте информеры Погоды, Курсов валют, Анекдотов, Пробок на дорогах, Новостей.',
            CSSClass: []
        },
        {
            title: 'Контекстный поиск (живой поиск)',
            description: 'Возможность при начале поиска видеть сразу результат без перезагрузки страницы.',
            CSSClass: []
        },
        {
            title: 'Отзывы к публикациям',
            description: 'Позволяет оставлять комментарии к страницам и записям сайта.',
            CSSClass: []
        },
        {
            title: 'Фильтр публикаций',
            description: 'Фильтр публикаций используется, если сложная структура.',
            CSSClass: []
        },
        {
            title: 'Рейтинги публикаций',
            description: 'Позволяет просмотреть количество комментарий, просмотров и рейтинг публикации.',
            CSSClass: []
        },
        {
            title: 'Читайте также',
            description: 'Автоматический вывод публикации из текущей категории или имеющие такой же тег, что и у текущей.',
            CSSClass: []
        },
        {
            title: 'ONLINE-чат',
            description: 'Позволяет клиенту задать вопрос с сайта и сразу же получить на него ответ от администратора online.',
            CSSClass: []
        },
        {
            title: 'Опросы и голосование ',
            description: 'Позволяет проводить голосование на сайте.',
            CSSClass: []
        },
        {
            title: 'Вопросы и ответы (FAQ) ',
            description: 'Позволяет посетителям сайта задать вопрос, а администратору сайта ответить на него.',
            CSSClass: []
        },
        {
            title: 'Заказать звонок',
            description: '   Позволяет пользователю заполнить простую форму (имя, телефон) на сайте и администраторы сайта ему перезвонят.',
            CSSClass: []
        },
        {
            title: 'Мультиязычность ',
            description: 'Позволяет пользователю заполнить простую форму (имя, телефон) на сайте и администраторы сайта ему перезвонят.',
            CSSClass: []
        },
        {
            title: 'Рассылка новостей',
            description: 'Возможность использовать магазин на других языках. К примеру, Английском, Украинском, Немецком и т.д.',
            CSSClass: []
        },
        {
            title: 'Гостевая книга ',
            description: 'Позволяет рассылать e-mail письма с сайта по всей базе клиентов.',
            CSSClass: []
        },
        {
            title: 'Баннерная система',
            description: 'Позволяет выводить общие отзывы о компании.',
            CSSClass: []
        },
        {
            title: 'Водяной знак',
            description: 'Позволяет размещать рекламные банеры в различных блоках сайта.',
            CSSClass: []
        },
        {
            title: 'Позвонить в Skype',
            description: 'Автоматическое наложение водяного знака в виде логотипа на фотографии публикаций (Watermark).',
            CSSClass: []
        },
        {
            title: 'Закрытые разделы на сайте',
            description: 'Позволяет совершить звонок на скайп-аккаунт магазину непосредственно с сайта.',
            CSSClass: []
        },
        {
            title: 'SMS-уведомления',
            description: 'Позволяет управлять доступом к различным страницам сайта.',
            CSSClass: []
        },
        {
            title: 'Индивидуальные функции',
            description: 'Добавляет возможность смс-оповещения о новых заявках из формы обратной связи.',
            CSSClass: []
        },
        {
            title: 'Проектирование, дизайн, юзабилити',
            description: 'Разработка специального функционала под требования заказчика. Например, различные калькуляторы, модули, эффекты и т.д. и т.п.',
            CSSClass: []
        },
        {
            title: 'Система управления сайтом (CMS) ',
            description: 'Проектирование интерфейса будущего сайта. Продумывание юзабилити. Совокупность графических элементов, шрифтов, цветов, индивидуальных тематических иконок, реализованных на сайте.',
            CSSClass: []
        },
        {
            title: 'Блог, новостная лента',
            description: 'CMS —система управления контентом, используемая для самостоятельного процесса создания, редактирования и управления контентом (фотографии, страницы, товары, категории, новости и т.д.).',
            CSSClass: []
        },
        {
            title: 'Статистика посещений',
            description: 'Позволяет выводить новостную ленту в различных блоках сайта.',
            CSSClass: []
        },
        {
            title: 'Карта проезда',
            description: 'Подключение к сайту Google Analytic или Yandex Metrika на выбор для просмотра полной информации о посещения магазина, источников перехода и т.д.',
            CSSClass: []
        },
        {
            title: 'Видео на любой странице сайта',
            description: 'Подключение интерактивной масштабируемой карты Google или Яндекс для отображения проезда к офису.',
            CSSClass: []
        },
        {
            title: 'Ротатор слайдов',
            description: 'Позволяет добавлять видеоинформацию в любом месте на сайте.',
            CSSClass: []
        },
        {
            title: 'Морфологический поиск по сайту',
            description: 'Позволяет продемонстрировать акции, новости, возможности путём смены картинок с различными эффектами.',
            CSSClass: []
        },
        {
            title: 'Кнопки \"Поделиться в соц. сети\"',
            description: 'Позволяет производить поиск на сайте любой информации в различных категориях.',
            CSSClass: []
        },
        {
            title: 'Кнопка подняться вверх',
            description: 'Позволяет клиентам поделиться ссылкой на ваш магазин, используя свои аккаунты в социальных сетях. Обычно размещается на каждом товаре или информационной странице (новости, услуги).',
            CSSClass: []
        },
        {
            title: 'Форма обратной связи ',
            description: 'Позволяет в любой момент серфинга по сайту быстро вернутся к началу страницы.',
            CSSClass: []
        },
        {
            title: 'Создание карты сайта (sitemap)',
            description: 'Позволяет вашим клиентам отправить сообщения с сайта, к примеру, для уточнения дополнительной информации об услугах.',
                CSSClass: []
        },
    ];
    
    //  добавление каждому элементу стандартного и нумерованного класса item-1...
    listItemsText.forEach( (el, i) => el.CSSClass.push('popular-functionality__description-list_items', `item-${i+1}`));
    
    return {
        arrList : listItemsText,
        arrListJSON : JSON.stringify(listItemsText),
    };
})();