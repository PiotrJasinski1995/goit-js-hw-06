let counterValue = 0;

const counterSpan = document.querySelector("#value");
const buttonCountUp = document.querySelector('button[data-action="increment"]');
const buttonCountDown = document.querySelector(
  'button[data-action="decrement"]'
);

const countUp = (_event) => {
  counterValue++;
  counterSpan.textContent = counterValue;
};

const countDown = (_event) => {
  counterValue--;
  counterSpan.textContent = counterValue;
};

buttonCountUp.addEventListener("click", countUp);
buttonCountDown.addEventListener("click", countDown);
