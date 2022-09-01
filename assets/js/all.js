"use strict";

$('.ham-icon').click(function (e) {
  e.preventDefault();
  $('.dropdown').toggleClass('active');
});
var swiper2 = new Swiper(".swiper2-program", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 2000,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    768: {
      slidesPerView: 6
    },
    992: {
      slidesPerView: 9
    }
  }
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
