export function addInBucket(event) {
  const target = event.target;
  if (!target.classList.contains("like-product")) return;

  const card = target.closest(".product");
  const bucketItemName = card.querySelector(".product-title").cloneNode(true);
  const bucketItemImg = card.querySelector(".product-img").cloneNode(true);
  const bucketItemPrice = card.querySelector(".price").cloneNode(true);
  const bucketItem = document.createElement("div");
  const bucketImgWrapper = document.createElement("div");
  const bucketTextWrapper = document.createElement("div");
  const bucketListWrapper = document.querySelector(".pop_up_list");

  bucketItem.classList.add("pop_up-item");
  bucketImgWrapper.classList.add("pop_up-img-wrap");
  bucketTextWrapper.classList.add("pop_up-text-wrap");
  bucketItemImg.className = "pop_up-item-img";

  bucketTextWrapper.append(bucketItemName, bucketItemPrice);
  bucketImgWrapper.append(bucketItemImg);
  bucketItem.append(bucketImgWrapper, bucketTextWrapper);
  bucketListWrapper.append(bucketItem);
}
