import { showNavBar, showSection } from "./utils.js";
import { editAlbumPage } from "./edit.js";
import { dashboardPage } from "./dashboard.js";
// import { editAlbumPage } from "./edit.js";
const section = document.getElementById('details');
export async function detailsPage(id) {
    showNavBar();
    showSection(section);
    const album = await getAlbum(id);
    section.replaceChildren(createAlbumPreview(album));
}

section.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('event target id....', event.target.id);
    if (event.target.tagName === 'A' && event.target.textContent === 'Edit') {
      event.preventDefault();
      const currentAlbumId = event.target.dataset.id;
      console.log('...current album id', currentAlbumId)
      editAlbumPage(currentAlbumId);
    }
});

section.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.id === 'delete-btn' && event.target.textContent === 'Delete') {
      try {
        const result = window.confirm("Are you sure you want to proceed?");
        if (result) {
          // The user clicked "OK" in the confirmation dialog
          // alert("Action confirmed!");
        } else {
          // The user clicked "Cancel" in the confirmation dialog
          return;
        }
        let user = JSON.parse(sessionStorage.getItem('user'));
        let currentAlbumId = event.target.dataset.id;
        console.log('...curent album id', currentAlbumId);
        const response = await fetch(`http://localhost:3030/data/albums/${currentAlbumId}`, {
          method: 'DELETE',
          headers: {'X-Authorization': user.accessToken},
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
      } catch(e) {
        throw(e);
      }
      dashboardPage();

    }
})

async function getAlbum(id) {
    const res = await fetch(`http://localhost:3030/data/albums/${id}`);
    const album = await res.json();
    return album;
}

function createAlbumPreview(album) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    // console.log(user._id);
    let divEl = '';
    if (user) {
      if (user._id === album._ownerId) {
      divEl = document.createElement('div');
      divEl.id = 'details-wrapper';
      divEl.innerHTML = `
      <p id="details-title">Album Details</p>
     <div id="img-wrapper">
        <img src="${album.imageUrl}" alt="example1" />
     </div>
     <div id="info-wrapper">
       <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
       <p>
         <strong>Album name:</strong><span id="details-album">${album.album}</span>
       </p>
       <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
       <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
     </div>
      <div id="likes">Likes: <span id="likes-count">0</span></div>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        <a href="javascript:void(0)" data-id="${album._id}" id="edit-btn">Edit</a>
        <a href="javascript:void(0)" data-id="${album._id}" id="delete-btn">Delete</a>
      </div>
   </div>`;
    } else {
      divEl = document.createElement('div');
    divEl.id = 'details-wrapper';
    divEl.innerHTML = `
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src="${album.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
      <p>
        <strong>Album name:</strong><span id="details-album">${album.album}</span>
      </p>
      <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
    </div>
  </div>`;
    }
  } else {
    divEl = document.createElement('div');
    divEl.id = 'details-wrapper';
    divEl.innerHTML = `
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src="${album.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
      <p>
        <strong>Album name:</strong><span id="details-album">${album.album}</span>
      </p>
      <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
    </div>
  </div>`;
  } 
  return divEl;
}
