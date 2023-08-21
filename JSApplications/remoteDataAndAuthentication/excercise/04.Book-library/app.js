// const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
// const authorEl = document.querySelector('input[name="author"]');
// const titleEl = document.querySelector('input[name="title"]');
// const form = document.querySelector('form')
// document.getElementById('loadBooks').addEventListener('click', loadBooks);
// form.addEventListener('submit', submitBook);
// window.addEventListener('load', loadBooks);

// async function loadBooks() {
//     try {
//         const response = await fetch(baseUrl);
//         const data = await response.json();
//         if (!response.ok) {
//             throw new Error(data.message);
//         }

//         document.querySelector("tbody")
//             .replaceChildren(...
//                 Object.entries(data)
//                     .map(createBook));
//     } catch (err) {
//         alert(err.message);
//     }
// }

// function createCommandsCell(id, title, author) {
//     const editBtn = document.createElement('button');
//     editBtn.textContent = 'Edit';
//     editBtn.dataset.id = id;
//     editBtn.dataset.title = title;
//     editBtn.dataset.author = author;
//     editBtn.addEventListener('click', onEdit);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.dataset.id = id;
//     deleteBtn.addEventListener('click', onDelete);

//     const cell = document.createElement('td');
//     cell.appendChild(editBtn);
//     cell.appendChild(deleteBtn);
//     return cell;
// }

// function createBook(data) {
//     const [id, {author, title}] = data;
//     const tr = document.createElement('tr');
//     tr.appendChild(createCell(title));
//     tr.appendChild(createCell(author));
//     tr.appendChild(createCommandsCell(id, title, author));
//     return tr;
// }

// function createCell(data) {
//     const cell = document.createElement('td');
//     cell.textContent = data;
//     return cell;
// }

// async function onEdit(ev) {
//     authorEl.value = ev.target.dataset.author;
//     titleEl.value = ev.target.dataset.title;
//     form.querySelector('h3').textContent = "Edit FORM";
//     form.querySelector('button').textContent = "Save";
//     form.dataset.id = ev.target.dataset.id;
//     form.dataset.edit = 'true';
// }

// async function onDelete(ev) {
//     ev.preventDefault();
//     try {
//         const response = await fetch(baseUrl + `/${ev.target.classT}`, {method: "DELETE"});
//         const data = await response.json();
//         if (!response.ok) {
//             throw new Error(data.message);
//         }

//         ev.target.parentElement.parentElement.remove();
//     } catch (err) {
//         alert(err.message);
//     }
// }

// async function submitBook(ev) {
//     ev.preventDefault();
//     const formData = new FormData(ev.target);
//     const {title, author} = Object.fromEntries(formData);

//     let url = baseUrl;
//     let method = "POST";

//     if (author === '' || title === '') return;

//     if (ev.target.dataset.edit) {
//         method = "PUT";
//         url += '/' + ev.target.dataset.id;
//     }
//     try {
//         const request = await fetch(url,
//             {
//                 method: method,
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({author, title})
//             });

//         const data = await request.json();
//         if (!request.ok) {
//             throw new Error(data.message);
//         }

//         authorEl.value = '';
//         titleEl.value = '';
//         form.querySelector('h3').textContent = "FORM";
//         form.querySelector('button').textContent = "Submit";
//         form.dataset.id = '';
//         form.dataset.edit = '';

//         await loadBooks();
//     } catch (err) {
//         alert(err);
//     }
// }


