const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingred = document.querySelector(`#ingredients`);
const createList = (ingredients) => {
  ingredients.forEach(ingredient => {
    const thing = document.createElement(`li`);
    thing.class = 'item';
    thing.textContent = ingredient;
    ingred.append(thing);
  });
}
createList(ingredients);
