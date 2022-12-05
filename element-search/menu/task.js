const menuLinks = Array.from(document.getElementsByClassName("menu__link"));

menuLinks.forEach((item) =>
  item.addEventListener("click", function (event) {
    if (item.parentElement.getElementsByClassName("menu_sub").length == 1) {
      event.preventDefault();
      let menuSub = Array.from(
        item.parentElement.getElementsByClassName("menu_sub")
      );
      menuSub.forEach((sub) => sub.classList.toggle("menu_active"));
    }
  })
);
