// async function attachEvents() {
//     const postsSelect = document.getElementById('posts')
//     const postTitle = document.getElementById('post-title');
//     const postBody = document.getElementById('post-body');
//     const commentsList = document.getElementById('post-comments');

//     document.getElementById('btnLoadPosts')
//         .addEventListener('click', loadPostsHandler);

//     document.getElementById('btnViewPost')
//         .addEventListener('click', loadPostDetailsHandler)

//     await loadPostsHandler();
//     await loadPostDetailsHandler();

//     function displayPost(post) {
//         postTitle.textContent = post.title;
//         postBody.textContent = post.body;
//     }

//     function displayComments(comments) {
//         commentsList.innerHTML = '';
//         comments.map(c => {
//             commentsList.appendChild(ce('li', {id: c.id}, c.text));
//         })
//     }

//     async function loadPostDetailsHandler() {
//         try {
//             const posts = loadData('http://localhost:3030/jsonstore/blog/posts/');
//             const postDetails = loadData('http://localhost:3030/jsonstore/blog/comments');
//             let postId = postsSelect.value;
//             let title = postsSelect.options[postsSelect.selectedIndex].text;

//             Promise.all([posts, postDetails])
//                 .then(([posts, data]) => {
//                     let post = Object.values(posts).filter((post => post.title === title))[0];
//                     let postDetails = Object.values(data).filter(c => c.postId === postId);

//                     displayPost(post);
//                     displayComments(postDetails);
//                 });
//         } catch (e) {
//             alert(e.message);
//         }
//     }

//     async function loadPostsHandler() {
//         const data = await loadData('http://localhost:3030/jsonstore/blog/posts');
//         postsSelect.innerHTML = '';
//         Object.entries(data)
//             .forEach(([key, post]) => postsSelect.appendChild(
//                 ce('option', {text: post.title, value: key})));
//     }
// }

// async function loadData(url) {
//     const response = await fetch(url);

//     if (!response.ok) {
//         throw new Error(`Error ${response.status} (${response.statusText})`)
//     }

//     return await response.json();
// }

// attachEvents();

// function ce(type, attributes, ...content) {
//     const result = document.createElement(type);

//     Object.entries(attributes || {})
//         .forEach(([attribute, value]) => {
//             if (isEventListener(attribute)) {
//                 result.addEventListener(attribute.substring(2).toLocaleLowerCase(), value);
//             } else {
//                 result[attribute] = value;
//             }
//         });

//     content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

//     content.forEach(e => {
//         if (isElement(e)) {
//             result.appendChild(e);
//         } else {
//             const node = document.createTextNode(e);
//             result.appendChild(node);
//         }
//     });

//     return result;

//     function isEventListener(attr) {
//         return attr.substring(0, 2).localeCompare('on') === 0;
//     }

//     function isElement(element) {
//         return typeof element != 'string' && typeof element != 'number';
//     }
// }
// attachEvents();


function attachEvents() {
    //Get DOM elements
    let postsSelect = document.querySelector('select#posts');
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    let btnViewPost = document.getElementById('btnViewPost');
    let postTitle = document.getElementById('post-title');
    let postContent = document.getElementById('post-body');


    //Add event listeners
    btnLoadPosts.addEventListener('click', handleLoadPosts);
    btnViewPost.addEventListener('click', handleViewPost);
    let commonData;

    function handleLoadPosts() {
        //Get posts
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(res => res.json())
            .then(data => addPosts(data));

        function addPosts(data) {
            commonData = data;

            postsSelect.innerHTML = '';

            for (let [id, postInfo] of Object.entries(data)) {
                //Create option
                let option = document.createElement('option');
                option.value = id;
                option.textContent = postInfo.title;
                option.dataset.body = postInfo.body;
                postsSelect.appendChild(option);
            }
        }
    }

    function handleViewPost() {
        //Get post id
        let selectedPostId = document.getElementById('posts').value;

        postTitle.textContent = commonData[selectedPostId].title;
        postContent.textContent = commonData[selectedPostId].body;


        //Fetch comments
        fetch('http://localhost:3030/jsonstore/blog/comments')
            .then(res => res.json())
            .then(data => handleComments(data));

        //Handle comments
        function handleComments(data) {
            let commentsUl = document.getElementById('post-comments');
            commentsUl.innerHTML = '';

            for (let [commentInfo] of Object.entries(data)) {
                if (commentInfo.postId == selectedPostId) {
                    //Create comment li
                    let li = document.createElement('li');
                    li.id = commentInfo.id
                    li.textContent = commentInfo.text;
                    commentsUl.appendChild(li);
                }
            }
        }
    }
}

attachEvents();