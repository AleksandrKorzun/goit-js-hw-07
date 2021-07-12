const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulElement = document.querySelector("#gallery");
ulElement.style.display = "grid";
ulElement.style.gridTemplateColumns = "1fr 1fr 1fr";
ulElement.style.listStyle = "none";
console.dir(ulElement);
const liElement = images.reduce((acc, image) => {
    return acc += `<li><img src="${image.url}" alt="${image.alt}" width="200px"></li>`;
}, "");

ulElement.insertAdjacentHTML('afterbegin', liElement);
