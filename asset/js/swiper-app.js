
/***************************************** */
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
  });
  /***************************************** */

    // let swiper = new Swiper(".mySwiper", {
    //   spaceBetween: 10,
    //   slidesPerView: 4,
    //   freeMode: true,
    //   watchSlidesProgress: true,
    // });
    // let swiper2 = new Swiper(".mySwiper2", {
    //   spaceBetween: 10,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   thumbs: {
    //     swiper: swiper,
    //   },
    // });
  