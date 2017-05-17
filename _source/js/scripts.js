// Custom scripts file


(function ($) {
  'use strict';
  $(document).ready(function() {





    $('.flexslider').flexslider({
      animation: "slide"
    });

    $('.skillbar').skillBars({
      from: 0,
    });


    $('.skill__list > div').each(function(){
      var skillValue = $(this).attr('data-percent');
      var myNumber = parseInt(skillValue);
      if(myNumber > 90){
        $(this).find('span.skill-bar-percent').text('Expert');
      } else if (myNumber > 80) {
        $(this).find('span.skill-bar-percent').text('Highly Proficient');
      } else if (myNumber > 51) {
        $(this).find('span.skill-bar-percent').text('Experienced');
      } else if (myNumber < 50) {
        $(this).find('span.skill-bar-percent').text('Knowledgable');
      }
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
