let prevScroll = window.pageYOffset;
const navbar = document.querySelector(".navbar");
const threshold = 80; // scroll distance before triggering show/hide

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const scrollDiff = currentScroll - prevScroll;

  if (scrollDiff > threshold) {
    // User scrolled down more than threshold → hide navbar
    navbar.classList.remove("top-0");
    navbar.classList.add("-top-[80px]");
    prevScroll = currentScroll;
  } else if (scrollDiff < -threshold) {
    // User scrolled up more than threshold → show navbar
    navbar.classList.remove("-top-[80px]");
    navbar.classList.add("top-0");
    prevScroll = currentScroll;
  }
});

const explore = document.querySelector(".explore");
const exploreCard = explore.querySelector(".explore-img");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("click", () => clickLeft(explore, exploreCard));

right.addEventListener("click", () => clickRight(explore, exploreCard));

function getScrollAmount(explore, card) {
  if (card) {
    const style = getComputedStyle(card);
    const marginRight = parseFloat(style.marginRight) || 0;
    return card.clientWidth + marginRight;
  }
  return Math.round(explore.clientWidth);
}

//writing scroll logic for outfits secton
const outfits = document.querySelector(".outfits");
const outfitsCard = outfits.querySelector(".outfit-img");
const outfitLeft = document.querySelector(".outfit-left");
const outfitRight = document.querySelector(".outfit-right");

outfitLeft.addEventListener("click", () => clickLeft(outfits, outfitsCard));

outfitRight.addEventListener("click", () => clickRight(outfits, outfitsCard));

function clickLeft(container, miniContainer) {
  const scrollAmount = getScrollAmount(container, miniContainer);
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
}

function clickRight(container, miniContainer) {
  const scrollAmount = getScrollAmount(container, miniContainer);
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

//writing scroll logic for others sheos
const otherShoes = document.querySelector(".other-shoes");
const othersDiv = otherShoes.querySelector(".others-div");
const othersLeft = document.querySelector(".others-left");
const othersRight = document.querySelector(".others-right");

othersLeft.addEventListener("click", () => clickLeft(otherShoes, othersDiv));
othersRight.addEventListener("click", () => clickRight(otherShoes, othersDiv));

const menu = document.querySelector(".menu");
const menuContent = document.querySelector(".menu-content");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  menuContent.classList.remove("translate-x-full");
  menuContent.classList.add("translate-x-0");

  body.classList.add("overflow-hidden");
});

const close = document.querySelector(".close");

close.addEventListener("click", () => {
  menuContent.classList.remove("translate-x-0");
  menuContent.classList.add("translate-x-full");

  body.classList.remove("overflow-hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    body.classList.remove("overflow-hidden");
  }
  if (window.innerWidth <= 760) {
    body.classList.add("overflow-hidden")
  }
});
