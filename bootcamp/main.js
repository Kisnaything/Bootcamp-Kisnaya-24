const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 1000,
  });
  ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
  });
  ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});

  ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
  });