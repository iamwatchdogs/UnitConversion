const inputValue = document.getElementById('from-value');
const outputValue = document.getElementById('to-value');

let from = document.querySelector('.from select');
let to = document.querySelector('.to select');

let fromOption, toOption;

from.addEventListener('change', () => {
    fromOption = from.options[from.selectedIndex].value;
    console.log('from-option: '+ fromOption);
});

to.addEventListener('change', () => {
    toOption = to.options[to.selectedIndex].value;
    console.log('to-option: '+toOption);
});

inputValue.addEventListener('input', () => { outputValue.value = inputValue.value});