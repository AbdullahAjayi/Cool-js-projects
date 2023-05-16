import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ duration: 3 });

const boxes = document.querySelectorAll(".box");
const box2 = document.querySelectorAll(".b-2");

gsap.from(box2, {
  scrollTrigger: {
    trigger: box2,
    start: "top bottom",
    end: "+=400",
    scrub: true,
    pin: ".b-1",
  },
  duration: 3,
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: box2,
    pin: box2,
    scrub: 3,
  },
});

tl.from(".bg-red-500", { xPercent: 100, delay: 1 })
  .from(".bg-red-600", { yPercent: 100 })
  .from(".bg-red-700", { xPercent: -100 });

gsap.from(".bg-orange-200", {
  scrollTrigger: {
    trigger: ".bg-orange-200",
    pin: true,
    pinSpacing: false,
  },
  zIndex: -2,
});

let panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  scrollTrigger: {
    trigger: ".panels-container",
    pin: true,
    scrub: 1,
    snap: 1 / (panels.length - 1),
    markers: true,
    end: () => "+=" + document.querySelector(".panels-container").offsetWidth,
  },
});
