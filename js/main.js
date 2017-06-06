(function () {
    'use strict';
    var main = window.main || (window.main = {});
    main.initialize = initialize;

    function initialize() {
        didResizeWindow();
    }

    function didResizeWindow() {

        var windowHeight = window.innerHeight;
        var phoneNode = document.getElementById('phoneWrapper');
        phoneNode.style.marginTop = (windowHeight - phoneNode.scrollHeight/2 - 300).toString() + 'px';

        $(window).resize(function() {
            windowHeight = window.innerHeight;
            if(windowHeight > 700) {
                phoneNode.style.marginTop = (windowHeight - phoneNode.scrollHeight / 2 - 300).toString() + 'px';
            }
        });
    }

    $(window).scroll(function() {
        var top_of_element = $(".img-wrap").offset().top;
        var bottom_of_element = $(".img-wrap").offset().top + $(".img-wrap").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).height();
        var top_of_screen = $(window).scrollTop();
        if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $(".img-wrap").addClass("animate-img");
            $(".text-wrap").addClass("animate-text-wrap");
        }
    });


})();