let span = document.querySelector("#value");
const btnInc = document.querySelector('button[data-action="increment"]')
const btnDec = document.querySelector('button[data-action="decrement"]')
let counterValue = 0;

const increment = (event) => {
    counterValue = counterValue + 1;
    span.textContent = `${counterValue}`;
    
};
const decrement = (event) => {
    counterValue = counterValue - 1;
    span.textContent = `${counterValue}`;
    
};
btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);