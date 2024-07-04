import $ from "jquery";
$(function () {
    //Бургер меню

    $(document).ready(function () {
        $(".burger-menu").click(function () {
            $(".burger-menu").toggleClass("burger-menu-active");
            $(".header-bottom").toggleClass("show");
            $("body").toggleClass("body-lock");
        });
    });
    AOS.init();
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [52.432777404785156, 31.00490379333496],
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
                coordinates: [52.432777404785156, 31.00490379333496]
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
        var lastScrollTopr = 0;
        $(window).scroll(function (event) {
            var str = $(this).scrollTop();
            if (str > lastScrollTopr) {
                $(".button-up").addClass("scroll-top_down");
                $(".button-up").removeClass("scroll-top_up");
            } else if (str <= 800) {
                $(".button-up").removeClass("scroll-top_up");
            } else {
                $(".button-up").addClass("scroll-top_up");
                $(".button-up").removeClass("scroll-top_down");
            }
            lastScrollTopr = str;
        });
    });
});

const swiper = new Swiper(".swiper-main", {
    // Optional parameters
    loop: true,
    // autoplay:true,
    // If we need pagination
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-main__pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-main__next",
        prevEl: ".swiper-main__prev",
    },
});
const swiperNews = new Swiper(".swiper-news", {
    // Optional parameters
    // loop: true,
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-news-next",
        prevEl: ".swiper-news-prev",
    },
    pagination: {
        el: ".swiper-news-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 3,
        },
    },
});
//
const swiperAuto = new Swiper(".swiper-auto", {
    // Optional parameters
    // loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-auto-next",
        prevEl: ".swiper-auto-prev",
    },
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 3,
        },
    },
});
//
const swiperTariff = new Swiper(".swiper-tariff", {
    // Optional parameters
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-tariff-next",
        prevEl: ".swiper-tariff-prev",
    },
    // autoplay: {
    //   delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 4,
        },
    },
});
const swiperCertificates = new Swiper(".swiper-certificates", {
    // Optional parameters
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-certificates-next",
        prevEl: ".swiper-certificates-prev",
    },
    // autoplay: {
    //   delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 4,
        },
    },
});
const swiperChanel = new Swiper(".swiper-popular-chanel", {
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
    },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 4,
        },
        1170: {
            slidesPerView: 6,
        },
    },
});
