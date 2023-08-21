export function showSection(section) {
    document.querySelectorAll('.page').forEach(element => {
        element.style.display = 'none';
    });
    section.style.display = 'block';
}

export function showNavBar() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}