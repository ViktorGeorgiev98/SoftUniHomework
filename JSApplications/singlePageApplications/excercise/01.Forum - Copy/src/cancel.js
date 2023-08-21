const cancelButton = document.querySelector('#cancel');
const titleField = document.getElementById('topicName');
const usernameField = document.getElementById('username');
const postTextField = document.getElementById('postText');

// cancelButton.addEventListener('click', cancelPost);

export function cancelButton(event) {
    event.preventDefault();
    titleField.value = '';
    usernameField.value = '';
    postTextField.value = '';
}