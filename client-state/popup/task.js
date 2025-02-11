const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

if (!(getCookie("modal") === "closed")) {
  setTimeout(() => modal.classList.add("modal_active"), 1000);
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  setCookie();
});

function setCookie() {
  let date = new Date(Date.now() + 86400000);
  date = date.toUTCString();
  document.cookie = "modal=closed; expires=" + date;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith(name + "="));
  return cookie ? decodeURIComponent(cookie.substr((name + "=").length)) : null;
}
