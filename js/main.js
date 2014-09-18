/***********************************************
 * jQuery for Recruitment Site
 * ******************************************** */
$(document).ready(function() {

  if ($(window).width() < 700) {
    $(".responsive-media").removeClass("pull-left");
  }

  //simple function to check if the screensize changes and to add or remove a class

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $(".responsive-media").addClass("pull-left");
    } else {
      $(".responsive-media").removeClass("pull-left");
    };
  });

});


