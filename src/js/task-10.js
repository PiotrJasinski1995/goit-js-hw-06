function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesDiv = document.querySelector("div#boxes");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const textInput = document.querySelector("#controls > input");

function createBoxes(_event, amount) {
  let height = 30;
  let width = 30;
  let markup = "";

  boxesDiv.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    markup += `<div style="height:${height}px; width:${width}px; background-color:${getRandomHexColor()}"></div>`;
    height += 10;
    width += 10;
  }

  boxesDiv.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

const createClick = (event) => createBoxes(event, Math.floor(textInput.value));

buttonCreate.addEventListener("click", createClick);
buttonDestroy.addEventListener("click", destroyBoxes);
