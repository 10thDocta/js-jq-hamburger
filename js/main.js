const hamburger = $(".fas.fa-bars");
const xClose = $(".fas.fa-times");


hamburger.click(
    function () {
        $(".hamburger-menu").show();
    }
)

xClose.click(
    function () {
        $(".hamburger-menu").hide();
    }

)