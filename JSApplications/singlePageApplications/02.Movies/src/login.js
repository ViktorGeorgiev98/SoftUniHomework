import { homePage } from "./home.js";
import { showView, updateNavBar } from "./utils.js";
const section = document.getElementById('form-login');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function loginPage() {
    console.log('login page is okay');
    // TODO
    // show/hide HTML content
    // display only movies section (request + show/hide)
    showView(section)
}


async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    // do login request
    await login(email, password);
    //  reset form => all input fields should be empty
    // update navigation section
    // update main section
    form.reset();
    updateNavBar();
    homePage();
}

async function login(email, password) {
    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        const user = await res.json();
        // console.log(user);
        sessionStorage.setItem('user', JSON.stringify(user));
    } catch(err) {
        console.log(err);
        throw(err);
    }
}
