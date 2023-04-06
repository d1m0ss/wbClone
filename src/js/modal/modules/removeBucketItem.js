import { priceCheck } from "./totalPrice.js";

export function removeBucketItem(event) {
  const target = event.target.closest(".pop_up-item");
  const listWrapper = event.target.closest(".pop_up_list");
  const lsData = JSON.parse(localStorage.getItem("popUpItem"));
  const itemIndex = Array.from(listWrapper.children).indexOf(target);

  lsData.splice(itemIndex, 1);
  if (!lsData.length) {
    localStorage.clear("popUpItem");
  } else {
    localStorage.setItem("popUpItem", JSON.stringify(lsData));
  }
  
  target.remove();
  priceCheck();
}
