const bars = document.querySelector(".fa-bars");
console.log(bars);
const closingButton = document.querySelector(".fa-xmark");
console.log(closingButton);

const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
