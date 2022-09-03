$('.ham-icon').click(function(e) {
  e.preventDefault();
  $('.dropdown').toggleClass('active')
})

var swiper2 = new Swiper(".swiper2-program", {
  autoplay: {
      disableOnInteraction: false,
      delay: 2000,
  },
  speed: 2000,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


const swiper3 = new Swiper(".swiper3-program", {
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
});