// document.addEventListener('DOMContentLoaded', async () => {
//     const url = 'http://localhost:3030/jsonstore/collections/books';
//     const settings = {
//         method: 'DELETE'
//     }
//     const response = await fetch(url, settings);
// })
// variables and elements
const loadBooksButton = document.getElementById('loadBooks');
const authorNameField = document.querySelector('input[name="author"]');
const bookTitleNameField = document.querySelector('input[name="title"]');
const submitButton = document.getElementById('submit');
const table = document.querySelector('tbody');
let id = '';
// get all books logic
loadBooksButton.addEventListener('click', getAllBooks);
async function getAllBooks() {
    const urlAllBooks = 'http://localhost:3030/jsonstore/collections/books';
    table.innerHTML = '';
    try {
        const responseAllBooks = await fetch(urlAllBooks);
        if(!responseAllBooks.ok) {
            throw new Error(response.statusText);
        }
        const dataAllBooks = await responseAllBooks.json();
        Object.values(dataAllBooks).forEach((book) => {
            const trEl = document.createElement('tr');
            const titleField = document.createElement('td');
            titleField.textContent = book.title;
            trEl.appendChild(titleField);
            const authorField = document.createElement('td');
            authorField.textContent = book.author;
            trEl.appendChild(authorField);
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', getBookForEdit);
            trEl.appendChild(editButton);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteBook);
            trEl.appendChild(deleteButton);
            trEl.id = book._id;
            trEl.classList.add('book');
            table.appendChild(trEl);
        })

    } catch(e) {
        console.log(e);
    }
}
// get one book logic
// create book logic
submitButton.addEventListener('click', createBook);
async function createBook(event) {
    event.preventDefault();
    const urlCreateBook = 'http://localhost:3030/jsonstore/collections/books';
    let title = bookTitleNameField.value;
    let author = authorNameField.value;
    if (title === '' || author === '') {
        alert('Author and title fields must not be empty!');
        return;
    }
    try {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({author, title})
        }
    
        const responseCreateBook = await fetch(urlCreateBook, settings);
        if(!responseCreateBook.ok) {
            throw new Error(response.statusText);
        }
        bookTitleNameField.value = '';
        authorNameField.value = '';
        getAllBooks();
    } catch(e) {
        console.log(e);
    }
}
// update book logic
async function getBookForEdit(event) {
    event.preventDefault();
    const element = event.target.parentNode;
    id = element.id;
    const formMessage = document.querySelector('h3');
    formMessage.textContent = 'Edit form';
    submitButton.style.display = 'none';
    const saveChangesButton = document.createElement('button');
    saveChangesButton.textContent = 'Save';
    saveChangesButton.id = 'saveChanges';
    saveChangesButton.addEventListener('click', updateBook);
    document.querySelector('form').appendChild(saveChangesButton);
    try {
        const urlForEditBook = `http://localhost:3030/jsonstore/collections/books/${id}`;
        const responseForGetBookToEdit = await fetch(urlForEditBook);
        if(!responseForGetBookToEdit.ok) {
            throw new Error(response.statusText);
        }
        const dataEditBook = await responseForGetBookToEdit.json();
        authorNameField.value = dataEditBook.author;
        bookTitleNameField.value = dataEditBook.title;
    } catch(e) {
        console.log(e);
    }
}
async function updateBook(event) {
    event.preventDefault();
    const urlUpdateBook = `http://localhost:3030/jsonstore/collections/books/${id}`;
    let author = authorNameField.value;
    let title = bookTitleNameField.value;
    let _id = id;
    const settings = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({author, title, _id})
    }
    const responseSubmitEdit = await fetch(urlUpdateBook, settings);

    if(!responseSubmitEdit.ok) {
        throw new Error(response.statusText);
    }
    authorNameField.value = '';
    bookTitleNameField.value = '';
    document.querySelector('h3').textContent = 'Form';
    document.getElementById('saveChanges').remove();
    submitButton.style.display = 'inline';
    getAllBooks();
}
// delete book logic
async function deleteBook(event) {
    event.preventDefault();
    const element = event.target.parentNode;
    id = element.id;
    const urlDeleteBook = `http://localhost:3030/jsonstore/collections/books/${id}`;
    const settings = {
        method: 'DELETE'
    }
    const responseDelete = await fetch(urlDeleteBook, settings);
    if(!responseDelete.ok) {
        throw new Error(response.statusText);
    }
    element.remove();
}

