// const hamburger = $(".fas.fa-bars");
// const xClose = $(".fas.fa-times");


// hamburger.click(
//     function () {
//         $(".hamburger-menu").show();
//     }
// )

// xClose.click(
//     function () {
//         $(".hamburger-menu").hide();
//     }
// )


// nuova versione
const hamburger = $("a > i.fas.fa-bars");
const xClose = $("a > i.fas.fa-times");

$(document).ready(function () {

    // al click sull'icona hamburger aggiungo la classe "active" a div.hamburger-menu
    hamburger.click(
        function () {
            $(".hamburger-menu").addClass("active");
        }
    )

    // al click sull'icona x rimuovo la classe "active" a div.hamburger-menu
    xClose.click(
        function () {
            $(".hamburger-menu").removeClass("active");
        }
    )

});


