const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        alert("Please fill in all the fields!");
    } else {
        console.log({
            email: email,
            password: password,
        });
    }

    form.reset();
}
