import $ from "jquery";
$(function () {
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [52.432787, 31.004957],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: ['zoomControl']
        });
        myMap.behaviors.disable('scrollZoom');
        var zoomControl = myMap.controls.get('zoomControl');
        zoomControl.options.set({
            size: 'small' // или 'large' для больших кнопок
        });

        var myPlacemark = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [52.432787, 31.004957]
            }
        },
            {
                // preset: 'twirl#redIcon',
                iconImageSize: [80, 120],
                iconColor: '#FF4C00'// Желтый цвет отметки (в формате HEX)
            });
        myMap.geoObjects.add(myPlacemark);
    }

    $(document).ready(function () {
        $(function () {
            //BEGIN
            $(".accordion__title").on("click", function (e) {
                e.preventDefault();
                var $this = $(this);

                if (!$this.hasClass("show-accordion")) {
                    $(".accordion__body").slideUp(400);
                    $(".accordion__title").removeClass("show-accordion");
                }

                $this.toggleClass("show-accordion");
                $this.next().slideToggle();
            });
            //END
        });
    });
    //scroll-top
    $(function () {
        $(".button-up").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
    //header fix
    $(document).ready(function () {
        var lastScrollTop = 0;
        $(window).scroll(function (event) {
            var st = $(this).scrollTop();
            if (st > 200) { // Check if the scroll position is greater than 200px
                if (st > lastScrollTop) {
                    $(".header").addClass("header_down");
                    $(".header").removeClass("header_up");
                    $(".button-up").addClass("scroll-top_down");
                    $(".button-up").removeClass("scroll-top_up");
                } else {
                    $(".header").addClass("header_up");
                    $(".header").removeClass("header_down");
                    $(".button-up").addClass("scroll-top_up");
                    $(".button-up").removeClass("scroll-top_down");
                }
            } else {
                $(".header").removeClass("header_down header_up");
                $(".button-up").removeClass("scroll-top_down scroll-top_up");
            }
            lastScrollTop = st;
        });
    });


    $(document).ready(function () {
        $('.hero-service').on('mousemove', function (e) {
            var $this = $(this);
            var offsetX = (e.pageX - $this.offset().left) / $this.width() * 100;
    
            // Очень маленький сдвиг по оси X
            $this.find('.hero-service__img').css('transform', 'translate(' + (offsetX - 50) / 5 + '%, -50%)');
        });
    
        $('.hero-service').on('mouseleave', function () {
            $(this).find('.hero-service__img').css('transform', 'translate(0, -50%)');
        });
    });
    

   
    // counter
    $('.counter').each(function () {
        var startNumber = 0;
        var $item = $(this);
        var stop;

        function counterUp() {
            var increment = ($item.data('number') > 100) ? 2 : 1; // Увеличиваем на 2, если число больше 100, иначе на 1
            startNumber += increment;
            $item.text(startNumber);

            if (startNumber >= $item.data('number')) { // Изменяем условие завершения на >= для правильной остановки счетчика
                clearInterval(stop);
            }
        }

        var intervalTime = ($item.data('number') > 100) ? 10 : 50; // Выбираем интервал в зависимости от значения числа
        stop = setInterval(function () {
            counterUp();
        }, intervalTime); // Используем переменную intervalTime в качестве интервала
    });
    //

   
    // Tab navigation with URL change but no jump to anchor
    $('.tab-links a').on('click', function (e) {
        e.preventDefault();

        var currentAttrValue = $(this).attr('href');

        // Активируем нужный таб и скрываем остальные
        $('.tab' + currentAttrValue).addClass('active').siblings().removeClass('active');

        // Активируем текущую ссылку и деактивируем другие
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        // Меняем URL, но не перескакиваем к якорю
        history.pushState(null, null, currentAttrValue);
    });

    // Если URL содержит якорь, активируем соответствующий таб при загрузке страницы
    $(document).ready(function () {
        var hash = window.location.hash;

        if (hash) {
            $('.tab-links a[href="' + hash + '"]').click();
        }
    });
    (function ($) { // Begin jQuery
        $(function () { // DOM ready
            // If a link has a dropdown, add sub menu toggle.
            $('.menu-item-has-children a').click(function (e) {
                $(this).siblings('.sub-menu').toggle();
                // Close one dropdown when selecting another
                this.classList.toggle('active-menu');
                $('.sub-menu').not($(this).siblings()).hide();
                $('.menu-item-has-children a').not(this).removeClass('active-menu');
                e.stopPropagation();
            });
            // Clicking away from dropdown will remove the dropdown class
            $('html').click(function () {
                $('.sub-menu').hide();
                $('.menu-item-has-children a').removeClass('active-menu');
            });

            // Hamburger to X toggle
            $('#nav-toggle').click(function () {
                // Add or remove 'show' class to 'nav' element when burger menu is clicked
                $('.header-bottom').toggleClass('show');
                $(this).toggleClass('burger-menu-active');
                $("body").toggleClass("body-lock");
            });
        }); // end DOM ready
    })(jQuery); // end jQuery
});




gsap.registerPlugin(ScrollTrigger);

// Создаем timeline для последовательной анимации
const tl = gsap.timeline();
if (window.innerWidth >= 890) {
    // Анимация для закрашивания фона
    tl.from(".hero__bg img", {
        duration: 0.7,
        opacity: 0,
        ease: "expo.inOut"
    });
    // Анимация для h1 после появления заголовка
    gsap.from(".hero h1", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "expo.out",
    }); // Запуск анимации h1 спустя 1 сек после старта появления букв

    // Анимация появления текста по буквам после закрашивания фона
    gsap.from(".hero__container p", {
        duration: 1.5,
        opacity: 0,
        ease: "expo.inOut",
    }) // Запуск анимации текста спустя 1.5 сек от начала анимации фона

    

    // Анимация для секции "Наши Преимущества"
    gsap.from(".section-about__text h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
            trigger: ".section-about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".section-about__text p", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "expo.out",
        delay: 0.5,
        scrollTrigger: {
            trigger: ".section-about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".main-button-dark", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "expo.out",
        delay: 0.8,
        scrollTrigger: {
            trigger: ".section-about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Анимация для списка li с использованием stagger
    gsap.from(".section-about__info li", {
        opacity: 0,
        x: 100, // Появление справа
        duration: 1,
        ease: "expo.out",
        stagger: 0.5, // Задержка между анимациями элементов
        scrollTrigger: {
            trigger: ".section-about__info",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // Анимация для списка li с использованием stagger
    gsap.from(".accordion", {
        opacity: 0,
        x: 100, // Появление справа
        duration: 1,
        ease: "expo.out",
        stagger: 0.1, // Задержка между анимациями элементов
        scrollTrigger: {
            trigger: ".accordion-wrapp",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

  
    gsap.to(".section-hero__img", {
        width: "100%", // Увеличение ширины до 100%
        ease: "power1.out", // Плавное изменение
        scrollTrigger: {
            trigger: ".section-plus", // Триггер для активации анимации
            start: "top 90%", // Анимация запускается, когда секция на 80% видна
            end: "top 10%", // Анимация заканчивается, когда секция на 20% видна
            scrub: true, // Плавная анимация, синхронизированная со скроллом
            toggleActions: "play none none none", // Поведение при прокрутке
        }
    });
}

