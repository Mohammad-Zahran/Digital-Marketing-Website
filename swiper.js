let swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,  // 1 card for screens smaller than 768px
        },
        768: {
            slidesPerView: 2,  // 2 cards for screens larger than 768px
        },
        1024: {
            slidesPerView: 3,  // 3 cards for screens larger than 1024px
        },
    },
});
