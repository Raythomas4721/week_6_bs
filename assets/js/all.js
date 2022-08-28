"use strict";

$('.ham-icon').click(function (e) {
  e.preventDefault();
  $('.dropdown').toggleClass('active');
});
var swiper = new Swiper(".swiper-program", {
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
//# sourceMappingURL=all.js.map
