const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');
let value = 0;

decrement.addEventListener('click', minusClick);
increment.addEventListener('click', plusClick);


function minusClick(evt) {
    value -= 1;
    counterValue.textContent = value;
};
function plusClick(evt) {
    value += 1;
    counterValue.textContent = value;
};