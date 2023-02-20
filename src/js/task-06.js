const input = document.querySelector(`#validation-input`);
const textInputConventer = Number(input.getAttribute(`data-length`));

const blurInput = () => {
  if (input.value.length === textInputConventer) {
    input.classList.add(`valid`);
    input.classList.remove(`invalid`);
  } else {
    input.classList.add(`invalid`);
    input.classList.remove(`valid`);
  }
};

input.addEventListener("blur", blurInput);
