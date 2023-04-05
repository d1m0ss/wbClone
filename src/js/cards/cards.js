export function cards() {
  const cardsWrapper = document.querySelector(".products");

  cardsWrapper.addEventListener("click", bigView);
  cardsWrapper.addEventListener("click", addInBucket);

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
    bigViewWraper.append(cardImg);
    bigViewWraper.append(closeImg);
    cardsWrapper.append(bigViewWraper);
  }

  function addInBucket(event) {
    const target = event.target;
    if (!target.classList.contains("like-product")) return;
    const card = target.parentNode.parentNode.parentNode;
    const bucketItemImg = card.querySelector('.product-img')
    const bucketItemName = card.querySelector('.product-title')
    const bucketItemPrice = card.querySelector('.price-new')
    const bucketItemSale = card.querySelector('.price-old')
  }
}
