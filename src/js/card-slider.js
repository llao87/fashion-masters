(function ($) {
    $.fn.HvrSlider = function () {
        return this.each(function () {
            var el = $(this);
            if (el.find("img").length > 1) {
                var hvr = $("<div>", {
                    class: "hvr",
                    append: [
                        $("<div>", {
                            class: "hvr__images",
                            append: $("<div>", {
                                class: "hvr__sectors",
                            }),
                        }),
                        $("<div>", {
                            class: "hvr__dots",
                        }),
                    ],
                    insertAfter: el,
                    prepend: el,
                });
                var hvrImages = $(".hvr__images", hvr);
                var hvrImage = $("img", hvr);
                var hvrSectors = $(".hvr__sectors", hvr);
                var hvrDots = $(".hvr__dots", hvr);
                el.prependTo(hvrImages);
                hvrImage.each(function () {
                    hvrSectors.prepend('<div class="hvr__sector"></div>');
                    hvrDots.append('<div class="hvr__dot"></div>');
                });
                $(".hvr__dot:first", hvrDots).addClass("hvr__dot--active");
                var setActiveEl = function (el) {
                    hvrImage.hide().eq(el.index()).show();
                    $(".hvr__dot", hvrDots)
                        .removeClass("hvr__dot--active")
                        .eq(el.index())
                        .addClass("hvr__dot--active");
                };
                $(".hvr__sector", hvrSectors).hover(function () {
                    setActiveEl($(this));
                });
                hvrSectors.on("touchmove", function (e) {
                    var position = e.originalEvent.changedTouches[0];
                    var target = document.elementFromPoint(
                        position.clientX,
                        position.clientY
                    );
                    if ($(target).is(".hvr__sector")) {
                        setActiveEl($(target));
                    }
                });
            }
        });
    };
})(jQuery);

$(".js--images").HvrSlider();
