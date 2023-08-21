import { dashboardPage } from "./dashboard.js";
import { showNavBar, showSection } from "./utils.js";
const section = document.getElementById('register');
export function registerPage() {
    showNavBar();
    showSection(section);
}
const form = section.querySelector('form');
form.addEventListener('submit', onRegister);
async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('re-password');
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
    if (password !== repeatPassword) {
        alert('Password and repeat password should match');
        return;
    }
    await register(email, password);

    form.reset();
    showNavBar();
    dashboardPage();

}

async function register(email, password) {
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
        alert(err.message);
        throw(err);
    }
}