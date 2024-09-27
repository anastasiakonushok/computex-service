import $ from "jquery";
$(function () {
    // Fancybox initialization
    Fancybox.bind("[data-fancybox]", {});

    //Бургер меню

    // $(document).ready(function () {
    //     $(".burger-menu").click(function () {
    //         $(".burger-menu").toggleClass("burger-menu-active");
    //         $(".header-bottom").toggleClass("show");
    //         $("body").toggleClass("body-lock");
    //     });
    // });
    AOS.init(
        {
            disable: 'mobile',
        }
    );
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
            var offsetY = (e.pageY - $this.offset().top) / $this.height() * 100;

            $this.find('.hero-service__img').css('transform', 'translate(' + (offsetX - 50) / 10 + '%, ' + (offsetY - 50) / 10 + '%)');
        });

        $('.hero-service').on('mouseleave', function () {
            $(this).find('.hero-service__img').css('transform', 'translate(0, 0)');
        });
    });

    // $(document).ready(function () {
    //     var lastScrollTopr = 0;
    //     $(window).scroll(function (event) {
    //         var str = $(this).scrollTop();
    //         if (str > lastScrollTopr) {
    //             $(".button-up").addClass("scroll-top_down");
    //             $(".button-up").removeClass("scroll-top_up");
    //         } else if (str <= 800) {
    //             $(".button-up").removeClass("scroll-top_up");
    //         } else {
    //             $(".button-up").addClass("scroll-top_up");
    //             $(".button-up").removeClass("scroll-top_down");
    //         }
    //         lastScrollTopr = str;
    //     });
    // });

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

    // Tab navigation
    $('.tab-links a').on('click', function (e) {
        e.preventDefault();

        var currentAttrValue = $(this).attr('href');

        $('.tab' + currentAttrValue).addClass('active').siblings().removeClass('active');

        $(this).parent('li').addClass('active').siblings().removeClass('active');
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
