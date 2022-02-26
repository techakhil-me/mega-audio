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

