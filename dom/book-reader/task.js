const fontSizes = Array.from(document.getElementsByClassName("font-size"));
const fontColors = Array.from(
  document.querySelectorAll(".book__control_color .color")
);
const backgroundColors = Array.from(
  document.querySelectorAll(".book__control_background .color")
);
const book = document.getElementById("book");

function changeSize(event) {
  this.closest(".book__control_font-size")
    .querySelector(".font-size_active")
    .classList.remove("font-size_active");
  this.classList.add("font-size_active");

  book.classList.remove("book_fs-big", "book_fs-small", "book_fs-undefined");
  book.classList.add("book_fs-" + this.dataset.size);

  event.preventDefault();
}

function changeTextColor(event) {
  this.closest(".book__control_color")
    .querySelector(".color_active")
    .classList.remove("color_active");
  this.classList.add("color_active");

  book.classList.remove(
    "book_color-gray",
    "book_color-whitesmoke",
    "book_color-black"
  );
  book.classList.add("book_color-" + this.dataset.textColor);

  event.preventDefault();
}

function changeBackgroundColor(event) {
  this.closest(".book__control_background")
    .querySelector(".color_active")
    .classList.remove("color_active");
  this.classList.add("color_active");

  book.classList.remove("book_bg-gray", "book_bg-white", "book_bg-black");
  book.classList.add("book_bg-" + this.dataset.bgColor);

  event.preventDefault();
}

for (let item of fontSizes) {
  item.addEventListener("click", changeSize);
}

for (let item of fontColors) {
  item.addEventListener("click", changeTextColor);
}

for (let item of backgroundColors) {
  item.addEventListener("click", changeBackgroundColor);
}
