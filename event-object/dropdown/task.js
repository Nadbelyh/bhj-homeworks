// const dropdown = document.querySelector(".dropdown");
// const dropdownList = document.querySelector(".dropdown__list");
// const dropdownValue = document.querySelector(".dropdown__value");
// const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));

// dropdown.addEventListener("click", () => chageDropdown());

// function chageDropdown() {
const dropDownList = document.querySelector(".dropdown__value");
const listOfItems = document.querySelectorAll(".dropdown__item");
const selectedItem = document.querySelector("ul.dropdown__list");
const listLength = listOfItems.length;

dropDownList.onclick = function () {
  selectedItem.classList.add("dropdown__list_active");
  for (i = 0; i < listLength; i++) {
    listOfItems[i].addEventListener("click", function (event) {
      event.preventDefault();
      dropDownList.textContent = event.target.textContent;
      selectedItem.classList.remove("dropdown__list_active");
      return;
    });
  }
};
