const rangeInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

//textOutput.setAttribute("style", `font-size:${rangeInput.value}px`);
textOutput.style.fontSize = `${rangeInput.value}px`;

rangeInput.addEventListener("input", (event) => {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
});
