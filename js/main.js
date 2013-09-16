Modernizr.load([
    {
        test: Modernizr.fontface,
        yep: 'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
        callback: function (url, result, key) {
            if (!result) return;
            WebFont.load({
                google: {
                    families: ['Ubuntu:400,300,300italic,400italic,700,700italic']
                }
            });
        }
    },
    // Slider
    {
        test: Modernizr.mq('(min-width: 950px)'),
        yep: [ 'vendor/bxslider/jquery.bxslider.css', 'css/slider.css', 'vendor/bxslider/jquery.bxslider.js' ],
        callback: function (url, result, key) {
            if (!result || key < 2) return;
            $('div.content-wrap').prepend('<div class="visual"><ul class="slider"><li><img src="img/sessionplanung.jpg" alt="Sessionplanung auf dem BarCamp RheinMain 2012 in Wiesbaden" title="Sessionplanung auf dem BarCamp RheinMain 2012 in Wiesbaden"></li></ul></div>');
            $('.slider').bxSlider(
                {
                    captions: true,
                    pager: false
                }
            );
        }
    }
]);
