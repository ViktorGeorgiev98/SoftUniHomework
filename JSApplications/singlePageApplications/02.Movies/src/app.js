// Navigation => routes mapping
// routes
// -login => login page
// -register => register page
// step 1.
// 1.1 show / hide content (login, register, etc.)
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { updateNavBar } from "./utils.js";
import { logout } from "./logout.js";
// nav configuration
const routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/logout': logout,
}

document.querySelector('nav').addEventListener('click', onNavigate);

function onNavigate(event) {
    //  first way
    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault();
        console.log('here');
        const url = new URL(event.target.href);
        const view = routes[url.pathname];
        view();

        // if login do..
        // if login page do ... => show hide content
        // if register do ...
        // registerPage() => show / hide content
        // second way
        // event.preventDefault();
        // if (event.target.text === "Login") {
        //     loginPage();
        // } else if (event.target.text === 'Register') {
        //     registerPage();
        // } else if (event.target.text === 'Movies') {
        //     homePage();
        // }
    }
}


homePage();
updateNavBar();


