let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth <= 768 && !swiperInstance) {
    swiperInstance = new Swiper(".mobile-slider", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (window.innerWidth > 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);
