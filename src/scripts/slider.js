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

  //about-complex slider
  $('.about-complex-slider-info').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'about-complex-slider-dots',
    asNavFor: $('.about-complex-slider-picture')
  });

  $('.about-complex-slider-picture').slick({
    arrows: false,
    asNavFor: $('.about-complex-slider-info')
  });

  //about-company slider
  $('.about-company-slider-info').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'about-company-slider-dots',
    asNavFor: $('.about-company-slider-picture')
  });

  $('.about-company-slider-picture').slick({
    arrows: false,
    asNavFor: $('.about-company-slider-info')
  });

  //room sliders
  $('.room-slider').each(function() {
    $(this).slick({
      arrows: true,
      infinite: true,
      nextArrow: $(this).closest('.room-sliders__item').find('.button-slider-square_next'),
      prevArrow: $(this).closest('.room-sliders__item').find('.button-slider-square_prev'),
    });
    
  });

  // $('.room-tab__link').each(function() {
  //   $(this).on('click', function() {
  //     // $('.room-slider').slick('setPosition');
  //     console.log($('.room-slider'));
      
  //   })
  // })

});
