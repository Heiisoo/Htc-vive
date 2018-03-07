(function ($) {

    "use strict";

    var $body = $('body'),
        $htcMenu = $('.htc-menu'),

        /*START SCROLL SPY JS*/
        $body.scrollspy({
            target: '#main_menu'
        });
        /*END SCROLL SPY JS*/

        /*START MENU JS*/
        $('a.scroll-section').on('click touchend', function (e) {
            var anchor = $(this);
            var ancAtt = $(anchor.attr('href'));
            $('html, body').stop().animate({
                scrollTop: ancAtt.offset().top
            }, 1000);
            e.preventDefault();
        });

        $window.scroll(function () {
            var currentLink = $(this);
            if ($(currentLink).scrollTop() > 0) {
                $htcMenu.addClass("sticky");
            } else {
                $htcMenu.removeClass("sticky");
            }
        });
        /*END MENU JS*/
}(jQuery));
