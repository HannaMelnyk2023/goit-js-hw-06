const input = document.querySelector('#validation-input');
input.addEventListener('blur', onValidate);
console.log(Number(input.dataset.length));
function onValidate(evt) {
    if (evt.currentTarget.value.length != Number(input.dataset.length)) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
}
