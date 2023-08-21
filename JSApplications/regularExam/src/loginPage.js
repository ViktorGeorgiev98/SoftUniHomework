import { showNavBar, showSection } from "./utils.js";
import { dashboardPage } from './dashboardPage.js'
const section = document.getElementById('login');
export function loginPage() {
    showNavBar();
    showSection(section);
}