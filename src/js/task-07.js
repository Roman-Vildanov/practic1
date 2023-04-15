const input = document.getElementById('font-size-control');
const sizeText = document.getElementById('text');

input.addEventListener('input', (e) => sizeText.style.fontSize = `${e.currentTarget.value}px`);
sizeText.style.fontSize = `${input.value}px`;