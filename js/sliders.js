$(document).ready(function () {
    var owlHeader = $("#intro-slider");
    owlHeader.owlCarousel({
        items: 1,
        dots: false,
        smartSpeed: 1000,
    });

    $("#prev__btn-intro").on("click", function (event) {
        owlHeader.trigger("prev.owl.carousel");
    })

    $("#next__btn-intro").on("click", function (event) {
        owlHeader.trigger("next.owl.carousel");
    })

    owlHeader.on("changed.owl.carousel", function (event) {
        $(".fill__circle").attr("fill", "none");
        $("[data-number=" + event.item.index + "] .fill__circle").attr("fill", "#fff");
    })

    $(".slide__controls-circle").on("click", function () {
        owlHeader.trigger("to.owl.carousel", [$(this).data("number")]);
        $("[data-number=" + [$(this).data("number")] + "] .fill__circle").attr("fill", "#fff");
    })

    /* Solutions */
    var owlSol = $("#solution-slider");
    owlSol.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        smartSpeed: 500,
        responsiveClass: true,
        responsive: {
            0: {
                margin: 130,
            },
            575: {
                margin: 240,
            },
            768: {
                margin: 500,
            },

        }
    });

    $("#prev__btn-solutions").on("click", function (event) {
        owlSol.trigger("prev.owl.carousel");
    })

    $("#next__btn-solutions").on("click", function (event) {
        owlSol.trigger("next.owl.carousel");
    })

    $(".solution__controls-item").on("click", function () {
        owlSol.trigger("to.owl.carousel", [$(this).data("number")]);
    })
})
