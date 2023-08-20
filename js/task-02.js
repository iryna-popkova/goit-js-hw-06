const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredients = document.querySelector("ingredients");
const li = document.createElement('li');
const liMarkUp = listOfIngredients.map((item) => {
  li.textContent = item;
  li.classList = 'item';
  return li
}
)

