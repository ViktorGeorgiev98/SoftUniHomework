import { showNavBar, showSection } from "./utils.js";
import { dashboardPage } from "./dashboard.js";
const section = document.getElementById('create');
const form = section.querySelector('form');

form.addEventListener('submit', onCreateAlbum);
export function addAlbumPage() {
    showNavBar();
    showSection(section);
}

async function onCreateAlbum(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const singer = formData.get('singer')
    const album = formData.get('album');
    const imageUrl = formData.get('imageUrl');
    const release = formData.get('release');
    const label = formData.get('label');
    const sales = formData.get('sales');

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
        return alert('Please enter all fields');
    }

    if (singer && album && imageUrl && release && label && sales) {
        try {
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (!user) {
                throw new Error("No user permission!!")
            };
            const response = await fetch('http://localhost:3030/data/albums', {
                method: 'POST',
                headers: {'Content-Type': 'applciation/json',
                 'X-Authorization': user.accessToken},
                 body: JSON.stringify({singer, album, imageUrl, release, label, sales})
            })
            if (!response.ok) {
                throw new Error(response.statusText);
            }
        } catch(e) {
            alert(e.message);
            throw(e);
        }
        form.reset();
        dashboardPage();
    }
}