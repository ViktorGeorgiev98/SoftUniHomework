import { showView } from "./utils.js";
import { detailsPage } from "./detailsPage.js";
import { addMovie } from "./addMovie.js";
const section = document.getElementById('home-page');
const catalogue = document.querySelector('#movie .card-deck.d-flex.justify-content-center');
const addMovieButton = document.getElementById('add-movie-button');
addMovieButton.addEventListener('click', (event) => {
    event.preventDefault();
    addMovie();
})
catalogue.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.preventDefault();
        console.log('selected movie id: ', event.target.dataset.id);
        // TODO: 
        const selectedMovieId = event.target.dataset.id;
        detailsPage(selectedMovieId);

    }
});
export function homePage() {
    console.log('home is okay');
    // TODO
    // show/hide HTML content
    // display only movies section (request + show/hide)
    // TODO steps
    // hide all sections
    // show only home page section
    showView(section);

    // display movies
    // => get movies

    displayMovies();
}

async function displayMovies() {
    // TODO: display login indicator
    // catalogue.replaceChildren()
    const movies = await getMovies();

    // TODO: remove loading indicator
    catalogue.replaceChildren(...movies.map(createMoviePreview));

}
function createMoviePreview(movie) {
    const liElem = document.createElement('li');
    liElem.className = 'card mb-4';
    liElem.innerHTML = `
    <img class='card-img-top' src='${movie.img}' alt='Card image cap'> width='400'>
    <div class='card-body'>
        <h4 class='card-title'>${movie.title}</h4>
        <a href='/details/${movie._id}'>
            <button data-id='${movie._id}' type='button' class='btn btn-info'>Details</button>
        </a>
    </div>
    <div class='card-footer'>
    </div>`;

    return liElem;

}

async function getMovies() {
    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();
    return movies;
}
