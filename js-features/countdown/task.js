const timer = document.getElementById("timer");
let timerValue = new Date();
let hh = 00;
let mm = 00;
let ss = 15;
timerValue.setHours(hh);
timerValue.setMinutes(mm);
timerValue.setSeconds(ss);
timer.textContent = timerValue.toTimeString().split(" ")[0];
let timerId = setInterval(() => setTime(), 1000);

const image = document.getElementById("image");
image.click = function () {};
function setTime() {
  var time = timerValue.getTime();
  timerValue.setTime(time - 1000);
  timer.textContent = timerValue.toTimeString().split(" ")[0];
  if (
    timerValue.getHours() === 0 &&
    timerValue.getMinutes() === 0 &&
    timerValue.getSeconds() === 0
  ) {
    window.alert("Вы победили в конкурсе!");
    window.location.href =
      "https://t3.ftcdn.net/jpg/03/14/56/66/240_F_314566645_UNHlYyGK2EVdGQ8MoNw95vvH44yknrc7.jpg";
    clearInterval(timerId);
  }
}
