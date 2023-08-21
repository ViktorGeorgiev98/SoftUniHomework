import { detailsPage } from "./details.js";
import { showNavBar, showSection } from "./utils.js";
const section = document.getElementById('dashboard');
const catalogue = document.querySelector('.card-wrapper');
export function dashboardPage() {
    showNavBar();
    showSection(section);
    displayAlbums();
}

section.addEventListener('click', (event) => {
    if (event.target.classList.contains('details-btn')) {
        event.preventDefault();
        const selectedAlbumId = event.target.id;
        detailsPage(selectedAlbumId);
    }
})
async function displayAlbums() {
    const albums = await getAlbums();
    console.log('...', albums);
    if (albums.length <= 0) {
        section.querySelector('.noAlbumsMessage').style.display = 'block';
        catalogue.innerHTML = '';
    } else {
        section.querySelector('.noAlbumsMessage').style.display = 'none';
        catalogue.replaceChildren(...albums.map(createAlbumPreview));
    }
}
function createAlbumPreview(album) {
    const liElement = document.createElement('li');
    liElement.classList.add('card');
    liElement.innerHTML = `
    <img src="${album.imageUrl}" alt="travis" />
    <p>
      <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
    </p>
    <p>
      <strong>Album name: </strong><span class="album">${album.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
    <a class="details-btn" id="${album._id}" href="javascript:void(0)">Details</a>`;
    return liElement;
}
async function getAlbums() {
    try {
        const response = await fetch('http://localhost:3030/data/albums?sortBy=_createdOn%20desc');
        const albums = await response.json();
        return albums;
    } catch(e) {
        console.log(e.message);
        throw(e);
    }
}