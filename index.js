// loading
setTimeout(() => {
    let loader = document.querySelector(".loading");
    loader.classList.toggle("complete");
    loader.addEventListener(
      "transitionend",
      () => {
        loader.remove()
      },
      false
    );
  }, 3000);

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
