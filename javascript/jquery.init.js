/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

$(document).ready(function() {
  $('.credit-block').fitText(2);
  $('#main-navigation a').on('mouseenter mouseleave', function(e) {
    if (e.type == 'mouseenter' && !$(this).is('.active')) {
      $(this).addClass('hover');
    } else {
      $(this).removeClass('hover');
    }
  });
  $('a[data-behavior="slide-to-awards"]').on('click', function(e) {
    if ($('#awards').length) {
      $('html, body').animate({
        scrollTop: $('#awards').offset().top
      }, 500);
      e.preventDefault();
    }
  });
  $('a[data-behavior="slide-to-press"]').on('click', function(e) {
    if ($('#press').length) {
      $('html, body').animate({
        scrollTop: $('#press').offset().top
      }, 500);
      e.preventDefault();
    }
  });
  $('.trailer-splash a').on('click', function(e) {
    var video = $('<div class="vid-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/7a-Flujizz4?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
    $(this).empty();
    $(this).prepend(video);
    $(".vid-wrapper").fitVids();
    e.preventDefault();
  });
});
