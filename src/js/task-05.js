const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

const showText = (event) => {
  if (textInput.value !== "") {
    textOutput.textContent = event.currentTarget.value;
  } else {
    textOutput.textContent = "Anonymous";
  }
};

textInput.addEventListener("input", showText);
