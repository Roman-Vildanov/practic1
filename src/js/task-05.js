const input = document.querySelector('input');
const textInput = document.querySelector('#name-output')

const handleSubmit = (e) => {
    if (e.currentTarget.value === '') {
        textInput.innerHTML = 'Anonymous';
    } else{
        textInput.innerHTML = e.currentTarget.value;
    }
};

input.addEventListener('input', handleSubmit)