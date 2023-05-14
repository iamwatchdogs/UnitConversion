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

// ----------------------------------------
//           Unit Toggler Logic 
// ----------------------------------------

const selector = document.querySelectorAll('.selector');
const displayBoxes = document.querySelectorAll('.display-box');

selector.forEach(selector => {
    selector.addEventListener('click', () => {
        displayBoxes.forEach(target => {
            target.style.display = 'none';
        });
        const displayBoxId = selector.getAttribute('data-target');
        document.getElementById(displayBoxId).style.display = 'grid';
    } );
});