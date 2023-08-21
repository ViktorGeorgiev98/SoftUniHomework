// function attachEvents() {
//     const url = 'http://localhost:3030/jsonstore/messenger';
//     // implement post logic
//     const sendButton = document.getElementById('submit');
//     sendButton.addEventListener('click', sendMessage);
//     async function sendMessage(ev) {
//         try {
//             ev.preventDefault();
//             const nameField = document.querySelector('input[name="author"]').value;
//             const contentField = document.querySelector('input[name="content"]').value;
//             let userData = {
//                 author: nameField,
//                 content: contentField
//             }
//             let settings = {
//                 method: 'POST',
//                 headers: {'Content-type': 'application/json'},
//                 body: JSON.stringify(userData)
//             }

//             const response = await fetch(url, settings);
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             console.log(nameField, contentField);
//             nameField.value = '';
//             contentField.value = '';
//             const data = await response.json();
//             console.log(data);

//         } catch (e){

//         }
//     }
//     // implement get logic
//     const refreshButton = document.getElementById('refresh');
//     const messagesTab = document.getElementById('messages');

//     refreshButton.addEventListener('click', refreshMessages);
//     async function refreshMessages(ev) {
//         ev.preventDefault();
//         try {
//             messagesTab.innerHTML = '';
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             const data = await response.json();
//             console.log(data);
//             let text = '';
//             Object.values(data).forEach((message) => {
//                 text += `${message.author}: ${message.content}\n`;
//             //    const liEl = document.createElement('li');
//             //    liEl.textContent = `${message.author}: ${message.content}`;
//             //    messagesTab.appendChild(liEl);
//                 console.log(text);
//             })
//             messagesTab.value = text;
//         } catch(Error) {
//             console.log(Error);
//         }
       
        
//     }


// }

// attachEvents();



// const url = 'http://localhost:3030/jsonstore/messenger';

// function attachEvents() {
//     document.getElementById('submit').addEventListener('click', onSubmit);
//     document.getElementById('refresh').addEventListener('click', onRefresh);
// }

// async function onSubmit(ev) {
//     ev.preventDefault();
//     const author = document.querySelector('input[name="author"]').value;
//     const content = document.querySelector('input[name="content"]').value;

//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({author, content})
//     });

//     if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message);
//     }

//     const data = await response.json();
//     console.log(data);
// }

// async function onRefresh(ev) {
//     ev.preventDefault();
//     const response = await fetch(url);

//     if (!response.ok) {
//         const error = await response.json();
//         throw new Error(error.message);
//     }

//     const data = await response.json();
//     const textResult = Object.values(data)
//         .map(({author, content}) => `${author}: ${content}`)
//         .join('\n');

//     const messages = document.getElementById('messages');
//     messages.value = textResult;
// }

// attachEvents();


function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/messenger';
    // variables and elements
    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const nameField = document.querySelector('input[name="author"]');
    const messageField = document.querySelector('input[name="content"]');
    const messagesTab = document.getElementById('messages');

    // main logic
    // implement post logic
    sendButton.addEventListener('click', postMessage);
    // implement refresh logic
    refreshButton.addEventListener('click', refreshMessage);
    // implement delete logic




    async function postMessage() {
        try {
            const author = nameField.value;
            const content = messageField.value;
            if (author === '' || content === '') {
                alert('You need to fill both author and content tabs');
                return;
            }
            const settings = {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({author, content})
            };
            const response = await fetch(url, settings);
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                console.log('You have made a successful post request, good job!');
            }
            const data = await response.json();
            console.log(`Post request data => ${data}`);
            nameField.value = '';
            messageField.value = '';


        } catch(e) {
            console.log(e);
        }
     }

     async function refreshMessage() {
        try {
            messagesTab.value = '';
            const response = await fetch(url);
            if (!response.ok) {
                alert('Could not get response from server, please try again. If you receive the same message, modify you data');
                throw new Error(response.statusText);
            }
            const data = await response.json();
            Object.values(data).forEach((entry) => {
                // const liElement = document.createElement('li');
                // liElement.id = entry._id;
                // liElement.textContent = `${entry.author}: ${entry.content}`;
                // messagesTab.appendChild(liElement);
                messagesTab.value += `${entry.author}: ${entry.content}\n`;
            })

        } catch(e) {
            console.log(e);
        }
     }
}

attachEvents();