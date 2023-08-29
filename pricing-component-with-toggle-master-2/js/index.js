const switcher = document.querySelector(".switch");
const circle = document.querySelector(".circle");
const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");

switcher.addEventListener("click", () => {
  circle.classList.toggle("annual");
  if (circle.classList.contains("annual")) {
    price1.textContent = "$199.99";
    price2.textContent = "$249.99";
    price3.textContent = "$399.99";
  } else {
    price1.textContent = "$19.99";
    price2.textContent = "$24.99";
    price3.textContent = "$39.99";
  }
});
