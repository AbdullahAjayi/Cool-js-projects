const leftDiv = document.querySelector(".left-div-container");
const h1Text = document.querySelectorAll(".h1-text");
const card = document.querySelectorAll(".card");
const navEl = document.querySelectorAll(".nav-el");

const tl = gsap.timeline();

tl.from(leftDiv, {
  duration: 0.5,
  y: 100,
});

tl.from(h1Text, {
  opacity: 0,
  x: 100,
});

tl.from(card, {
  duration: 0.5,
  opacity: 0,
  y: -50,
  ease: "elastic",
  stagger: 0.5,
});
