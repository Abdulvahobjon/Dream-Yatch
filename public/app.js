const swiperHero = new Swiper('.swiper-hero', {
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: '.button-prev',
    nextEl: '.button-next',
  },
});

const swiperOffers = new Swiper('.swiper-offers', {
  spaceBetween: 21,
  slidesPerView: 1.3,
  slidesffsetBefore: 0,

  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2.3,
    },
    768: {
      slidesPerView: 2.8,
    },
    1024: {
      slidesPerView: 3.8,
      slidesOffsetBefore: 100,
    },
    1280: {
      slidesPerView: 5.5,
      slidesOffsetBefore: 260,
    },
  }
});

document.querySelectorAll('.dropdown').forEach((drop) => {
  if (drop) {
    drop.addEventListener('click', () => {
      drop.lastElementChild.classList.toggle('hidden')
      drop.firstElementChild.classList.toggle('rotate-180')
    })

  }
})

document.querySelectorAll('.options').forEach((option) => {
  if (option) {
    option.addEventListener('click', (e) => {
      e.target.parentElement.previousElementSibling.value = e.target.textContent
      // console.log(e.target.textContent);
    })
  }
})