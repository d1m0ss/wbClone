export function priceCheck() {
  let currentNewPrice = 0;
  const totalPrice = document.querySelector(".modal_footer");
  const listWrap = document.querySelector(".pop_up_list");
  const prices = listWrap.querySelectorAll(".price-new");
  prices.forEach((price) => {
    currentNewPrice += +price.textContent.replace("$", "").replace(" ", "");
  });
  if (!prices.length) {
    totalPrice.textContent = `Корзина пуста`;
  } else {
    totalPrice.textContent = `Итого: ${currentNewPrice.toLocaleString(
      "en-EU"
    )}$`;
  }
}
