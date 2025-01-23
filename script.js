const products = document.querySelectorAll(".product");
const carousel = document.querySelector(".carousel");
const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".prev-button");
let currentIndex = 0;

function showSlide() {
  products.forEach((product) => {
    product.style.display = "none";
  });

  products[index].style.display = "block";
}
