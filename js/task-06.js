const input = document.querySelector("#validation-input");
console.dir(input.dataset.length);
let currentValue = "";
const onInput = (event) => {
    event.data ? (currentValue = currentValue + event.data) : currentValue = currentValue.slice(0, currentValue.length - 1);
    input.currentValue = currentValue;
    // console.dir(input.currentValue);
};
const onInputBlur = () => {
    (input.currentValue.length == input.dataset.length) ? input.classList = "valid" : input.classList = "invalid";
};
input.addEventListener('input', onInput);

input.addEventListener('blur', onInputBlur);
