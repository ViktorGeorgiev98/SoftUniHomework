import { homePage } from "./home.js";
import { showView } from "./utils.js";

const section = document.getElementById('add-movie');
const form = section.querySelector('form');
form.addEventListener('submit', createNewMovieEntry);

export function addMovie(event) {
    console.log('...add movie page...');
    showView(section);
}

async function createNewMovieEntry(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const description = formData.get('description');
    const img = formData.get('img');
    if (title === '') {
        alert('Title field is mandatory!');
        return;
    } else if (description === '') {
        alert('Description field is mandatory!');
        return;
    } else if (img === '') {
        alert('Image url is mandatory!');
        return;
    } 
    // TODO: make request to create movie
    await submitMovie(title, description, imageUrl);
    console.log('... submitted movie...')
    form.reset();
    homePage();
}


async function submitMovie(title, description, img) {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
        if(!user){
            throw new Error("No user permission!!")
         }
        const settings = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify({title, description, img})
        }
        //  /data/movies
        const response = await fetch('http://localhost:3030/data/movies', settings);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
    } catch(err) {
        console.log(err);
        throw err;
    }
}