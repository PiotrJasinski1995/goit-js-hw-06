const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elementList = [];
const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient, index) => {
  const element = document.createElement("li");
  element.className = "item";
  element.textContent = ingredient;
  elementList[index] = element;
});

ingredientsList.append(...elementList);
