import { dashboardPage } from "./dashboardPage.js";
import { homePage } from "./homePage.js";
import { showNavBar } from "./utils.js";
import { addFact } from "./addFact.js";
import { loginPage } from "./loginPage.js";
import { logout } from "./logout.js";
import { registerPage } from "./registerPage.js";	



const nav = document.getElementById('wrapper');
nav.addEventListener('click', onNavigate);

const routes = {
    '/': homePage,
    '/addFact': addFact,
    '/logout': logout,
    '/login': loginPage,
    '/register': registerPage,
    '/dashboard': dashboardPage
}

function onNavigate(event) {
    if (event.target.tagName === 'A' && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);
        const view = routes[url.pathname];
        if (typeof view === 'function') {
            view();
        }
    }
}
homePage();
showNavBar();