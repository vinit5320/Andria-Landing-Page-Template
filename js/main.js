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

})();