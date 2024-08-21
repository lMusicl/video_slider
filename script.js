jQuery(document).ready(function () {
    const swiper = new Swiper('.video_swiper', {
        mousewheel: false,
        slidesPerView: 1,
        initialSlide: 4,
        speed: 2500,
        centeredSlides: true,
        on: {
            slideChange: function () {
                updateActiveTitle(this.activeIndex);
            }
        },
        pagination: {
            el: ".swiper-pagination",
            // dynamicBullets: true,
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
                        return '<div class="' + className + '">' + "<span>" + " " + "</span>" + "</div>";
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
    });

    function updateActiveTitle (activeIndex) {
        $('.video_slider-title').removeClass('active');
        console.log($('.video_slider-title'));
        console.log(activeIndex);
        console.log($('.video_slider-title').eq(activeIndex));
        $('.video_slider-title').eq(activeIndex).addClass('active');
    }
});
