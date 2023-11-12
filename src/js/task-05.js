const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
const defaultText = "Anonymous";

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    textOutput.textContent = defaultText;
  }
});
