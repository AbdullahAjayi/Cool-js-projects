const blueBg = document.querySelector(".blue-bg");
const h1Text = document.querySelectorAll(".heading");
const text = document.querySelector(".text");

const tl = gsap.timeline();

tl.from(blueBg, {
  duration: 1,
  y: 100,
});

tl.from(h1Text, {
  opacity: 0,
  x: 100,
});

tl.from(text, {
  duration: 0.5,
  opacity: 0,
  y: -50,
  ease: "bounce.out",
});
