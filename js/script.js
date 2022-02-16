jQuery(document).ready(function () {
    jQuery(".project-carousel").owlCarousel({
        loop: false,
        margin: 15,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,

            },
            1000: {
                items: 4,
                dots: true,
            }
        }
    });
    jQuery(".testimonial-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 10,
        //responsiveClass:true,
        items: 1,
    });

    setInterval(function () {
        jQuery(".banner-heading").toggleClass("heading-animation");
    }, 15800)

    jQuery(".mobile-menu-btn").on('click', function () {
        jQuery("body").toggleClass("mobile-menu-activated");
        jQuery(".menu-area").slideToggle()
    });
    jQuery(".menu-area .menu-item-has-children").on('click', function () {
        jQuery(this).children("ul").slideToggle();
        jQuery(this).toggleClass("sub-menu-activated");
        console.log("I am ")
    });
});

// jQuery.fn.wbebaic_isInViewport = function() {
//     var elementTop = jQuery(this).offset().top;
//     var elementBottom = elementTop + jQuery(this).outerHeight();
//
//     var viewportTop = jQuery(window).scrollTop();
//     var viewportBottom = viewportTop + jQuery(window).height();
//
//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };