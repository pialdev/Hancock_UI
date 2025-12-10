jQuery(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 1,
    time: 1000,
  });
});

//  Auto Play Start
$(".storeSlide").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  prevArrow: '<i class="fa-solid fa-circle-chevron-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-circle-chevron-right next"></i>',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
  ],
});
//  Auto Play End
//==== Back-to-top button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//==== Animate the scroll to top
$(".back-to-top").on("click", function (e) {
  e.preventDefault();

  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
//  Auto Play Start
AOS.init({
  delay: 50,
  duration: 700,
});
//  Auto Play End
//  Auto Play Start
//  Auto Play End
//  Auto Play Start
//  Auto Play End
//  Auto Play Start
//  Auto Play End
