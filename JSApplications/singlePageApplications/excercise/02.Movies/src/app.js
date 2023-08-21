// step 1. show/hide requested content (login, register, et.c)
// NAVIGATION - routes mapping
// - login(login action) => login page
// - register(register action) => register page
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
};
document.querySelector('nav').addEventListener('click', onNavigate);

function onNavigate(event) {
    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);
        const view = routes[url.pathname];
       
        view();
        // if login do...
        
        // if register do...
    }
}
