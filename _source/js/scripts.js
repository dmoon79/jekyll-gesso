// Custom scripts file


(function ($) {
  'use strict';
  $(document).ready(function() {



    var skillValue = $('.skillbar').attr('data-percent');

    $('.skillbar').each(function(){
      var skillValue = $('.skillbar').attr('data-percent');
      var myNumber = parseInt(skillValue);
      if(myNumber > 60){
        $(this).find('span.skill-bar-percent').text('Greater than 60');
      } else {
        $(this).find('span.skill-bar-percent').text('Less than 60');
      }


      // switch (myNumber) {
      //   case (myNumber > 59):
      //     $(this).find('.skill-bar-percent').text('Greater than 60');
      //     break;
      //   case (myNumber > 60):
      //     $(this).find('.skill-bar-percent').text("High");
      //     break;
      //   default:
      //     $(this).find('.skill-bar-percent').text("Cant Find it");
      //     break;
      // }
    });


    $('.flexslider').flexslider({
      animation: "slide"
    });



  });


  // Generic function that runs on window resize.
  function resizeStuff() {
  }

  // Runs function once on window resize.
  var TO = false;
  $(window).resize(function () {
    if (TO !== false) {
      clearTimeout(TO);
    }

    // 200 is time in miliseconds.
    TO = setTimeout(resizeStuff, 200);
  }).resize();

})(jQuery);
