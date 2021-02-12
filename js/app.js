const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".info h1");
const justin = document.querySelector(".info h2");
const info = document.querySelector(".info h3");
const sneaker = document.querySelector(".sneaker img");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
  card.style.trasition = "none";
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotate(15deg)";
  justin.style.transform = "translateZ(175px)";
  info.style.transform = "translateZ(150px)";
  sizes.style.transform = "translateZ(125px)";
  purchase.style.transform = "translateZ(100px)";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.2s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotate(0deg)";
  justin.style.transform = "translateZ(0px)";
  info.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
