// ScrollReveal().reveal('.card',{
//     delay:300,
// });


// TO SLIDE UP

let slideUp = {
    delay:375,
    duration:500,
    distance: '100%',
    origin: 'bottom',
    opacity: 0.2,
    reset:true,
    easing:'ease',
    rotate:{
        x:60,
        y:20,
        z:20
    },
    scale:0.3
};

ScrollReveal().reveal('.card', slideUp);