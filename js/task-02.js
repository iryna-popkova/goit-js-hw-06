const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector("#ingredients");
const ingredientArray = [];

ingredients.forEach(function (ingredient)
{
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item"); 
  ingredientArray.push(ingredientEl); 
})

listOfIngredientsEl.append(...ingredientArray);
