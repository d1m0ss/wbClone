import { bigView } from "./modules/bigView.js";
import { addInBucket } from "./modules/addInBucket.js";

export function cards() {
  const cardsWrapper = document.querySelector(".products");

  cardsWrapper.addEventListener("click", bigView);
  cardsWrapper.addEventListener("click", addInBucket);
}
