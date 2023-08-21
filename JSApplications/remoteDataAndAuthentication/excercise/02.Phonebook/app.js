// // TODO:
// // load phonebook => use fetch (GET)
// // show phonebook => update html content
// // implement delete method => (DELETE)
// // create single entry => fetch (POST)
// const baseURL = "http://localhost:3030/jsonstore/phonebook";
// function attachEvents() {
//     // console.log('TODO...');
//     document.getElementById('btnLoad').addEventListener('click', loadPhoneBook);
//     document.getElementById('phonebook').addEventListener('click', deletePhone);
//     document.getElementById('btnCreate').addEventListener('click', createPhone);

// }

// attachEvents();

// async function loadPhoneBook() {
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     const phoneBookElem = document.getElementById('phonebook');
//     phoneBookElem.innerHTML = "";
//     Object.values(data).forEach(x => {
//         const liElem = document.createElement('li');
//         liElem.textContent = `${x.person}: ${x.phone}`;
//         const deleteBtnElem = document.createElement('button');
//         deleteBtnElem.setAttribute('id', x._id);
//         deleteBtnElem.textContent = 'Delete';
//         // deleteBtnElem.addEventListener('click', deletePhone);
//         liElem.appendChild(deleteBtnElem);
//         phoneBookElem.appendChild(liElem);
//     })
// }

// async function deletePhone(e) {
//     if (e.target.textContent !== 'Delete') {
//         return;
//     }
//     const currentPhoneId = e.target.id;
//     await fetch(`${baseURL}/${currentPhoneId}`, {
//         method: "DELETE",
//     });

//     loadPhoneBook();
    
// }

// async function createPhone() {
//     const person = document.getElementById('person').value.trim();
//     const phone = document.getElementById('phone').value.trim();

//     if (!person || !phone) {
//         alert('Person and phone fields are required');
//     }
//     const requestData = JSON.stringify({
//         person,
//         phone
//     })
//     await fetch(baseURL, {
//         method: "POST",
//         headers: {'Content-Type': 'application/json'},
//         body: requestData
//     });

//     document.getElementById("person").value = '';
//     document.getElementById('phone').value = '';
//     loadPhoneBook();
// }
import { deleteAllEntries } from "./deleteAll.js";
const urlForGetAndDelete = 'http://localhost:3030/jsonstore/phonebook';
function attachEvents() {

    // variables and elements
    const phoneBook = document.getElementById('phonebook');
    const loadPhonesButton = document.getElementById('btnLoad');
    const personNameField = document.getElementById('person');
    const personPhoneNumberField = document.getElementById('phone');
    const createEntryButton = document.getElementById('btnCreate');
    const editEntryButton = document.getElementById('makeChange');
    let idForEdit = '';
    // phoneBook.addEventListener('onLoad', deleteAllEntries);
    // document.addEventListener('DOMContentLoaded', deleteAllEntries);
    // load all phones logic
    loadPhonesButton.addEventListener('click', loadPhones);
    // create new entry logic
    createEntryButton.addEventListener('click', createEntry);
    // delete entry logic
    // edit entry logic
    editEntryButton.addEventListener('click', editPost);


    async function loadPhones() {
        try {
            phoneBook.innerHTML = '';
            const response = await fetch(urlForGetAndDelete);
            if(!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            Object.values(data).forEach((entry) => {
                const liElem = document.createElement('li');
                liElem.textContent = `${entry.person}: ${entry.phone}`;
                liElem.id = entry._id;
                liElem.classList.add('person-phone');
                const deleteButton = document.createElement('button');
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                deleteButton.textContent = 'Delete';
                // deleteButton.id = entry._id;
                liElem.appendChild(deleteButton);
                liElem.appendChild(editButton);
                phoneBook.appendChild(liElem);
                deleteButton.addEventListener('click', deleteEntry);
                editButton.addEventListener('click', editEntry);
            })

        } catch(e) {
            console.log(e);
        }
    }

    async function createEntry() {
        let person = personNameField.value;
        let phone = personPhoneNumberField.value;
        if (person === '' || phone === '') {
            alert('Person and phone fields are required');
            return;
        }
        try {
            let settings = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({person, phone})
            };
            const response = await fetch(urlForGetAndDelete, settings);
            if(!response.ok) {
                throw Error(response.statusText);
            }
            const data = await response.json();
            personNameField.value = '';
            personPhoneNumberField.value = '';
            
        } catch(e) {
            console.log(e);
        }
    }

    async function deleteEntry(e) {
        let element = e.target;
        let parent = element.parentNode;
        let url = urlForGetAndDelete + '/' + parent.id;
        console.log(url);
        try {
            const settings = {
                method: 'DELETE'
            }
            const response = await fetch(url, settings);
            if(!response.ok) {
                alert('Something wrong with the request, please try again or change data');
                throw Error(response.statusText);
            }
            // phoneBook.removeChild(element);
            parent.remove();
            // loadPhones();

        } catch(error) {
            console.log(error);
        }
    }

    async function editEntry(e) {
        let element = e.target.parentNode;
        let url2 = urlForGetAndDelete + '/' + element.id;
        const response = await fetch(url2);
        if(!response.ok) {
            alert('Something wrong with the request, please try again or change data');
            throw Error(response.statusText);
        }
        const data1 = await response.json();
        personNameField.value = data1.person;
        personPhoneNumberField.value = data1.phone;
        idForEdit = element.id;


    }

    async function editPost() {
        let url1 = urlForGetAndDelete + '/' + idForEdit;
        console.log(url1);
        let person = personNameField.value;
        let phone = personPhoneNumberField.value;
        let _id = idForEdit;
        if (person === '' || phone === '') {
            alert('Person and phone fields are required');
            return;
        }
        let settings = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({person, phone, _id})
        }

        const response = await fetch(url1, settings);
        if(!response.ok) {
            alert('Something wrong with the request, please try again or change data');
            throw Error(response.statusText);
        }
        personNameField.value = '';
        personPhoneNumberField.value = '';

        
    }
}

attachEvents();

