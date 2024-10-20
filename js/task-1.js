'use strict';

const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Кількість категорій: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;

  const elementsCount = item.querySelectorAll('ul > li').length;

  console.log(
    `Категорія: ${categoryTitle}, Кількість елементів: ${elementsCount}`
  );
});
