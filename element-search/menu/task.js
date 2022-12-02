const menuLinks = document.getElementsByClassName("menu__link");
const menuItems = document.getElementsByClassName("menu__item");

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks.item(i).onclick = () => {
    for (
      let j = 0;
      j < document.querySelectorAll("ul.menu_active").length;
      j++
    ) {
      document
        .querySelectorAll("ul.menu_active")
        .item(j)
        .classList.remove("menu_active");
    }
    menuItems.item(i).querySelector("ul").classList.add("menu_active");
    return false;
  };
}
