const span = document.querySelector('span');
const btnUp = document.querySelector("[data-action='increment']")
const btnDown = document.querySelector("[data-action='decrement']")

let counterValue = 0;
const increment = () => {
    counterValue += 1;
    span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    span.textContent = counterValue;
};

btnUp.addEventListener('click', increment);
btnDown.addEventListener('click', decrement);
