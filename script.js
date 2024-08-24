jQuery(document).ready(function () {
    const swiper = new Swiper('.video_swiper', {
        mousewheel: false,
        slidesPerView: 1,
        initialSlide: 4,
        speed: 2500,
        on: {
            slideChange: function () {
                updateActiveTitle(this.slides[this.activeIndex].dataset.slideId);
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                switch (index) {
                    case (0):
                        return '<div class="' + className + '">' + "<span>" + "4.." + "</span>" + "</div>";
                        break;
                    case (1):
                        return '<div class="' + className + '">' + "<span>" + "3.." + "</span>" + "</div>";
                        break;
                    case (2):
                        return '<div class="' + className + '">' + "<span>" + "2.." + "</span>" + "</div>";
                        break;
                    case (3):
                        return '<div class="' + className + '">' + "<span>" + "1.." + "</span>" + "</div>";
                        break;
                    case (4):
                        return '<div class="' + className + '">' + "<span>" + "0" + "</span>" + "</div>";
                        break;
                    case (5):
                        return '<div class="' + className + '">' + "<span>" + "..1" + "</span>" + "</div>";
                        break;
                    case (6):
                        return '<div class="' + className + '">' + "<span>" + "..2" + "</span>" + "</div>";
                        break;
                    case (7):
                        return '<div class="' + className + '">' + "<span>" + "..3" + "</span>" + "</div>";
                        break;
                    case (8):
                        return '<div class="' + className + '">' + "<span>" + "..4" + "</span>" + "</div>";
                        break;
                    default: {
                        return '<div class="' + className + '">' + "<span>" + " " + "</span>" + "</div>";
                        break;
                    }
                }
            },
        },
        breakpoints: {
            320: {
                direction: 'vertical',
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
                speed: 1500,
            },
            425: {
                direction: 'vertical',
                centeredSlides: true,
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                speed: 1500,
            },
            767: {
                direction: 'horizontal',
                slidesPerView: 1,
            },
        }
    });

    function updateActiveTitle(activeSlideId) {
        $('.video_slider-title').removeClass('active');
        $('.video_slider-title[data-title-id="' + activeSlideId + '"]').addClass('active');
    }

    const $pagination = $('.swiper-pagination');

    $pagination.on('mouseenter', function () {
        swiper.params.mousewheel.enabled = true;
        swiper.mousewheel.enable();
    });

    $pagination.on('mouseleave', function () {
        swiper.params.mousewheel.enabled = false;
        swiper.mousewheel.disable();
    });
});