const input = document.querySelector("#name-input");
let text = document.querySelector("#name-output");
let currentValue = "";
const onInput = (event) => {
    event.data ? (currentValue = currentValue + event.data) : currentValue = currentValue.slice(0, currentValue.length - 1);
    if (currentValue.length > 0) { 
        text.textContent = currentValue;
    } else text.textContent = 'незнакомец';
};
input.addEventListener('input', onInput);