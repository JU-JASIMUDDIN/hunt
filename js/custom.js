
$(window).scroll(function () {
  var scrolling = $(this).scrollTop();
  if (scrolling > 100) {
    $('.navbar').addClass('bg');
  }
  else {
    $('.navbar').removeClass('bg');
  }
});

$('.slide_item').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fa fa-arrow-left left_arrow"></i>',
   nextArrow: '<i class="fa fa-arrow-right right_arrow"></i>',
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });