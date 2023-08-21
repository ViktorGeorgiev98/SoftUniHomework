import { render } from '../../../../node_modules/lit-html/lit-html.js';
import { AuthService } from './services/AuthService.js';
import { SessionService } from './services/SessionService.js';
import { BaseCrudApiService } from './services/BaseCrudApiService.js';
import { NavComponent } from './components/nav/nav.js'
import { navTemplate } from './components/nav/navTemplate.js';
import { showView } from './components/nav/nav.js';
import page from '../../../../node_modules/page/page.mjs';
import { loginTemplate } from './components/login/loginTemplate.js';
import { homeTemplate } from './components/home/homeTemplate.js';
// import { loginComponent } from './components/login/login.js';
const main = document.querySelector('#wrapper main');
const nav = document.querySelector('#nav');

// router
let router = {
    navigate: page.show,
    redirect: page.redirect
}

// base url
const baseUrl = 'http://localhost:3030';

//  render handlers
let renderBody = (template) => render(template, main);
let renderNav = (template) => render(template, nav);


// service
let sessionService = new SessionService();
let authService = new AuthService(baseUrl, sessionService);
let shoesService = new BaseCrudApiService(baseUrl, '/data/shoes', sessionService);

// components
let navComponent = new NavComponent(authService, renderNav, navTemplate, router);
let homeComponent = new HomeComponent(renderBody, homeTemplate);
let loginComponent = new loginComponent(authService, renderBody, loginTemplate)
// Routing
page('/index.html', '/');
page(navComponent.showView);
page('/', homeComponent.showView);
page('/login', loginComponent.showView);
page.start();


