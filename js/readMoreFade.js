(function ( $ ) {
    $.fn.readMoreFade = function(options) {
        var settings = $.extend({
            backgroundColor: "white",
            buttonClass: "button"
        }, options );

        this.css( "height", 2000 );
        this.css( "overflow", "hidden" );
        this.css( "position",  );
        this.append('<p class="readMoreFade"><a style="color:#999; background: linear-gradient(#303030,#202020); text-decoration: none;     padding: 6px 20px;"  href="#" class="' + settings.buttonClass + '"><i style="padding-right:10px" class="fa fa-chevron-down"></i>Show more</a></p>')

        var readMoreButton = this.find('.readMoreFade');
        var backgroundString = settings.backgroundColor ? settings.backgroundColor : this.css('background-color');

        //readMoreButton.css('background-image', '-webkit-gradient(linear,left top,left bottom,color-stop(0, rgba(255,0,0,0)),color-stop(1, '+backgroundString+'))');
        readMoreButton.click(function(){
                totalHeight = 0

                $el = $(this);
                $p  = $el;
                $up = $p.parent();
                $ps = $up.find("p:not('.readMoreFade')");

                // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
                $ps.each(function() {
                    totalHeight += $(this).outerHeight();
                });

                $up
                    .css({
                        // Set height to prevent instant jumpdown when max height is removed
                        // "height": $up.height(),
                        "max-height": 9999
                    })
                    .animate({
                        "height": totalHeight
                    });

                // fade out read-more
                $p.fadeOut();

                // prevent jump-down
                return false;
        })

        return this;
    };
}( jQuery ));