const chatWidget = document.querySelector(".chat-widget");
const messagesContainer = document.querySelector(
  ".chat-widget__messages-container"
);
const messages = document.querySelector(".chat-widget__messages");
const textBox = document.querySelector(".chat-widget__input");

const messagesList = ["Привет", "Как ты?", "Ахаха", "Отлично", "Шок"];

chatWidget.addEventListener("click", function () {
  chatWidget.className = "chat-widget_active";
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter" && event.target.value !== "") {
    const message = textBox.value;
    const rand = Math.floor(Math.random() * messagesList.length);
    const rValue = messagesList[rand];
    if (message != "") {
      messages.innerHTML += `
      <div class="message message_client">
      <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
      <div class="message__text">
      ${message}
        </div>
        </div>
      `;
      textBox.value = "";
      messages.innerHTML += `
      <div class="message ">
        <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
        <div class="message__text">
          ${rValue}
            </div>
            </div>
         `;
    }
  }
});
