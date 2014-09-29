/* Sheffield Teaching Hospitals Foundation Trust

All rights reserved Sheffield Teaching Hospitals
Developed by: Andrew Duckworth 04-08-2014

*/

/***********************************************
 * jQuery for Recruitment Site
 * ******************************************** */
$(document).ready(function() {
  "use strict";

  if ($(window).width() < 700) {
    $(".responsive-media",$("#nurse-why-sth")).removeClass("pull-left");
  }

  //simple function to check if the screensize changes and to add or remove a class
  //Second selector is the context so jQuery looks within the specified ID

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $(".responsive-media",$("#nurse-why-sth")).addClass("pull-left");
    } else {
      $(".responsive-media",$("#nurse-why-sth")).removeClass("pull-left");
    };
  });

});


