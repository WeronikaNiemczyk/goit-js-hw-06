const findNumbersOfCategory = document.querySelectorAll(`li.item`);
console.log("Number of categories: ", findNumbersOfCategory.length);

const category = document.querySelectorAll(`h2`);

category.forEach((element) => {
  console.log("Category: ", element.textContent);
  const number = element.nextElementSibling.children;
  console.log("Elements: ", number.length);
});
