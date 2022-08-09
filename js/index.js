let button = document.querySelector(".btnsOpen");
let modal = document.querySelector(".madal");
let madaloff = document.querySelector(".madal__body-img");

button.addEventListener("click", () => {
  modal.classList.toggle("madal--on");
});

madaloff.addEventListener("click", () => {
  modal.classList.remove("madal--on");
});
