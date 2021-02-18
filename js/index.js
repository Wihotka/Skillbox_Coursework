window.addEventListener('DOMContentLoaded', function() {
    // Navigation menu scroll
    $(document).ready(function(){
        $("#menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 600);
        });
    });

    // Header Menu
    document.querySelector('.header-menu__burger').addEventListener('click', function() {
        document.querySelector('.header-menu__mobile').classList.toggle('burger-active');
    });

    // Navigation mobile menu scroll
    $(document).ready(function(){
        $("#mobile").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 600);
        });
    });

    // Spoiler header-submenu
    jQuery(document).ready(function(){
        jQuery('.header-submenu__list-button').click(function(){
            $('.header-submenu__list-button').not(this).parents('.header-submenu__list-item').removeClass("header-submenu__list-item_active").find('.header-submenu__dropdown-menu').slideUp();
            $(this).parents('.header-submenu__list-item').toggleClass("header-submenu__list-item_active").find('.header-submenu__dropdown-menu').slideToggle();
        });

        $(document).mouseup(function (e){
            if (!$('.header-submenu__list-item').is(e.target)
                && $('.header-submenu__list-item').has(e.target).length === 0) {
                $('.header-submenu__list-button').parents('.header-submenu__list-item').removeClass("header-submenu__list-item_active").find('.header-submenu__dropdown-menu').slideUp();
            }
        });
    });

    // Simple Bar
    document.querySelectorAll('.header-submenu__dropdown-list').forEach(el => {
        new SimpleBar(el, {autoHide: false, scrollbarMaxSize: 28}) 
    });

    // Swiper Hero slider parameters
    var heroSwiper = new Swiper('.hero-swiper', {
        // Optional parameters
        loop: true,

        // Autoplay slider
        autoplay: {
          delay: 9000,
        },
    });

    // Navigation Hero Block
    $(document).ready(function(){
        $("#hero-block").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 900);
        });
    });

    // Choices Select Gallery
    const element = document.getElementById('select');
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',
        sorter: function(a) {
            return a.label;
          },
        itemSelectText: '',
    });

    // Swiper Gallery slider parameters
    var gallerySwiper = new Swiper('.gallery-swiper', {
        // Optional parameters
        slidesPerColumn: 1,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0,

        // Responsive breakpoints
        breakpoints: {
            1301: {
                slidesPerColumn: 2,
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1025: {
                slidesPerColumn: 2,
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 34,
            },

            701: {
                slidesPerColumn: 2,
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34,
            },
        },

        // If we need pagination
        pagination: {
            el: '.gallery-pagination',
            type: 'fraction',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery-swiper-button-next',
            prevEl: '.gallery-swiper-button-prev',
        },
    });

    // Gallery modal window
    var modal = $modal({
        title: '',
        content: '',
    });

    const galleryImg = document.querySelectorAll('.gallery-second__picture');

    galleryImg.forEach(el => {
        el.addEventListener('click', function(btn) {
            const close = document.querySelector('.modal__btn-close');

            close.innerHTML = '&#10006';

            const path = btn.currentTarget.dataset.path;

            switch (path) {
                case 'img-one':
                    modal.setContent('<img src="images/4-gallery/1.jpg" alt="Казимир Малевич: Торс"><div><h4>Казимир Малевич</h4><h5>"Торс"</h5><span>1928-1929</span><p>На этом полотне Малевич изображает, каким образом формируется образ из существующего. Одна половина картины показывает упрощенный вариант человеческой фигуры, где видны отдельные части тела – шея, руки. Другая же половина еще больше упрощает образ, скругляя формы, объединяя все части тела под одной кривой.</p></div>');
                break;

                case 'img-two':
                    modal.setContent('<img src="images/4-gallery/2.jpg" alt="Казимир Малевич: Женщина с граблями"><div><h4>Казимир Малевич</h4><h5>"Женщина с граблями"</h5><span>1931-1932</span><p>Картина из второй серии крестьянского цикла работ Казимира Малевича. Художник принялся за её создание в 1930-1931 годах, после того, как первый цикл был утерян после Берлинской и Варшавской выставок в 1927 году.</p></div>');
                break;

                case 'img-three':
                    modal.setContent('<img src="images/4-gallery/3.jpg" alt="Казимир Малевич: Уборка ржи"><div><h4>Казимир Малевич</h4><h5>"Уборка ржи"</h5><span>1912</span><p>Образы крестьянской жизни, образы сельского труда, воплощенные художником отличаются пронзительной нотой драматизма, о котором Малевичу и в голову не приходило помышлять ранее. Одной из наиболее заметных черт его постсупрематической живописи стала безликость людей; вместо лиц и голов их корпуса увенчаны красными, черными, белыми овалами.</p></div>');
                break;

                case 'img-four':
                    modal.setContent('<img src="images/4-gallery/4.jpg" alt="Иван Клюн: Супрематизм"><div><h4>Иван Клюн</h4><h5>"Супрематизм"</h5><span>1915</span><p>Иван Васильевич Клюн родился в 1873 году в Владимирской губернии. В начале 1900-х посещал московские частные студии, с 1915 уже как последователь малевичевского супрематизма участвовал в «Последней футуристической выставке картин 0,10», опубликовал в её каталоге манифест. С конца 1930-х годов Клюн неожиданно начал писать натюрморты и пейзажи реалистического характера.</p></div>');
                break;

                case 'img-five':
                    modal.setContent('<img src="images/4-gallery/5.jpg" alt="Казимир Малевич: Жницы"><div><h4>Казимир Малевич</h4><h5>"Жницы"</h5><span>1928-1929</span><p>Картина художника отсылает зрителя к его работам в кубистической манере. Здесь гораздо больше реализма – есть глубокая перспектива, есть динамический задний план с работающими фигурами на поле.</p></div>');
                break;

                case 'img-six':
                    modal.setContent('<img src="images/4-gallery/6.jpg" alt="Казимир Малевич: Цвето-динамическая композиция"><div><h4>Казимир Малевич</h4><h5>"Цвето-динамическая композиция"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-seven':
                    modal.setContent('<img src="images/4-gallery/7.jpg" alt="Казимир Малевич: Плотник"><div><h4>Казимир Малевич</h4><h5>"Плотник"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-eight':
                    modal.setContent('<img src="images/4-gallery/8.jpg" alt="Казимир Малевич: Два крестьянина на фоне полей"><div><h4>Казимир Малевич</h4><h5>"Два крестьянина на фоне полей"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-nine':
                    modal.setContent('<img src="images/4-gallery/9.jpg" alt="Казимир Малевич: Супрематизм"><div><h4>Казимир Малевич</h4><h5>"Супремативизм"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-ten':
                    modal.setContent('<img src="images/4-gallery/10.jpg" alt="Казимир Малевич: Крестьянин в поле"><div><h4>Казимир Малевич</h4><h5>"Крестьянин в поле"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-eleven':
                    modal.setContent('<img src="images/4-gallery/11.jpg" alt="Казимир Малевич: Супрематизм"><div><h4>Казимир Малевич</h4><h5>"Супрематизм"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-twelve':
                    modal.setContent('<img src="images/4-gallery/12.jpg" alt="Казимир Малевич: Девушки в поле"><div><h4>Казимир Малевич</h4><h5>"Девушки в поле"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-thirteen':
                    modal.setContent('<img src="images/4-gallery/13.jpg" alt="Казимир Малевич: Женщина с граблями"><div><h4>Казимир Малевич</h4><h5>"Девушки с граблями"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-fourteen':
                    modal.setContent('<img src="images/4-gallery/14.jpg" alt="Казимир Малевич: Супрематизм"><div><h4>Казимир Малевич</h4><h5>"Супрематизм"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-fifteen':
                    modal.setContent('<img src="images/4-gallery/15.jpg" alt="Казимир Малевич: Спортсмены"><div><h4>Казимир Малевич</h4><h5>"Спортсмены"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-sixteen':
                    modal.setContent('<img src="images/4-gallery/16.jpg" alt="Казимир Малевич: Конторка и комната"><div><h4>Казимир Малевич</h4><h5>"Конторка и комната"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-seventeen':
                    modal.setContent('<img src="images/4-gallery/17.jpg" alt="Казимир Малевич: Пейзаж (Зима)"><div><h4>Казимир Малевич</h4><h5>"Пейзаж (Зима)"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-eighteen':
                    modal.setContent('<img src="images/4-gallery/18.jpg" alt="Казимир Малевич: На жатву (Марфа и Ванька)"><div><h4>Казимир Малевич</h4><h5>"На жатву (Марфа и Ванька)"</h5><span>1915</span><p>Супрематизм стал одним из самых влиятельных направлений абстрактного искусства ХХ века. Структура мира в нем выражалась в простых геометрических формах: прямой линии, прямоугольнике, круге или квадрате на светлом фоне, который символизировал бесконечность пространства.</p></div>');
                break;

                case 'img-nineteen':
                    modal.setContent('<img src="images/4-gallery/19.jpg" alt="Карл Брюллов: Итальянский полдень"><div><h4>Карл Брюллов</h4><h5>"Итальянский полдень"</h5><span>1827</span><p>На картине изображена молодая женщина, снимающая виноград. Моделью стала простая итальянка. Брюллов писал свою картину в саду под настоящим виноградником, в солнечном полуденном освещении.</p></div>');
                break;

                case 'img-twenty':
                    modal.setContent('<img src="images/4-gallery/20.jpg" alt="Жан-Оноре Фрагонар: Утес слепого"><div><h4>Жан-Оноре Фрагонар</h4><h5>"Утес слепого"</h5><span>1750</span><p>Это картина французского художника в стиле рококо Жана-Оноре Фрагонара , написанная около 1750 года маслом на холсте.</p></div>');
                break;

                case 'img-twenty-one':
                    modal.setContent('<img src="images/4-gallery/21.jpg" alt="Питер Пауль Рубенс: Самсон и Далила"><div><h4>Питер Пауль Рубенс</h4><h5>"Самсон и Далила"</h5><span>1609</span><p>В нише на заднем плане видна статуя римской богини любви Венеры с Купидоном, наклон головы которой повторяет позу Далилы.</p></div>');
                break;

                case 'img-twenty-two':
                    modal.setContent('<img src="images/4-gallery/22.jpg" alt="Ян ван Хёйсум: Цветы и фрукты"><div><h4>Ян ван Хёйсум</h4><h5>"Цветы и фрукты"</h5><span>1728</span><p>О жизни Яна ван Хёйсума известно немногое. Его отец Юстус ван Хёйсум-старший, как и три его брата Юстус-младший, Иаков и Михаил, были художниками. В 1704 году он женился на Маргарите Шоутен.</p></div>');
                break;

                case 'img-twenty-three':
                    modal.setContent('<img src="images/4-gallery/23.jpg" alt="Иван Крамской: Неизвестная"><div><h4>Иван Крамской</h4><h5>"Неизвестная"</h5><span>1883</span><p>На полотне изображена молодая женщина, проезжающая в открытом экипаже по Невскому проспекту у павильонов Аничкова дворца. Справа за её спиной виднеется Александринский театр. Она одета по последней моде 1880-х годов.</p></div>');
                break;

                case 'img-twenty-four':
                    modal.setContent('<img src="images/4-gallery/24.jpg" alt="Семирадский Генрих (Хенрик) Ипполитович: Игра в кости"><div><h4>Семирадский Генрих (Хенрик) Ипполитович</h4><h5>"Игра в кости"</h5><span>1889</span><p>Это одна из трех копий картин известного русского художника Семирадского, выполненная мастерами нашей Галереи за несколько месяцев.</p></div>');
                break;

                case 'img-twenty-five':
                    modal.setContent('<img src="images/4-gallery/25.jpg" alt="Клод Лорен: Утро в гавани"><div><h4>Клод Лорен</h4><h5>"Утро в гавани"</h5><span>1634</span><p>Картина является характерным для творчества Лоррена примером безсюжетного абстрактно-фантазийного пейзажа.</p></div>');
                break;

                case 'img-twenty-six':
                    modal.setContent('<img src="images/4-gallery/26.jpg" alt="Поль Сезанн: Большие Купальщицы"><div><h4>Поль Сезанн</h4><h5>"Большие Купальщицы"</h5><span>1906</span><p>Картина, изображающая абстрактных обнажённых женщин, отличается напряжённостью и плотной симметричной компоновкой, встраивающей фигуры в треугольную структуру из окружающих деревьев и реки.</p></div>');
                break;

                case 'img-twenty-seven':
                    modal.setContent('<img src="images/4-gallery/27.jpg" alt="Клод Жозеф Верне: Река с рыбаками"><div><h4>Клод Жозеф Верне</h4><h5>"Река с рыбаками"</h5><span>1748</span><p>Скалистый пейзаж с рыбаком и путешественниками, река с водопадом, акведук на расстоянии.</p></div>');
                break;

                case 'img-twenty-eight':
                    modal.setContent('<img src="images/4-gallery/28.jpg" alt="Питер Брейгель Старший: Падение Икара"><div><h4>Питер Брейгель Старший</h4><h5>"Падение Икара"</h5><span>1558</span><p>Сюжет картины заимствован из греческой мифологии. Рыбак, пастух и пахарь — именно эти персонажи присутствуют на картине Брейгеля, хотя сцена в целом интерпретируется художником в совершенно ином ключе.</p></div>');
                break;

                case 'img-twenty-nine':
                    modal.setContent('<img src="images/4-gallery/29.jpg" alt="Константин Маковский: Суд Париса"><div><h4>Константин Маковский</h4><h5>"Суд Париса"</h5><span>1889</span><p>Картина «Суд Париса», написанная Константином Егоровичем Маковским на сюжет известного античного мифа, изображает спор трех богинь – Геры, Афины и Афродиты – о том, кто из них самая прекрасная.</p></div>');
                break;

                case 'img-thirty':
                    modal.setContent('<img src="images/4-gallery/30.jpg" alt="Сандро Боттичелли: Весна"><div><h4>Сандро Боттичелли</h4><h5>"Весна"</h5><span>1482</span><p>Картина Сандро Боттичелли, написана в 1482 году. Выставлена в галерее Уффици (Флоренция).</p></div>');
                break;
            }

            modal.show();
        });
    });

    // Tabs language
    document.querySelectorAll('.catalog__flag-button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.catalog__flag-tab').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__flag-tab_active');
            });
            document.querySelector(`[data-path="${path}"]`).parentNode.querySelector('.catalog__flag-tab').classList.add('catalog__flag-tab_active');

            document.querySelectorAll('.catalog-second__list').forEach(function(listRemove) {
                listRemove.classList.remove('catalog-second__list_active');
            });
            document.querySelector(`[data-list="${path}"]`).classList.add('catalog-second__list_active');
        })
    });

    // Accordion parameters
    $( function() {
        $( "#accordion" ).accordion({
            heightStyle: "content"
        });
    });

    // Tabs catalog
    document.querySelectorAll('.catalog-second__list-tab').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.catalog-second__list-tab').forEach(function(tabsHighlight) {
                tabsHighlight.classList.remove('catalog-second__highlight');
            });
            document.querySelector(`[data-path="${path}"]`).classList.add('catalog-second__highlight');

            document.querySelectorAll('.catalog-first__block').forEach(function(tabsRemove) {
                tabsRemove.classList.remove('catalog-first__tab_active');
            });
            document.querySelector(`[data-name="${path}"]`).classList.add('catalog-first__tab_active');
        })
    });

    // Swiper Events slider parameters
    var gallerySwiper = new Swiper('.events__swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.events__pagination',
            clickable: true,
        },
    });

    // Spoiler Editions
    jQuery(document).ready(function(){
        jQuery('.editions-first__spoiler-head').click(function(){
            $(this).parents('.editions-first__spoiler').toggleClass("editions-first__spoiler_active").find('.editions-first__spoiler-item_unchecked').slideToggle();
            $(this).parents('.editions-first__spoiler').toggleClass("editions-first__spoiler_disabled");
        });

        jQuery('.editions-first__spoiler-item').click(function(e){
            e.preventDefault();
            $(this).toggleClass("editions-first__spoiler-item_unchecked");
            $(this).toggleClass("editions-first__spoiler-item_checked");
        });

        jQuery('.editions-first__spoiler-item-close').click(function(){
            $(this).parents('.editions-first__spoiler-item').slideUp();
        });
    });

    // Tab events
    document.querySelector('.events__button').addEventListener('click', function(event) {
        document.querySelector('.events__blocks-extra').classList.add('events__blocks-active');
        document.querySelector('.events__button-content').classList.add('events__button-content-none');
    });

    // Swiper Editions slider parameters 
    var editionsSwiper = new Swiper('.editions-swiper', {
        // Optional parameters
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,

        // Responsive breakpoints
        breakpoints: {
            1301: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1025: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 25,
            },

            769: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 49,
            },
        },

        // If we need pagination
        pagination: {
            el: '.editions-pagination',
            type: 'fraction',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.editions-swiper-button-next',
            prevEl: '.editions-swiper-button-prev',
        },
    });

    // Swiper Projects slider parameters
    var projectsSwiper = new Swiper('.projects-swiper', {
        // Optional parameters
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 0,

        // Responsive breakpoints
        breakpoints: {
            1551: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 50,
            },

            1025: {
                slidesPerGroup: 3,
                slidesPerView: 3,
                spaceBetween: 34,
            },

            769: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 50,
            },

            701: {
                slidesPerGroup: 2,
                slidesPerView: 2,
                spaceBetween: 34,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.projects-swiper-button-next',
            prevEl: '.projects-swiper-button-prev',
        },
    });

    // Input Mask
    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999) - 999 - 99 - 99");

    im.mask(selector);

    // Just Validate
    new JustValidate('.contacts-first__form', {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 20
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return phone.toString().length === 10;
                }
            },
        },
        messages: {
            name: {
                required: 'Поле обязательно для заполнения',
                minLength: 'Необходимо ввести минимум 2 символа'
            },
            tel: {
                required: 'Поле обязательно для заполнения',
                function: 'Укажите корректный номер'
            },
        },
    });

    // Yandex Map
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.7585, 37.606],
            // от 0 (весь мир) до 19.
            zoom: 15,
            // Элементы управления (выкл).
            controls: []
        });

        myMap.controls.add('zoomControl', {
            size: 'default',
            float: 'none',
            position: {
                bottom: '380px',
                right: '10px'
            }
        });

        myMap.controls.add('geolocationControl', {
            size: 'default',
            float: 'none',
            position: {
                bottom: '340px',
                right: '10px'
            }
        });
        // Создание кастомной метки на карте.
        var myPlacemark = new ymaps.Placemark([55.7585, 37.6011], {},
            {
               iconLayout: 'default#image', // обозначаем что будет использоваться пользовательское изображение
               iconImageHref: 'images/9-contacts/point.svg',  // указываем путь к метке
               iconImageSize: [20, 20], // указываем размер изображения
               iconImageOffset: [-10, -10] // обозначаем сдвиг от левого верхнего угла к точке изображения метки .
             });

           myMap.geoObjects.add(myPlacemark) // добавляем метку на карту
    };
});