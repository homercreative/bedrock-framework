(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module depending on jQuery.
        define(['jquery'], factory);
    } else {
        // No AMD. Register plugin with global jQuery object.
        factory(jQuery);
    }
}(function ($) {

    var state = false,
        settings = {
            switchWidth: 768,
            addClass: 'opened',
            menuName: 'menu',
            menuId: 'tog-menu',
            menu: 'ul',
            menuSystem: 'mobile-menu'
        };


    $.fn.responsiveNav = function () {

        function isMobile() {
            return ($(window).width() < settings.switchWidth);
        }

        //plugin functionality
        function run($this) {

            //menu doesn't exist
            if (isMobile()) {
                $('#' + settings.menuId).show();
                $('#' + settings.menuSystem).show();
                $('#' + $this.attr('id') + ' > ' + settings.menu).hide();
            } else {
                $('#' + settings.menuId).hide();
                $('#' + settings.menuSystem).hide();
                $('#' + $this.attr('id') + ' > ' + settings.menu).show();
            }
        }

        function toggle($this) {
            if (state === false) {
                $('#' + settings.menuSystem).addClass(settings.addClass);
                $('#' + settings.menuId).addClass(settings.addClass);
                state = true;
            } else {
                $('#' + settings.menuSystem).removeClass(settings.addClass);
                $('#' + settings.menuId).removeClass(settings.addClass);
                $('#' + settings.menuSystem).css("height", "");
                state = false;
            }
        }

        return this.each(function () {

            //override the default settings if user provides some
            if (options) {
                $.extend(settings, options);
            }

            //cache "this"
            var $this = $(this);

            $('body').prepend('<div id="' + settings.menuSystem + '"></div>');

            // duplicate the menu and add it to the top of the body
            $('#' + $this.attr('id') + ' > ' + settings.menu).clone().prependTo('#' + settings.menuSystem);

            //bind event to browser resize
            $(window).resize(function () {
                run($this);
            });

            // set up the menu button get the first reference to it all together
            $('#' + $this.attr('id') + ' > ' + settings.menu).before('<a id="' + settings.menuId + '" href="#" >' + settings.menuName + '</a>');

            $('#' + settings.menuId).hide().click(function (event) {
                event.preventDefault();
                toggle($this);
            });

            //run plugin
            run($this);

        });

    };

}));