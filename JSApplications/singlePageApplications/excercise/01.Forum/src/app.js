// Get references to the relevant DOM elements
const newTopicForm = document.querySelector('.new-topic-border form');
const topicContainer = document.querySelector('.topic-container');
const postDetailsSection = document.querySelector('.theme-content');

// URL for creating topics and posts
const topicsURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';
const commentsURL = 'http://localhost:3030/jsonstore/collections/myboard/comments';

// Function to fetch data from the server and update content
async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display topics on the home page
async function displayTopics() {
    const topics = await fetchData(topicsURL);
    topicContainer.innerHTML = '';

    Object.values(topics).forEach(topic => {
        const listItem = document.createElement('div');
        listItem.classList.add('topic-item');
        listItem.textContent = topic.title;
        topicContainer.appendChild(listItem);

        listItem.addEventListener('click', () => showPostDetails(topic._id));
    });
}

// Function to display post details and comments for a selected topic
async function showPostDetails(topicId) {
    const topic = await fetchData(`${topicsURL}/${topicId}`);
    const comments = await fetchData(commentsURL);

    postDetailsSection.innerHTML = '';

    const postDetails = document.createElement('div');
    postDetails.classList.add('comment');
    postDetails.innerHTML = `
        <div class="header">
            <img src="./static/profile.png" alt="avatar">
            <p><span>${topic.username}</span> posted on <time>${topic.time}</time></p>
            <p class="post-content">${topic.post}</p>
        </div>
    `;
    postDetailsSection.appendChild(postDetails);

    comments.forEach(comment => {
        if (comment.postId === topicId) {
            const commentItem = document.createElement('div');
            commentItem.classList.add('user-comment');
            commentItem.innerHTML = `
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <p><strong>${comment.username}</strong> commented on <time>${comment.time}</time></p>
                        <div class="post-content">
                            <p>${comment.comment}</p>
                        </div>
                    </div>
                </div>
            `;
            postDetailsSection.appendChild(commentItem);
        }
    });

    const answerComment = document.createElement('div');
    answerComment.classList.add('answer-comment');
    answerComment.innerHTML = `
        <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form id="commentForm">
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    `;
    postDetailsSection.appendChild(answerComment);

    // Attach event listener to the Comment form
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', (event) => createComment(event, topicId));
}

// Function to create a new comment
async function createComment(event, topicId) {
    event.preventDefault();

    const commentInput = document.getElementById('comment');
    const usernameInput = document.getElementById('username');

    const comment = commentInput.value;
    const username = usernameInput.value;

    try {
        const commentResponse = await fetch(commentsURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId: topicId,
                username: username,
                comment: comment
            })
        });

        if (commentResponse.ok) {
            commentInput.value = '';
            usernameInput.value = '';

            // Fetch the updated comments and then display them
            fetchData(commentsURL)
                .then(comments => {
                    const commentItems = document.querySelectorAll('.user-comment');
                    const updatedComments = comments.filter(comment => comment.postId === topicId);

                    // Remove existing comment items
                    commentItems.forEach(item => item.remove());

                    // Add the updated comment items
                    updatedComments.forEach(comment => {
                        const commentItem = document.createElement('div');
                        commentItem.classList.add('user-comment');
                        commentItem.innerHTML = `
                            <div class="topic-name-wrapper">
                                <div class="topic-name">
                                    <p><strong>${comment.username}</strong> commented on <time>${comment.time}</time></p>
                                    <div class="post-content">
                                        <p>${comment.comment}</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        postDetailsSection.appendChild(commentItem);
                    });
                })
                .catch(error => {
                    console.error('Error fetching updated comments:', error);
                });
        } else {
            console.error('Failed to create comment. Status:', commentResponse.status);
        }
    } catch (error) {
        console.error('Error creating comment:', error);
    }
}

// Function to create a new topic and post
async function createTopic(event) {
    event.preventDefault();

    const topicNameInput = document.getElementById('topicName');
    const usernameInput = document.getElementById('username');
    const postTextInput = document.getElementById('postText');

    const topicName = topicNameInput.value;
    const username = usernameInput.value;
    const postText = postTextInput.value;

    try {
        const topicResponse = await fetch(topicsURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: topicName,
                username: username,
                post: postText,
                time: new Date().toLocaleString()
            })
        });

        if (topicResponse.ok) {
            topicNameInput.value = '';
            usernameInput.value = '';
            postTextInput.value = '';

            // Fetch the updated topics and then display them
            displayTopics().then(() => {
                const topicItems = document.querySelectorAll('.topic-item');
                if (topicItems.length > 0) {
                    topicItems[topicItems.length - 1].click();
                }
            });
        } else {
            console.error('Failed to create topic. Status:', topicResponse.status);
        }
    } catch (error) {
        console.error('Error creating topic:', error);
    }
}

// Attach event listener to the Post button
newTopicForm.addEventListener('submit', createTopic);

// Initial display of topics
displayTopics();

// Handle navigation using hash change (single-page application)
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash === '#home') {
        postDetailsSection.innerHTML = '';
    }
});
