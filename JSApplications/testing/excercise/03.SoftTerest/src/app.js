const homePage = document.getElementById('homePage');
const registerPage = document.getElementById('registerPage');
const loginPage = document.getElementById('loginPage');
const cataloguePage = document.getElementById('dashboard-holder');
const detailsPage = document.getElementById('detailsPage');
const createPage = document.getElementById('createPage');

document.getElementById('views').remove();
document.getElementById('root').replaceChildren(homePage);