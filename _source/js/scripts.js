// Custom scripts file


(function ($) {

  // 'use strict';
  $(document).ready(function() {

    $('.flexslider').flexslider({
      animation: "slide"
    });

    $('.skillbar').skillBars({
      from: 0,
    });

    $(window).on("scroll", function(){
      var myHeader = $('.section-header');
      if($(this).scrollTop() > 68 ){
        myHeader.addClass('is-fixed');
      } else {
        myHeader.removeClass('is-fixed');
      };
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
