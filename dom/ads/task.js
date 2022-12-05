const rotatorСases = document.getElementsByClassName("rotator__case");

let speed = rotatorСases.item(0).dataset.speed;
rotatorСases
  .item(0)
  .setAttribute("style", "color: " + rotatorСases.item(0).dataset.color);

function tiomeOut(speed) {
  setTimeout(function () {
    for (let i = 0; i < rotatorСases.length; i++) {
      if (rotatorСases.item(i).classList.contains("rotator__case_active")) {
        rotatorСases.item(i).classList.remove("rotator__case_active");

        if (i + 1 < rotatorСases.length) {
          rotatorСases.item(i + 1).classList.add("rotator__case_active");
          rotatorСases
            .item(i + 1)
            .setAttribute(
              "style",
              "color: " + rotatorСases.item(i + 1).dataset.color
            );
          speed = rotatorСases.item(i + 1).dataset.speed;
        } else {
          rotatorСases.item(0).classList.add("rotator__case_active");
          rotatorСases
            .item(0)
            .setAttribute(
              "style",
              "color: " + rotatorСases.item(0).dataset.color
            );
          speed = rotatorСases.item(0).dataset.speed;
        }
        break;
      }
    }
    tiomeOut(speed);
  }, speed);
}

tiomeOut(speed);
