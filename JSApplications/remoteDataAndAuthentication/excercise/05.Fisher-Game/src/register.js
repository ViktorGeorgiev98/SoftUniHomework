console.log('TODO:// Implement Register functionality');

function register() {
    const buttonElem = document.querySelector('button');
    const formElem = document.querySelector('form');
    const notificationParagraph = document.getElementsByClassName('notification')[0];

    buttonElem.addEventListener('click', onRegister);


    async function onRegister(event) {
        event.preventDefault();
        	const formData = new FormData(formElem);
            const email = formData.get('email');
            const password = formData.get('password');
            const rePass = formData.get('rePass');

            if (!email) {
                notificationParagraph.textContent = 'Email is required';
            } else if (!password) {
                notificationParagraph.textContent = 'Password is required';
            } else if (password != rePass) {
                notificationParagraph.textContent = 'Password and Repeat must match';
            }

            if (email && password && rePass) {
                try {
                    const response = await fetch('http://localhost:3030/users/register', {
                        method: "POST",
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({email, password})
                    });

                    if(!response.ok) {
                        const err = new Error(response.statusText);
                        throw err;
                    }
                    const data = await response.json();
                    sessionStorage.setItem('accessToken', data.accessToken);
                    sessionStorage.setItem('loggedUser', data.email);
                    sessionStorage.setItem('id', data._id);

                    window.location = 'index.html';

                } catch(err) {
                    notificationParagraph.textContent = err.message;
                }
            }
    }
}

register();