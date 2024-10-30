// Swiper JS Script
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination-hero",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },
  });
  
  //   For Product Section
  var productSwiper1 = new Swiper(".proodSwiper1", {
    slidesPerView: 4, // Display 4 products at a time
    spaceBetween: 30, // Space between the products
    loop: true,
    navigation: {
      nextEl: ".product-carousel__carousel-1 .prod-next",
      prevEl: ".product-carousel__carousel-1 .prod-prev",
    },
    pagination: {
      // el: ".swiper-pagination",
      clickable: false,
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
  var productSwiper2 = new Swiper(".proodSwiper2", {
    slidesPerView: 4, // Display 4 products at a time
    spaceBetween: 30, // Space between the products
    loop: true,
    navigation: {
      nextEl: ".product-carousel__carousel-2 .prod-next",
      prevEl: ".product-carousel__carousel-2 .prod-prev",
    },
    pagination: {
      // el: ".swiper-pagination",
      clickable: false,
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
  

  var productSwiper3 = new Swiper(".proodSwiper3", {
    slidesPerView: 4, // Display 4 products at a time
    spaceBetween: 30, // Space between the products
    loop: true,
    navigation: {
      nextEl: ".product-carousel__carousel-3 .prod-next",
      prevEl: ".product-carousel__carousel-3 .swiper-button-prev",
    },
    pagination: {
      // el: ".swiper-pagination",
      clickable: false,
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
      nextEl: ".swp-icon-next",
      prevEl: ".swp-icon-prev",
    },
    pagination: {
      // el: ".swiper-pagination",
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
  //  icon section 2 
  var iconSwiper = new Swiper(".iconSwiper2", {
    slidesPerView: 4, // Display 4 products at a time
    spaceBetween: 30, // Space between the products
    loop: true, // Infinite loop
    navigation: {
      nextEl: ".iconSwiper2 .swp-icon-next",
      prevEl: ".iconSwiper2 .swp-icon-prev",
    },
    pagination: {
      // el: ".swiper-pagination",
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