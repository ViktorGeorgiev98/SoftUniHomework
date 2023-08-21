import { dashboardPage } from "./dashboardPage.js";
import { showNavBar, showSection } from "./utils.js";
const section = document.getElementById('register');
export function registerPage() {
    showNavBar();
    showSection(section);
}