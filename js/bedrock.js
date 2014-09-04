$(document).ready(function(){

    //Load jQuery library using plain JavaScript
    (function(){
        var newscript = document.createElement('script');
        newscript.type = 'text/javascript';
        newscript.async = true;
        newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
    })();

    // plugins location

    var content = $('.content');
    var embedlyUrl = "http://cdn.embed.ly/jquery.embedly-3.1.1.js";
    var modernizer = "js/plugins/modernizer.js";
    var easing = "js/plugins/jquery.easing.js";
    var slimScroll = "js/plugins/slimscroll.js";
    var owlCarousel = "js/plugins/owl.carousel.min.js";

    // plugin function call

    getEmbedly(embedlyUrl);
    getScript(modernizer);
    getScript(easing);
    getScript(slimScroll);
    getOwlCarousel(owlCarousel);

    // Plugin Functions

    function getScript($url){
        $.ajax({
            url: $url ,
            dataType: "script",
            cache: true,
            error: function(){
                return true;
            },
            success: function(){

            }
        });
    }
    function getEmbedly($url){
        $.ajax({
            url: $url ,
            dataType: "script",
            cache: true,
            error: function(){
                return true;
            },
            success: function(){
                var embed = /((http:\/\/(www\.google\.co.uk\/maps.*|maps\.google\.com\/maps\?.*|maps\.google\.com\/\?.*|maps\.google\.com\/maps\/ms\?.*|.*youtube\.com\/watch.*|.*\.youtube\.com\/v\/.*|youtu\.be\/.*|.*\.youtube\.com\/user\/.*|.*\.youtube\.com\/.*#.*\/.*|m\.youtube\.com\/watch.*|m\.youtube\.com\/index.*|.*\.youtube\.com\/profile.*|.*\.youtube\.com\/view_play_list.*|.*\.youtube\.com\/playlist.*|www\.youtube\.com\/embed\/.*))| (https:\/\/(www\.google\.co.uk\/maps.*|maps\.google\.com\/maps\?.*|maps\.google\.com\/\?.*|maps\.google\.com\/maps\/ms\?.*|.*youtube\.com\/watch.*|.*\.youtube\.com\/v\/.*|youtu\.be\/.*|.*\.youtube\.com\/user\/.*|.*\.youtube\.com\/.*#.*\/.*|m\.youtube\.com\/watch.*|m\.youtube\.com\/index.*|.*\.youtube\.com\/profile.*|.*\.youtube\.com\/view_play_list.*|.*\.youtube\.com\/playlist.*|www\.youtube\.com\/embed\/.*)))/i;
                $('.content').embedly({

                    key: 'ff5f84afd87d4a5b898d2ff446735e7b'

                });
            }
        });
    }
    function getOwlCarousel($url){
        $.ajax({
            url: $url ,
            dataType: "script",
            cache: true,
            error: function(){
                return true;
            },
            success: function(){
                $("#owl-demo").owlCarousel({
                    autoPlay: 3000, //Set AutoPlay to 3 seconds
                    items : 4,
                    itemsDesktop : [1199,3],
                    itemsDesktopSmall : [979,3]
                });
            }
        });
    }
});