import { removeBucketItem } from "./removeBucketItem.js";
import { priceCheck } from "./totalPrice.js";

export function popUpitemLsFuill() {
  if (localStorage.getItem("popUpItem")) {
    const lsItems = JSON.parse(localStorage.getItem("popUpItem"));

    lsItems.forEach(({ title, newPrise, oldPrise, image }) => {
      const bucketItemName = createCustomElement("span", {
        textContent: title,
        className: "product-title",
      });
      const bucketItemNewPrice = createCustomElement("span", {
        textContent: newPrise,
        className: "price-new",
      });
      const bucketItemOldPrice = createCustomElement("span", {
        textContent: oldPrise,
        className: "price-old",
      });
      const bucketItemImg = createCustomElement("img", {
        src: image,
        className: "pop_up-item-img",
      });

      const bucketItemPrice = createCustomElement("div", {
        className: "price",
      });
      const bucketItem = createCustomElement("div", {
        className: "pop_up-item",
      });
      const bucketImgWrapper = createCustomElement("div", {
        className: "pop_up-img-wrap",
      });
      const bucketTextWrapper = createCustomElement("div", {
        className: "pop_up-text-wrap",
      });
      const bucketRemoveItemWrap = createCustomElement("div", {
        className: "pop_up-text-wrap",
      });
      const bucketRemoveItem = createCustomElement("span", {
        className: "pop_up-close-item",
        textContent: "X",
      });
      const bucketListWrapper = document.querySelector(".pop_up_list");

      bucketRemoveItem.addEventListener("click", removeBucketItem);

      bucketItemPrice.append(bucketItemNewPrice, bucketItemOldPrice);
      bucketRemoveItemWrap.append(bucketRemoveItem);
      bucketTextWrapper.append(bucketItemName, bucketItemPrice);
      bucketImgWrapper.append(bucketItemImg);
      bucketItem.append(
        bucketImgWrapper,
        bucketTextWrapper,
        bucketRemoveItemWrap
      );
      bucketListWrapper.append(bucketItem);
    });
    priceCheck();
  }
}

function createCustomElement(tagName, options) {
  return Object.assign(document.createElement(tagName), options);
}
