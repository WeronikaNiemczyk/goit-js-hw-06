const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

const showText = (event) => {
    textOutput.textContent = event.currentTarget.value;
}

textInput.addEventListener("input", showText);