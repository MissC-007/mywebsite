$(document).ready(function () {
  console.log("Im working");


  // Scroll selfie-footer
    $(window).scroll(function () {

        if ($(window).scrollTop() > 20) {
            $(".selfie").addClass("displaySelfie");
        } else {
            $(".selfie").removeClass("displaySelfie");
        }
    });

});
