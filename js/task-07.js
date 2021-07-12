const inputSizeControl = document.querySelector('#font-size-control')
const span = document.querySelector('#text')
span.style.fontSize = "16px";
inputSizeControl.valueAsNumber = 16;
console.dir(inputSizeControl);
const onInput = (event) => {
    span.style.fontSize = event.target.value + 'px';
    console.dir(event);
    console.log(span.style.fontSize);
};
inputSizeControl.addEventListener('input', onInput)