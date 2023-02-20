const text = document.querySelector(`#text`);
const input = document.querySelector(`#font-size-control`);

const changeFontSize = function () {
  text.innerHTML = text.textContent;
  text.style.fontSize = input.value + "px";
};

input.addEventListener("input", changeFontSize);
