const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = ingredients.map(ingr => {
  const ingredient = document.createElement("li");
  ingredient.textContent = ingr;
  ingredient.className = 'item';
  return ingredient;
}
)
const ul = document.querySelector('#ingredients');
ul.append(...listIngredients);



