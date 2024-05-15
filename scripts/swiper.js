// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  speed: 500,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
