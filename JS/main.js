
new Swiper ( '.swiper-1', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
        slidesPerView: 1,
        spaceBetween: 20
        },

        768: {
        slidesPerView: 2,
        spaceBetween: 25
        },

        992: {
        slidesPerView: 3,
        spaceBetween: 30
        }
    }
});



new Swiper(".swiper-2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      480: {
      slidesPerView: 1,
      },
  
      768: {
      slidesPerView: 2,
      },
  
      992: {
      slidesPerView: 2,
      }
  }
  });

  
  
new Swiper ( '.section-5__card', {
    effect: "creative",
          creativeEffect: {
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          },
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  })



