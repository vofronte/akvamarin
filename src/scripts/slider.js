$(function() {

  $('.home-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.counter__pages-text_bold').text(i.toString().padStart(2, '0'));
    $('.counter__pages-text').text('/' + slick.slideCount.toString().padStart(2, '0'));
});


  $('.home-slider').slick({
    arrows: true,
    prevArrow: $('.button-slder_prev'),
    nextArrow: $('.button-slder_next'),
    fade: true
  });

  $('.about-slider-info').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'about-slider-dots',
    asNavFor: $('.about-slider-picture')
  });

  $('.about-slider-picture').slick({
    arrows: false,
  });
});
