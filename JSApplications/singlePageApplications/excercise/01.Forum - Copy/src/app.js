import { cancelPost } from './src/cancel.js';
import { postTopic } from './src/post.js';
import {showHome} from "./home.js";
const postButton = document.querySelector('#public');
const cancelButton = document.querySelector('#cancel');
document.addEventListener('DOMContentLoaded', onLoad);
document.querySelector('a').addEventListener('click', onHomeClick);

function onLoad() {
    showHome();
}

function onHomeClick() {
    showHome();
}
cancelButton.addEventListener('click', cancelPost);
postButton.addEventListener('click', postTopic);