const plusButton = document.querySelector(`[data-action="increment"]`);
const minusButton = document.querySelector(`[data-action="decrement"]`);
const counter = document.querySelector(`#value`);
let counterValue = 0;

const handleClickPlus = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
const handleClickMinus = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

plusButton.addEventListener("click", handleClickPlus);
minusButton.addEventListener("click", handleClickMinus);
