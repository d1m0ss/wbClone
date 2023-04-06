export function header() {
  const header = document.querySelector(".header");
  const popUp = document.querySelector(".pop_up");
  const input = document.querySelector(".header__input");


  header.addEventListener("click", bucketOpen);
  popUp.addEventListener("click", bucketClose);
  input.addEventListener("input", search);

  function bucketOpen(event) {
    const target = event.target;
    if (!target.classList.contains("header__bucket")) {
      return;
    }
    popUp.style.display = "flex";
  }

  function bucketClose(event) {
    const target = event.target;
    if (
      !target.classList.contains("pop_up") &&
      !target.classList.contains("pop_up_close")
    ) {
      return;
    }
    popUp.style.display = "none";
  }

  function search() {
    let inputValue = this.value.trim();
    const products = document.querySelector(".products");
    const names = products.querySelectorAll(".product-title");
  }
}
