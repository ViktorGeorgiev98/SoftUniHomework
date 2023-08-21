import { showNavBar, showSection } from "./utils.js";
import { dashboardPage } from "./dashboardPage.js";
const section = document.getElementById('create');
export function addFact () {
    showNavBar();
    showSection(section);
}