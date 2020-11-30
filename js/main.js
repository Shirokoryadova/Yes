const slider = document.querySelector('.reviews__swiper-container');

let mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    slideClass: 'reviews__swiper-slide',
    wrapperClass: 'reviews__swiper-wrapper',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});
