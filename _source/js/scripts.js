// Custom scripts file


(function ($) {

  'use strict';
  $(document).ready(function() {

    // var divCount = $('.skillbar').length;
    // // console.log(divCount);
    // var skillBox = $('.skillbar');
    // var skillValue = $('.skillbar').attr('data-percent');
    // var skillValue = parseInt(skillValue);
    // var i = 0;
    $('.skillbar')
      .find('.skill-bar-percent')
      .css( "color", "green" );
    // {
    //   switch (x) {
    //     case (skillValue < 59):
    //       $(this).html('Test');
    //       console.log(i + " Lower than 60");
    //       break;
    //     case (skillValue > 60): 
    //       $(this).html("High");
    //       console.log(i + " Lower than 60");
    //       break;
    //     default:
    //       $(this).html("Cant Find it");
    //       console.log("is this working");
    //       break;
    //   }
    // });
    
    $('.flexslider').flexslider({
      animation: "slide"
    });

    // $('.job__content').hide();

    $('.skillbar').skillBars({
      from: 0,
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
