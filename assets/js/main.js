// navbar
const navSlide = () => {
    const menu = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav__content');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        menu.classList.toggle('menu-disabled');
    });
}

navSlide();

$(document).ready(function () {
    $('.nav__link').click(function () {
        $('.nav__link').removeClass("active");
        $(this).addClass("active");
    });
});

// features-slider
function initSlick() {
    $('.testi-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        infinite: false,
        autoPlay: false,
        speed: 700,
        prevArrow: '<button type="button" class=" slick-arrow slick-prev fa fa-arrow-left"></button>',
        nextArrow: '<button type="button" class=" slick-arrow slick-next fa fa-arrow-right"></button>',
    });

    // gallery-slide
    $('.gallery-slide').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 700,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,

        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }, ]
    });
}

initSlick();


// sticky-header
function stickyHeader() {
    var headerHeight = $('.site-header').innerHeight();
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $('.site-header').addClass('sticky-header');
    } else {
        $('.site-header').removeClass('sticky-header');
    }
}

stickyHeader();
$(window).on('resize scroll', stickyHeader);

// scrol-up btn
jQuery(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
        return false;
    });
});