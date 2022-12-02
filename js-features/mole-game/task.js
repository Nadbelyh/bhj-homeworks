let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;

for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      deadCount = deadCount + 1;
      if (deadCount === 10) {
        window.alert("Вы выиграли!");
        clear();
      }
      dead.textContent = deadCount;
    } else {
      lostCount = lostCount + 1;
      if (lostCount === 5) {
        window.alert("Вы проиграли!");
        clear();
      }
      lost.textContent = lostCount;
    }
  };
}

function clear() {
  deadCount = 0;
  lostCount = 0;
  dead.textContent = deadCount;
  lost.textContent = lostCount;
}

function getHole(index) {
  return document.getElementById(`hole${index}`);
}
