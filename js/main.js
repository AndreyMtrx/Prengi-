$(document).ready(function () {
    /* Header */
    $("#nav__toggle").on("click", function () {
        $(this).toggleClass("nav__toggle--active");
        $("#header-nav").toggleClass("header__nav--active");
    })
})
