(function () {
    // Запуск промо-слайдера
    let startFrontPromo = function () {
        let promoSlider = jQuery(".js--promo-slider");

        if (promoSlider.length) {
            promoSlider.find(".slides").slick({
                slidesToShow: 1,
                infinite: true,
                arrows: false,
                dots: true,
                appendDots: promoSlider.find(".dots"),
            });

            calcSliderScrollbar(promoSlider);
        }
    };
    startFrontPromo();

    // calcSliderScrollbar(promoSlider);
    function calcSliderScrollbar(elemId) {
        let dots = jQuery(elemId).find(".slick-dots");

        if (dots.find("li").length) {
            let dotsCount = dots.find("li").length,
                maxWidth = dots.width(),
                dotWidth = Math.floor(maxWidth / dotsCount);

            console.log(dotsCount, " ", maxWidth, " ", dotWidth);
            dots.find("li").css("width", dotWidth);
        }
    }

    let startZhuriSelector = function () {
        let zhuri = jQuery(".zhuri .member");

        if (zhuri.length) {
            zhuri.on("click", function () {
                let index = zhuri.index(this);
                console.log(index);

                zhuri.removeClass("active");
                jQuery(this).addClass("active");

                if (index < 2) {
                    jQuery(".controls").removeClass("controls--left");
                } else {
                    if (!jQuery(".controls").hasClass("controls--left")) {
                        jQuery(".controls").addClass("controls--left");
                    }
                }
            });
        }
    };
    startZhuriSelector();
})();
