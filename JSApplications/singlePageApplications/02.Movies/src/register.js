import { homePage } from "./home.js";
import { showView, updateNavBar } from "./utils.js";
const section = document.getElementById('form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onRegister);
export function registerPage() {
    console.log('register page is okay');
    // TODO
    // show/hide HTML content
    // display only movies section (request + show/hide)
    showView(section);

    // steps: 
    // add event listener
    // get form data
    // form data validation
    // request + save user data to sessionStorage
    // error handling
    // form.reset();
    // updateNavBar();
    // homePage();
}

async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');
    // TODO: register request
    await register(email, password, repeatPassword);
    form.reset();
    updateNavBar();
    homePage();
}

async function register(email, password, repeatPassword) {
    if (email === '') {
        alert('Email field is mandatory!');
        return;
    } else if (password === '') {
        alert('Password field is mandatory!');
        return;
    } else if (repeatPassword === '') {
        alert('Repeat password is mandatory!');
        return;
    }

    try {
        const settings = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        }
        const response = await fetch('http://localhost:3030/users/register', settings);
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        const registeredUser = await response.json();
        localStorage.setItem('user', JSON.stringify(registeredUser))

    } catch(err) {
        console.log(err.message);
        throw(err);
    }
}