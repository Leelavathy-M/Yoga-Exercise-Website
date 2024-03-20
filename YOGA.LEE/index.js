const ScrollRevealOption={
    distance:"50px", //moving
    origin:"bottom",
    duration:1000,
};

//header container
ScrollReveal().reveal(".header_container h1",{
    ...ScrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".header_container h2",{
    ...ScrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".header_container .btn",{
    ...ScrollRevealOption,
    delay:1500
});

ScrollReveal().reveal(".header_container img",{
    ...ScrollRevealOption,
    origin:"right",
});

ScrollReveal().reveal(".classes_image",{
    ...ScrollRevealOption,
    duration:1000,
    interval:500,  //for one by one 
});

//posts container
ScrollReveal().reveal(".posts_card",{
    ...ScrollRevealOption,
    interval:500,
});

ScrollReveal().reveal(".posts_container p",{
    ...ScrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".posts_container h2",{
    ...ScrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".posts_container img",{
    ...ScrollRevealOption,
    origin:"right",
});