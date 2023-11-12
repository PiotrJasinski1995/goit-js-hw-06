const categoriesList = document.querySelectorAll("#categories > li.item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const heading = category.querySelector("h2");
  const elementsList = category.querySelectorAll("li");

  console.log(`\nCategory: ${heading.textContent}`);
  console.log(`Elements: ${elementsList.length}`);
});
