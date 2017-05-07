// Custom scripts file


(function ($) {

  'use strict';
  $(document).ready(function() {

    var divCount = $('.skillbar').length;
    var skillBox = $('.skillbar');
    var skillValue = $('.skillbar').attr('data-percent');
    // var skillValue = parseInt(skillValue);
    console.log(skillBox);


    // Rewrite
    skillBox.each(function(index){
      var score = $(this).attr('data-percent');
      // convert var score to INT
      score = parseInt(score, 10);

    // console.log(score);
    // console.log(typeof(score));
      switch (score) {
        case (score < 59):
          $(this).html("lower");
          console.log( " Lower than 60");
          break;
        case (score > 60):
          $(this).html("medium");
          console.log(" More than 60");
          break;
        default:
          $(this).html("score not known");
          break;
        }
    });

    var i = 0;
    $('.skillbar')
      .find('.skill-bar-percent')
      .css( "color", "green" );

    $('.flexslider').flexslider({
      animation: "slide"
    });

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
