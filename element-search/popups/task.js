const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");

const modalMainCloses = Array.from(modalMain.querySelectorAll(".modal__close"));
const modalSuccessCloses = Array.from(
  modalSuccess.querySelectorAll(".modal__close")
);
const showSuccess = document.querySelector(".show-success");

modalMain.classList.add("modal_active");

for (let i = 0; i < modalMainCloses.length; i++) {
  modalMainCloses[i].addEventListener("click", () =>
    modalMain.classList.remove("modal_active")
  );
}

for (let i = 0; i < modalSuccessCloses.length; i++) {
  modalSuccessCloses[i].addEventListener("click", () =>
    modalSuccess.classList.remove("modal_active")
  );
}

showSuccess.addEventListener("click", () =>
  modalSuccess.classList.add("modal_active")
);
