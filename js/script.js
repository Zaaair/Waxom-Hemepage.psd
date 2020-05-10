$(document).ready(function () {
    $('#jsBannerSlider').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
    });
});

$('#jsPostCard').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });