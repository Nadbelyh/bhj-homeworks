const tooltipAnchors = Array.from(
  document.getElementsByClassName("has-tooltip")
);

tooltipAnchors.forEach((item) => {
  let divTooltip = document.createElement("div");
  divTooltip.className = "tooltip";
  divTooltip.setAttribute("data-position", getRandomDataPosition());

  divTooltip.innerText = item.title;
  item.after(divTooltip);
  item.addEventListener("click", getOutTooltip);
});

function getOutTooltip(event) {
  let currentToolTip = this.nextElementSibling;
  if (currentToolTip.classList.contains("tooltip_active")) {
    onlyOneTooltipActive();
  } else {
    onlyOneTooltipActive();
    currentToolTip.classList.add("tooltip_active");
    setCoordinatesPopup(this, currentToolTip);
  }
  event.preventDefault();
}

const tooltips = Array.from(document.getElementsByClassName("tooltip"));

function onlyOneTooltipActive() {
  tooltips.forEach((item) => {
    item.classList.remove("tooltip_active");
  });
}

function getRandomDataPosition() {
  const positions = ["top", "left", "right", "bottom"],
    index = Math.floor(Math.random() * positions.length);

  return positions[index];
}

function setCoordinatesPopup(tooltipAnchor, tooltip) {
  const coordinatesTooltipAnchor = tooltipAnchor.getBoundingClientRect();
  const coordinatesTooltip = tooltip.getBoundingClientRect();
  const attr = tooltip.getAttribute("data-position");

  switch (attr) {
    case "bottom":
      tooltip.style = `left: ${coordinatesTooltipAnchor.left}px; top: ${coordinatesTooltipAnchor.bottom}px`;
      break;

    case "top":
      tooltip.style = `left: ${coordinatesTooltipAnchor.left}px; top: ${
        coordinatesTooltipAnchor.top - coordinatesTooltip.height
      }px`;
      break;

    case "left":
      tooltip.style = `left: ${
        coordinatesTooltipAnchor.left - coordinatesTooltip.width
      }px; top: ${
        coordinatesTooltipAnchor.top -
        (coordinatesTooltip.height / 2 - coordinatesTooltipAnchor.height / 2)
      }px`;
      break;

    case "right":
      tooltip.style = `left: ${coordinatesTooltipAnchor.right}px; top: ${
        coordinatesTooltipAnchor.top -
        (coordinatesTooltip.height / 2 - coordinatesTooltipAnchor.height / 2)
      }px`;

      break;
  }
}
