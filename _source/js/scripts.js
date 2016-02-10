// Custom scripts file


(function ($) {

  'use strict';
  $(document).ready(function() {

    // var divCount = $('.skillbar').length;
    // console.log(divCount);
    // var skillValue = $('.skillbar').attr('data-percent');
    // var skillValue = parseInt(skillValue);
    // switch(skillValue){
    //   case (skillValue <= 59): alert("Lower than 60");
    //   break;
    //   case (skillValue >= 60): alert("More than than 60");
    //   break;
    // }
    // console.log(typeof skillValue);
    
    $('.flexslider').flexslider({
      animation: "slide",
      mousewheel: true
    });

    $('.job__content').hide();

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
