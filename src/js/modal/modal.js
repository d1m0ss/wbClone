import { clearBucket } from "./modules/clearBucket.js";
import { popUpitemLsFuill } from "./modules/popUpitemLsFuill.js";

export function modal() {
  const modal = document.querySelector(".pop_up_body");

  popUpitemLsFuill();
  clearBucket(modal);
}
