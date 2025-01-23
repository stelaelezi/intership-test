const products = document.querySelectorAll(".product");
const carousel = document.querySelector(".carousel");
let currentIndex = 0;
const totalSlides = products.length;

const getItemsPerView = (width) => {
  return width > 1000 ? 3 : width > 650 ? 2 : 1;
};

let itemsPerView = getItemsPerView(window.innerWidth);

const updateSlides = () => {
  products.forEach((product) => {
    product.style.display = "none";
  });

  for (let i = 0; i < itemsPerView; i++) {
    products[currentIndex + i].style.display = "block ";
  }
};

const nextSlide = () => {
  if (currentIndex + itemsPerView === totalSlides - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSlides();
};

const prevSlide = () => {
  console.log("prev");
  if (currentIndex === 0) {
    currentIndex = totalSlides - itemsPerView;
  } else {
    currentIndex--;
  }
  updateSlides();
};

const nextBtn = document
  .querySelector(".next-button")
  .addEventListener("click", () => {
    nextSlide();
  });

const prevBtn = document
  .querySelector(".prev-button")
  .addEventListener("click", () => {
    prevSlide();
  });

window.addEventListener("resize", () => {
  itemsPerView = getItemsPerView(window.innerWidth);
  //change slides once the screen size has changed
  updateSlides();
});
