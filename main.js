(function ($) {

  // Initiate the wowjs
  new WOW().init();

 //counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });
})(jQuery);
