
let counterValue = 0;
const valueRel = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const clickOnDecrementBtn = (event) => {
  counterValue -= 1;
  valueRel.textContent = counterValue;
};

const clickOnIncrementBtn = (event) => {
  counterValue += 1;
  valueRel.textContent = counterValue;
};

decrementBtn.addEventListener('click', clickOnDecrementBtn);
incrementBtn.addEventListener('click', clickOnIncrementBtn);


