$(document).ready(function(){

    var fullpage = false; //  full-screen fullpage // https://github.com/alvarotrigo/fullPage.js
    var share = false; // Social media // http://sharebutton.co/
    var carousel = false; // OWl Carousel // http://owlgraphic.com/owlcarousel/
    var lazyLoad = false; // LazyLoad //
    var adaptiveBackground = false; // Adaptive Backgrounds
    var modal = false;
    var collapse = false;

    var content = $('.content');

    $.getScript("js/plugins/modernizer.js");
    $.getScript("js/plugins/jquery.easing.js");
    $.getScript("js/plugins/slimscroll.js");
    $.getScript("http://cdn.embed.ly/jquery.embedly-3.1.1.min.js");

    var embed = /((http:\/\/(www\.google\.co.uk\/maps.*|maps\.google\.com\/maps\?.*|maps\.google\.com\/\?.*|maps\.google\.com\/maps\/ms\?.*|.*youtube\.com\/watch.*|.*\.youtube\.com\/v\/.*|youtu\.be\/.*|.*\.youtube\.com\/user\/.*|.*\.youtube\.com\/.*#.*\/.*|m\.youtube\.com\/watch.*|m\.youtube\.com\/index.*|.*\.youtube\.com\/profile.*|.*\.youtube\.com\/view_play_list.*|.*\.youtube\.com\/playlist.*|www\.youtube\.com\/embed\/.*))| (https:\/\/(www\.google\.co.uk\/maps.*|maps\.google\.com\/maps\?.*|maps\.google\.com\/\?.*|maps\.google\.com\/maps\/ms\?.*|.*youtube\.com\/watch.*|.*\.youtube\.com\/v\/.*|youtu\.be\/.*|.*\.youtube\.com\/user\/.*|.*\.youtube\.com\/.*#.*\/.*|m\.youtube\.com\/watch.*|m\.youtube\.com\/index.*|.*\.youtube\.com\/profile.*|.*\.youtube\.com\/view_play_list.*|.*\.youtube\.com\/playlist.*|www\.youtube\.com\/embed\/.*)))/i;
    content.embedly({
        width: 600,
        key: 'ff5f84afd87d4a5b898d2ff446735e7b',
        wmode: 'transparent',
        method: 'replace',
        'urlRe': embed
    });

    if(fullpage){
        $.getScript("js/plugins/jquery.fullpage.js");
        $('#fullpage').fullpage({
            'verticalCentered': false,
            'css3': true,
            'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
            'navigation': true,
            'navigationPosition': 'right',
            'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

            afterLoad: function(anchorLink, index){
                if(index == 2){
                    $('#iphone3, #iphone2, #iphone4').addClass('active');
                }
                $('#infoMenu').toggleClass('whiteLinks', index ==4);

            },

            onLeave: function(index, newIndex, direction){
                if (index == 3 && direction == 'down'){
                    $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
                }
                else if(index == 3 && direction == 'up'){
                    $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
                }

                $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
                $('#staticImg').toggleClass('moveDown', newIndex == 4);
                $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
            },

            afterRender: function(){

            }

        });
    }

    if(share){
        $.getScript("js/plugins/share.min.js");
        var share = new Share(".share-button", {
            networks: {
                google_plus: {
                    enabled: true,// Enable Google+. [Default: true]
                        url: ''   // the url you'd like to share to Google+ [Default: config.url]
                },
                twitter: {
                    enabled: true,// Enable Twitter. [Default: true]
                        url:  '',  // the url you'd like to share to Twitter [Default: config.url]
                    description: ''   // text to be shared alongside your link to Twitter [Default: config.description]
                 }
            }
        });
    }

    if(carousel){
        $.getScript("js/plugins/owl.carousel.min.js");
        $("#owl-carousel").owlCarousel();
    }

    if(lazyLoad){

        // Syntax for images <img class="lazy" data-original="img/example.jpg" width="640" height="480">

        $.getScript("js/plugins/jquery.lazyload.min.js");
        $("img.lazy").lazyload();
    }

    if(adaptiveBackground){

        // Syntax for images <img src="/image.jpg" data-adaptive-background='1'>

        $.getScript("js/plugins/adaptive-backgrounds.js");
        $.adaptiveBackground.run()
    }

    if(modal){
        $.getScript('js/plugins/modal');
    }

    if(collapse){
        $.getScript('js/plugins/collapse');
        $('.collapse').collapse()
    }

});