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

    let startjurySelector = function () {
        let jury = jQuery(".jury .member");

        if (jury.length) {
            jury.on("click", function () {
                let index = jury.index(this);
                console.log(index);

                jury.removeClass("active");
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
    startjurySelector();

    /**
     * Галерея в карточке проекта
     */
    let projectGallery = function () {
        let gallery = jQuery(".js--project-gallery"),
            galleryNav = jQuery(".js--project-gallery-navigation");

        gallery.find(".slides").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true,
            arrows: false,
            fade: true,
            asNavFor: galleryNav.find(".slides"),
        });
        galleryNav.find(".slides").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: gallery.find(".slides"),
            arrows: false,
            dots: false,
            infinite: true,
            centerMode: true,
            focusOnSelect: true,
        });
    };
    projectGallery();
})();
