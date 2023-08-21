// TODO: 
// 1/ Routing
// 2/ home page
// 3/ update view

import { homePage } from "./home.js";
import { showNavBar } from "./utils.js";
import { dashboardPage } from "./dashboard.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { logout } from "./logout.js";
import { addAlbumPage } from "./addAlbumPage.js";
// import { detailsPage } from "./details.js";

// elements
const nav = document.getElementById('wrapper');
nav.addEventListener('click', onNavigate);
// routes
const routes = {
    '/': homePage,
    '/dashboard': dashboardPage,
    '/addAlbum': addAlbumPage,
    '/logout': logout,
    '/login': loginPage,
    '/register': registerPage,
    // '/details': detailsPage,
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
