


// USING IFINITE MULTIPLE LOOP STYLE
// =============================================================
// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 3,
//     spaceBetween: 25,
//     loop:true,
//     centerSlide: 'true',
//     fade:'true',
//     grabCursor:'true',
//     pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets:true,
//     },
//     navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//     },

//     breakpoints:{
//         0:{
//             slidesPerView:1,
//         },
//         520:{
//             slidesPerView:2,
//         },
//         950:{
//             slidesPerView:3,
//         }
//     }
// });

// USING EFFECT COVER FLOW
// =============================================================================
var swiper = new Swiper(".slide-content", {
    effect: "coverflow",
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
    rotate: 50,
    stretch: 100,
    depth: 500,
    modifier: 1,
    slideShadows: true,
    },
    pagination: {
    el: ".swiper-pagination",
    },
});
