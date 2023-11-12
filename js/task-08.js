const loginForm = document.querySelector("form.login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formObject = {};

  const { email, password } = form;

  // formObject.email = email.value;
  // formObject.password = password.value;

  formObject.email = form.elements.email.value;
  formObject.password = form.elements.password.value;

  console.log(formObject);

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }

  form.reset();
});
