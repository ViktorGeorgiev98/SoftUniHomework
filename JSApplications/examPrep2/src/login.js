import { showNavBar, showSection } from "./utils.js";
import { dashboardPage } from './dashboard.js'
const section = document.getElementById('login');
export function loginPage() {
    showNavBar();
    showSection(section);
}
const form = section.querySelector('form');
form.addEventListener('submit', loginUser);
async function loginUser(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        // window.alert('Please enter username and password');
        alert('Please enter username and password');
        return;
    }
    await login(email, password);
    form.reset();
    dashboardPage();
    showNavBar();
}

async function login(email, password) {
    try {
        const settings = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        }
        const url = 'http://localhost:3030/users/login';
        const response = await fetch(url, settings);
        if (!response.ok) {
            alert(response.statusText);
            throw new Error(response.statusText)
        }
        const user = await response.json();
        sessionStorage.setItem('user', JSON.stringify(user));
    } catch (e){
        console.log(e.message);
        alert(e.message);
        // window.alert();
        throw e;
    }
}