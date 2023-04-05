export function cards() {
  const cardsWrapper = document.querySelector(".products");

  cardsWrapper.addEventListener("click", bigView);

  function bigView(event) {
    const target = event.target;
    if (!target.classList.contains("product-viewing")) return;
    const cardImg = target.previousElementSibling.cloneNode(true);
    const closeImg = document.createElement("span");
    const bigViewWraper = document.createElement("div");
    closeImg.innerText = "Закрыть";
    bigViewWraper.className = "big-viewe";
    closeImg.className = "close-img";
    cardImg.className = "card-img";
    closeImg.addEventListener("click", () => {
      bigViewWraper.remove();
    });
    bigViewWraper.append(closeImg);
    bigViewWraper.append(cardImg);
    document.querySelector(".content").append(bigViewWraper);
  }
}
