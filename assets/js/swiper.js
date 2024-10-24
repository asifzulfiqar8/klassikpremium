// Swiper JS Script
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
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
  });
  
  //   For Product Section
  var productSwiper = new Swiper(".productSwiper", {
    slidesPerView: 4, // Display 4 products at a time
    spaceBetween: 30, // Space between the products
    loop: true, // Infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      950:{
          slidesPerView: 3,
        spaceBetween: 30,
      },
      550: {  // Match 786px as the breakpoint
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {  // At 0px or below
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  //   For Icon Section
  var iconSwiper = new Swiper(".iconSwiper", {
    slidesPerView: 4, // Display 4 products at a time
    spaceBetween: 30, // Space between the products
    loop: true, // Infinite loop
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      710:{
          slidesPerView: 3,
        spaceBetween: 30,
      },
      420: {  // Match 786px as the breakpoint
        slidesPerView: 2,
        spaceBetween: 30,
      },
      0: {  // At 0px or below
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });