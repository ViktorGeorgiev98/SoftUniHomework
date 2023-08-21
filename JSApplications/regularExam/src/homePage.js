import { showNavBar, showSection } from "./utils.js";

const section = document.getElementById('home');
export function homePage() {
    showNavBar();
    showSection(section);
    // localStorage.removeItem('user');
}
