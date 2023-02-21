function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const findSpan = document.querySelector(`span`);
findSpan.innerHTML += getRandomHexColor();

const findBody = document.querySelector(`body`);
const findButton = document.querySelector(`button`);

const changeColor = function () {
  findBody.style.backgroundColor = getRandomHexColor();
  findSpan.textContent = getRandomHexColor();
};

findButton.addEventListener("click", changeColor);
