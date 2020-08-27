(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict


function(){

  if($('.brands_slider').length)
  {
  var brandsSlider = $('.brands_slider');
  
  brandsSlider.owlCarousel(
  {
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  nav:false,
  dots:false,
  autoWidth:true,
  items:8,
  margin:42
  });
  
  if($('.brands_prev').length)
  {
  var prev = $('.brands_prev');
  prev.on('click', function()
  {
  brandsSlider.trigger('prev.owl.carousel');
  });
  }
  
  if($('.brands_next').length)
  {
  var next = $('.brands_next');
  next.on('click', function()
  {
  brandsSlider.trigger('next.owl.carousel');
  });
  }
  }
  
  
  }