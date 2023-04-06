import { priceCheck } from "./totalPrice.js";

export function clearBucket(modal) {
  const clearBtn = modal.querySelector(".btn_clear");
  const bucketList = modal.querySelector(".pop_up_list");

  clearBtn.addEventListener("click", () => {
    Array.from(bucketList.children).forEach((item) => {
      item.remove();
    });
    localStorage.clear("popUpItem");
    priceCheck();
  });
}
