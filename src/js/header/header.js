import { addInBucket } from "../cards/modules/addInBucket.js";

export function header() {
  const header = document.querySelector(".header");
  const popUp = document.querySelector(".pop_up");
  const input = document.querySelector(".header__input");
  const products = document.querySelector(".products").cloneNode(true);
  const names = products.querySelectorAll(".product-title");
  const list = document.querySelector(".header__search-popup");

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
    let inputValue = this.value.trim().toLocaleLowerCase();

    if (inputValue === "") {
      for (let i = list.childElementCount - 1; i > -1; i--) {
        list.children[i].remove();
      }
      input.style.borderRadius = "10px";
      input.parentElement.style.borderRadius = "10px";
      list.style.width = "0px";
      return;
    }

    input.style.borderRadius = "10px 10px 0 0";
    input.parentElement.style.borderRadius = "10px 10px 0 0";
    list.style.width = "100%";

    list.childNodes.forEach((item) => {
      item.remove();
    });

    names.forEach((cardTitle) => {
      if (cardTitle.textContent.toLocaleLowerCase().search(inputValue) !== -1) {
        const card = cardTitle.closest(".product");
        card.classList.add("find-product");
        list.append(card);
      }
    });
  }

  function searchBlur(e) {
    if (
      !e.target.closest(".find-product") &&
      !e.target.closest(".header__search")
    ) {
      for (let i = list.childElementCount - 1; i > -1; i--) {
        list.children[i].remove();
      }
      input.style.borderRadius = "10px";
      input.parentElement.style.borderRadius = "10px";
      list.style.width = "0px";
    }
  }

  header.addEventListener("click", bucketOpen);
  popUp.addEventListener("click", bucketClose);
  input.addEventListener("input", search);
  input.addEventListener("focus", search);
  document.addEventListener("click", searchBlur);
}
