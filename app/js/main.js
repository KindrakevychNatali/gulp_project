$(function () {
    $('.header__btn').on('click', function(){
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function(){
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.header__btn-menu').on('click', function(){
        $('.menu').toggleClass('menu--open');
    });
   
    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
        ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/blog/left.svg" alt="left"</button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/blog/right.svg" alt="right"</button>'
    });

    var mixer = mixitup('.gallery', {
        load: {
            filter: '.living'
        }
    });

    $("[data-fancybox]").fancybox({
        youtube: {
          controls: 1,
          showinfo: 0
        }
      });
    
})