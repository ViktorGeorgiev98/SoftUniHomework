import { detailsPage } from "./details.js";
import { showNavBar, showSection } from "./utils.js";
const section = document.getElementById('edit');
const form = section.querySelector('form');
export async function editAlbumPage(id) {
    console.log('... album page')
    console.log('....kvo stava id is', id)
    // id = 'b9822000-fb82-45cb-95c2-787f2697a2ad';
    showSection(section);
    showNavBar();
    form.id = id;
    const albumData = await getAlbumData(id);
    console.log('new album data', albumData)
    const singer = section.querySelector('#album-singer')
    const album = section.querySelector('#album-album')
    const imageUrl = section.querySelector('#album-img')
    const release = section.querySelector('#album-release')
    const label = section.querySelector('#album-label')
    const sales = section.querySelector('#album-sales')
    singer.value = albumData.singer;
    album.value = albumData.album
    imageUrl.value = albumData.imageUrl
    release.value = albumData.release
    label.value = albumData.label
    sales.value = albumData.sales
    form.addEventListener('submit', onEdit);
}

async function getAlbumData(id) {
    try {
        const response = await fetch(`http://localhost:3030/data/albums/${id}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const albumData = await response.json();
        console.log('....', albumData);
        return albumData;
    } catch(e) {
        throw(e);
    }
}

async function onEdit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const singer = formData.get('singer')
    const album = formData.get('album');
    const imageUrl = formData.get('imageUrl');
    const release = formData.get('release');
    const label = formData.get('label');
    const sales = formData.get('sales');
    const albumId = event.target.id;

    if (singer && album && imageUrl && release && label && sales) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        try {
            const response = await fetch(`http://localhost:3030/data/albums/${albumId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json',
                'X-Authorization': user.accessToken},
                body: JSON.stringify({singer, album, imageUrl, release, label, sales, albumId})
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch(err) {
            alert(err.message);
        }
    } else {
        return alert('All fields are required');
    }
    detailsPage(albumId);
}