const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector("#ingredients");
let item = [];
ingredients.forEach(ingredient => {
    const li = document.createElement("li")
    li.textContent = ingredient;
    item.push(li);
    // console.dir(li);
    // console.log(li);
});
// console.log(item);


ul.append(...item)
