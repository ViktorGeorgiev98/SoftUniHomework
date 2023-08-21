console.log('TODO:// Implement Home functionality');


function app() {
    const accessToken = sessionStorage.getItem('accessToken');
    const loggedUser = sessionStorage.getItem('loggedUser');
    if (loggedUser) {
        document.querySelector('span').textContent = loggedUser;
    } else {
        document.querySelector('span').textContent = 'guest';
    }

    if (accessToken) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('logout').style.display = 'inline';
    } else {
        document.getElementById('login').style.display = 'inline';
        document.getElementById('register').style.display = 'inline';

        document.getElementById('logout').style.display = 'none';
    }
}

app();