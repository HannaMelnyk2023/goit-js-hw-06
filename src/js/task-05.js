const input = document.querySelector('#name-input');
const titleName = document.querySelector('#name-output');

input.addEventListener('change', onCalled);

function onCalled(evt) {
    if (evt.currentTarget.value) {
        titleName.textContent = evt.currentTarget.value;
    } else {
        titleName.textContent = 'Anonymous';
    }

    console.log(evt.currentTarget.value);
}