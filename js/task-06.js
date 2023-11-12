const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (
    event.currentTarget.value.length ===
    parseInt(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.className = "valid";
    return;
  }

  event.currentTarget.className = "invalid";
});
