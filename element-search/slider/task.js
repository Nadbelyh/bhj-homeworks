const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
const sliderArrowNext = document.querySelector(".slider__arrow_next");

const sliderItems = document.querySelectorAll(".slider__item");
let imageIndex = 0;
sliderArrowPrev.addEventListener("click", () => sliderPrev());
sliderArrowNext.addEventListener("click", () => sliderNext());

function sliderPrev() {
  const prevIndex = imageIndex;
  if (imageIndex === 0) {
    imageIndex = 4;
  } else {
    imageIndex = imageIndex - 1;
  }

  changeDotAndImage(prevIndex, imageIndex);
}

function sliderNext() {
  const prevIndex = imageIndex;
  imageIndex = imageIndex + 1;
  if (imageIndex === 5) {
    imageIndex = 0;
  }
  changeDotAndImage(prevIndex, imageIndex);
}

const sliderDots = document.querySelectorAll(".slider__dot");
sliderDots[0].classList.add("slider__dot_active");

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].addEventListener("click", () =>
    changeDotAndImage(imageIndex, i)
  );
}

function changeDotAndImage(prevIndex, nextIndex) {
  sliderDots[prevIndex].classList.remove("slider__dot_active");
  sliderItems[prevIndex].classList.remove("slider__item_active");
  imageIndex = nextIndex;
  sliderDots[nextIndex].classList.add("slider__dot_active");
  sliderItems[nextIndex].classList.add("slider__item_active");
}
