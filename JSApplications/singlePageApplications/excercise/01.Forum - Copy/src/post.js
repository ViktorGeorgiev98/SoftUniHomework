const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const titleField = document.getElementById('topicName');
const usernameField = document.getElementById('username');
const postTextField = document.getElementById('postText');
const postButton = document.querySelector('#public');

// postButton.addEventListener('click', postTopic);

export async function postTopic(event) {
    event.preventDefault();
    if (usernameField.value === '' 
    || postTextField.value === '' 
    || titleField.value === '') {
        alert('Username, post and title field are mandatory!');
        return;
    }
    const body = JSON.stringify({
        title: titleField.value,
        username: usernameField.value,
        text: postTextField.value
    });
    try {
        const settings = {
            method: 'POST',
            headers: {'Application-type' : 'application/json'},
            body
        }
        const response = await fetch(url, settings)
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(`Your data for the current post request: ${data}`);

    } catch(error) {
        console.log(error);
        throw error;
    }
}

