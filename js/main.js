/**
 * Created by IntelliJ IDEA.
 * User: Vinit
 * Date: 5/27/17
 * Time: 09:47 AM
 */

(function () {
    'use strict';
    var main = window.main || (window.main = {});
    main.initialize = initialize;
    main.didResizeWindow = didResizeWindow;
    main.scrollToId = scrollToId;
    main.animateOnAppear = animateOnAppear;

    function initialize() {

        var phoneNode = document.getElementById('phoneWrapper');
        var currentWindowHeight = window.innerHeight;
        currentWindowHeight = (currentWindowHeight <= 700) ? 700 : currentWindowHeight;
        phoneNode.style.marginTop = (currentWindowHeight - phoneNode.scrollHeight/2 - 300).toString() + 'px';

        didResizeWindow(window, function(windowWidth, windowHeight) {
            if(windowHeight > 700) {
                phoneNode.style.marginTop = (windowHeight - phoneNode.scrollHeight / 2 - 300).toString() + 'px';
            }
        });

        animateOnAppear(window,".img-wrap", {
            ".img-wrap": "animate-img",
            ".text-wrap": "animate-text-wrap"
            });
    }


    /**
     * Fired when user resize's the browser window
     * @param {Window} win - The window object
     * @param {function} callback - Callback function that is triggered when window did resize
     */
    function didResizeWindow(win, callback) {
        $(win).resize(function() {
            callback(win.innerWidth, win.innerHeight);
        });
    }


    /**
     * Scroll to ID of an element smoothly
     * @param {string} id - The ID of the DOM Element to scroll to
     */
    function scrollToId(id) {
        if(document.getElementById(id)) {
            $('html, body').animate({
                scrollTop: $('#' + id).offset().top
            }, 500);
        }
    }


    /**
     * Animate on appearing in the view port
     * @param {Window} win - The window object
     * @param {string} domElement - The Class Name of the DOM Element that needs to appear in the the viewport
     * @param {JSON} animateElements - A JSON with {key} as the class of the element & {value} as the animating Class that need to be added to the element
     */
    function animateOnAppear(win, domElement, animateElements) {
        $(win).scroll(function() {
            var top_of_element = $(domElement).offset().top;
            var bottom_of_element = $(domElement).offset().top + $(domElement).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).height();
            var top_of_screen = $(window).scrollTop();
            if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                for(var key in animateElements){
                    if(animateElements.hasOwnProperty(key)) {
                        $(key).addClass(animateElements[key]);
                    }
                }
            }
        });
    }


})();