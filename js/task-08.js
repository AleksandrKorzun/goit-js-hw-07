const controls = document.querySelector("#controls")

const input = (event) => {
    console.dir(event);

}
controls.firstChild.addEventListener('input', input)