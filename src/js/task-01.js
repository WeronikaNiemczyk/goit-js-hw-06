const findNumbersOfCategory = document.querySelectorAll(`li.item`);
console.log("Number of categories: ",findNumbersOfCategory.length);

const category = document.querySelectorAll(`h2`);
const categoryArray = [...category];
const firstCategoryName = categoryArray[0].textContent;
console.log("Category: ",firstCategoryName);


const firstElement = findNumbersOfCategory[0].querySelectorAll(`li`);
console.log("Elements: ",[...firstElement].length);

const secondCategoryName = categoryArray[1].textContent;
console.log("Category: ",secondCategoryName);

const secondElement = findNumbersOfCategory[1].querySelectorAll(`li`);
console.log("Elements: ",[...secondElement].length);

const thirdCategoryName = categoryArray[2].textContent;
console.log("Category: ",thirdCategoryName);

const thirdElement = findNumbersOfCategory[2].querySelectorAll(`li`);
console.log("Elements: ",[...thirdElement].length);