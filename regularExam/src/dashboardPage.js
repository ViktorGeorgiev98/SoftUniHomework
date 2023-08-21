import { showNavBar, showSection } from "./utils.js";
const section = document.getElementById('dashboard');

export function dashboardPage() {
    showNavBar();
    showSection(section);
}