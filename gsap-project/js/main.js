import { pages } from "./data.js";

const leftDiv = document.querySelector(".left-div-container");
const h1Text = document.querySelectorAll(".h1-text");
const card = document.querySelectorAll(".card");
const navEl = document.querySelectorAll(".nav-el");

// Generate sections dynamically
for (const page of pages) {
  // Create the required elements for each section
  const title = document.createElement("h1");
  const subTitle = document.createElement("h2");
  const card = document.createElement("div");
  const section = document.createElement("section");

  title.textContent = page.title;
  subTitle.textContent = page.subTitle;

  // Add styles for each elements
  title.classList = "h1-text text-4xl font-bold";
  subTitle.classList = "text-4xl mb-4";
  card.classList = "card bg-white p-8 mt-8 text-xl";
  section.classList = "bg-[#3AB0FF] h-screen p-4 md:p-8";

  card.append(subTitle);
  section.append(title, card);

  for (const paragraph of page.p) {
    const p = document.createElement("p");
    p.textContent = paragraph;
    p.classList = "my-2";
    card.append(p);
  }

  leftDiv.append(section);
}

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
