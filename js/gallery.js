/* global $, Fancybox */
/* eslint-disable no-console */

$(function() {
    Fancybox.bind(".gallery-item", {
        groupAll: true,
    });

    $(".gallery-item").hover(
        function() {
            $(this).find("img").stop().animate({ opacity: 0.8 }, 300);
        }, 
        function() {
            $(this).find("img").stop().animate({ opacity: 1 }, 300);
        }
    );
});