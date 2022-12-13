const taskAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const tasksInput = document.getElementById("task__input");

taskAdd.addEventListener("click", (e) => {
  e.preventDefault();
  tasksInput.value = tasksInput.value.trim();

  if (tasksInput.value) {
    let text = tasksInput.value;
    tasksList.insertAdjacentHTML(
      "afterBegin",
      `<div class="task">
      <div class="task__title">${text}</div>
      <a href="#" class="task__remove">&times;</a>
    </div>`
    );
    tasksInput.value = "";

    let taskRemove = document.querySelector(".task__remove");
    let task = document.querySelector(".task");

    taskRemove.addEventListener("click", function (e) {
      e.preventDefault();
      task.remove();
    });
  }
});
