$(function () {
  $('.gallery__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,

    // prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
    // nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
    arrows: false,
    responsive: [{
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          variableWidth: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true
        }
      },
    ]
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

  $('.header__burger').on('click', function (e) {
    e.preventDefault();
    $('.header__menu').slideToggle().toggleClass('active');
    if ($(".header__menu").hasClass('active')) {
      $('<div class="overlay">&nbsp;</div>').prependTo($('.header'));
    } else {
      $('.overlay').remove();
    }
  });



});