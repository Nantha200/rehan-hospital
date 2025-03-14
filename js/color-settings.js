(function ($) {
    "use strict";
    $(".color-trigger").on("click", function () {
        $(this).parent().parent().toggleClass("visible-palate");
    });
    $(".color-palate .colors-list .palate").on("click", function () {
        var newThemeColor = $(this).attr("data-theme-file");
        var targetCSSFile = $('link[id="theme-color-file"]');
        $(targetCSSFile).attr("href", newThemeColor);
        $(".color-palate .colors-list .palate").removeClass("active");
        $(this).addClass("active");
    });
    var layoutChangerBtn = $(".color-palate .box-version li");
    var body = $("body");
    layoutChangerBtn.on("click", function (e) {
        var $this = $(this);
        $this.addClass("active").siblings("li").removeClass("active");
        if ($this.hasClass("box")) {
            body.addClass("box-layout");
            $(".box-mode-bg").slideDown(400);
        } else {
            body.removeClass("box-layout");
            $(".box-mode-bg").slideUp(400);
        }
    });
    var directionChanger = $(".color-palate .rtl-version li");
    var wrapper = $(".page-wrapper");
    directionChanger.on("click", function (e) {
        var $this = $(this);
        $this.addClass("active").siblings("li").removeClass("active");
        if ($this.hasClass("rtl")) {
            wrapper.addClass("rtl");
            swiper.rtl =  (event.direction === 'rtl');
	        swiper.rtlTranslate = (event.direction === 'rtl');
        } else {
            wrapper.removeClass("rtl");
        }


    });


    $(".box-mode-bg li").on("click", function () {
        var newBg = $(this).attr("style");
        var targetWrapper = $(".box-layout");
        $(targetWrapper).attr("style", newBg);
        $(this).addClass("active").siblings("li").removeClass("active");
    });
})(jQuery);
