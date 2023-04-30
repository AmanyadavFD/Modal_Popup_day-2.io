const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
console.log(openBtn);

const popupContainer = document.querySelector(".popup-container");

openBtn.addEventListener("click", () => {
  popupContainer.classList.add("blur");
  popupContainer.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("blur");
  popupContainer.style.display = "none";
});
