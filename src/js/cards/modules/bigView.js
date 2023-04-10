export function bigView(event) {
  const target = event.target;
  if (!target.classList.contains("product-viewing")) return;
  const cardsWrapper = document.querySelector("body");
  const card = target.closest(".product").cloneNode(true);
  const cardImg = target.previousElementSibling.cloneNode(true);
  const bigViewWraper = document.createElement("div");
  const description = card.querySelector(".product-description");
  let imgSrcArr = cardImg.src.split("/");

  console.log(description);

  imgSrcArr[imgSrcArr.length - 1] = `in${card.dataset.pordtype}.jpg`;
  cardImg.src = imgSrcArr.join("/");

  bigViewWraper.className = "big-viewe";
  cardImg.className = "card-img";
  bigViewWraper.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("card-img") ||
      e.target.classList.contains("product-description")
    )
      return;
    bigViewWraper.remove();
  });
  bigViewWraper.append(cardImg, description);
  cardsWrapper.append(bigViewWraper);
}
