const divs = document.querySelectorAll('.from, .to');
let fromOption, toOption;

let from = divs[0].querySelector('select');
let to = divs[1].querySelector('select');

from.addEventListener('change', () => {
    fromOption = from.options[from.selectedIndex].value;
    console.log('from-option: '+ fromOption);
});

to.addEventListener('change', () => {
    toOption = to.options[to.selectedIndex].value;
    console.log('to-option: '+toOption);
});