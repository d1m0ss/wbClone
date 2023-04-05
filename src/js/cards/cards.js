export function cards() {
  const cardsWrapper = document.querySelector(".products");

  cardsWrapper.addEventListener("click", bigView);

  function bigView(event) {
    const target = event.target;
    if (!target.classList.contains("product-viewing")) {
      return;
    }
    const cardImg = target.previousElementSibling.cloneNode(true);
    cardImg.style =
      "position: absolute; top: 0px; left: 0px; right: 0; bottom: 0; margin: auto; border-radius: 20px; height: 100%; z-index: 10;";
    cardsWrapper.append(cardImg);
  }
}
