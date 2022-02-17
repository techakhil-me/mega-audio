// loading
document.querySelector("img").onload = () =>
  setTimeout(() => {
    let loader = document.querySelector(".loading");
    loader.classList.toggle("complete");
    loader.addEventListener(
      "transitionend",
      () => {
        loader.classList.toggle("remove-loading");
      },
      false
    );
  }, 2000);

//  toggle navbar
function toggleMenu(el) {
  el.classList.toggle("open");
  document.querySelector(".openmenu").classList.toggle("closemenu");
  document.querySelector("nav").classList.toggle("invert");
}

// toggle accordian
function toggleAccordian(el) {
  console.log();
  el.firstElementChild.classList.toggle("minus");
  el.parentElement.parentElement.classList.toggle("accordian-open");
}
