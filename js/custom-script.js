jQuery(document).ready(function () {

    jQuery(".mobile-menu-btn").on('click', function () {
        jQuery("body").toggleClass("mobile-menu-activated");
        jQuery(".menu-area").slideToggle()
    });
    jQuery(".menu-area").on('click', function () {
        jQuery("body").removeClass("mobile-menu-activated");
        jQuery(".menu-area").slideUp()
    });

    jQuery(".menu-area .menu-item-has-children").on('click', function () {
        jQuery(this).children("ul").slideToggle();
        jQuery(this).toggleClass("sub-menu-activated");
        console.log("I am ")
    });
    //Fixed Nav
    var offset = 100;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.main-header').addClass("fixed-header");
        } else if (jQuery(this).scrollTop() < offset) {
            jQuery('.main-header').removeClass("fixed-header");
            // jQuery('body').removeClass("mobile-menu-activated");
            // jQuery(".main-menu").slideUp();
        }
    });
    if (jQuery(this).scrollTop() > offset) {
        jQuery('.main-header').addClass("fixed-header");
    }
    //Back to Button
    var offset = 250;
    var duration = 300;

    jQuery(window).scroll(function () {
        setTimeout(function () {
            jQuery('.back-to-top').fadeOut(duration);
        }, 10000)
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });


    jQuery('.back-to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
    // return elementBottom > viewportTop;
};

$(window).on('resize scroll', function () {
    $('section').each(function () {
        var sectionID = $(this).attr('id');

        if ($(this).isInViewport()) {
            $(this).addClass(sectionID + '-active');
            $(".main-nav ul").find("[page-rel='" + sectionID + "']").addClass("active");
        } else {
            $(this).removeClass(sectionID + '-active');
            $(".main-nav ul").find("[page-rel='" + sectionID + "']").removeClass("active");
        }
    });
});
