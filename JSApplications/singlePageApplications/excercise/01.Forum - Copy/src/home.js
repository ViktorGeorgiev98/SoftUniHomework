const container = document.querySelector('.container');
const content = document.querySelector('main');
const commentsContainer = content.querySelector('div.topic-container');

const form = content.querySelector('form');
content.remove();

form.addEventListener('submit', onSubmit);

export function showHome() {
    container.replaceChildren(content);
    loadData();
}
async function loadData() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message);
        }

        commentsContainer.replaceChildren(
            ...Object.values(data)
                .map(toTopicElement));
    } catch (err) {
        alert(err.message);
        commentsContainer.replaceChildren('');
    }
}
