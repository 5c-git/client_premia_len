const progressCircle = document.querySelector(".swiper-button-next svg");

const bannerSlider = new Swiper('.banner-slider', {
  cssMode: true,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
    }
  }
});

if (window.innerWidth > 767) {
  new Swiper('.product-slider', {
    cssMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
} else if (window.innerWidth < 767) {
  new Swiper('.product-slider', {
    cssMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}