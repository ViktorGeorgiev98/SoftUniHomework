// Principles
// YAGNI => you aren't gonna need it
// KISS => keep it simple
export function showView(section) {
    // steps
    // 1. hide all
    // 2. show only home page section
    document.querySelectorAll('.view-section')
    .forEach(s => s.style.display = 'none');

    section.style.display = 'block';
}

export function updateNavBar() {
    // TODO steps
    // if logged in user
    // - update welcome msg
    // -hide login and register
    // - show logout
    // else 
    // - hide logout
    // update welcome msg
    // show login and register
    // show logout
    const user = JSON.parse(sessionStorage.getItem('user'));
    const msgWelcome = document.getElementById('welcome-msg');
    if (user) {
        // TODO
        console.log('We do not have user => show no logged user content')
        msgWelcome.textContent = `Welcome ${user.email}`;
        document.querySelectorAll('.user')
        .forEach(elem => elem.style.display = 'inline-block');
        document.querySelectorAll('.guest')
        .forEach(elem => elem.style.display = 'none');
        console.log('We have user => show hide logged in content')
    } else {
        // TODO
        console.log('We do not have user => show no logged user content')
        document.querySelectorAll('.user')
        .forEach(elem => elem.style.display = 'none');
        document.querySelectorAll('.guest')
        .forEach(elem => elem.style.display = 'inline-block');
        // msgWelcome.textContent = 'Welcome, email';

    }
}