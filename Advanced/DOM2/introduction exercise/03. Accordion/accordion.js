function toggle() {
    // get elements
    const moreButton = document.querySelector('.button');
    const text = document.querySelector('#extra');
    if (moreButton.textContent === 'More') {
        text.style.display = 'block'
        moreButton.textContent = 'Less';
    } else if (moreButton.textContent === 'Less') {
        text.style.display = 'none';
        moreButton.textContent = 'More';
    }
}