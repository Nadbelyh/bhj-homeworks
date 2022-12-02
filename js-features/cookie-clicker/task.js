const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let clickCount = 0;
let avgClickValue = 0;
let lastClickTime = 0;
let clickSpeed = 0;
cookie.onclick = function () {
  clickCount = clickCount + 1;
  const timeNow = new Date();
  clickSpeed = Number(1000 / (timeNow - lastClickTime)).toFixed(2);
  lastClickTime = timeNow;
  clickerCounter.textContent = clickCount;
  clickerSpeed.textContent = clickSpeed;
  cookie.width = clickCount % 2 ? 190 : 200;
  cookie.height = clickCount % 2 ? 105 : 115;
};
