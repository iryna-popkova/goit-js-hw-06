function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type = "number"]');
const btnCreate = document.querySelector('#controls button[data-create]');
const btnDestroy = document.querySelector('#controls button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxesCallback);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxesCallback() {
  const amount = parseInt(input.value);
  createBoxes(amount);
}
  
function createBoxes(amount) {
  destroyBoxes()
  
  const step = 10;
  const firstSize = 30;
  const divElArray = [];
  
for (let index = 0; index < amount; index += 1) {
  const size = step * (index + 1) + firstSize;
  const divEl = document.createElement("div");
  divEl.style.backgroundColor = getRandomHexColor();
  divEl.style.width = size + "px";
  divEl.style.height = size + "px";
  divElArray.push(divEl);
}
  boxesEl.append(...divElArray);
 }
  
function destroyBoxes() {
  boxesEl.innerHTML = "";
}

