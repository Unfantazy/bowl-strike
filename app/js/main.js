$(function () {
  $('.gallery__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    // prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    // nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    arrows: false,
  });

  $(".feedback__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    appendArrows: ".feedback__review",

  });
  $('.slick-prev').on('click', function () {
    $('.feedback__slider').slick("slickPrev");
  });
  $('.slick-next').on('click', function () {
    $('.feedback__slider').slick("slickNext");
  });
});