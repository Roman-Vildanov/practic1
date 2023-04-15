const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleChangeColor = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  nameColor.textContent = color;
};

btn.addEventListener('click', handleChangeColor)