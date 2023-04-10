import { removeBucketItem } from "../../modal/modules/removeBucketItem.js";
import { priceCheck } from "../../modal/modules/totalPrice.js";

let lsArray = [];

if (localStorage.getItem("popUpItem")) {
  lsArray = JSON.parse(localStorage.getItem("popUpItem"));
}

export function addInBucket(event) {
  const target = event.target;
  if (!target.classList.contains("product-buy")) return;
  createPopUpItem(target);
}

function createPopUpItem(target) {
  const card = target.closest(".product");
  const bucketItemName = card.querySelector(".product-title").cloneNode(true);
  const bucketItemImg = card.querySelector(".product-img").cloneNode(true);
  const bucketItemPrice = card.querySelector(".price").cloneNode(true);
  const bucketItem = document.createElement("div");
  const bucketImgWrapper = document.createElement("div");
  const bucketTextWrapper = document.createElement("div");
  const bucketRemoveItemWrap = document.createElement("div");
  const bucketRemoveItem = document.createElement("span");
  const bucketListWrapper = document.querySelector(".pop_up_list");

  bucketItem.classList.add("pop_up-item");
  bucketImgWrapper.classList.add("pop_up-img-wrap");
  bucketTextWrapper.classList.add("pop_up-text-wrap");
  bucketRemoveItemWrap.classList.add("pop_up-text-wrap");
  bucketRemoveItem.classList.add("pop_up-close-item");
  bucketItemImg.className = "pop_up-item-img";
  bucketRemoveItem.innerText = "X";

  const popUpLsItem = {
    title: bucketItemName.textContent,
    newPrise: bucketItemPrice.querySelector(".price-new").textContent,
    oldPrise: bucketItemPrice.querySelector(".price-old").textContent,
    image: bucketItemImg.src,
  };

  if (!localStorage.getItem("popUpItem")) {
    lsArray = [];
  } else {
    lsArray = JSON.parse(localStorage.getItem("popUpItem"));
  }
  lsArray.push(popUpLsItem);

  localStorage.setItem("popUpItem", JSON.stringify(lsArray));

  bucketRemoveItem.addEventListener("click", removeBucketItem);

  bucketRemoveItemWrap.append(bucketRemoveItem);
  bucketTextWrapper.append(bucketItemName, bucketItemPrice);
  bucketImgWrapper.append(bucketItemImg);
  bucketItem.append(bucketImgWrapper, bucketTextWrapper, bucketRemoveItemWrap);
  bucketListWrapper.append(bucketItem);

  priceCheck();
}
