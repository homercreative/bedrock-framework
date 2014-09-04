jQuery(document).ready(function ($) {



    // plugins location


    var modernizer = "js/plugins/modernizer.js";
    var easing = "js/plugins/jquery.easing.js";
    var slimScroll = "js/plugins/slimscroll.js";
    var owlCarousel = "js/plugins/owl.carousel.min.js";
    var content = $('.content');

    // plugin function call

    var embed = /((http:\/\/(www\.google\.co.uk\/maps.*|maps\.google\.com\/maps\?.*|maps\.google\.com\/\?.*|maps\.google\.com\/maps\/ms\?.*|.*youtube\.com\/watch.*|.*\.youtube\.com\/v\/.*|youtu\.be\/.*|.*\.youtube\.com\/user\/.*|.*\.youtube\.com\/.*#.*\/.*|m\.youtube\.com\/watch.*|m\.youtube\.com\/index.*|.*\.youtube\.com\/profile.*|.*\.youtube\.com\/view_play_list.*|.*\.youtube\.com\/playlist.*|www\.youtube\.com\/embed\/.*))| (https:\/\/(www\.google\.co.uk\/maps.*|maps\.google\.com\/maps\?.*|maps\.google\.com\/\?.*|maps\.google\.com\/maps\/ms\?.*|.*youtube\.com\/watch.*|.*\.youtube\.com\/v\/.*|youtu\.be\/.*|.*\.youtube\.com\/user\/.*|.*\.youtube\.com\/.*#.*\/.*|m\.youtube\.com\/watch.*|m\.youtube\.com\/index.*|.*\.youtube\.com\/profile.*|.*\.youtube\.com\/view_play_list.*|.*\.youtube\.com\/playlist.*|www\.youtube\.com\/embed\/.*)))/i;

    content.embedly({
        key: 'ff5f84afd87d4a5b898d2ff446735e7b',
        wmode: 'transparent',
        method: 'replace',
        urlRe: embed
    });


    getScript(modernizer);
    getScript(easing);
    getScript(slimScroll);
    getOwlCarousel(owlCarousel);

    // == Options
    // Un comment for full page
    //getFullpage("js/plugins/jquery.fullPage.js");

    // Plugin Functions

    function getScript($url) {
        $.ajax({
            url: $url,
            dataType: "script",
            cache: true,
            error: function () {
                return true;
            },
            success: function () {

            }
        });
    }

    function getOwlCarousel($url) {
        $.ajax({
            url: $url,
            dataType: "script",
            cache: true,
            error: function () {
                return true;
            },
            success: function () {
                $("#owl-carousel").owlCarousel({
                    navigation: true, // Show next and prev buttons
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    singleItem: true
                });
            }
        });
    }

    function getFullpage($url) {
        $.ajax({
            url: $url,
            dataType: "script",
            cache: true,
            error: function () {
                return true;
            },
            success: function () {
                $('#fullpage').fullpage({
                    verticalCentered: true,
                    resize : true,
                    sectionsColor : ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
                    anchors:['firstSlide', 'secondSlide'],
                    scrollingSpeed: 700,
                    easing: 'easeInQuart',
                    menu: false,
                    navigation: true,
                    navigationPosition: 'right',
                    navigationTooltips: ['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
                    slidesNavigation: true,
                    slidesNavPosition: 'bottom',
                    loopBottom: false,
                    loopTop: false,
                    loopHorizontal: true,
                    autoScrolling: true,
                    scrollOverflow: false,
                    css3: false,
                    paddingTop: '3em',
                    paddingBottom: '10px',
                    normalScrollElements: '#element1, .element2',
                    normalScrollElementTouchThreshold: 5,
                    keyboardScrolling: true,
                    touchSensitivity: 15,
                    continuousVertical: false,
                    animateAnchor: true,
                    sectionSelector: '.section',
                    slideSelector: '.slide'
                });
            }
        });
    }
});