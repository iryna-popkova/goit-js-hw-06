const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector("#ingredients");
ingredients.forEach(function (ingredient)
{
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item"); 
  listOfIngredientsEl.append(ingredientEl);
})
console.log(listOfIngredientsEl);

document.body.appendChild(listOfIngredientsEl);
