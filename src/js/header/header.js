export function header() {
  const bucket = document.querySelector("#open_pop_up");
  const popUpClose = document.querySelector("#pop_up_close");
  const popUp = document.querySelector(".pop_up");

  bucket.addEventListener("click", openPopUp);
  popUpClose.addEventListener("click", closePopUp);

  function openPopUp() {
    popUp.style.display = "flex";
  }

  function closePopUp() {
    popUp.style.display = "none";
  }
}
